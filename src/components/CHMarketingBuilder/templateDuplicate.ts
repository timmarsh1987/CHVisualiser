import type { ChannelType, Template, TemplateZone } from './types';
import { defaultDimensionsForChannel } from './templateDimensions';

export function duplicateTargetChannels(currentChannel: ChannelType): ChannelType[] {
  return (['Social', 'Email', 'Newsletter'] as ChannelType[]).filter((channel) => channel !== currentChannel);
}

function cloneZoneForDuplicate(
  zone: TemplateZone,
  index: number,
  stamp: number,
  targetChannel: ChannelType
): TemplateZone {
  const cloned: TemplateZone = {
    id: `temp-dup-${stamp}-${index}`,
    zoneKey: zone.zoneKey,
    zoneLabel: zone.zoneLabel,
    zoneType: zone.zoneType,
    isLocked: zone.isLocked,
    sortOrder: index,
    contentAlignment: zone.contentAlignment,
    offsetDirection: zone.offsetDirection,
    offsetPx: zone.offsetPx,
  };

  if (zone.zoneType === 'Heading') {
    cloned.headingLevel = zone.headingLevel;
    cloned.maxCharacterCount = zone.maxCharacterCount;
  }

  if (zone.zoneType === 'Text') {
    cloned.maxCharacterCount = zone.maxCharacterCount;
  }

  if (zone.zoneType === 'Image') {
    cloned.aspectRatioLock = zone.aspectRatioLock;
  }

  if (zone.zoneType === 'HTML') {
    cloned.htmlDefaultContent = zone.htmlDefaultContent;
    cloned.htmlAllowUserOverride = zone.htmlAllowUserOverride;
  }

  if (targetChannel === 'Social') {
    return convertZoneForSocial(cloned, index);
  }

  return convertZoneForStackedChannel(cloned);
}

function convertZoneForSocial(zone: TemplateZone, index: number): TemplateZone {
  const height =
    zone.zoneType === 'Logo'
      ? 80
      : zone.zoneType === 'Image'
        ? 360
        : zone.zoneType === 'Heading'
          ? 120
          : zone.zoneType === 'CTA Button'
            ? 72
            : 96;

  return {
    ...zone,
    positionX: zone.positionX ?? 40,
    positionY: zone.positionY ?? 40 + index * (height + 24),
    zoneWidth: zone.zoneWidth ?? 1000,
    zoneHeight: height,
  };
}

function convertZoneForStackedChannel(zone: TemplateZone): TemplateZone {
  return {
    ...zone,
    positionX: undefined,
    positionY: undefined,
    zoneWidth: undefined,
    zoneHeight: undefined,
  };
}

export function buildDuplicateTemplate(
  source: Template,
  targetChannel: ChannelType,
  templateName?: string
): Template {
  const defaults = defaultDimensionsForChannel(targetChannel);
  const stamp = Date.now();

  const zones = [...source.zones]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((zone, index) => cloneZoneForDuplicate(zone, index, stamp, targetChannel));

  return {
    id: 'temp-new-template',
    templateName: templateName?.trim() || `${source.templateName} (${targetChannel})`,
    channelType: targetChannel,
    formatPreset: defaults.formatPreset,
    canvasWidth: defaults.canvasWidth,
    canvasHeight: defaults.canvasHeight,
    brandKitId: source.brandKitId,
    allowedAssetIds: source.allowedAssetIds,
    zones,
  };
}
