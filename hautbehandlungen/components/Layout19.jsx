"use client";

import React from "react";

export function Layout19() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Hautanalyse</p>
            </div>
            <h2 className="font-display mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.2,
                color: "var(--cb-charcoal)",
              }}>
              Wir sehen deine Haut, nicht die Norm
            </h2>
            <p className="mb-6"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--cb-muted)", maxWidth: "48ch" }}>
              Jede Haut erzählt eine Geschichte. Bevor wir behandeln, verstehen wir sie. Eine genaue Analyse zeigt, was deine Haut wirklich braucht — nicht, was der Trend verspricht.
            </p>
            <ul className="space-y-3 mb-8">
              {["Hauttyp präzise erkennen", "Problemzonen verstehen", "Persönlichen Behandlungsplan entwickeln"].map((item) => (
                <li key={item} className="flex items-center gap-3"
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--cb-charcoal)" }}>
                  <span className="block w-4 h-px flex-shrink-0" style={{ backgroundColor: "var(--cb-sand)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://tidycal.com/contour-beauty/observ-hautanalyse"
              data-tidycal-path="contour-beauty/observ-hautanalyse"
              className="cb-btn-primary"
            >
              Termin vereinbaren
            </a>
          </div>
          <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
            <img src="/images/hero-1.png" alt="Hautanalyse bei Contour Beauty"
              className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
