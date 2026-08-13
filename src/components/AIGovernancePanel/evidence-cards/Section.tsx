import React from 'react';

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ch-ai-gov__section">
      <h4 className="ch-ai-gov__section-title">{title}</h4>
      <div className="ch-ai-gov__section-body">{children}</div>
    </section>
  );
}
