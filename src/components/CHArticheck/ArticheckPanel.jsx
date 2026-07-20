/**
 * ArticheckPanel.jsx
 *
 * Content Hub External Page component.
 * Displays Articheck condition reports for the current asset.
 *
 * Flow:
 *  1. Login screen — user authenticates with Articheck credentials
 *  2. Vercel function exchanges credentials for a bearer token
 *  3. Vercel function fetches condition reports by EPAM.artworkId
 *  4. Panel renders: artifact summary, report list, images, groups
 *
 * Props injected by Content Hub external page context:
 *  - options.artworkId  (string) — value of EPAM.artworkId on the current asset
 *
 * Config:
 *  - VERCEL_BASE_URL — base URL of your deployed Vercel project
 */

import React, { useState, useCallback } from "react";

const CONFIG = {
  VERCEL_BASE_URL: "https://your-project.vercel.app",
};
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatUnix(ts) {
  if (!ts) return "—";
  return new Date(parseInt(ts, 10) * 1000).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDate(str) {
  if (!str) return "—";
  const d = new Date(str);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function getInitials(name = "") {
  return name.split(" ").slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

const CONDITION_CONFIG = {
  "Excellent":  { color: "#1a7f4b", bg: "#e6f4ed", dot: "#1a7f4b" },
  "Good":       { color: "#0f6bb5", bg: "#e3f0fb", dot: "#0f6bb5" },
  "Fair":       { color: "#b45309", bg: "#fef3e2", dot: "#b45309" },
  "Poor":       { color: "#c0392b", bg: "#fdecea", dot: "#c0392b" },
  "Critical":   { color: "#7b1fa2", bg: "#f3e5f5", dot: "#7b1fa2" },
};

function conditionStyle(cat) {
  return CONDITION_CONFIG[cat] || { color: "#555", bg: "#f0f0f0", dot: "#999" };
}

// ---------------------------------------------------------------------------
// Design tokens — Articheck uses a clean dark-navy / white palette
// ---------------------------------------------------------------------------
const T = {
  navy:       "#1a2744",
  navyLight:  "#2a3a5c",
  accent:     "#3d7fd4",
  accentHov:  "#2c6bb8",
  border:     "#e2e5ec",
  borderMed:  "#c8cdd8",
  surface:    "#ffffff",
  surfaceAlt: "#f7f8fc",
  textPri:    "#1a2744",
  textSec:    "#5a6478",
  textHint:   "#8a93a6",
  red:        "#c0392b",
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const S = {
  wrap: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontSize: 13,
    color: T.textPri,
    background: T.surfaceAlt,
    minHeight: 600,
    position: "relative",
  },

  // Header bar
  header: {
    background: T.navy,
    padding: "0 20px",
    height: 52,
    display: "flex",
    alignItems: "center",
    gap: 12,
    justifyContent: "space-between",
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 10 },
  headerTitle: { color: "white", fontSize: 14, fontWeight: 600, letterSpacing: 0.3 },
  headerBadge: {
    background: T.accent,
    color: "white",
    fontSize: 10,
    fontWeight: 700,
    padding: "2px 7px",
    borderRadius: 10,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  headerUser: { color: "rgba(255,255,255,0.7)", fontSize: 12, display: "flex", alignItems: "center", gap: 6 },

  // Artifact summary bar
  summaryBar: {
    background: T.surface,
    borderBottom: `1px solid ${T.border}`,
    padding: "14px 20px",
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
  },
  summaryThumb: {
    width: 48,
    height: 48,
    borderRadius: 6,
    background: "#e8eaf0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: 20,
    color: T.textHint,
  },
  summaryMeta: { flex: 1 },
  summaryTitle: { fontSize: 16, fontWeight: 700, color: T.textPri, marginBottom: 3 },
  summaryRow: { display: "flex", gap: 16, flexWrap: "wrap" },
  summaryField: { fontSize: 12, color: T.textSec },
  summaryFieldLabel: { color: T.textHint, marginRight: 4 },
  artifactLink: {
    fontSize: 12,
    color: T.accent,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginTop: 6,
    cursor: "pointer",
  },

  // Body layout
  body: { padding: 20, display: "flex", flexDirection: "column", gap: 16 },

  // Section heading
  sectionHead: {
    fontSize: 11,
    fontWeight: 700,
    color: T.textHint,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 8,
  },

  // Report card
  reportCard: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    overflow: "hidden",
  },
  reportCardHeader: {
    padding: "12px 16px",
    borderBottom: `1px solid ${T.border}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    userSelect: "none",
  },
  reportCardBody: { padding: "16px" },

  // Condition badge
  condBadge: (cat) => {
    const c = conditionStyle(cat);
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: c.bg,
      color: c.color,
      fontSize: 12,
      fontWeight: 600,
      padding: "3px 10px",
      borderRadius: 20,
    };
  },
  condDot: (cat) => ({
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: conditionStyle(cat).dot,
    flexShrink: 0,
  }),

  // Two-col grid for report details
  detailGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px 24px",
    marginBottom: 14,
  },
  detailItem: {},
  detailLabel: { fontSize: 11, color: T.textHint, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 },
  detailValue: { fontSize: 13, color: T.textPri },

  // Notes block
  notesBlock: {
    background: T.surfaceAlt,
    border: `1px solid ${T.border}`,
    borderRadius: 6,
    padding: "10px 14px",
    fontSize: 13,
    color: T.textPri,
    lineHeight: 1.6,
    marginBottom: 14,
  },

  // Image strip
  imageStrip: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 14,
  },
  imageThumb: {
    width: 120,
    height: 80,
    borderRadius: 6,
    border: `1px solid ${T.border}`,
    objectFit: "cover",
    cursor: "pointer",
    background: "#e8eaf0",
  },
  imageLabel: { fontSize: 11, color: T.textSec, marginTop: 3, textAlign: "center", width: 120 },

  // PDF buttons
  pdfRow: { display: "flex", gap: 8, marginTop: 4 },
  pdfBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: T.navy,
    color: "white",
    border: "none",
    borderRadius: 5,
    padding: "7px 13px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
  },
  pdfBtnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "white",
    color: T.navy,
    border: `1px solid ${T.borderMed}`,
    borderRadius: 5,
    padding: "7px 13px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
  },

  // Groups / history
  groupList: { display: "flex", flexDirection: "column", gap: 8 },
  groupCard: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    padding: "12px 14px",
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },
  groupDot: (type) => ({
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: type === "exhibition" ? T.accent : T.textHint,
    marginTop: 5,
    flexShrink: 0,
  }),
  groupName: { fontSize: 13, fontWeight: 600, color: T.textPri, marginBottom: 2 },
  groupMeta: { fontSize: 12, color: T.textSec },
  groupType: (type) => ({
    display: "inline-block",
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    padding: "2px 7px",
    borderRadius: 10,
    background: type === "exhibition" ? "#e3f0fb" : "#f0f0f4",
    color: type === "exhibition" ? T.accent : T.textSec,
    marginBottom: 4,
  }),

  // Examiner avatar
  avatar: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "#e3f0fb",
    color: T.accent,
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  // Login overlay
  loginOverlay: {
    position: "absolute",
    inset: 0,
    background: T.navy,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    minHeight: 560,
  },
  loginBox: {
    background: "white",
    borderRadius: 10,
    padding: "32px 28px",
    width: 340,
  },
  loginLogoWrap: { textAlign: "center", marginBottom: 20 },
  loginTitle: { fontSize: 17, fontWeight: 700, color: T.textPri, textAlign: "center", marginBottom: 4 },
  loginSub: { fontSize: 12, color: T.textSec, textAlign: "center", marginBottom: 22 },
  inputWrap: { marginBottom: 12 },
  inputLabel: { fontSize: 11, color: T.textSec, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, display: "block", marginBottom: 4 },
  input: {
    width: "100%",
    border: `1px solid ${T.borderMed}`,
    borderRadius: 5,
    padding: "9px 11px",
    fontSize: 14,
    color: T.textPri,
    outline: "none",
    boxSizing: "border-box",
  },
  loginBtn: {
    width: "100%",
    background: T.accent,
    color: "white",
    border: "none",
    borderRadius: 5,
    padding: 11,
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 4,
    letterSpacing: 0.2,
  },
  loginFooter: { fontSize: 11, color: T.textSec, textAlign: "center", marginTop: 14 },
  loginFooterLink: { color: T.accent, cursor: "pointer" },

  // Loader overlay
  loaderOverlay: {
    position: "absolute",
    inset: 0,
    background: T.navy,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    gap: 18,
    minHeight: 560,
  },
  loaderText: { color: "white", fontSize: 14, fontWeight: 600 },
  loaderSub: { color: "rgba(255,255,255,0.55)", fontSize: 12 },

  // Error
  errorBox: {
    margin: 20,
    padding: 14,
    background: "#fdecea",
    border: `1px solid #e57373`,
    borderRadius: 6,
    color: T.red,
    fontSize: 13,
  },

  divider: { height: 1, background: T.border, margin: "12px 0" },
  chevron: (open) => ({
    marginLeft: "auto",
    fontSize: 16,
    color: T.textHint,
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s",
    lineHeight: 1,
  }),
};

// ---------------------------------------------------------------------------
// Logo — Articheck wordmark approximation
// ---------------------------------------------------------------------------
function ArticheckLogo({ size = "md" }) {
  const h = size === "sm" ? 22 : 32;
  return (
    <svg viewBox="0 0 160 36" width={h * (160 / 36)} height={h} xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="14" fill="#3d7fd4" />
      <path d="M11 24 L18 10 L25 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <path d="M13.5 20 L22.5 20" stroke="white" strokeWidth="2" />
      <text x="38" y="25" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="17" fontWeight="700" fill="#1a2744">articheck</text>
    </svg>
  );
}

function ArticheckLogoWhite({ size = "md" }) {
  const h = size === "sm" ? 22 : 32;
  return (
    <svg viewBox="0 0 160 36" width={h * (160 / 36)} height={h} xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="14" fill="white" fillOpacity="0.9" />
      <path d="M11 24 L18 10 L25 24" stroke="#3d7fd4" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <path d="M13.5 20 L22.5 20" stroke="#3d7fd4" strokeWidth="2" />
      <text x="38" y="25" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="17" fontWeight="700" fill="white">articheck</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Spinner
// ---------------------------------------------------------------------------
function Spinner({ color = "white" }) {
  return (
    <div style={{
      width: 38,
      height: 38,
      border: `3px solid ${color === "white" ? "rgba(255,255,255,0.25)" : "#dde"}`,
      borderTop: `3px solid ${color === "white" ? "white" : T.accent}`,
      borderRadius: "50%",
      animation: "ac-spin 0.75s linear infinite",
    }} />
  );
}

// ---------------------------------------------------------------------------
// Login screen
// ---------------------------------------------------------------------------
function LoginScreen({ onLogin, loading }) {
  const [username, setUsername] = useState("");
  const [password, setPassword]  = useState("");
  const [err, setErr]            = useState("");

  function handleSubmit() {
    if (!username || !password) { setErr("Please enter your email and password."); return; }
    setErr("");
    onLogin({ username, password });
  }

  return (
    <div style={S.loginOverlay}>
      <style>{`@keyframes ac-spin { to { transform: rotate(360deg); } }`}</style>
      <div style={S.loginBox}>
        <div style={S.loginLogoWrap}><ArticheckLogo size="md" /></div>
        <div style={S.loginTitle}>Sign in to Articheck</div>
        <div style={S.loginSub}>Condition reporting — Content Hub integration</div>

        {err && (
          <div style={{ fontSize: 12, color: T.red, marginBottom: 10, background: "#fdecea", padding: "8px 10px", borderRadius: 4 }}>
            {err}
          </div>
        )}

        <div style={S.inputWrap}>
          <label style={S.inputLabel}>Email</label>
          <input
            style={S.input}
            type="email"
            placeholder="you@organisation.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            disabled={loading}
          />
        </div>
        <div style={S.inputWrap}>
          <label style={S.inputLabel}>Password</label>
          <input
            style={S.input}
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            disabled={loading}
          />
        </div>

        <button style={S.loginBtn} onClick={handleSubmit} disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <div style={S.loginFooter}>
          <span style={S.loginFooterLink}>Forgot password?</span>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <span style={S.loginFooterLink}>Get a demo</span>
        </div>
      </div>
      <div style={{ marginTop: 20, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
        © Articheck Ltd. All rights reserved.
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
      <ArticheckLogoWhite />
      <Spinner color="white" />
      <div style={S.loaderText}>Fetching condition reports</div>
      <div style={S.loaderSub}>Artwork ID: {artworkId}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Individual report card (collapsible)
// ---------------------------------------------------------------------------
function ReportCard({ report, index }) {
  const [open, setOpen] = useState(index === 0); // first report expanded by default
  const [lightbox, setLightbox] = useState(null);

  const cat = report.general_conditions_category;

  return (
    <div style={S.reportCard}>
      {/* Header row — click to expand/collapse */}
      <div style={S.reportCardHeader} onClick={() => setOpen((o) => !o)}>
        <div style={S.avatar}>{getInitials(report.examined_by)}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.textPri }}>
            {report.examined_by}
            {report.examiner_title && (
              <span style={{ fontWeight: 400, color: T.textSec }}> · {report.examiner_title}</span>
            )}
          </div>
          <div style={{ fontSize: 11, color: T.textHint, marginTop: 1 }}>
            {formatUnix(report.created_at)} · {report.examination_location}
          </div>
        </div>
        <div style={S.condBadge(cat)}>
          <div style={S.condDot(cat)} />
          {cat || "Not set"}
        </div>
        <div style={S.chevron(open)}>▾</div>
      </div>

      {open && (
        <div style={S.reportCardBody}>

          {/* Detail grid */}
          <div style={S.detailGrid}>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Examined by</div>
              <div style={S.detailValue}>{report.examined_by}{report.examiner_title ? `, ${report.examiner_title}` : ""}</div>
            </div>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Examination date</div>
              <div style={S.detailValue}>{formatUnix(report.created_at)}</div>
            </div>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Location</div>
              <div style={S.detailValue}>{report.examination_location || "—"}</div>
            </div>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Last updated</div>
              <div style={S.detailValue}>{formatUnix(report.updated_at)} · {report.updated_by}</div>
            </div>
          </div>

          {/* Condition notes */}
          {report.general_conditions_notes && (
            <>
              <div style={S.detailLabel}>Condition notes</div>
              <div style={{ ...S.notesBlock, marginTop: 6 }}>
                {report.general_conditions_notes}
              </div>
            </>
          )}

          {/* Images */}
          {report.images && report.images.length > 0 && (
            <>
              <div style={S.detailLabel}>Condition images</div>
              <div style={{ ...S.imageStrip, marginTop: 6 }}>
                {report.images.map((img) => (
                  <div key={img.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                      src={img.url}
                      alt={img.title}
                      style={S.imageThumb}
                      onClick={() => setLightbox(img)}
                    />
                    <div style={S.imageLabel}>{img.title}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* PDF downloads */}
          <div style={S.divider} />
          <div style={{ ...S.detailLabel, marginBottom: 8 }}>Downloads</div>
          <div style={S.pdfRow}>
            <a href={report.pdf_url} target="_blank" rel="noreferrer" style={S.pdfBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
              </svg>
              Full report PDF
            </a>
            <a href={report.summary_pdf_url} target="_blank" rel="noreferrer" style={S.pdfBtnSecondary}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
              </svg>
              Summary PDF
            </a>
          </div>

          {/* Lightbox */}
          {lightbox && (
            <div
              style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 9999, cursor: "pointer",
              }}
              onClick={() => setLightbox(null)}
            >
              <div style={{ textAlign: "center" }}>
                <img src={lightbox.url} alt={lightbox.title} style={{ maxWidth: "80vw", maxHeight: "75vh", borderRadius: 6 }} />
                <div style={{ color: "white", fontSize: 13, marginTop: 10 }}>{lightbox.title}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 4 }}>Click anywhere to close</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Exhibition / group history
// ---------------------------------------------------------------------------
function GroupHistory({ groups }) {
  if (!groups || groups.length === 0) return null;

  return (
    <div>
      <div style={S.sectionHead}>Exhibition & loan history</div>
      <div style={S.groupList}>
        {groups.map((g) => (
          <div key={g.id} style={S.groupCard}>
            <div style={S.groupDot(g.type)} />
            <div style={{ flex: 1 }}>
              <div style={S.groupType(g.type)}>{g.type === "exhibition" ? "Exhibition" : "Loan / General"}</div>
              <div style={S.groupName}>{g.name}</div>
              {g.venues && <div style={S.groupMeta}>{g.venues}</div>}
              {g.start && (
                <div style={{ ...S.groupMeta, marginTop: 2 }}>
                  {formatDate(g.start)} — {formatDate(g.end)}
                </div>
              )}
              {g.description && (
                <div style={{ ...S.groupMeta, marginTop: 4, fontStyle: "italic" }}>{g.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main record view
// ---------------------------------------------------------------------------
function RecordView({ data, loggedInAs }) {
  const latestCondition = data.reports?.[0]?.general_conditions_category;

  return (
    <div style={S.wrap}>
      <div style={S.header}>
        <div style={S.headerLeft}>
          <ArticheckLogoWhite size="sm" />
          <div style={S.headerBadge}>Condition Reports</div>
        </div>
        <div style={S.headerUser}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          {loggedInAs}
        </div>
      </div>

      {/* Artifact summary */}
      <div style={S.summaryBar}>
        <div style={S.summaryThumb}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.textHint} strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 15l5-5 4 4 3-3 6 6" />
            <circle cx="8.5" cy="8.5" r="1.5" fill={T.textHint} />
          </svg>
        </div>
        <div style={S.summaryMeta}>
          <div style={S.summaryTitle}>{data.title}</div>
          <div style={S.summaryRow}>
            {data.artist && (
              <span style={S.summaryField}><span style={S.summaryFieldLabel}>Artist</span>{data.artist}</span>
            )}
            {data.date_of_creation && (
              <span style={S.summaryField}><span style={S.summaryFieldLabel}>Year</span>{data.date_of_creation}</span>
            )}
            {data.media_template && (
              <span style={S.summaryField}><span style={S.summaryFieldLabel}>Type</span>{data.media_template}</span>
            )}
            {data.dimensions && (
              <span style={S.summaryField}><span style={S.summaryFieldLabel}>Dimensions</span>{data.dimensions} cm</span>
            )}
            {data.lender && (
              <span style={S.summaryField}><span style={S.summaryFieldLabel}>Lender</span>{data.lender}</span>
            )}
          </div>
          {latestCondition && (
            <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 11, color: T.textHint }}>Current condition</span>
              <span style={S.condBadge(latestCondition)}>
                <div style={S.condDot(latestCondition)} />
                {latestCondition}
              </span>
            </div>
          )}
          <a href={data.artifact_url} target="_blank" rel="noreferrer" style={S.artifactLink}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View in Articheck
          </a>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: T.textHint, marginBottom: 2 }}>Reports</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: T.textPri }}>{data.reports?.length || 0}</div>
        </div>
      </div>

      {/* Body */}
      <div style={S.body}>
        {/* Condition reports */}
        <div>
          <div style={S.sectionHead}>Condition reports — most recent first</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {data.reports?.map((report, i) => (
              <ReportCard key={report.report_id} report={report} index={i} />
            ))}
          </div>
        </div>

        {/* Exhibition / loan history */}
        <GroupHistory groups={data.groups} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root component
// ---------------------------------------------------------------------------
export default function ArticheckPanel({ options = {} }) {
  const artworkId = options.artworkId || "ART-00123";

  const [phase,       setPhase]       = useState("login");
  const [data,        setData]        = useState(null);
  const [error,       setError]       = useState(null);
  const [loggedInAs,  setLoggedInAs]  = useState("");

  const handleLogin = useCallback(async ({ username, password }) => {
    setPhase("loading");

    try {
      // Step 1: get token
      const authRes = await fetch(`${CONFIG.VERCEL_BASE_URL}/api/articheck/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!authRes.ok) throw new Error("Authentication failed. Check your credentials.");
      const { token } = await authRes.json();

      // Step 2: fetch reports
      const dataRes = await fetch(
        `${CONFIG.VERCEL_BASE_URL}/api/articheck/reports?artworkId=${encodeURIComponent(artworkId)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!dataRes.ok) throw new Error("Failed to fetch condition reports.");
      const reportData = await dataRes.json();

      setLoggedInAs(username);
      setData(reportData);
      setPhase("record");
    } catch (err) {
      setError(err.message);
      setPhase("error");
    }
  }, [artworkId]);

  return (
    <div style={{ position: "relative", minHeight: 600 }}>
      <style>{`@keyframes ac-spin { to { transform: rotate(360deg); } }`}</style>

      {phase === "login" && <LoginScreen onLogin={handleLogin} loading={false} />}
      {phase === "loading" && <LoadingScreen artworkId={artworkId} />}
      {phase === "record" && data && <RecordView data={data} loggedInAs={loggedInAs} />}
      {phase === "error" && (
        <div style={S.errorBox}>
          <strong>Error:</strong> {error}
          <br />
          <button style={{ marginTop: 8, cursor: "pointer", fontSize: 12 }} onClick={() => { setError(null); setPhase("login"); }}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
