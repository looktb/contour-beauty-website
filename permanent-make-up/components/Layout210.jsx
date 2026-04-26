"use client";

import React from "react";

export function Layout210() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-linen)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
            <img src="/images/skin-1.png" alt="Hautbehandlungen und Permanent Make-up"
              className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Die Kombination</p>
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
              Viele Kundinnen entdecken beide Welten
            </h2>
            <p className="mb-6"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--cb-muted)", maxWidth: "46ch" }}>
              Sie kommen für perfekte Brauen und bleiben für strahlende Haut. Oder umgekehrt. Permanent Make-up und Reviderm-Behandlungen ergänzen sich natürlich — beide machen dich zu deiner besten Version.
            </p>
            <ul className="space-y-3 mb-8">
              {["Ganzheitlicher Ansatz", "Abgestimmte Behandlungspläne", "Maximale Wirkung"].map((item) => (
                <li key={item} className="flex items-center gap-3"
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--cb-charcoal)" }}>
                  <span className="block w-4 h-px flex-shrink-0" style={{ backgroundColor: "var(--cb-sand)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="/hautbehandlungen" className="cb-btn-secondary">Hautbehandlungen</a>
              <a href="/kontakt" className="cb-btn-primary">Termin buchen</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
