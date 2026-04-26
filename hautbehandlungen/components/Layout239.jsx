"use client";

import React from "react";

const reasons = [
  {
    title: "Technologie, die funktioniert",
    description: "Reviderm ist Schweizer Präzision, entwickelt von Dermatologen — nicht von Marketing. Jedes Produkt hat einen klinischen Hintergrund.",
    image: "/images/treatment-1.png",
  },
  {
    title: "Ergebnisse, die sichtbar sind",
    description: "Du siehst Veränderungen nach wenigen Wochen. Nicht morgen, aber bald — und sie halten an. Das ist der Unterschied zu oberflächlicher Kosmetik.",
    image: "/images/pmu-1.png",
  },
  {
    title: "Haut, die sich selbst kennt",
    description: "Wir bauen deine Hautgesundheit auf, nicht nur die Oberfläche. Das ist nachhaltige Pflege — von innen nach außen.",
    image: "/images/about-1.png",
  },
];

export function Layout239() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-charcoal)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" style={{ backgroundColor: "var(--cb-sand)" }} />
          <p className="cb-label" style={{ color: "var(--cb-sand)" }}>Warum Reviderm</p>
        </div>
        <h2 className="font-display mb-4"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.2,
            color: "var(--cb-cream)",
            maxWidth: "22ch",
          }}>
          Reviderm arbeitet, weil es ehrlich ist
        </h2>
        <p className="mb-16"
          style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(250,248,244,0.6)", maxWidth: "48ch" }}>
          Keine Versprechen, die nicht halten. Nur bewährte Technologie und die Erfahrung einer Frau, die ihre Arbeit liebt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((r, i) => (
            <div key={r.title}>
              <div className="cb-img-zoom mb-6" style={{ borderRadius: "2px", overflow: "hidden" }}>
                <img src={r.image} alt={r.title} className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              </div>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.12em", color: "var(--cb-sand)" }}>
                0{i + 1}
              </span>
              <h3 className="mt-2 mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, fontSize: "1.375rem", color: "var(--cb-cream)" }}>
                {r.title}
              </h3>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(250,248,244,0.55)" }}>
                {r.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="https://tidycal.com/contour-beauty/first-time-treatment"
            data-tidycal-path="contour-beauty/first-time-treatment"
            className="cb-btn-primary"
            style={{ backgroundColor: "var(--cb-cream)", color: "var(--cb-charcoal)", borderColor: "var(--cb-cream)" }}
          >
            Termin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
