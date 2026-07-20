/**
 * SalesforceArtworkPanel.jsx
 *
 * Content Hub External Page component.
 * Renders a Salesforce-styled panel that:
 *  1. Shows a Salesforce login screen (federated auth simulation)
 *  2. Exchanges credentials via OAuth through a Vercel middleware function
 *  3. Fetches artwork + contact data using the asset's EPAM.artworkId field
 *  4. Renders the record in Salesforce Lightning Design System style
 *
 * Props injected by Content Hub external page context:
 *  - options.artworkId  (string) — value of EPAM.artworkId on the current asset
 *
 * Config:
 *  - VERCEL_BASE_URL     — base URL of your deployed Vercel project
 *  - SF_LOGIN_URL        — Salesforce login endpoint (for real OAuth redirect)
 *  - SF_CLIENT_ID        — Connected App consumer key
 *  - SF_REDIRECT_URI     — must match Connected App settings
 */

import React, { useState, useCallback } from "react";

// ---------------------------------------------------------------------------
// Config — replace with env vars or Content Hub option bindings in production
// ---------------------------------------------------------------------------
const CONFIG = {
  VERCEL_BASE_URL: "https://your-project.vercel.app", // swap this out
  SF_LOGIN_URL: "https://login.salesforce.com",
  SF_CLIENT_ID: "YOUR_CONNECTED_APP_CLIENT_ID",
  SF_REDIRECT_URI: "https://your-project.vercel.app/api/auth/callback",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getInitials(name = "") {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = ["blue", "green", "orange", "purple"];
function avatarColor(index) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length];
}

const BADGE_MAP = {
  "Active Listing": "green",
  Offer: "orange",
  Enquiry: "grey",
  Watchlist: "blue",
  Seller: "green",
  Contact: "blue",
};

const DEMO_MODE = CONFIG.VERCEL_BASE_URL.includes("your-project.vercel.app");

function getDummySalesforceData(artworkId) {
  return {
    artwork: {
      id: "a0B5g000001XyZEA0",
      artworkId,
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
  };
}

// ---------------------------------------------------------------------------
// Styles — scoped inline to avoid conflicts with Content Hub's own CSS
// ---------------------------------------------------------------------------
const S = {
  wrap: {
    fontFamily: "Arial, sans-serif",
    fontSize: 13,
    color: "#16325c",
    background: "#f3f2f2",
    minHeight: 600,
    position: "relative",
  },
  // Header
  header: {
    background: "#0070d2",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    height: 52,
  },
  appName: { color: "white", fontSize: 15, fontWeight: 600, letterSpacing: 0.2 },
  headerUser: {
    marginLeft: "auto",
    color: "rgba(255,255,255,0.85)",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  // Nav
  nav: {
    background: "#16325c",
    padding: "0 16px",
    display: "flex",
    height: 36,
    alignItems: "center",
  },
  navItem: (active) => ({
    color: active ? "white" : "rgba(255,255,255,0.75)",
    fontSize: 12,
    padding: "0 12px",
    height: 36,
    display: "flex",
    alignItems: "center",
    borderBottom: active ? "2px solid white" : "2px solid transparent",
    cursor: "pointer",
  }),
  // Breadcrumb
  breadcrumb: {
    background: "white",
    padding: "8px 16px",
    fontSize: 12,
    color: "#0070d2",
    borderBottom: "1px solid #dddbda",
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  // Record header
  recordHeader: {
    background: "white",
    padding: "12px 16px 0",
    borderBottom: "1px solid #dddbda",
  },
  recordTitleRow: { display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: 12 },
  recordIcon: {
    width: 36,
    height: 36,
    background: "#0070d2",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  recordType: { fontSize: 11, color: "#706e6b", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 },
  recordName: { fontSize: 18, fontWeight: 600, color: "#16325c" },
  tabs: { display: "flex" },
  tab: (active) => ({
    fontSize: 13,
    padding: "8px 16px",
    cursor: "pointer",
    color: active ? "#0070d2" : "#706e6b",
    borderBottom: active ? "2px solid #0070d2" : "2px solid transparent",
    fontWeight: active ? 600 : 400,
  }),
  // Body
  body: {
    padding: 16,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  // Card
  card: {
    background: "white",
    borderRadius: 4,
    border: "1px solid #dddbda",
    overflow: "hidden",
  },
  cardHeader: {
    padding: "10px 14px",
    borderBottom: "1px solid #dddbda",
    fontSize: 12,
    fontWeight: 600,
    color: "#16325c",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  fieldRow: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    padding: "6px 14px",
    borderBottom: "0.5px solid #f3f2f2",
    alignItems: "start",
  },
  fieldLabel: { fontSize: 11, color: "#706e6b", paddingTop: 1 },
  fieldValue: { fontSize: 13, color: "#16325c" },
  fieldLink: { fontSize: 13, color: "#0070d2", cursor: "pointer" },
  // Contact card
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderBottom: "0.5px solid #f3f2f2",
  },
  contactName: { fontSize: 13, fontWeight: 600, color: "#0070d2", cursor: "pointer" },
  contactSub: { fontSize: 11, color: "#706e6b", marginTop: 1 },
  // Avatar
  avatar: (color) => {
    const map = {
      blue:   { background: "#d8edff", color: "#0070d2" },
      green:  { background: "#d4efdf", color: "#04844b" },
      orange: { background: "#fce8c5", color: "#c86b09" },
      purple: { background: "#efe8f5", color: "#7744a4" },
    };
    return {
      width: 32,
      height: 32,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 600,
      flexShrink: 0,
      ...map[color],
    };
  },
  // Badge
  badge: (variant) => {
    const map = {
      green:  { background: "#04844b", color: "white" },
      blue:   { background: "#0070d2", color: "white" },
      orange: { background: "#e8830c", color: "white" },
      grey:   { background: "#dddbda", color: "#16325c" },
    };
    return {
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 3,
      fontSize: 11,
      fontWeight: 600,
      alignSelf: "flex-start",
      ...map[variant || "grey"],
    };
  },
  fullWidth: { gridColumn: "1 / -1" },
  rightCol: { display: "flex", flexDirection: "column", gap: 12 },

  // Login overlay
  loginOverlay: {
    position: "absolute",
    inset: 0,
    background: "#f4f6f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    minHeight: 500,
  },
  loginBox: {
    background: "white",
    border: "1px solid #dddbda",
    borderRadius: 4,
    padding: 32,
    width: 320,
  },
  loginTitle: { fontSize: 18, fontWeight: 600, color: "#16325c", textAlign: "center", marginBottom: 4 },
  loginSubtitle: { fontSize: 12, color: "#706e6b", textAlign: "center", marginBottom: 24 },
  input: {
    width: "100%",
    border: "1px solid #dddbda",
    borderRadius: 4,
    padding: "8px 10px",
    fontSize: 14,
    color: "#16325c",
    marginBottom: 12,
    outline: "none",
    boxSizing: "border-box",
  },
  loginBtn: {
    width: "100%",
    background: "#0070d2",
    color: "white",
    border: "none",
    borderRadius: 4,
    padding: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4,
  },
  ssoBtn: {
    width: "100%",
    background: "white",
    color: "#0070d2",
    border: "1px solid #0070d2",
    borderRadius: 4,
    padding: 8,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4,
  },
  loginFooter: { fontSize: 11, color: "#706e6b", textAlign: "center", marginTop: 16 },

  // Loader overlay
  loaderOverlay: {
    position: "absolute",
    inset: 0,
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    minHeight: 500,
    gap: 16,
  },
  loaderText: { fontSize: 14, color: "#16325c", fontWeight: 500 },
  loaderSub:  { fontSize: 12, color: "#706e6b" },
  // Error
  errorBox: {
    margin: 24,
    padding: 16,
    background: "#fef1ee",
    border: "1px solid #ea7460",
    borderRadius: 4,
    color: "#c23934",
    fontSize: 13,
  },
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SfLogo({ width = 160, height = 36 }) {
  return (
    <svg viewBox="0 0 180 40" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 12c2.2-2.3 5.2-3.7 8.6-3.7 4.8 0 9 2.7 11.2 6.7 2-0.9 4.1-1.4 6.4-1.4
           8.6 0 15.6 7 15.6 15.7 0 8.6-7 15.6-15.6 15.6H19.2C11.9 44.9 6 39 6 31.7
           c0-6.1 4-11.4 9.6-13.3C14.9 15.5 15 12.7 16.5 10.6 18 8.5 20.4 7.4 23 7.4
           c2.7 0 5.1 1.3 6.6 3.3L36 12z"
        fill="#00A1E0"
      />
      <text x="85" y="30" fontFamily="Arial" fontSize="22" fontWeight="700" fill="#00A1E0">
        salesforce
      </text>
    </svg>
  );
}

function Spinner() {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        border: "3px solid #dddbda",
        borderTop: "3px solid #0070d2",
        borderRadius: "50%",
        animation: "sf-spin 0.8s linear infinite",
      }}
    />
  );
}

function Badge({ label }) {
  const variant = BADGE_MAP[label] || "grey";
  return <span style={S.badge(variant)}>{label}</span>;
}

function Avatar({ name, colorIndex = 0 }) {
  return (
    <div style={S.avatar(avatarColor(colorIndex))}>
      {getInitials(name)}
    </div>
  );
}

function FieldRow({ label, value, link = false }) {
  return (
    <div style={S.fieldRow}>
      <div style={S.fieldLabel}>{label}</div>
      <div style={link ? S.fieldLink : S.fieldValue}>{value}</div>
    </div>
  );
}

function ContactCard({ contact, role, colorIndex, showBadge }) {
  return (
    <div style={S.contactCard}>
      <Avatar name={contact.name} colorIndex={colorIndex} />
      <div style={{ flex: 1 }}>
        <div style={S.contactName}>{contact.name}</div>
        {contact.company && <div style={S.contactSub}>{contact.company}</div>}
        {contact.email   && <div style={S.contactSub}>{contact.email}</div>}
        {contact.phone   && <div style={S.contactSub}>{contact.phone}</div>}
        {contact.detail  && <div style={S.contactSub}>{contact.detail}</div>}
      </div>
      {showBadge && <Badge label={contact.status || role} />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Login screen
// ---------------------------------------------------------------------------
function LoginScreen({ onLogin, loading }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (!username || !password) return;
    onLogin({ username, password });
  }

  // Real OAuth redirect (uncomment when Connected App is ready):
  // function handleSso() {
  //   const params = new URLSearchParams({
  //     response_type: "code",
  //     client_id: CONFIG.SF_CLIENT_ID,
  //     redirect_uri: CONFIG.SF_REDIRECT_URI,
  //   });
  //   window.location.href = `${CONFIG.SF_LOGIN_URL}/services/oauth2/authorize?${params}`;
  // }

  return (
    <div style={S.loginOverlay}>
      <style>{`@keyframes sf-spin { to { transform: rotate(360deg); } }`}</style>
      <div style={{ marginBottom: 24 }}>
        <SfLogo width={180} height={40} />
      </div>
      <div style={S.loginBox}>
        <div style={S.loginTitle}>Log in to Salesforce</div>
        <div style={S.loginSubtitle}>Connected App: Content Hub DAM Integration</div>
        <input
          style={S.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          disabled={loading}
        />
        <input
          style={S.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          disabled={loading}
        />
        <button style={S.loginBtn} onClick={handleSubmit} disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
        <div style={{ textAlign: "center", fontSize: 12, color: "#706e6b", margin: "16px 0", position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "#dddbda" }} />
          <span style={{ background: "white", padding: "0 8px", position: "relative" }}>or</span>
        </div>
        <button style={S.ssoBtn} onClick={handleSubmit} disabled={loading}>
          Use Custom Domain (SSO)
        </button>
        <div style={S.loginFooter}>Forgot your password? &nbsp;|&nbsp; Help</div>
      </div>
      <div style={{ fontSize: 11, color: "#706e6b", marginTop: 16 }}>
        © 2024 Salesforce, inc. All rights reserved.
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Loading screen
// ---------------------------------------------------------------------------
function LoadingScreen({ artworkId }) {
  return (
    <div style={S.loaderOverlay}>
      <SfLogo width={140} height={32} />
      <Spinner />
      <div style={S.loaderText}>Reading artwork data from Salesforce</div>
      <div style={S.loaderSub}>Fetching record: {artworkId}...</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Record view
// ---------------------------------------------------------------------------
function RecordView({ data }) {
  const { artwork, seller, primaryContact, buyers } = data;
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <div style={S.wrap}>
      <div style={S.header}>
        <SfLogo width={48} height={22} />
        <span style={S.appName}>Sales</span>
        <div style={S.headerUser}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          James Whitfield
        </div>
      </div>

      <div style={S.nav}>
        {["Artworks", "Contacts", "Opportunities", "Reports"].map((item) => (
          <div key={item} style={S.navItem(item === "Artworks")}>{item}</div>
        ))}
      </div>

      <div style={S.breadcrumb}>
        <span style={{ cursor: "pointer" }}>Artworks</span>
        <span style={{ color: "#706e6b" }}>/</span>
        <span style={{ color: "#706e6b" }}>{artwork.artworkId} · {artwork.title}</span>
      </div>

      <div style={S.recordHeader}>
        <div style={S.recordTitleRow}>
          <div style={S.recordIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M3 15l5-5 4 4 3-3 6 6" stroke="white" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={S.recordType}>Artwork__c</div>
            <div style={S.recordName}>
              {artwork.title}{" "}
              <Badge label={artwork.status} />
            </div>
          </div>
        </div>
        <div style={S.tabs}>
          {["Details", "Activity", "Chatter", "Files"].map((tab) => (
            <div key={tab} style={S.tab(tab === activeTab)} onClick={() => setActiveTab(tab)}>
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div style={S.body}>
        {/* Left: Artwork details */}
        <div style={S.card}>
          <div style={S.cardHeader}>Artwork information</div>
          <div>
            <FieldRow label="Artwork ID"      value={artwork.artworkId}    link />
            <FieldRow label="Title"           value={artwork.title} />
            <FieldRow label="Artist"          value={artwork.artist}       link />
            <FieldRow label="Medium"          value={artwork.medium} />
            <FieldRow label="Year"            value={artwork.year} />
            <FieldRow label="Dimensions"      value={artwork.dimensions} />
            <FieldRow label="List price"      value={artwork.listPrice} />
            <FieldRow label="Status"          value={<Badge label={artwork.status} />} />
            <FieldRow label="Date listed"     value={artwork.dateListed} />
            <FieldRow label="Content Hub ID"  value={artwork.contentHubId} link />
          </div>
        </div>

        {/* Right: Seller + Primary contact */}
        <div style={S.rightCol}>
          <div style={S.card}>
            <div style={S.cardHeader}>Seller</div>
            <ContactCard contact={seller} role="Seller" colorIndex={1} showBadge />
          </div>
          <div style={S.card}>
            <div style={S.cardHeader}>Primary contact</div>
            <ContactCard contact={primaryContact} role="Contact" colorIndex={0} showBadge />
          </div>
        </div>

        {/* Full width: Buyers */}
        <div style={{ ...S.card, ...S.fullWidth }}>
          <div style={S.cardHeader}>
            Potential buyers ({buyers.length})
          </div>
          <div>
            {buyers.map((buyer, i) => (
              <ContactCard key={buyer.id} contact={buyer} colorIndex={i + 2} showBadge />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component — entry point for Content Hub external page
// ---------------------------------------------------------------------------
export default function SalesforceArtworkPanel({ options = {} }) {
  // Content Hub injects the current entity's field values via `options`
  // In production: options.artworkId = entity["EPAM.artworkId"]
  const artworkId = options.artworkId || "ART-00123";

  const [phase, setPhase] = useState("login"); // login | loading | record | error
  const [data,  setData]  = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = useCallback(async ({ username, password }) => {
    setPhase("loading");

    try {
      if (DEMO_MODE) {
        await new Promise((resolve) => setTimeout(resolve, 600));
        setData(getDummySalesforceData(artworkId));
        setPhase("record");
        return;
      }

      // Step 1: exchange credentials for token via Vercel function
      // In production this is a real OAuth code exchange after redirect.
      // For now we call the dummy endpoint directly.
      const authRes = await fetch(`${CONFIG.VERCEL_BASE_URL}/api/auth/callback`);
      if (!authRes.ok) throw new Error("Authentication failed");
      const { access_token } = await authRes.json();

      // Step 2: fetch artwork data
      const dataRes = await fetch(
        `${CONFIG.VERCEL_BASE_URL}/api/salesforce/artwork?artworkId=${encodeURIComponent(artworkId)}`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      );
      if (!dataRes.ok) throw new Error("Failed to fetch artwork data");
      const artworkData = await dataRes.json();

      setData(artworkData);
      setPhase("record");
    } catch (err) {
      setError(err.message);
      setPhase("error");
    }
  }, [artworkId]);

  return (
    <div style={{ position: "relative", minHeight: 600 }}>
      <style>{`@keyframes sf-spin { to { transform: rotate(360deg); } }`}</style>

      {phase === "login" && (
        <LoginScreen onLogin={handleLogin} loading={false} />
      )}

      {phase === "loading" && (
        <LoadingScreen artworkId={artworkId} />
      )}

      {phase === "record" && data && (
        <RecordView data={data} />
      )}

      {phase === "error" && (
        <div style={S.errorBox}>
          <strong>Something went wrong:</strong> {error}
          <br />
          <button style={{ marginTop: 8, cursor: "pointer" }} onClick={() => setPhase("login")}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
