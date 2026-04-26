"use client";

import React from "react";

const steps = [
  { number: "01", title: "Erstberatung", description: "Wir besprechen deine Wünsche, analysieren dein Gesicht und finden gemeinsam die perfekte Technik und Farbe." },
  { number: "02", title: "Anzeichnen", description: "Die Form wird präzise vorgezeichnet und gemeinsam freigegeben — erst wenn du begeistert bist, beginnen wir." },
  { number: "03", title: "Behandlung", description: "Sanft, präzise, entspannt. Betäubungscreme sorgt für einen angenehmen Ablauf. Die eigentliche Behandlung dauert 60–90 Minuten." },
  { number: "04", title: "Nachsorge", description: "Du bekommst klare Anweisungen für die Heilungsphase und einen Auffrischtermin nach ca. 4 Wochen." },
];

export function Layout463() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" />
          <p className="cb-label">Ablauf</p>
        </div>
        <h2 className="font-display mb-14"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.2,
            color: "var(--cb-charcoal)",
            maxWidth: "22ch",
          }}>
          Was dich bei deinem Termin erwartet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s) => (
            <div key={s.number} className="relative pl-6"
              style={{ borderLeft: "1px solid rgba(28,25,23,0.15)" }}>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.12em", color: "var(--cb-sand)" }}>
                {s.number}
              </span>
              <h3 className="mt-2 mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, fontSize: "1.25rem", color: "var(--cb-charcoal)" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.75, color: "var(--cb-muted)" }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="https://tidycal.com/contour-beauty/beratungstermin"
            data-tidycal-path="contour-beauty/beratungstermin"
            className="cb-btn-primary"
          >
            Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
