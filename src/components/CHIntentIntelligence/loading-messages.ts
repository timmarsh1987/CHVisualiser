import { useEffect, useState } from 'react';

export const ASK_LOADING_MESSAGES = [
  "EPAM AI is currently using a lot of 1's and 0's…",
  'Consulting the trend oracle (it runs on coffee and embeddings)…',
  'Cross-referencing signals so you do not have to…',
  'Teaching the models what “enterprise buyer” really means…',
  'Scanning the graph for clues your calendar missed…',
  'Politely arguing with several CodeMie agents…',
  'Distilling market noise into something you can paste into Slack…',
  'Counting entities. Some of them are very important. Probably…',
  'Reading between the trend lines…',
  'Almost there — the bits are aligning…',
  'Synthesizing intelligence without inventing a single fake stat…',
  'Checking if Sitecore is involved. (It often is.)…',
  'Packaging insights for humans who have meetings in ten minutes…',
  'Running intent analysis at ludicrous speed (for serverless)…',
  'One moment — EPAM AI is dotting i’s and crossing competitive moats…',
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
        if (ASK_LOADING_MESSAGES.length <= 1) {
          return 0;
        }

        let next = current;

        while (next === current) {
          next = Math.floor(Math.random() * ASK_LOADING_MESSAGES.length);
        }

        return next;
      });
    };

    const timer = window.setInterval(pickNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [active, intervalMs]);

  return ASK_LOADING_MESSAGES[index];
}
