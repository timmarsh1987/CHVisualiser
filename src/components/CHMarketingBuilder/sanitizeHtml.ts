import DOMPurify from 'dompurify';

const EMAIL_SAFE_TAGS = [
  'p', 'div', 'span', 'a', 'strong', 'em', 'b', 'i', 'u', 'br',
  'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'td', 'th',
  'img', 'h1', 'h2', 'h3', 'h4',
] as const;

const EMAIL_SAFE_ATTR = ['href', 'style', 'src', 'alt', 'width', 'height', 'align', 'colspan', 'rowspan', 'target', 'rel'];

export function sanitizeZoneHtml(rawHtml: string | undefined | null): string {
  if (!rawHtml?.trim()) return '';

  return DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [...EMAIL_SAFE_TAGS],
    ALLOWED_ATTR: EMAIL_SAFE_ATTR,
    ALLOW_DATA_ATTR: false,
  });
}
