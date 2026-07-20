import { useEffect, useState } from 'react';

export const COMPLIANCE_LOADING_MESSAGES = [
  'Reviewing logo placement against the brand bible…',
  'Checking if this shade of blue is actually Cytiva blue…',
  'Consulting the CodeMie brand compliance agent…',
  'Scanning metadata for rogue fonts…',
  'Measuring whitespace with digital calipers…',
  'Verifying disclaimers are where legal expects them…',
  'Cross-referencing color codes with the style guide…',
  'Politely judging your kerning choices…',
  'Almost there — aligning pixels with brand standards…',
] as const;

export function useRotatingLoadingMessage(active: boolean, intervalMs = 2800) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) {
      setIndex(0);
      return undefined;
    }

    const pickNext = () => {
      setIndex((current) => {
        if (COMPLIANCE_LOADING_MESSAGES.length <= 1) {
          return 0;
        }

        let next = current;
        while (next === current) {
          next = Math.floor(Math.random() * COMPLIANCE_LOADING_MESSAGES.length);
        }

        return next;
      });
    };

    const timer = window.setInterval(pickNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [active, intervalMs]);

  return COMPLIANCE_LOADING_MESSAGES[index];
}
