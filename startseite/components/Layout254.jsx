"use client";

import React from "react";

const pillars = [
  {
    title: "Individualität",
    description:
      "Kein Einheitskonzept. Jede Behandlung beginnt mit einem Gespräch — über dich, deine Haut und deine Ziele.",
  },
  {
    title: "Wissenschaft",
    description:
      "Wir arbeiten nur mit Produkten und Methoden, die klinisch erprobt sind. Reviderm ist Schweizer Präzision.",
  },
  {
    title: "Handwerk",
    description:
      "Über zehn Jahre Erfahrung in Hautbehandlungen und Permanent Make-up. Jeder Pinselstrich sitzt.",
  },
  {
    title: "Vertrauen",
    description:
      "Unsere Kundinnen kommen wieder. Nicht nur für die Haut — sondern für das Gefühl, wirklich gesehen zu werden.",
  },
];

export function Layout254() {
  return (
    <section
      className="py-20 md:py-28 px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cb-linen)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Warum Contour Beauty</p>
            </div>
            <h2
              className="font-display"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.15,
                color: "var(--cb-charcoal)",
                maxWidth: "18ch",
              }}
            >
              Schönheit mit Substanz
            </h2>
          </div>
          <p
            style={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 300,
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "var(--cb-muted)",
              maxWidth: "40ch",
            }}
          >
            Contour Beauty in Hamburg ist mehr als ein Studio — es ist ein Ort,
            an dem Frauen ihre Haut neu kennenlernen.
          </p>
        </div>

        {/* Grid: pillars + center image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left pillars */}
          <div className="lg:col-span-4 space-y-8">
            {pillars.slice(0, 2).map((pillar) => (
              <div key={pillar.title} className="flex gap-5">
                <span
                  className="block flex-shrink-0 w-px"
                  style={{
                    height: "auto",
                    backgroundColor: "var(--cb-sand)",
                    minHeight: "2.5rem",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 500,
                      fontSize: "1.25rem",
                      color: "var(--cb-charcoal)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      lineHeight: 1.75,
                      color: "var(--cb-muted)",
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="lg:col-span-4 cb-img-zoom">
            <div style={{ borderRadius: "2px", overflow: "hidden" }}>
              <img
                src="/images/about-2.png"
                alt="Contour Beauty Studio"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </div>

          {/* Right pillars */}
          <div className="lg:col-span-4 space-y-8">
            {pillars.slice(2).map((pillar) => (
              <div key={pillar.title} className="flex gap-5">
                <span
                  className="block flex-shrink-0 w-px"
                  style={{
                    backgroundColor: "var(--cb-sand)",
                    minHeight: "2.5rem",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 500,
                      fontSize: "1.25rem",
                      color: "var(--cb-charcoal)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      lineHeight: 1.75,
                      color: "var(--cb-muted)",
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex gap-4">
          <a href="/über-uns" className="cb-btn-secondary">
            Unser Studio
          </a>
          <a href="/kontakt" className="cb-btn-primary">
            Termin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
