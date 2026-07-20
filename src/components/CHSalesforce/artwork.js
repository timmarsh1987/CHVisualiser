/**
 * Vercel Function: /api/salesforce/artwork
 *
 * Accepts:  GET ?artworkId=ART-00123
 * Headers:  Authorization: Bearer <access_token>
 *
 * In production this queries Salesforce via SOQL:
 *   SELECT ... FROM Artwork__c WHERE EPAM_Artwork_ID__c = :artworkId
 *   plus related Contact records (seller, primary contact, buyers)
 *
 * For now returns a hardcoded dummy payload matching the agreed shape.
 */

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { artworkId } = req.query;
  if (!artworkId) return res.status(400).json({ error: "artworkId is required" });

  // --- PRODUCTION FLOW (commented out until Connected App is ready) ---
  //
  // const token = (req.headers.authorization || "").replace("Bearer ", "");
  // if (!token) return res.status(401).json({ error: "Missing access token" });
  //
  // const soql = `
  //   SELECT Id, Name, EPAM_Artwork_ID__c, Artist__c, Medium__c, Year__c,
  //          Dimensions__c, List_Price__c, Status__c, Date_Listed__c,
  //          Content_Hub_ID__c,
  //          Seller__r.Name, Seller__r.Account.Name,
  //          Seller__r.Email, Seller__r.Phone,
  //          Primary_Contact__r.Name, Primary_Contact__r.Account.Name,
  //          Primary_Contact__r.Email, Primary_Contact__r.Phone
  //   FROM Artwork__c
  //   WHERE EPAM_Artwork_ID__c = '${artworkId}'
  //   LIMIT 1
  // `;
  //
  // const sfRes = await fetch(
  //   `${process.env.SF_INSTANCE_URL}/services/data/v59.0/query?q=${encodeURIComponent(soql)}`,
  //   { headers: { Authorization: `Bearer ${token}` } }
  // );
  // const sfData = await sfRes.json();
  // if (!sfRes.ok) return res.status(400).json({ error: sfData });
  //
  // Also query buyers via a junction/relationship:
  // SELECT Contact__r.Name, ... FROM Artwork_Buyer__c WHERE Artwork__c = :recordId
  //
  // return res.status(200).json(transformSfResponse(sfData));

  // --- DUMMY RESPONSE ---
  await new Promise((r) => setTimeout(r, 800));

  return res.status(200).json({
    artwork: {
      id: "a0B5g000001XyZEA0",
      artworkId: artworkId,
      title: "Twilight Over the Downs",
      artist: "Margaret Ellison",
      medium: "Oil on canvas",
      year: "2019",
      dimensions: "120cm × 90cm",
      listPrice: "£24,500.00",
      status: "Active Listing",
      dateListed: "14 Jan 2024",
      contentHubId: "CHB-7742918",
    },
    seller: {
      id: "0035g000002AbCDE1",
      name: "Richard Hargreaves",
      company: "Hargreaves Fine Art Ltd",
      email: "richard@hargreaves-fineart.co.uk",
      phone: "+44 207 946 0312",
    },
    primaryContact: {
      id: "0035g000002AbCDE2",
      name: "Sophia Cartwright",
      company: "Private collector",
      email: "sophia.cartwright@email.com",
      phone: "+44 7700 900411",
    },
    buyers: [
      {
        id: "0035g000002AbCDE3",
        name: "Thomas Mellor",
        company: "Mellor Collection",
        status: "Offer",
        detail: "Offer submitted: £21,000",
      },
      {
        id: "0035g000002AbCDE4",
        name: "Amara Livingston",
        company: "Independent",
        status: "Enquiry",
        detail: "No offer yet",
      },
      {
        id: "0035g000002AbCDE5",
        name: "Felix Okafor",
        company: "Okafor Art Fund",
        status: "Watchlist",
        detail: "High interest",
      },
    ],
  });
}
