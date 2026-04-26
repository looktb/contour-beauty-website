"use client";

import React, { useState } from "react";

const tidycalSlug = {
  "powder-brows": "powderbrows",
  microblading: "microblading",
  lips: "pmu-lippen",
};

const techniques = [
  {
    id: "powder-brows",
    label: "Powder Brows",
    title: "Sanft, weich, zeitlos",
    description:
      "Powder Brows erzeugen einen gepuderten, natürlichen Look, der von dezent bis definiert reicht. Die Farbe wird gleichmäßig aufgetragen — ideal für alle Hauttypen, besonders für öligere Haut.",
    benefits: ["Natürlicher Tageblick", "Für alle Hauttypen", "Hält 2–3 Jahre"],
    image: "/images/pmu/powderbrows.jpg",
  },
  {
    id: "microblading",
    label: "Microblading",
    title: "Haargenaue Präzision",
    description:
      "Microblading zeichnet einzelne, haarfeine Striche ins Hautbild und schafft so täuschend echte Brauen. Der Effekt ist absolut natürlich — niemand sieht, dass es Permanent Make-up ist.",
    benefits: ["Hyperrealistisch", "Ideal für dünne Brauen", "Hält 1–2 Jahre"],
    image: "/images/pmu/powderbrows-2.jpg",
  },
  {
    id: "lips",
    label: "Lippenpigmentierung",
    title: "Definition, die verführt",
    description:
      "Lippenpigmentierung gibt deinen Lippen mehr Volumen, klarere Konturen und eine Farbe, die bleibt — morgens, abends und dazwischen. Ganz ohne Nachziehen.",
    benefits: ["Mehr Definition", "Natürliches Volumen", "Hält 2–4 Jahre"],
    image: "/images/pmu/lippen.jpg",
  },
];

export function Layout502() {
  const [active, setActive] = useState("powder-brows");
  const t = techniques.find((t) => t.id === active);

  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" />
          <p className="cb-label">Techniken</p>
        </div>
        <h2 className="font-display mb-10"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.2,
            color: "var(--cb-charcoal)",
            maxWidth: "20ch",
          }}>
          Drei Wege zu deinen perfekten Brauen
        </h2>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-12"
          style={{ borderBottom: "1px solid rgba(28,25,23,0.1)", paddingBottom: "0" }}>
          {techniques.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className="px-6 py-3 transition-all duration-300"
              style={{
                fontFamily: "Jost, sans-serif",
                fontWeight: active === t.id ? 500 : 300,
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: active === t.id ? "var(--cb-charcoal)" : "var(--cb-muted)",
                marginBottom: "-1px",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: `2px solid ${active === t.id ? "var(--cb-sand)" : "transparent"}`,
                cursor: "pointer",
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h3 className="font-display mb-5"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                lineHeight: 1.25,
                color: "var(--cb-charcoal)",
              }}>
              {t.title}
            </h3>
            <p className="mb-8"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--cb-muted)", maxWidth: "48ch" }}>
              {t.description}
            </p>
            <ul className="space-y-3 mb-10">
              {t.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3"
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--cb-charcoal)" }}>
                  <span className="block w-4 h-px flex-shrink-0" style={{ backgroundColor: "var(--cb-sand)" }} />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={`https://tidycal.com/contour-beauty/${tidycalSlug[active]}`}
              data-tidycal-path={`contour-beauty/${tidycalSlug[active]}`}
              className="cb-btn-primary"
            >
              Jetzt buchen
            </a>
          </div>
          <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
            <img key={active} src={t.image} alt={t.title}
              className="w-full object-cover anim-fade" style={{ aspectRatio: "4/5" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
