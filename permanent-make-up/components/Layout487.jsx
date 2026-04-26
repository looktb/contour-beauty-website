"use client";

import React from "react";

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Zufriedene Kundinnen" },
  { value: "3", label: "PMU-Techniken" },
  { value: "100%", label: "Individuelle Beratung" },
];

export function Layout487() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-charcoal)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" style={{ backgroundColor: "var(--cb-sand)" }} />
              <p className="cb-label" style={{ color: "var(--cb-sand)" }}>Expertise</p>
            </div>
            <h2 className="font-display mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.2,
                color: "var(--cb-cream)",
              }}>
              Permanent Make-up, das wie dein eigenes aussieht
            </h2>
            <p className="mb-10"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(250,248,244,0.6)", maxWidth: "46ch" }}>
              Jedes Ergebnis ist absolut natürlich — niemand sieht, dass du Permanent Make-up trägst. Das ist das Ziel jedes einzelnen Termins bei Contour Beauty.
            </p>
            <a href="/kontakt" className="cb-btn-primary"
              style={{ backgroundColor: "var(--cb-cream)", color: "var(--cb-charcoal)", borderColor: "var(--cb-cream)" }}>
              Termin buchen
            </a>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="py-6 px-0"
                  style={{ borderBottom: "1px solid rgba(250,248,244,0.1)" }}>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "3rem", lineHeight: 1, color: "var(--cb-sand)", marginBottom: "0.5rem" }}>
                    {s.value}
                  </p>
                  <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.8125rem", letterSpacing: "0.06em", color: "rgba(250,248,244,0.5)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
