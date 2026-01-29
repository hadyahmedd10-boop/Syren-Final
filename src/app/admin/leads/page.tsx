import AdminLeads from "./AdminLeads";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getAdminUser } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Leads Management | Syren Admin",
};

export default async function LeadsPage() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/login?next=/admin/leads");
  }

  if (!supabaseAdmin) {
    return <AdminLeads inquiries={[]} quotes={[]} />;
  }

  const [{ data: inquiries }, { data: quotes }] = await Promise.all([
    supabaseAdmin
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
    supabaseAdmin
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  return <AdminLeads inquiries={inquiries ?? []} quotes={quotes ?? []} />;
}
