"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
    honeypot: "",
  });

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Enter a valid email.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") {
      return;
    }
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Please review the highlighted fields.");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/notify/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          message: formData.message,
          pathname: pathname,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-surface p-6 md:p-10 rounded-2xl border border-border space-y-5 md:space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
      />

      <input
        required
        name="name"
        placeholder="Full Name"
        className={`input ${fieldErrors.name ? "border-red-400" : ""}`}
        value={formData.name}
        onChange={(e) => updateField("name", e.target.value)}
      />
      {fieldErrors.name && <p className="text-xs text-red-400">{fieldErrors.name}</p>}
      <input
        required
        name="email"
        type="email"
        placeholder="Email Address"
        className={`input ${fieldErrors.email ? "border-red-400" : ""}`}
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
      />
      {fieldErrors.email && <p className="text-xs text-red-400">{fieldErrors.email}</p>}
      <input
        name="whatsapp"
        placeholder="WhatsApp (optional)"
        className="input"
        value={formData.whatsapp}
        onChange={(e) => updateField("whatsapp", e.target.value)}
      />
      <textarea
        required
        name="message"
        rows={4}
        placeholder="Tell us what you’re dreaming of…"
        className={`input ${fieldErrors.message ? "border-red-400" : ""}`}
        value={formData.message}
        onChange={(e) => updateField("message", e.target.value)}
      />
      {fieldErrors.message && <p className="text-xs text-red-400">{fieldErrors.message}</p>}

      {status === "success" && (
        <div className="flex items-center gap-3 text-green-400 bg-green-400/10 p-4 border border-green-400/20">
          <CheckCircle2 size={18} />
          <p className="text-sm">Sent. We&apos;ll reply shortly.</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 border border-red-400/20">
          <AlertCircle size={18} />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="syren-btn-primary w-full group flex items-center justify-center gap-3"
      >
        {status === "loading" ? "Processing..." : "Send Inquiry"}
        <Send 
          size={16} 
          className={`transition-transform duration-300 ${status === "loading" ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1'}`} 
        />
      </button>
    </form>
  );
}
