import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import TemplateEditor from "../../../../src/components/CHPdfTemplate/TemplateEditor";
import type { HubClient } from "../../../../src/components/CHPdfTemplate/hub";

const client: HubClient = {
  raw: {
    getAsync: async (url: string) => {
      if (url.includes("/query")) return { isSuccessStatusCode: true, content: { items: [] } };
      return { isSuccessStatusCode: true, content: { member_groups: [] } };
    },
    postAsync: async () => ({ isSuccessStatusCode: true, statusCode: 201, content: { id: 42 } }),
    putAsync: async () => ({ isSuccessStatusCode: true, statusCode: 204 }),
  },
};

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <ThemeProvider theme={createTheme()}>
      <TemplateEditor client={client} />
    </ThemeProvider>,
  );
}
