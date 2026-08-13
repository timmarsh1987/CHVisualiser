export function hasDesignerDocument(template: { designerDocumentJson?: string } | null | undefined): boolean {
  return Boolean(template?.designerDocumentJson?.trim());
}
