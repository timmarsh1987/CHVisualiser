/**
 * Vercel Function: /api/articheck/reports
 *
 * Fetches all condition reports for a given artwork from Articheck.
 *
 * GET ?artworkId=ART-00123
 * Headers: Authorization: Bearer <token>
 *
 * The Articheck API currently documents POST endpoints only.
 * This function assumes a GET endpoint exists in the form:
 *   GET https://api.articheck.com/v2/reports/?id=:artworkId
 *
 * If Articheck confirms a different shape, update the production block below.
 * The dummy response mirrors the field names from their POST response schema
 * so switching to live data requires no frontend changes.
 */

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { artworkId } = req.query;
  if (!artworkId) return res.status(400).json({ error: "artworkId is required" });

  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Missing token" });

  // --- PRODUCTION ---
  // const acRes = await fetch(
  //   `https://api.articheck.com/v2/reports/?id=${encodeURIComponent(artworkId)}`,
  //   { headers: { Authorization: `Bearer ${token}` } }
  // );
  // if (!acRes.ok) return res.status(acRes.status).json({ error: "Articheck API error" });
  // const data = await acRes.json();
  // return res.status(200).json(data);

  // --- DUMMY ---
  await new Promise((r) => setTimeout(r, 900));

  return res.status(200).json({
    artifact_id: 5427,
    artifact_url: "https://app.articheck.com/artifacts/5427",
    id: artworkId,
    title: "Twilight Over the Downs",
    artist: "Margaret Ellison",
    media_template: "Painting - Standard",
    date_of_creation: "2019",
    dimensions: "120 x 90 x 3",
    dimensions_notes: "Framed. Slight variance on width due to non-standard stretcher.",
    lender: "Hargreaves Fine Art Ltd",
    groups: [
      {
        id: 8,
        code: "EXH-2024-01",
        type: "exhibition",
        name: "New British Landscapes",
        description: "Group show featuring emerging and mid-career British painters.",
        venues: "Whitecube, London",
        start: "2024-03-01",
        end: "2024-05-12",
      },
      {
        id: 12,
        code: "LOAN-2023-07",
        type: "general",
        name: "Private Loan — Mellor Collection",
        description: "Six month private loan to Thomas Mellor.",
        venues: "Mellor Residence, Manchester",
        start: "2023-07-01",
        end: "2023-12-31",
      },
    ],
    reports: [
      {
        report_id: 5437,
        created_at: "1710000000",
        updated_at: "1710003600",
        updated_by: "s.cartwright@whitecube.com",
        examined_by: "Sophia Cartwright",
        examiner_title: "Senior Conservator",
        examination_location: "Whitecube, London — Storage B",
        general_conditions_category: "Good",
        general_conditions_notes:
          "Minor surface dust, no active deterioration. Small hairline crack observed bottom-left corner of canvas — approximately 2mm, stable. Varnish slightly yellowed but even. No flaking. Frame in good condition with minor scuff to lower-right moulding.",
        pdf_url:
          "https://app.articheck.com/reports/download/pdf/dummy/5427_MAR24_5437.pdf",
        summary_pdf_url:
          "https://app.articheck.com/reports/download/pdf/dummy/5427_MAR24_5437_summary.pdf",
        images: [
          {
            id: 1,
            title: "Front — full view",
            url: "https://placehold.co/600x400/e8f4f8/1a5276?text=Front+View",
          },
          {
            id: 2,
            title: "Bottom-left corner detail",
            url: "https://placehold.co/600x400/fef9e7/7d6608?text=Corner+Detail",
          },
          {
            id: 3,
            title: "Verso",
            url: "https://placehold.co/600x400/f9f3ff/6c3483?text=Verso",
          },
        ],
      },
      {
        report_id: 4821,
        created_at: "1688169600",
        updated_at: "1688176800",
        updated_by: "r.jones@conserveuk.com",
        examined_by: "Robert Jones",
        examiner_title: "Conservator",
        examination_location: "Mellor Residence, Manchester",
        general_conditions_category: "Fair",
        general_conditions_notes:
          "Surface dust present. Hairline crack in lower-left quadrant noted for the first time — likely transit-related. Recommend monitoring. Frame shows light wear on all four corners. No immediate intervention required.",
        pdf_url:
          "https://app.articheck.com/reports/download/pdf/dummy/5427_JUL23_4821.pdf",
        summary_pdf_url:
          "https://app.articheck.com/reports/download/pdf/dummy/5427_JUL23_4821_summary.pdf",
        images: [
          {
            id: 4,
            title: "Front — full view",
            url: "https://placehold.co/600x400/e8f8f5/1a5276?text=Front+View",
          },
          {
            id: 5,
            title: "Lower-left crack",
            url: "https://placehold.co/600x400/fdedec/922b21?text=Crack+Detail",
          },
        ],
      },
    ],
  });
}
