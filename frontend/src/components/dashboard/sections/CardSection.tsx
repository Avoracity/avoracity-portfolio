// src/app/[page]/components/CardSection.tsx
import React from "react";

interface CardSectionProps {
  title?: string;
  children: React.ReactNode;
}

export default function CardSection({ title, children }: CardSectionProps) {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      <div>{children}</div>
    </section>
  );
}
