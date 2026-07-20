/**
 * Vercel Function: /api/articheck/auth
 *
 * Exchanges Articheck username + password for a bearer token.
 * Proxies to: POST https://api.articheck.com/v2/auth-token/
 *
 * We proxy through Vercel rather than calling Articheck directly from the
 * browser to avoid CORS issues and to keep credentials server-side.
 *
 * Body: { username: string, password: string }
 * Returns: { token: string }
 */

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "username and password are required" });
  }

  // --- PRODUCTION ---
  // const acRes = await fetch("https://api.articheck.com/v2/auth-token/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ username, password }),
  // });
  // const acData = await acRes.json();
  // if (!acRes.ok) return res.status(401).json({ error: "Invalid credentials" });
  // return res.status(200).json({ token: acData.token });

  // --- DUMMY ---
  await new Promise((r) => setTimeout(r, 700));
  return res.status(200).json({ token: "DUMMY_ARTICHECK_TOKEN_xyz789" });
}
