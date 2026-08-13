/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { contentHubApi, setContentHubClient, setContentHubProxyBase } from './api';
import { BrandKitProvider } from './BrandKitContext';
import { ContentHubIntegrationProvider } from './contentHubIntegration';
import type { ContentHubIntegrationValue } from './contentHubIntegration';
import { resolveMarketingBuilderOptions } from './entityResolve';
import { logError, logResolved, printLoadSummary, resetLoadReport } from './debugLog';
import EmailNewsletterBuilder from './EmailNewsletterBuilder';
import DesignerAssetBuilder from './DesignerAssetBuilder';
import DesignerTemplateAdmin, { initializeDesignerTemplate } from './DesignerTemplateAdmin';
import { hasDesignerDocument } from './designerDetect';
import { describeMissingTemplateId, resolveBuilderMode } from './options';
import SocialAssetBuilder from './SocialAssetBuilder';
import TemplateEditToolbar, { type TemplateEditTab } from './TemplateEditToolbar';
import TemplateSelector from './TemplateSelector';
import TemplateSetupPanel from './TemplateSetupPanel';
import type { MarketingAsset, MarketingBuilderOptions, Template } from './types';
import './index.css';
import '../CHDesigner/index.css';

interface MarketingBuilderPanelProps {
  client?: any;
  entity?: any;
  options?: Partial<MarketingBuilderOptions>;
  config?: unknown;
  contentHubApi?: {
    search?: ContentHubIntegrationValue['search'];
    selection?: ContentHubIntegrationValue['selection'];
    notifier?: ContentHubIntegrationValue['notifier'];
  };
  searchIdentifier?: string;
  selectionPoolIdentifier?: string;
}

export default function MarketingBuilderPanel({
  client,
  entity,
  options,
  config,
  contentHubApi: pageApi,
  searchIdentifier: searchIdentifierProp,
  selectionPoolIdentifier: selectionPoolIdentifierProp,
}: MarketingBuilderPanelProps) {
  const [resolvedOptions, setResolvedOptions] = useState<MarketingBuilderOptions | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);
  const [marketingAsset, setMarketingAsset] = useState<MarketingAsset | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TemplateEditTab>('asset');
  const [templateListRefreshKey, setTemplateListRefreshKey] = useState(0);
  const [creatingDesigner, setCreatingDesigner] = useState(false);
  const [createDesignerError, setCreateDesignerError] = useState<string | null>(null);

  const handleTabChange = (tab: TemplateEditTab) => {
    setActiveTab(tab);
    if (tab !== 'asset' || !template?.id) return;

    void contentHubApi
      .getTemplate(template.id)
      .then((reloaded) => setTemplate(reloaded))
      .catch((loadError) => {
        logError(
          'template reload',
          loadError,
          `Could not refresh template ${template.id} when switching to the asset tab.`
        );
      });
  };

  useEffect(() => {
    setContentHubClient(client ?? null);
  }, [client]);

  useEffect(() => {
    let cancelled = false;

    async function resolveOptions() {
      const parsed = await resolveMarketingBuilderOptions(
        client,
        options ?? client?.options,
        entity,
        config
      );
      if (!cancelled) {
        setResolvedOptions(parsed);
        if (parsed.allowTemplateZoneEditing) {
          logResolved('allowTemplateZoneEditing', 'Template zone editing enabled from Configuration');
        }
      }
    }

    void resolveOptions();

    return () => {
      cancelled = true;
    };
  }, [client, config, entity, options]);

  useEffect(() => {
    if (resolvedOptions?.contentHubProxyBase) {
      setContentHubProxyBase(resolvedOptions.contentHubProxyBase);
    }
  }, [resolvedOptions?.contentHubProxyBase]);

  useEffect(() => {
    if (!resolvedOptions) return;

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      resetLoadReport();

      if (!resolvedOptions.templateId) {
        const message = describeMissingTemplateId(entity, config);
        logError('templateId', message);
        setError(message);
        setLoading(false);
        return;
      }

      if (!resolvedOptions.marketingAssetId) {
        const message = 'marketingAssetId could not be resolved from context.entity.systemProperties.id.';
        logError('marketingAssetId', message);
        setError(message);
        setLoading(false);
        return;
      }

      logResolved('templateId', `Using template ${resolvedOptions.templateId}`);
      logResolved('marketingAssetId', `Using marketing asset ${resolvedOptions.marketingAssetId}`);

      try {
        const loadedTemplate = await contentHubApi.getTemplate(resolvedOptions.templateId);
        if (cancelled) return;

        setTemplate(loadedTemplate);

        const mode = resolveBuilderMode(resolvedOptions, loadedTemplate.channelType);
        if (mode === 'admin') {
          setMarketingAsset(null);
          printLoadSummary({
            builderMode: mode,
            templateId: loadedTemplate.id,
            templateName: loadedTemplate.templateName,
            marketingAssetId: resolvedOptions.marketingAssetId,
            brandKitId: resolvedOptions.brandKitId ?? loadedTemplate.brandKitId,
            channelType: loadedTemplate.channelType,
            zoneCount: loadedTemplate.zones.length,
          });
          return;
        }

        const loadedAsset = await contentHubApi.getMarketingAsset(resolvedOptions.marketingAssetId);
        if (cancelled) return;
        setMarketingAsset(loadedAsset);

        const brandKitId = resolvedOptions.brandKitId ?? loadedTemplate.brandKitId;
        printLoadSummary({
          builderMode: mode,
          templateId: loadedTemplate.id,
          templateName: loadedTemplate.templateName,
          marketingAssetId: loadedAsset.id,
          brandKitId,
          channelType: loadedTemplate.channelType,
          zoneCount: loadedTemplate.zones.length,
          zoneValueCount: loadedAsset.zoneValues.length,
        });
      } catch (loadError) {
        if (cancelled) return;
        logError('load', loadError, 'Marketing builder could not load required entities.');
        setError(loadError instanceof Error ? loadError.message : 'Failed to load marketing builder data.');
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [config, entity, resolvedOptions]);

  const builderMode = resolveBuilderMode(resolvedOptions ?? {}, template?.channelType);
  const brandKitId = resolvedOptions?.brandKitId ?? template?.brandKitId;
  const userHasOverridePermission = resolvedOptions?.userHasOverridePermission ?? false;
  const searchIdentifier = searchIdentifierProp ?? resolvedOptions?.searchIdentifier;
  const selectionPoolIdentifier =
    selectionPoolIdentifierProp ?? resolvedOptions?.selectionPoolIdentifier;

  const integrationValue: ContentHubIntegrationValue = {
    searchIdentifier,
    selectionPoolIdentifier,
    search: pageApi?.search,
    selection: pageApi?.selection,
    notifier: pageApi?.notifier,
  };

  useEffect(() => {
    if (template && template.zones.length === 0) {
      setActiveTab('template');
    }
  }, [template?.id, template?.zones.length]);

  const reloadTemplate = async (templateId = template?.id) => {
    if (!templateId) return;
    const reloaded = await contentHubApi.getTemplate(templateId);
    setTemplate(reloaded);
  };

  const refreshTemplateCatalog = () => {
    setTemplateListRefreshKey((current) => current + 1);
  };

  const handleTemplateSwitch = async (selectedTemplate: Template) => {
    setTemplate(selectedTemplate);
    if (resolvedOptions) {
      setResolvedOptions({ ...resolvedOptions, templateId: selectedTemplate.id });
    }
    if (marketingAsset) {
      const reloadedAsset = await contentHubApi.getMarketingAsset(marketingAsset.id);
      setMarketingAsset(reloadedAsset);
    }
    refreshTemplateCatalog();
  };

  const handleCreateCanvasTemplate = async () => {
    if (!template) return;
    setCreatingDesigner(true);
    setCreateDesignerError(null);
    try {
      const next = await initializeDesignerTemplate(
        template,
        resolvedOptions?.designerDocumentProperty
      );
      setTemplate(next);
      refreshTemplateCatalog();
    } catch (error) {
      setCreateDesignerError(
        error instanceof Error ? error.message : 'Could not create canvas template.'
      );
    } finally {
      setCreatingDesigner(false);
    }
  };

  const useDesigner = hasDesignerDocument(template);

  if (!resolvedOptions || loading) {
    return <div className="marketing-builder-status">Loading marketing builder...</div>;
  }

  if (error) {
    return <div className="marketing-builder-status marketing-builder-error">{error}</div>;
  }

  if (!template) {
    return <div className="marketing-builder-status marketing-builder-error">Template could not be resolved.</div>;
  }

  if (!brandKitId) {
    return (
      <div className="marketing-builder-status marketing-builder-error">
        brandKitId is not set on this component and could not be resolved from the template. Set brandKitId in
        Manage &gt; Pages &gt; this detail page &gt; External component &gt; Configuration, or link templateToBrandKit
        on the template.
      </div>
    );
  }

  return (
    <ContentHubIntegrationProvider value={integrationValue}>
      <BrandKitProvider brandKitId={brandKitId}>
        <div className="marketing-builder">
          {(builderMode === 'admin' || (builderMode !== 'admin' && activeTab === 'template')) && (
            <>
              {builderMode !== 'admin' && (
                <TemplateEditToolbar
                  activeTab={activeTab}
                  zoneCount={template.zones.length}
                  templateName={template.templateName}
                  onTabChange={handleTabChange}
                />
              )}
              {builderMode === 'admin' && (
                <TemplateEditToolbar
                  activeTab="template"
                  zoneCount={template.zones.length}
                  templateName={template.templateName}
                  onTabChange={() => undefined}
                  showAssetTab={false}
                />
              )}
              {useDesigner ? (
                <DesignerTemplateAdmin
                  template={template}
                  designerDocumentProperty={resolvedOptions.designerDocumentProperty}
                  onTemplateSaved={(savedTemplate) => {
                    setTemplate(savedTemplate);
                    refreshTemplateCatalog();
                  }}
                />
              ) : (
                <>
                  <div className="designer-create-banner">
                    <p>
                      This template uses the zone builder. You can also create a canvas designer
                      template (stored as designerDocumentJson on EPAM.BuilderTemplate).
                    </p>
                    <button
                      type="button"
                      className="chd-btn"
                      disabled={creatingDesigner}
                      onClick={() => void handleCreateCanvasTemplate()}
                    >
                      {creatingDesigner ? 'Creating…' : 'Create canvas template'}
                    </button>
                    {createDesignerError ? (
                      <div className="marketing-builder-error">{createDesignerError}</div>
                    ) : null}
                  </div>
                  <TemplateSetupPanel
                    template={template}
                    figmaImportApiUrl={resolvedOptions.figmaImportApiUrl}
                    figmaImportApiToken={resolvedOptions.figmaImportApiToken}
                    onTemplateSaved={(savedTemplate) => {
                      setTemplate(savedTemplate);
                      refreshTemplateCatalog();
                    }}
                    onTemplatesChanged={refreshTemplateCatalog}
                  />
                </>
              )}
            </>
          )}

          {builderMode === 'social' && marketingAsset && activeTab === 'asset' && (
            <>
              <TemplateEditToolbar
                activeTab={activeTab}
                zoneCount={template.zones.length}
                templateName={template.templateName}
                onTabChange={handleTabChange}
              />
              <TemplateSelector
                brandKitId={brandKitId}
                currentTemplateId={template.id}
                marketingAssetId={marketingAsset.id}
                refreshKey={templateListRefreshKey}
                onTemplateChange={handleTemplateSwitch}
              />
              {useDesigner ? (
                <DesignerAssetBuilder
                  template={template}
                  marketingAsset={marketingAsset}
                  designerDocumentProperty={resolvedOptions.designerDocumentProperty}
                  designerInstanceProperty={resolvedOptions.designerInstanceProperty}
                  onSaved={setMarketingAsset}
                />
              ) : (
                <SocialAssetBuilder
                  template={template}
                  marketingAsset={marketingAsset}
                  userHasOverridePermission={userHasOverridePermission}
                  html2canvasCdnUrl={resolvedOptions.html2canvasCdnUrl}
                />
              )}
            </>
          )}

          {builderMode === 'social' && !marketingAsset && (
            <div className="marketing-builder-status marketing-builder-error">
              Marketing asset could not be loaded for the social builder.
            </div>
          )}

          {builderMode === 'email' && marketingAsset && activeTab === 'asset' && (
            <>
              <TemplateEditToolbar
                activeTab={activeTab}
                zoneCount={template.zones.length}
                templateName={template.templateName}
                onTabChange={handleTabChange}
              />
              {useDesigner ? (
                <>
                  <TemplateSelector
                    brandKitId={brandKitId}
                    currentTemplateId={template.id}
                    marketingAssetId={marketingAsset.id}
                    refreshKey={templateListRefreshKey}
                    onTemplateChange={handleTemplateSwitch}
                  />
                  <DesignerAssetBuilder
                    template={template}
                    marketingAsset={marketingAsset}
                    designerDocumentProperty={resolvedOptions.designerDocumentProperty}
                    designerInstanceProperty={resolvedOptions.designerInstanceProperty}
                    onSaved={setMarketingAsset}
                  />
                </>
              ) : template.zones.length > 0 ? (
                <>
                  <TemplateSelector
                    brandKitId={brandKitId}
                    currentTemplateId={template.id}
                    marketingAssetId={marketingAsset.id}
                    refreshKey={templateListRefreshKey}
                    onTemplateChange={handleTemplateSwitch}
                  />
                  <EmailNewsletterBuilder
                    template={template}
                    marketingAsset={marketingAsset}
                    userHasOverridePermission={userHasOverridePermission}
                    renderEmailApiUrl={resolvedOptions.renderEmailApiUrl}
                  />
                </>
              ) : (
                <div className="marketing-builder-status template-empty-message">
                  Template <strong>{template.templateName}</strong> has no zones yet. Open the{' '}
                  <strong>Edit template</strong> tab to add zones, or create a canvas template.
                </div>
              )}
            </>
          )}
        </div>
      </BrandKitProvider>
    </ContentHubIntegrationProvider>
  );
}
