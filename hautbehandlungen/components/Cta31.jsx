"use client";

import React from "react";

export function Cta31() {
  return (
    <section className="relative py-24 md:py-32 px-8 md:px-12 lg:px-16 overflow-hidden"
      style={{ backgroundColor: "var(--cb-charcoal)" }}>
      <div className="absolute inset-0 opacity-15">
        <img src="/images/pmu-2.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="max-w-2xl">
          <p className="cb-label mb-6" style={{ color: "var(--cb-sand)" }}>Bereit?</p>
          <h2 className="font-display mb-6"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--cb-cream)",
            }}>
            Starte jetzt deine Hautreise
          </h2>
          <p className="mb-10"
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(250,248,244,0.6)", maxWidth: "42ch" }}>
            Buche deinen ersten Termin und erlebe den Unterschied, den echte Hautpflege macht.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/kontakt" className="cb-btn-primary"
              style={{ backgroundColor: "var(--cb-cream)", color: "var(--cb-charcoal)", borderColor: "var(--cb-cream)" }}>
              Termin buchen
            </a>
            <a href="/permanent-make-up" className="cb-btn-light">Permanent Make-up</a>
          </div>
        </div>
      </div>
    </section>
  );
}
