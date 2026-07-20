import { useEffect, useState } from 'react';

export const SAVE_PENDING_MESSAGES = [
  'Change spotted. Autosave is putting on its running shoes…',
  'Unsaved edits detected. Warming up the Content Hub handshake…',
  'Hold tight — your zones are about to get persisted…',
  'Debouncing brilliance before we commit…',
] as const;

export const SAVE_ACTIVE_MESSAGES = [
  'Convincing pixels to stay in their zones…',
  'Teaching the logo not to be shy…',
  'Negotiating with Content Hub (politely, with JSON)…',
  'Herding zones into the right template…',
  'Adding just enough whitespace to look intentional…',
  'Making sure the CTA button feels confident…',
  'Aligning everything left (unless you said otherwise)…',
  'Checking brand guidelines — Cytiva green: approved…',
  'Saving your masterpiece one property at a time…',
  'Linking relations without tangling the graph…',
  'Duplicating templates across dimensions (the fun kind)…',
  'Rendering HTML that even Outlook might tolerate…',
  'Exporting PNGs before anyone moves a zone…',
  'Persuading EPAM.TemplateZone entities to exist…',
  'Almost there — the bits are aligning…',
] as const;

export type SavingMessageVariant = 'pending' | 'active';

function messagesForVariant(variant: SavingMessageVariant): readonly string[] {
  return variant === 'pending' ? SAVE_PENDING_MESSAGES : SAVE_ACTIVE_MESSAGES;
}

export function useRotatingSavingMessage(
  active: boolean,
  variant: SavingMessageVariant = 'active',
  intervalMs = 2600
): string {
  const messages = messagesForVariant(variant);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) {
      setIndex(0);
      return undefined;
    }

    const pickNext = () => {
      setIndex((current) => {
        if (messages.length <= 1) {
          return 0;
        }

        let next = current;
        while (next === current) {
          next = Math.floor(Math.random() * messages.length);
        }
        return next;
      });
    };

    const timer = window.setInterval(pickNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [active, intervalMs, messages.length]);

  return messages[index];
}
