"use client";

import React from "react";

export function Layout204() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="cb-img-zoom order-2 lg:order-1" style={{ borderRadius: "2px", overflow: "hidden" }}>
            <img src="/images/about-2.png" alt="Reviderm und Permanent Make-up"
              className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Entdeckung</p>
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
              Viele bleiben nicht nur für die Haut
            </h2>
            <p className="mb-8"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--cb-muted)", maxWidth: "48ch" }}>
              Frauen kommen für Reviderm und entdecken Permanent Make-up. Es ist kein Zufall. Schöne Haut und definierte Augenbrauen sprechen die gleiche Sprache — die Sprache von Selbstvertrauen.
            </p>

            {/* Partner logos placeholder — using elegant text */}
            <div className="flex flex-wrap items-center gap-6 py-2 mb-8"
              style={{ borderTop: "1px solid rgba(28,25,23,0.1)", paddingTop: "1.5rem" }}>
              {["Reviderm", "Phi Academy", "IONTO", "Bollegraaf"].map((brand) => (
                <span key={brand}
                  style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontSize: "0.9375rem", letterSpacing: "0.06em", color: "var(--cb-warm)" }}>
                  {brand}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/permanent-make-up" className="cb-btn-secondary">Permanent Make-up entdecken</a>
              <a href="/kontakt" className="cb-btn-primary">Termin buchen</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
