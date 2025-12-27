export type Testimonial = {
  id: string;
  name: string;
  email?: string; // Kept for the form, though not in the SQL provided
  country: string;
  experience?: string; // Optional as it's not in the new SQL
  rating: number;
  message: string; // Changed from review to match SQL
  approved?: boolean;
  created_at?: string;
};
