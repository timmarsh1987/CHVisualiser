/**
 * Vercel Function: /api/auth/callback
 *
 * Handles the Salesforce OAuth 2.0 callback.
 * In production this exchanges the ?code= param for an access token
 * via the Salesforce token endpoint, then returns it to the client.
 *
 * For now this is a dummy that returns a fake token so the React
 * component can be built and tested end-to-end without a real SF org.
 */

export default async function handler(req, res) {
  // CORS - tighten this to your Content Hub origin in production
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // --- PRODUCTION FLOW (commented out until Connected App is ready) ---
  //
  // const { code } = req.query;
  // if (!code) return res.status(400).json({ error: "Missing code param" });
  //
  // const tokenRes = await fetch(`${process.env.SF_LOGIN_URL}/services/oauth2/token`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: new URLSearchParams({
  //     grant_type: "authorization_code",
  //     code,
  //     client_id:     process.env.SF_CLIENT_ID,
  //     client_secret: process.env.SF_CLIENT_SECRET,
  //     redirect_uri:  process.env.SF_REDIRECT_URI,
  //   }),
  // });
  //
  // const tokenData = await tokenRes.json();
  // if (!tokenRes.ok) return res.status(400).json({ error: tokenData });
  //
  // return res.status(200).json({
  //   access_token: tokenData.access_token,
  //   instance_url: tokenData.instance_url,
  // });

  // --- DUMMY RESPONSE ---
  await new Promise((r) => setTimeout(r, 600)); // simulate latency

  return res.status(200).json({
    access_token: "DUMMY_ACCESS_TOKEN_abc123",
    instance_url: "https://dummy.salesforce.com",
  });
}
