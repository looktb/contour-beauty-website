"use client";

import React from "react";

export function Cta31() {
  return (
    <section className="py-20 md:py-24 px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cb-linen)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="cb-label mb-3" style={{ color: "var(--cb-warm)" }}>Folg uns</p>
            <h2 className="font-display"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                color: "var(--cb-charcoal)",
              }}>
              Contour Beauty auf Instagram
            </h2>
            <p className="mt-3"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--cb-muted)" }}>
              Ergebnisse, Einblicke und Inspiration — direkt aus dem Studio.
            </p>
          </div>
          <a href="https://www.instagram.com/contourbeautyhh/" target="_blank" rel="noopener noreferrer"
            className="cb-btn-primary flex-shrink-0">
            @contourbeautyhh
          </a>
        </div>
      </div>
    </section>
  );
}
