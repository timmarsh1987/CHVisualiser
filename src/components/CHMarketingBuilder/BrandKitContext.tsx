import React, { createContext, useContext, useEffect, useState } from 'react';
import { contentHubApi } from './api';
import { createDummyBrandKit, DUMMY_BRAND_KIT_ID } from './fallbackData';
import type { BrandKit } from './types';

const BrandKitContext = createContext<BrandKit | null>(null);

export function BrandKitProvider({
  brandKitId,
  children,
}: {
  brandKitId: string;
  children: React.ReactNode;
}) {
  const [brandKit, setBrandKit] = useState<BrandKit | null>(null);

  useEffect(() => {
    let cancelled = false;
    contentHubApi
      .getBrandKit(brandKitId || DUMMY_BRAND_KIT_ID)
      .then((kit) => {
        if (!cancelled) setBrandKit(kit);
      })
      .catch(() => {
        if (!cancelled) setBrandKit(createDummyBrandKit(brandKitId || DUMMY_BRAND_KIT_ID));
      });
    return () => {
      cancelled = true;
    };
  }, [brandKitId]);

  if (!brandKit) {
    return <div className="marketing-builder-status">Loading brand kit...</div>;
  }

  return <BrandKitContext.Provider value={brandKit}>{children}</BrandKitContext.Provider>;
}

export function useBrandKit(): BrandKit {
  const brandKit = useContext(BrandKitContext);
  if (!brandKit) {
    throw new Error('useBrandKit must be used within a BrandKitProvider');
  }
  return brandKit;
}

export function useBrandColor(usageType: BrandKit['colors'][number]['colorUsageType']): string | undefined {
  const brandKit = useBrandKit();
  return brandKit.colors.find((c) => c.colorUsageType === usageType)?.hexValue;
}

export function useBrandFont(usageType: BrandKit['fonts'][number]['fontUsageType']): string | undefined {
  const brandKit = useBrandKit();
  return brandKit.fonts.find((f) => f.fontUsageType === usageType)?.fontFamily;
}
