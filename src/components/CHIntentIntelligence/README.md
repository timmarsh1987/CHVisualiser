# CHIntentIntelligence

Content Hub external component that connects to **Intent Intelligence Web** to browse trends, ask questions via CodeMie agents, and generate work item assets from trend questions.

## Options

| Option | Required | Description |
|--------|----------|-------------|
| `apiBaseUrl` | Yes | Base URL of your Intent Intelligence Web deployment (e.g. `https://intent.example.com`) |
| `apiToken` | Yes | Bearer token matching `INTENT_EMBED_API_SECRET` (or `TREND_WEBHOOK_SECRET`) on the server |
| `initialTrendId` | No | Pre-select a trend on load |
| `defaultView` | No | `"trends"` or `"ask"` (default: `"trends"`) |
| `limit` | No | Cap trends returned (omit to load all) |
| `loadAllTrends` | No | Load every trend when no `limit` is set (default: `true`) |
| `entitySlug` | No | Scope Ask queries to a specific entity |

## Content Hub options (JSON)

Content Hub stores component settings on **`context.config`**, not `context.options` (that object is the runtime page API).

In the component **Config** field in Content Hub, paste strict JSON:

```json
{
  "apiBaseUrl": "https://intent-intelligence-web.vercel.app",
  "apiToken": "qwerty123"
}
```

Only include optional fields when you have real values — remove README placeholders like `optional-trend-id` and `optional-entity-slug`.

## Intent Intelligence setup

1. Deploy [intent-intelligence-web](https://github.com/your-org/intent-intelligence-web) with CodeMie credentials configured.
2. Set these environment variables in **Vercel** (Project → Settings → Environment Variables), then redeploy:

```env
INTENT_EMBED_API_SECRET=your-secure-token
INTENT_EMBED_CORS_ORIGIN=https://epamdemo.sitecoresandbox.cloud
```

Use your exact Content Hub origin (no trailing slash). Multiple origins can be comma-separated.

The same `INTENT_EMBED_API_SECRET` value must be used as `apiToken` in the Content Hub component options.

If `INTENT_EMBED_API_SECRET` is omitted, the embed API falls back to `TREND_WEBHOOK_SECRET`, `CRON_SECRET`, or `AUTH_SECRET`.

3. Configure CodeMie assistant IDs (`CODEMIE_ASK_ASSISTANT_ID`, `CODEMIE_TREND_ASSISTANT_ID`, `CODEMIE_CONTENT_ASSISTANT_ID`, etc.).

## Embed API endpoints

The component calls these authenticated routes:

- `GET /api/embed/trends` — list trends
- `GET /api/embed/trends/{id}` — trend detail + cached intelligence
- `POST /api/embed/trends/{id}/analyze` — run CodeMie trend analysis
- `POST /api/embed/trends/{id}/generate` — generate and save asset content
- `POST /api/embed/ask` — ask a question with optional trend/entity context

## Build

```bash
COMPONENT=CHIntentIntelligence npm run build
```

Output: `dist/CHIntentIntelligence.js`

## Features

- **Trends** — searchable list with detail view, evidence signals, and related trends
- **Analyze** — CodeMie trend intelligence (executive summary, why it matters, suggested questions)
- **Create** — generate blog, LinkedIn, POV, and other asset types from a question
- **Ask** — natural-language Q&A grounded in signals, trends, documents, and entities
