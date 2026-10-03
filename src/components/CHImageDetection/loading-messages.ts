import { useEffect, useState } from 'react';

export const DETECTION_LOADING_MESSAGES = [
  'Sending the image to the CodeMie detection assistant…',
  'Looking through the frame for the checks you selected…',
  'Reading what is actually in the picture…',
  'Comparing the image against the selected detection rules…',
  'Waiting on a structured read of the image…',
  'Almost there — collecting findings…',
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
        if (DETECTION_LOADING_MESSAGES.length <= 1) {
          return 0;
        }

        let next = current;
        while (next === current) {
          next = Math.floor(Math.random() * DETECTION_LOADING_MESSAGES.length);
        }

        return next;
      });
    };

    const timer = window.setInterval(pickNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [active, intervalMs]);

  return DETECTION_LOADING_MESSAGES[index];
}
