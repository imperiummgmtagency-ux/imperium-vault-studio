import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    const {
      full_name,
      brand_name,
      email,
      contact_method,
      contact_detail,
      platform,
      platform_handle,
      revenue,
      help_areas,
      help_other_detail,
      additional_notes,
    } = body;

    // Validate required fields
    if (!full_name || !email || !contact_method || !contact_detail || !platform) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store submission in database
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      full_name,
      brand_name: brand_name || null,
      email,
      contact_method,
      contact_detail,
      platform,
      platform_handle: platform_handle || null,
      revenue: revenue || null,
      help_areas: help_areas?.length ? help_areas : null,
      help_other_detail: help_other_detail || null,
      additional_notes: additional_notes || null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email to admin
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (LOVABLE_API_KEY) {
      try {
        const helpAreasText = help_areas?.length ? help_areas.join(", ") : "None selected";
        const emailHtml = `
          <h2>New Partnership Request</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Full Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${full_name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Brand Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${brand_name || "—"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Contact Method</td><td style="padding:8px;border-bottom:1px solid #eee;">${contact_method}: ${contact_detail}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Primary Platform</td><td style="padding:8px;border-bottom:1px solid #eee;">${platform}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Platform Handle</td><td style="padding:8px;border-bottom:1px solid #eee;">${platform_handle || "—"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Monthly Revenue</td><td style="padding:8px;border-bottom:1px solid #eee;">${revenue || "—"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Help Areas</td><td style="padding:8px;border-bottom:1px solid #eee;">${helpAreasText}${help_other_detail ? ` (Other: ${help_other_detail})` : ""}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Additional Notes</td><td style="padding:8px;border-bottom:1px solid #eee;">${additional_notes || "—"}</td></tr>
          </table>
        `;

        const emailResponse = await fetch("https://api.lovable.dev/v1/email/send", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "admin@imperiummgmtagency.com",
            subject: `New Partnership Request from ${full_name}`,
            html: emailHtml,
            purpose: "transactional",
          }),
        });

        if (!emailResponse.ok) {
          const errText = await emailResponse.text();
          console.error("Email send failed:", emailResponse.status, errText);
        } else {
          await emailResponse.text();
        }
      } catch (emailErr) {
        console.error("Email error:", emailErr);
        // Don't fail the submission if email fails
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
