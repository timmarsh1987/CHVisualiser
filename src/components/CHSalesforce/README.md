# Salesforce Artwork Panel — Content Hub External Page

A Salesforce-styled React component that federates a user into Salesforce
and displays Artwork__c + Contact data against an asset's EPAM.artworkId.

---

## Project structure

```
CHSalesforce/
├── index.tsx                        ← Content Hub external page entry
├── SalesforceArtworkPanel.tsx       ← main React panel component
├── callback.js                      ← OAuth token exchange (Vercel function)
└── artwork.js                       ← Salesforce data fetch (Vercel function)
```

---

## How it works (current dummy flow)

1. User sees the Salesforce login screen inside Content Hub
2. They enter any username/password and click Log In
3. The component calls `/api/auth/callback` on Vercel — returns a dummy token
4. It then calls `/api/salesforce/artwork?artworkId=ART-00123` — returns dummy data
5. The Salesforce-styled record view renders

---

## Deploying to Vercel

1. Copy `vercel-api/` contents into your Vercel project under `/api/`
2. Add environment variables in the Vercel dashboard:

   | Variable            | Value                                      |
   |---------------------|--------------------------------------------|
   | SF_LOGIN_URL        | https://login.salesforce.com               |
   | SF_CLIENT_ID        | Your Connected App consumer key            |
   | SF_CLIENT_SECRET    | Your Connected App consumer secret         |
   | SF_REDIRECT_URI     | https://your-project.vercel.app/api/auth/callback |
   | SF_INSTANCE_URL     | https://yourorg.salesforce.com             |

---

## Registering in Content Hub as an external page

1. Go to **Manage > Pages** in Content Hub
2. Create a new External Page
3. Set the URL to wherever you host the built component
4. Add an **Option binding** for `artworkId`:
   - Source: Entity field
   - Field: `EPAM.artworkId`
5. Attach the page to the Asset detail page layout

---

## Switching from dummy to real Salesforce

### Auth (callback.js)
Uncomment the production block and remove the dummy response.
The real flow is:
1. Component redirects user to `SF_LOGIN_URL/services/oauth2/authorize`
2. Salesforce redirects back to `/api/auth/callback?code=...`
3. Vercel function exchanges the code for an access token
4. Token is returned to the component (consider short-lived session storage)

### Data (artwork.js)
Uncomment the SOQL block and remove the dummy response.
Key field mappings to confirm with your Salesforce admin:

| Dummy field        | SF field (confirm)          |
|--------------------|-----------------------------|
| artworkId          | EPAM_Artwork_ID__c           |
| seller             | Seller__r (Contact lookup)  |
| primaryContact     | Primary_Contact__r           |
| buyers             | Artwork_Buyer__c (junction) |

---

## Content Hub schema (for reference)

The component reads one field from Content Hub:

| Entity   | Field           | Type   | Purpose                        |
|----------|-----------------|--------|--------------------------------|
| Asset    | EPAM.artworkId  | String | Passed to SF query as filter   |

No write-back to Content Hub in this version.
