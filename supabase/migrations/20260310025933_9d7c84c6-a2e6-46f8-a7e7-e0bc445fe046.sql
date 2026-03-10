-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  brand_name TEXT,
  email TEXT NOT NULL,
  contact_method TEXT NOT NULL,
  contact_detail TEXT NOT NULL,
  platform TEXT NOT NULL,
  platform_handle TEXT,
  revenue TEXT,
  help_areas TEXT[],
  help_other_detail TEXT,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form - no auth required)
CREATE POLICY "Allow anonymous inserts"
ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- No public read/update/delete access
