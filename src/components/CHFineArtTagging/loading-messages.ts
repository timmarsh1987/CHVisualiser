import { useEffect, useState } from 'react';

export const TAGGING_LOADING_MESSAGES = [
  'Reading brushwork and surface texture…',
  'Consulting the CodeMie fine-art tagging agent…',
  'Sorting style and movement hypotheses…',
  'Gathering subject, motif, and mood tags…',
  'Weighing must-have vs nice-to-have tags…',
  'Studying palette, composition, and form…',
  'Almost there — packing the tag recommendations…',
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
        if (TAGGING_LOADING_MESSAGES.length <= 1) {
          return 0;
        }

        let next = current;
        while (next === current) {
          next = Math.floor(Math.random() * TAGGING_LOADING_MESSAGES.length);
        }

        return next;
      });
    };

    const timer = window.setInterval(pickNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [active, intervalMs]);

  return TAGGING_LOADING_MESSAGES[index];
}
