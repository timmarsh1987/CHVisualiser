import React, { useCallback, useState } from 'react';

const CONFIG = {
  VERCEL_BASE_URL: 'https://your-project.vercel.app',
  SF_LOGIN_URL: 'https://login.salesforce.com',
  SF_CLIENT_ID: 'YOUR_CONNECTED_APP_CLIENT_ID',
  SF_REDIRECT_URI: 'https://your-project.vercel.app/api/auth/callback',
};

interface SalesforceArtworkPanelProps {
  client?: any;
  options?: {
    artworkId?: string;
    [key: string]: any;
  };
  entity?: any;
}

type Phase = 'login' | 'loading' | 'record' | 'error';

type Contact = {
  id: string;
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  status?: string;
  detail?: string;
};

type Artwork = {
  id: string;
  artworkId: string;
  title: string;
  artist: string;
  medium: string;
  year: string;
  dimensions: string;
  listPrice: string;
  status: string;
  dateListed: string;
  contentHubId: string;
};

type SalesforceArtworkData = {
  artwork: Artwork;
  seller: Contact;
  primaryContact: Contact;
  buyers: Contact[];
};

function getInitials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0] || '')
    .join('')
    .toUpperCase();
}

const AVATAR_COLORS = ['blue', 'green', 'orange', 'purple'] as const;

function avatarColor(index: number) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length];
}

const BADGE_MAP: Record<string, 'green' | 'orange' | 'grey' | 'blue'> = {
  'Active Listing': 'green',
  Offer: 'orange',
  Enquiry: 'grey',
  Watchlist: 'blue',
  Seller: 'green',
  Contact: 'blue',
};

const DEMO_MODE = CONFIG.VERCEL_BASE_URL.includes('your-project.vercel.app');

function getDummySalesforceData(artworkId: string): SalesforceArtworkData {
  return {
    artwork: {
      id: 'a0B5g000001XyZEA0',
      artworkId,
      title: 'Twilight Over the Downs',
      artist: 'Margaret Ellison',
      medium: 'Oil on canvas',
      year: '2019',
      dimensions: '120cm × 90cm',
      listPrice: '£24,500.00',
      status: 'Active Listing',
      dateListed: '14 Jan 2024',
      contentHubId: 'CHB-7742918',
    },
    seller: {
      id: '0035g000002AbCDE1',
      name: 'Richard Hargreaves',
      company: 'Hargreaves Fine Art Ltd',
      email: 'richard@hargreaves-fineart.co.uk',
      phone: '+44 207 946 0312',
    },
    primaryContact: {
      id: '0035g000002AbCDE2',
      name: 'Sophia Cartwright',
      company: 'Private collector',
      email: 'sophia.cartwright@email.com',
      phone: '+44 7700 900411',
    },
    buyers: [
      {
        id: '0035g000002AbCDE3',
        name: 'Thomas Mellor',
        company: 'Mellor Collection',
        status: 'Offer',
        detail: 'Offer submitted: £21,000',
      },
      {
        id: '0035g000002AbCDE4',
        name: 'Amara Livingston',
        company: 'Independent',
        status: 'Enquiry',
        detail: 'No offer yet',
      },
      {
        id: '0035g000002AbCDE5',
        name: 'Felix Okafor',
        company: 'Okafor Art Fund',
        status: 'Watchlist',
        detail: 'High interest',
      },
    ],
  };
}

const S: Record<string, any> = {
  wrap: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 13,
    color: '#16325c',
    background: '#f3f2f2',
    minHeight: 600,
    position: 'relative' as const,
  },
  header: {
    background: '#0070d2',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    height: 52,
  },
  appName: { color: 'white', fontSize: 15, fontWeight: 600, letterSpacing: 0.2 },
  headerUser: {
    marginLeft: 'auto',
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  nav: {
    background: '#16325c',
    padding: '0 16px',
    display: 'flex',
    height: 36,
    alignItems: 'center',
  },
  navItem: (active: boolean) => ({
    color: active ? 'white' : 'rgba(255,255,255,0.75)',
    fontSize: 12,
    padding: '0 12px',
    height: 36,
    display: 'flex',
    alignItems: 'center',
    borderBottom: active ? '2px solid white' : '2px solid transparent',
    cursor: 'pointer',
  }),
  breadcrumb: {
    background: 'white',
    padding: '8px 16px',
    fontSize: 12,
    color: '#0070d2',
    borderBottom: '1px solid #dddbda',
    display: 'flex',
    gap: 6,
    alignItems: 'center',
  },
  recordHeader: {
    background: 'white',
    padding: '12px 16px 0',
    borderBottom: '1px solid #dddbda',
  },
  recordTitleRow: { display: 'flex', alignItems: 'flex-start', gap: 12, paddingBottom: 12 },
  recordIcon: {
    width: 36,
    height: 36,
    background: '#0070d2',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  recordType: { fontSize: 11, color: '#706e6b', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 },
  recordName: { fontSize: 18, fontWeight: 600, color: '#16325c' },
  tabs: { display: 'flex' },
  tab: (active: boolean) => ({
    fontSize: 13,
    padding: '8px 16px',
    cursor: 'pointer',
    color: active ? '#0070d2' : '#706e6b',
    borderBottom: active ? '2px solid #0070d2' : '2px solid transparent',
    fontWeight: active ? 600 : 400,
  }),
  body: {
    padding: 16,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
  },
  card: {
    background: 'white',
    borderRadius: 4,
    border: '1px solid #dddbda',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '10px 14px',
    borderBottom: '1px solid #dddbda',
    fontSize: 12,
    fontWeight: 600,
    color: '#16325c',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  fieldRow: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    padding: '6px 14px',
    borderBottom: '0.5px solid #f3f2f2',
    alignItems: 'start',
  },
  fieldLabel: { fontSize: 11, color: '#706e6b', paddingTop: 1 },
  fieldValue: { fontSize: 13, color: '#16325c' },
  fieldLink: { fontSize: 13, color: '#0070d2', cursor: 'pointer' },
  contactCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 14px',
    borderBottom: '0.5px solid #f3f2f2',
  },
  contactName: { fontSize: 13, fontWeight: 600, color: '#0070d2', cursor: 'pointer' },
  contactSub: { fontSize: 11, color: '#706e6b', marginTop: 1 },
  avatar: (color: string) => {
    const map: Record<string, React.CSSProperties> = {
      blue: { background: '#d8edff', color: '#0070d2' },
      green: { background: '#d4efdf', color: '#04844b' },
      orange: { background: '#fce8c5', color: '#c86b09' },
      purple: { background: '#efe8f5', color: '#7744a4' },
    };
    return {
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600,
      flexShrink: 0,
      ...map[color],
    };
  },
  badge: (variant?: 'green' | 'blue' | 'orange' | 'grey') => {
    const map: Record<'green' | 'blue' | 'orange' | 'grey', React.CSSProperties> = {
      green: { background: '#04844b', color: 'white' },
      blue: { background: '#0070d2', color: 'white' },
      orange: { background: '#e8830c', color: 'white' },
      grey: { background: '#dddbda', color: '#16325c' },
    };
    return {
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: 3,
      fontSize: 11,
      fontWeight: 600,
      alignSelf: 'flex-start' as const,
      ...map[variant ?? 'grey'],
    };
  },
  fullWidth: { gridColumn: '1 / -1' },
  rightCol: { display: 'flex', flexDirection: 'column' as const, gap: 12 },
  loginOverlay: {
    position: 'absolute' as const,
    inset: 0,
    background: '#f4f6f9',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    minHeight: 500,
  },
  loginBox: {
    background: 'white',
    border: '1px solid #dddbda',
    borderRadius: 4,
    padding: 32,
    width: 320,
  },
  loginTitle: { fontSize: 18, fontWeight: 600, color: '#16325c', textAlign: 'center' as const, marginBottom: 4 },
  loginSubtitle: { fontSize: 12, color: '#706e6b', textAlign: 'center' as const, marginBottom: 24 },
  input: {
    width: '100%',
    border: '1px solid #dddbda',
    borderRadius: 4,
    padding: '8px 10px',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    width: '100%',
    background: '#0070d2',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    padding: '10px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  loadingBox: {
    background: 'white',
    border: '1px solid #dddbda',
    borderRadius: 4,
    padding: 32,
    width: 360,
    textAlign: 'center' as const,
  },
  progress: {
    marginTop: 18,
    width: '100%',
    height: 8,
    borderRadius: 4,
    background: '#e6edf8',
    overflow: 'hidden',
  },
  progressBar: {
    width: '32%',
    height: '100%',
    background: '#0070d2',
    borderRadius: 4,
  },
  errorBox: {
    background: '#ffe8e6',
    border: '1px solid #f5c2c0',
    borderRadius: 4,
    padding: 20,
    margin: 16,
  },
};

function Badge({ label }: { label: string }) {
  return <span style={S.badge(BADGE_MAP[label] ?? 'grey')}>{label}</span>;
}

function FieldRow({ label, value, link }: { label: string; value: React.ReactNode; link?: boolean }) {
  return (
    <div style={S.fieldRow}>
      <div style={S.fieldLabel}>{label}</div>
      <div style={link ? S.fieldLink : S.fieldValue}>{value}</div>
    </div>
  );
}

function ContactCard({ contact, role, colorIndex, showBadge }: { contact: Contact; role?: string; colorIndex?: number; showBadge?: boolean }) {
  return (
    <div style={S.contactCard}>
      <div style={S.avatar(avatarColor(colorIndex ?? 0))}>{getInitials(contact.name)}</div>
      <div>
        <div style={S.contactName}>{contact.name}</div>
        {role && <div style={S.contactSub}>{role}</div>}
        {contact.company && <div style={S.contactSub}>{contact.company}</div>}
        {contact.status && showBadge && <Badge label={contact.status} />}
        {contact.detail && <div style={S.contactSub}>{contact.detail}</div>}
      </div>
    </div>
  );
}

function LoginScreen({ onLogin, loading }: { onLogin: (creds: { username: string; password: string }) => Promise<void>; loading: boolean }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={S.loginOverlay}>
      <div style={S.loginBox}>
        <div style={S.loginTitle}>Salesforce login</div>
        <div style={S.loginSubtitle}>Sign in to view artwork details from Salesforce.</div>
        <input
          style={S.input}
          placeholder="Email"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          style={S.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button style={S.button} onClick={() => onLogin({ username, password })} disabled={loading}>
          {loading ? 'Signing in...' : 'Log in'}
        </button>
      </div>
    </div>
  );
}

function LoadingScreen({ artworkId }: { artworkId: string }) {
  return (
    <div style={S.loginOverlay}>
      <div style={S.loadingBox}>
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Loading Salesforce record</div>
        <div style={{ color: '#706e6b', fontSize: 13 }}>Fetching artwork {artworkId} from Salesforce...</div>
        <div style={S.progress}>
          <div style={S.progressBar} />
        </div>
      </div>
    </div>
  );
}

function RecordView({ data }: { data: SalesforceArtworkData }) {
  const { artwork, seller, primaryContact, buyers } = data;
  const [activeTab, setActiveTab] = useState('Details');

  return (
    <div style={S.wrap}>
      <div style={S.header}>
        <div style={S.appName}>Salesforce Artwork Panel</div>
        <div style={S.headerUser}>Logged in as <strong>sales.user@example.com</strong></div>
      </div>
      <div style={S.nav}>
        {['Home', 'Opportunities', 'Contacts', 'Reports'].map((item) => (
          <div key={item} style={S.navItem(item === 'Home')}>
            {item}
          </div>
        ))}
      </div>
      <div style={S.breadcrumb}>
        <span>App Launcher</span>
        <span>›</span>
        <span>Sales</span>
        <span>›</span>
        <span>Artwork</span>
      </div>
      <div style={S.recordHeader}>
        <div style={S.recordTitleRow}>
          <div style={S.recordIcon}>{artwork.title.charAt(0)}</div>
          <div>
            <div style={S.recordType}>Artwork</div>
            <div style={S.recordName}>
              {artwork.title} <Badge label={artwork.status} />
            </div>
          </div>
        </div>
        <div style={S.tabs}>
          {['Details', 'Activity', 'Chatter', 'Files'].map((tab) => (
            <div key={tab} style={S.tab(tab === activeTab)} onClick={() => setActiveTab(tab)}>
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div style={S.body}>
        <div style={S.card}>
          <div style={S.cardHeader}>Artwork information</div>
          <div>
            <FieldRow label="Artwork ID" value={artwork.artworkId} link />
            <FieldRow label="Title" value={artwork.title} />
            <FieldRow label="Artist" value={artwork.artist} link />
            <FieldRow label="Medium" value={artwork.medium} />
            <FieldRow label="Year" value={artwork.year} />
            <FieldRow label="Dimensions" value={artwork.dimensions} />
            <FieldRow label="List price" value={artwork.listPrice} />
            <FieldRow label="Status" value={<Badge label={artwork.status} />} />
            <FieldRow label="Date listed" value={artwork.dateListed} />
            <FieldRow label="Content Hub ID" value={artwork.contentHubId} link />
          </div>
        </div>
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
        <div style={{ ...S.card, ...S.fullWidth }}>
          <div style={S.cardHeader}>Potential buyers ({buyers.length})</div>
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

export default function SalesforceArtworkPanel({ options = {} }: SalesforceArtworkPanelProps) {
  const artworkId = options.artworkId || 'ART-00123';
  const [phase, setPhase] = useState<Phase>('login');
  const [data, setData] = useState<SalesforceArtworkData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      setPhase('loading');

      try {
        if (DEMO_MODE) {
          await new Promise((resolve) => setTimeout(resolve, 600));
          setData(getDummySalesforceData(artworkId));
          setPhase('record');
          return;
        }

        const authRes = await fetch(`${CONFIG.VERCEL_BASE_URL}/api/auth/callback`);
        if (!authRes.ok) throw new Error('Authentication failed');
        const authJson = await authRes.json();
        const access_token = authJson.access_token;

        const dataRes = await fetch(
          `${CONFIG.VERCEL_BASE_URL}/api/salesforce/artwork?artworkId=${encodeURIComponent(artworkId)}`,
          { headers: { Authorization: `Bearer ${access_token}` } }
        );
        if (!dataRes.ok) throw new Error('Failed to fetch artwork data');
        const artworkData = await dataRes.json();

        setData(artworkData);
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
      <style>{`@keyframes sf-spin { to { transform: rotate(360deg); } }`}</style>
      {phase === 'login' && <LoginScreen onLogin={handleLogin} loading={false} />}
      {phase === 'loading' && <LoadingScreen artworkId={artworkId} />}
      {phase === 'record' && data && <RecordView data={data} />}
      {phase === 'error' && (
        <div style={S.errorBox}>
          <strong>Something went wrong:</strong> {error}
          <br />
          <button style={{ marginTop: 8, cursor: 'pointer' }} onClick={() => setPhase('login')}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
