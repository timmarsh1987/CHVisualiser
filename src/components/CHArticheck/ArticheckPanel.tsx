import React, { useCallback, useState } from 'react';

const CONFIG = {
  VERCEL_BASE_URL: 'https://your-project.vercel.app',
};

const DEMO_MODE = CONFIG.VERCEL_BASE_URL.includes('your-project.vercel.app');

type Group = {
  id: number;
  code: string;
  type: 'exhibition' | 'general' | string;
  name: string;
  venues?: string;
  start?: string;
  end?: string;
  description?: string;
};

type ReportImage = {
  id: number;
  title: string;
  url: string;
};

type Report = {
  report_id: number;
  created_at?: string;
  updated_at?: string;
  updated_by?: string;
  examined_by: string;
  examiner_title?: string;
  examination_location?: string;
  general_conditions_category?: string;
  general_conditions_notes?: string;
  pdf_url?: string;
  summary_pdf_url?: string;
  images?: ReportImage[];
};

type ArticheckData = {
  artifact_id: number;
  artifact_url: string;
  id: string;
  title: string;
  artist?: string;
  media_template?: string;
  date_of_creation?: string;
  dimensions?: string;
  dimensions_notes?: string;
  lender?: string;
  groups?: Group[];
  reports?: Report[];
};

interface ArticheckPanelProps {
  client?: any;
  options?: {
    artworkId?: string;
    [key: string]: any;
  };
  entity?: any;
}

function formatUnix(ts?: string) {
  if (!ts) return '—';
  return new Date(parseInt(ts, 10) * 1000).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatDate(str?: string) {
  if (!str) return '—';
  const d = new Date(str);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getInitials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0] || '')
    .join('')
    .toUpperCase();
}

const CONDITION_CONFIG: Record<string, { color: string; bg: string; dot: string }> = {
  Excellent: { color: '#1a7f4b', bg: '#e6f4ed', dot: '#1a7f4b' },
  Good: { color: '#0f6bb5', bg: '#e3f0fb', dot: '#0f6bb5' },
  Fair: { color: '#b45309', bg: '#fef3e2', dot: '#b45309' },
  Poor: { color: '#c0392b', bg: '#fdecea', dot: '#c0392b' },
  Critical: { color: '#7b1fa2', bg: '#f3e5f5', dot: '#7b1fa2' },
};

function conditionStyle(cat?: string) {
  return CONDITION_CONFIG[cat || ''] || { color: '#555', bg: '#f0f0f0', dot: '#999' };
}

const T = {
  navy: '#1a2744',
  navyLight: '#2a3a5c',
  accent: '#3d7fd4',
  accentHov: '#2c6bb8',
  border: '#e2e5ec',
  borderMed: '#c8cdd8',
  surface: '#ffffff',
  surfaceAlt: '#f7f8fc',
  textPri: '#1a2744',
  textSec: '#5a6478',
  textHint: '#8a93a6',
  red: '#c0392b',
};

const S: Record<string, any> = {
  wrap: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontSize: 13,
    color: T.textPri,
    background: T.surfaceAlt,
    minHeight: 600,
    position: 'relative' as const,
  },
  header: {
    background: T.navy,
    padding: '0 20px',
    height: 52,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'space-between',
  },
  headerLeft: { display: 'flex', alignItems: 'center', gap: 10 },
  headerTitle: { color: 'white', fontSize: 14, fontWeight: 600, letterSpacing: 0.3 },
  headerBadge: {
    background: T.accent,
    color: 'white',
    fontSize: 10,
    fontWeight: 700,
    padding: '2px 7px',
    borderRadius: 10,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
  },
  headerUser: { color: 'rgba(255,255,255,0.7)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 },
  summaryBar: {
    background: T.surface,
    borderBottom: `1px solid ${T.border}`,
    padding: '14px 20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
  },
  summaryThumb: {
    width: 48,
    height: 48,
    borderRadius: 6,
    background: '#e8eaf0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: 20,
    color: T.textHint,
  },
  summaryMeta: { flex: 1 },
  summaryTitle: { fontSize: 16, fontWeight: 700, color: T.textPri, marginBottom: 3 },
  summaryRow: { display: 'flex', gap: 16, flexWrap: 'wrap' as const },
  summaryField: { fontSize: 12, color: T.textSec },
  summaryFieldLabel: { color: T.textHint, marginRight: 4 },
  artifactLink: {
    fontSize: 12,
    color: T.accent,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
    cursor: 'pointer',
  },
  body: { padding: 20, display: 'flex', flexDirection: 'column' as const, gap: 16 },
  sectionHead: {
    fontSize: 11,
    fontWeight: 700,
    color: T.textHint,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  reportCard: {
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: 8,
    overflow: 'hidden',
  },
  reportCardHeader: {
    padding: '12px 16px',
    borderBottom: `1px solid ${T.border}`,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    cursor: 'pointer',
    userSelect: 'none' as const,
  },
  reportCardBody: { padding: '16px' },
  condBadge: (cat?: string) => {
    const c = conditionStyle(cat);
    return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: c.bg,
      color: c.color,
      fontSize: 12,
      fontWeight: 600,
      padding: '3px 10px',
      borderRadius: 20,
    };
  },
  condDot: (cat?: string) => ({
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: conditionStyle(cat).dot,
    flexShrink: 0,
  }),
  detailGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px 24px',
    marginBottom: 14,
  },
  detailItem: {},
  detailLabel: {
    fontSize: 11,
    color: T.textHint,
    marginBottom: 2,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5,
  },
  detailValue: { fontSize: 13, color: T.textPri },
  notesBlock: {
    background: T.surfaceAlt,
    border: `1px solid ${T.border}`,
    borderRadius: 6,
    padding: '10px 14px',
    fontSize: 13,
    color: T.textPri,
    lineHeight: 1.6,
    marginBottom: 14,
  },
  imageStrip: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap' as const,
    marginBottom: 14,
  },
  imageThumb: {
    width: 120,
    height: 80,
    borderRadius: 6,
    border: `1px solid ${T.border}`,
    objectFit: 'cover' as const,
    cursor: 'pointer',
    background: '#e8eaf0',
  },
  imageLabel: { fontSize: 11, color: T.textSec, marginTop: 3, textAlign: 'center' as const, width: 120 },
  pdfRow: { display: 'flex', gap: 8, marginTop: 4 },
  pdfBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: T.navy,
    color: 'white',
    border: 'none',
    borderRadius: 5,
    padding: '7px 13px',
    fontSize: 12,
    fontWeight: 600,
    textDecoration: 'none',
  },
  pdfBtnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: 'white',
    color: T.navy,
    border: `1px solid ${T.navy}`,
    borderRadius: 5,
    padding: '7px 13px',
    fontSize: 12,
    fontWeight: 600,
    textDecoration: 'none',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
    color: 'white',
    background: T.accent,
    flexShrink: 0,
  },
  loginOverlay: {
    position: 'absolute' as const,
    inset: 0,
    background: T.navy,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginBox: {
    width: 340,
    background: 'rgba(255,255,255,0.08)',
    border: `1px solid rgba(255,255,255,0.15)`,
    borderRadius: 18,
    padding: '28px 24px',
    boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
  },
  loginLogoWrap: { marginBottom: 18 },
  loginTitle: { color: 'white', fontSize: 20, fontWeight: 700, marginBottom: 6 },
  loginSub: { color: 'rgba(255,255,255,0.75)', fontSize: 13, marginBottom: 20 },
  inputWrap: { marginBottom: 14 },
  inputLabel: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginBottom: 6, display: 'block' },
  input: {
    width: '100%',
    borderRadius: 10,
    border: `1px solid rgba(255,255,255,0.18)`,
    background: 'rgba(255,255,255,0.08)',
    color: 'white',
    padding: '10px 12px',
    fontSize: 13,
    outline: 'none',
  },
  loginBtn: {
    width: '100%',
    borderRadius: 10,
    border: 'none',
    background: T.accent,
    color: 'white',
    fontSize: 13,
    fontWeight: 700,
    padding: '11px 0',
    cursor: 'pointer',
  },
  loginFooter: { marginTop: 18, color: 'rgba(255,255,255,0.55)', fontSize: 11, display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' as const },
  loginFooterLink: { color: 'rgba(255,255,255,0.85)', cursor: 'pointer', textDecoration: 'underline' },
  loaderOverlay: {
    position: 'absolute' as const,
    inset: 0,
    background: T.navy,
    color: 'white',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
    padding: 20,
  },
  loaderText: { fontSize: 16, fontWeight: 700, color: 'white' },
  loaderSub: { fontSize: 12, color: 'rgba(255,255,255,0.65)' },
  chevron: (open: boolean) => ({ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }),
  divider: { height: 1, background: T.border, margin: '16px 0' },
  groupList: { display: 'grid', gap: 10 },
  groupCard: {
    display: 'flex',
    gap: 12,
    padding: 14,
    borderRadius: 10,
    border: `1px solid ${T.border}`,
    background: T.surface,
  },
  groupDot: (type?: string) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: type === 'exhibition' ? '#3d7fd4' : '#6b7280',
    marginTop: 4,
    flexShrink: 0,
  }),
  groupType: (type?: string) => ({ fontSize: 11, textTransform: 'uppercase' as const, color: type === 'exhibition' ? '#3d7fd4' : '#6b7280', marginBottom: 4 }),
  groupName: { fontSize: 14, fontWeight: 700, color: T.textPri, marginBottom: 2 },
  groupMeta: { fontSize: 12, color: T.textSec },
  errorBox: {
    background: '#fdecea',
    border: '1px solid #f5c2c0',
    borderRadius: 8,
    padding: 18,
    margin: 16,
    color: T.textPri,
  },
};

function ArticheckLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const h = size === 'sm' ? 22 : 32;
  return (
    <svg viewBox="0 0 160 36" width={h * (160 / 36)} height={h} xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="14" fill="white" fillOpacity="0.9" />
      <path d="M11 24 L18 10 L25 24" stroke="#3d7fd4" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <path d="M13.5 20 L22.5 20" stroke="#3d7fd4" strokeWidth="2" />
      <text x="38" y="25" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="17" fontWeight="700" fill="white">articheck</text>
    </svg>
  );
}

function ArticheckLogoWhite({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const h = size === 'sm' ? 22 : 32;
  return (
    <svg viewBox="0 0 160 36" width={h * (160 / 36)} height={h} xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="14" fill="white" fillOpacity="0.9" />
      <path d="M11 24 L18 10 L25 24" stroke="#3d7fd4" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <path d="M13.5 20 L22.5 20" stroke="#3d7fd4" strokeWidth="2" />
      <text x="38" y="25" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="17" fontWeight="700" fill="white">articheck</text>
    </svg>
  );
}

function Spinner({ color = 'white' }: { color?: 'white' | 'black' }) {
  return (
    <div
      style={{
        width: 38,
        height: 38,
        border: `3px solid ${color === 'white' ? 'rgba(255,255,255,0.25)' : '#dde'}`,
        borderTop: `3px solid ${color === 'white' ? 'white' : T.accent}`,
        borderRadius: '50%',
        animation: 'ac-spin 0.75s linear infinite',
      }}
    />
  );
}

function getDummyArticheckData(artworkId: string): ArticheckData {
  return {
    artifact_id: 5427,
    artifact_url: 'https://app.articheck.com/artifacts/5427',
    id: artworkId,
    title: 'Twilight Over the Downs',
    artist: 'Margaret Ellison',
    media_template: 'Painting - Standard',
    date_of_creation: '2019',
    dimensions: '120 x 90 x 3',
    dimensions_notes: 'Framed. Slight variance on width due to non-standard stretcher.',
    lender: 'Hargreaves Fine Art Ltd',
    groups: [
      {
        id: 8,
        code: 'EXH-2024-01',
        type: 'exhibition',
        name: 'New British Landscapes',
        description: 'Group show featuring emerging and mid-career British painters.',
        venues: 'Whitecube, London',
        start: '2024-03-01',
        end: '2024-05-12',
      },
      {
        id: 12,
        code: 'LOAN-2023-07',
        type: 'general',
        name: 'Private Loan — Mellor Collection',
        description: 'Six month private loan to Thomas Mellor.',
        venues: 'Mellor Residence, Manchester',
        start: '2023-07-01',
        end: '2023-12-31',
      },
    ],
    reports: [
      {
        report_id: 5437,
        created_at: '1710000000',
        updated_at: '1710003600',
        updated_by: 's.cartwright@whitecube.com',
        examined_by: 'Sophia Cartwright',
        examiner_title: 'Senior Conservator',
        examination_location: 'Whitecube, London — Storage B',
        general_conditions_category: 'Good',
        general_conditions_notes:
          'Minor surface dust, no active deterioration. Small hairline crack observed bottom-left corner of canvas — approximately 2mm, stable. Varnish slightly yellowed but even. No flaking. Frame in good condition with minor scuff to lower-right moulding.',
        pdf_url: 'https://app.articheck.com/reports/download/pdf/dummy/5427_MAR24_5437.pdf',
        summary_pdf_url: 'https://app.articheck.com/reports/download/pdf/dummy/5427_MAR24_5437_summary.pdf',
        images: [
          {
            id: 1,
            title: 'Front — full view',
            url: 'https://placehold.co/600x400/e8f4f8/1a5276?text=Front+View',
          },
          {
            id: 2,
            title: 'Bottom-left corner detail',
            url: 'https://placehold.co/600x400/fef9e7/7d6608?text=Corner+Detail',
          },
          {
            id: 3,
            title: 'Verso',
            url: 'https://placehold.co/600x400/f9f3ff/6c3483?text=Verso',
          },
        ],
      },
      {
        report_id: 4821,
        created_at: '1688169600',
        updated_at: '1688176800',
        updated_by: 'r.jones@conserveuk.com',
        examined_by: 'Robert Jones',
        examiner_title: 'Conservator',
        examination_location: 'Mellor Residence, Manchester',
        general_conditions_category: 'Fair',
        general_conditions_notes:
          'Surface dust present. Hairline crack in lower-left quadrant noted for the first time — likely transit-related. Recommend monitoring. Frame shows light wear on all four corners. No immediate intervention required.',
        pdf_url: 'https://app.articheck.com/reports/download/pdf/dummy/5427_JUL23_4821.pdf',
        summary_pdf_url: 'https://app.articheck.com/reports/download/pdf/dummy/5427_JUL23_4821_summary.pdf',
        images: [
          {
            id: 4,
            title: 'Front — full view',
            url: 'https://placehold.co/600x400/e8f8f5/1a5276?text=Front+View',
          },
          {
            id: 5,
            title: 'Lower-left crack',
            url: 'https://placehold.co/600x400/fdedec/922b21?text=Crack+Detail',
          },
        ],
      },
    ],
  };
}

function LoginScreen({ onLogin, loading }: { onLogin: (creds: { username: string; password: string }) => void; loading: boolean }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  function handleSubmit() {
    if (!username || !password) {
      if (DEMO_MODE) {
        setErr('');
        onLogin({ username, password });
        return;
      }
      setErr('Please enter your email and password.');
      return;
    }
    setErr('');
    onLogin({ username, password });
  }

  return (
    <div style={S.loginOverlay}>
      <style>{`@keyframes ac-spin { to { transform: rotate(360deg); } }`}</style>
      <div style={S.loginBox}>
        <div style={S.loginLogoWrap}> <ArticheckLogo size="md" /> </div>
        <div style={S.loginTitle}>Sign in to Articheck</div>
        <div style={S.loginSub}>Condition reporting — Content Hub integration</div>

        {err && (
          <div style={{ fontSize: 12, color: T.red, marginBottom: 10, background: '#fdecea', padding: '8px 10px', borderRadius: 4 }}>
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
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
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
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            disabled={loading}
          />
        </div>

        <button style={S.loginBtn} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

        <div style={S.loginFooter}>
          <span style={S.loginFooterLink}>Forgot password?</span>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <span style={S.loginFooterLink}>Get a demo</span>
        </div>
      </div>
      <div style={{ marginTop: 20, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
        © Articheck Ltd. All rights reserved.
      </div>
    </div>
  );
}

function LoadingScreen({ artworkId }: { artworkId: string }) {
  return (
    <div style={S.loaderOverlay}>
      <ArticheckLogoWhite />
      <Spinner color="white" />
      <div style={S.loaderText}>Fetching condition reports</div>
      <div style={S.loaderSub}>Artwork ID: {artworkId}</div>
    </div>
  );
}

function ReportCard({ report, index }: { report: Report; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const [lightbox, setLightbox] = useState<ReportImage | null>(null);
  const cat = report.general_conditions_category;

  return (
    <div style={S.reportCard}>
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
          {cat || 'Not set'}
        </div>
        <div style={S.chevron(open)}>▾</div>
      </div>

      {open && (
        <div style={S.reportCardBody}>
          <div style={S.detailGrid}>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Examined by</div>
              <div style={S.detailValue}>
                {report.examined_by}
                {report.examiner_title ? `, ${report.examiner_title}` : ''}
              </div>
            </div>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Examination date</div>
              <div style={S.detailValue}>{formatUnix(report.created_at)}</div>
            </div>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Location</div>
              <div style={S.detailValue}>{report.examination_location || '—'}</div>
            </div>
            <div style={S.detailItem}>
              <div style={S.detailLabel}>Last updated</div>
              <div style={S.detailValue}>
                {formatUnix(report.updated_at)} · {report.updated_by}
              </div>
            </div>
          </div>

          {report.general_conditions_notes && (
            <>
              <div style={S.detailLabel}>Condition notes</div>
              <div style={{ ...S.notesBlock, marginTop: 6 }}>{report.general_conditions_notes}</div>
            </>
          )}

          {report.images && report.images.length > 0 && (
            <>
              <div style={S.detailLabel}>Condition images</div>
              <div style={{ ...S.imageStrip, marginTop: 6 }}>
                {report.images.map((img) => (
                  <div key={img.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

          {lightbox && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                cursor: 'pointer',
              }}
              onClick={() => setLightbox(null)}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src={lightbox.url}
                  alt={lightbox.title}
                  style={{ maxWidth: '80vw', maxHeight: '75vh', borderRadius: 6 }}
                />
                <div style={{ color: 'white', fontSize: 13, marginTop: 10 }}>{lightbox.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginTop: 4 }}>
                  Click anywhere to close
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function GroupHistory({ groups }: { groups?: Group[] }) {
  if (!groups || groups.length === 0) return null;

  return (
    <div>
      <div style={S.sectionHead}>Exhibition & loan history</div>
      <div style={S.groupList}>
        {groups.map((g) => (
          <div key={g.id} style={S.groupCard}>
            <div style={S.groupDot(g.type)} />
            <div style={{ flex: 1 }}>
              <div style={S.groupType(g.type)}>{g.type === 'exhibition' ? 'Exhibition' : 'Loan / General'}</div>
              <div style={S.groupName}>{g.name}</div>
              {g.venues && <div style={S.groupMeta}>{g.venues}</div>}
              {g.start && (
                <div style={{ ...S.groupMeta, marginTop: 2 }}>
                  {formatDate(g.start)} — {formatDate(g.end)}
                </div>
              )}
              {g.description && <div style={{ ...S.groupMeta, marginTop: 4, fontStyle: 'italic' }}>{g.description}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecordView({ data, loggedInAs }: { data: ArticheckData; loggedInAs: string }) {
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
              <span style={S.summaryField}>
                <span style={S.summaryFieldLabel}>Artist</span>
                {data.artist}
              </span>
            )}
            {data.date_of_creation && (
              <span style={S.summaryField}>
                <span style={S.summaryFieldLabel}>Year</span>
                {data.date_of_creation}
              </span>
            )}
            {data.media_template && (
              <span style={S.summaryField}>
                <span style={S.summaryFieldLabel}>Type</span>
                {data.media_template}
              </span>
            )}
            {data.dimensions && (
              <span style={S.summaryField}>
                <span style={S.summaryFieldLabel}>Dimensions</span>
                {data.dimensions}
              </span>
            )}
            {data.lender && (
              <span style={S.summaryField}>
                <span style={S.summaryFieldLabel}>Lender</span>
                {data.lender}
              </span>
            )}
          </div>
          {latestCondition && (
            <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
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
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: T.textHint, marginBottom: 2 }}>Reports</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: T.textPri }}>{data.reports?.length || 0}</div>
        </div>
      </div>

      <div style={S.body}>
        <div>
          <div style={S.sectionHead}>Condition reports — most recent first</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.reports?.map((report, i) => (
              <ReportCard key={report.report_id} report={report} index={i} />
            ))}
          </div>
        </div>

        <GroupHistory groups={data.groups} />
      </div>
    </div>
  );
}

export default function ArticheckPanel({ options = {} }: ArticheckPanelProps) {
  const artworkId = options.artworkId || 'ART-00123';
  const [phase, setPhase] = useState<'login' | 'loading' | 'record' | 'error'>('login');
  const [data, setData] = useState<ArticheckData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loggedInAs, setLoggedInAs] = useState('');

  const handleLogin = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      setPhase('loading');

      try {
        if (DEMO_MODE) {
          await new Promise((resolve) => setTimeout(resolve, 600));
          setLoggedInAs(username || 'demo.user@articheck.com');
          setData(getDummyArticheckData(artworkId));
          setPhase('record');
          return;
        }

        const authRes = await fetch(`${CONFIG.VERCEL_BASE_URL}/api/articheck/auth`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        if (!authRes.ok) throw new Error('Authentication failed. Check your credentials.');
        const { token } = await authRes.json();

        const dataRes = await fetch(
          `${CONFIG.VERCEL_BASE_URL}/api/articheck/reports?artworkId=${encodeURIComponent(artworkId)}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!dataRes.ok) throw new Error('Failed to fetch condition reports.');
        const reportData = await dataRes.json();

        setLoggedInAs(username);
        setData(reportData);
        setPhase('record');
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        setError(message);
        setPhase('error');
      }
    },
    [artworkId]
  );

  return (
    <div style={{ position: 'relative', minHeight: 600 }}>
      <style>{`@keyframes ac-spin { to { transform: rotate(360deg); } }`}</style>
      {phase === 'login' && <LoginScreen onLogin={handleLogin} loading={false} />}
      {phase === 'loading' && <LoadingScreen artworkId={artworkId} />}
      {phase === 'record' && data && <RecordView data={data} loggedInAs={loggedInAs} />}
      {phase === 'error' && (
        <div style={S.errorBox}>
          <strong>Error:</strong> {error}
          <br />
          <button style={{ marginTop: 8, cursor: 'pointer', fontSize: 12 }} onClick={() => { setError(null); setPhase('login'); }}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
