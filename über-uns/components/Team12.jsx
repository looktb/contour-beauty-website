"use client";

import React from "react";

export function Team12() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" />
          <p className="cb-label">Das Team</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-display"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              color: "var(--cb-charcoal)",
              maxWidth: "18ch",
            }}>
            Jede Behandlung ist persönlich
          </h2>
          <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--cb-muted)", maxWidth: "36ch" }}>
            Jede Kundin verdient volle Aufmerksamkeit und echte Fachkompetenz — nicht nur ein Protokoll.
          </p>
        </div>

        {/* Main team member — featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 pb-16"
          style={{ borderBottom: "1px solid rgba(28,25,23,0.1)" }}>
          <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
            <img src="/images/about-1.png" alt="Anna Richter — Gründerin"
              className="w-full object-cover" style={{ aspectRatio: "4/5" }} />
          </div>
          <div>
            <p className="cb-label mb-4" style={{ color: "var(--cb-warm)" }}>Gründerin & Leiterin</p>
            <h3 className="font-display mb-4"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 400,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--cb-charcoal)",
              }}>
              Anna Richter
            </h3>
            <p className="mb-5"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.85, color: "var(--cb-muted)", maxWidth: "46ch" }}>
              Zertifizierte Reviderm-Spezialistin mit über zehn Jahren Erfahrung in Hautbehandlungen und Permanent Make-up. Für Anna ist jede Behandlung ein Gespräch — zwischen ihr und der Haut ihrer Kundin.
            </p>
            <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.85, color: "var(--cb-muted)", maxWidth: "46ch" }}>
              Ausgebildet bei Phi Academy und Reviderm, regelmäßig weitergebildet. Ihr Motto: Weniger versprechen, mehr liefern.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Reviderm Certified", "Phi Academy", "IONTO Aquafacial"].map((cert) => (
                <span key={cert}
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    color: "var(--cb-warm)",
                    border: "1px solid rgba(139,115,85,0.3)",
                    padding: "0.35rem 0.875rem",
                  }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA to join */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
          <div>
            <h4 className="font-display mb-2"
              style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontSize: "1.5rem", color: "var(--cb-charcoal)" }}>
              Wir wachsen
            </h4>
            <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "var(--cb-muted)" }}>
              Du bist ausgebildete Kosmetikerin oder PMU-Artistin und liebst deine Arbeit? Meld dich.
            </p>
          </div>
          <a href="/kontakt" className="cb-btn-secondary flex-shrink-0">Kontakt aufnehmen</a>
        </div>
      </div>
    </section>
  );
}
