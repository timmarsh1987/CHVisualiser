export const PDF_TEMPLATE_DEFINITION = 'EPAM.PDFTemplate';
export const PDF_TEMPLATE_NAME = 'PdfTemplateName';
export const PDF_TEMPLATE_JSON = 'PdfTemplateJson';
export const PRODUCT_DEFINITION = 'M.PCM.Product';

export const PDF_TEMPLATE_SCHEMA = {
  name: PDF_TEMPLATE_DEFINITION,
  labels: { 'en-US': 'PDF template' },
  is_taxonomy_item_definition: false,
  is_path_enabled: false,
  is_manual_sorting_allowed: false,
  member_groups: [
    {
      name: 'PdfTemplate',
      labels: { 'en-US': 'PDF template' },
      content_group: 'Main',
      members: [
        {
          type: 'String',
          name: PDF_TEMPLATE_NAME,
          labels: { 'en-US': 'Name' },
          is_mandatory: true,
          is_multiline: false,
          indexed: true,
          include_in_content: true,
        },
        {
          type: 'String',
          name: PDF_TEMPLATE_JSON,
          labels: { 'en-US': 'Template JSON' },
          is_mandatory: false,
          is_multiline: true,
          indexed: false,
          include_in_content: true,
        },
      ],
    },
  ],
};
