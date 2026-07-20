/**
 * Minimal CodeMie smoke test — uses env vars directly (no dotenv).
 *
 * PowerShell:
 *   $env:CODEMIE_KEYCLOAK_CLIENT_ID="codemie-sdk"
 *   $env:CODEMIE_KEYCLOAK_USERNAME="you@epam.com"
 *   $env:CODEMIE_KEYCLOAK_PASSWORD="your-password"
 *   $env:CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID="your-assistant-uuid"
 *   npm run codemie:smoke
 */
import { getCodeMieAccessToken, getCodeMieApiBase } from '../lib/codemie/auth.js';
import { callCodeMieAssistant } from '../lib/codemie/client.js';

function getAssistantId() {
  return (
    process.env.CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID?.trim() ??
    process.env.CODEMIE_MY_AGENT_ASSISTANT_ID?.trim() ??
    ''
  );
}

function describeAuthMode() {
  if (process.env.CODEMIE_KEYCLOAK_CLIENT_ID && process.env.CODEMIE_KEYCLOAK_CLIENT_SECRET) {
    return 'client_credentials';
  }

  if (process.env.CODEMIE_KEYCLOAK_USERNAME && process.env.CODEMIE_KEYCLOAK_PASSWORD) {
    return 'password';
  }

  if (process.env.CODEMIE_API_KEY) {
    return 'static_token';
  }

  return 'none';
}

async function main() {
  const assistantId = getAssistantId();
  const authMode = describeAuthMode();

  console.log('CodeMie smoke test');
  console.log('  auth mode:', authMode);
  console.log('  api base:', getCodeMieApiBase());
  console.log('  assistant:', assistantId || '(not set)');

  if (!assistantId) {
    throw new Error(
      'Set CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID or CODEMIE_MY_AGENT_ASSISTANT_ID'
    );
  }

  if (authMode === 'none') {
    throw new Error(
      'CodeMie auth not configured. Set Option A (client secret) or Option B (username/password) vars.'
    );
  }

  console.log('\n1) Fetching access token…');
  const token = await getCodeMieAccessToken();
  console.log('   token:', `${token.slice(0, 24)}… (${token.length} chars)`);

  console.log('\n2) Calling assistant…');
  const reply = await callCodeMieAssistant('Reply with exactly: CodeMie smoke test OK', {
    assistantId,
  });

  console.log('\nAssistant reply:');
  console.log(reply || '(empty)');
  console.log('\nSmoke test passed.');
}

main().catch((error) => {
  console.error('\nSmoke test failed:', error instanceof Error ? error.message : error);
  process.exit(1);
});
