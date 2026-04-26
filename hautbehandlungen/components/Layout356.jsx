"use client";

import React, { useState } from "react";

const steps = [
  {
    number: "01",
    label: "Beratung",
    title: "Wir hören dir zu und schauen genau hin",
    description: "Du kommst an, wir nehmen uns Zeit. Keine Eile, keine Vorurteile. Wir sehen deine Haut wie sie ist und sprechen darüber, was du dir wünschst — und was realistisch erreichbar ist.",
    image: "/images/skin-1.png",
  },
  {
    number: "02",
    label: "Behandlung",
    title: "Präzision, die du spürst",
    description: "Jede Behandlung ist auf deine Haut abgestimmt. Wir verwenden ausschließlich Reviderm-Produkte und erprobte Techniken, die klinisch getestet sind. Deine Haut ist in besten Händen.",
    image: "/images/treatment-2.png",
  },
  {
    number: "03",
    label: "Nachsorge",
    title: "Wir begleiten dich auch danach",
    description: "Nach der Behandlung bekommst du klare Empfehlungen für zu Hause. Wir sind bei Fragen für dich erreichbar und freuen uns, die Veränderung mit dir zu verfolgen.",
    image: "/images/hero-2.png",
  },
];

export function Layout356() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-linen)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" />
          <p className="cb-label">Wie es funktioniert</p>
        </div>
        <h2 className="font-display mb-14"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.2,
            color: "var(--cb-charcoal)",
            maxWidth: "20ch",
          }}>
          Dein Weg zur besseren Haut
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Step tabs */}
          <div className="lg:col-span-4 space-y-1">
            {steps.map((s, i) => (
              <button key={s.number} onClick={() => setActiveStep(i)}
                className="w-full text-left py-5 px-6 transition-all duration-300 group"
                style={{
                  backgroundColor: activeStep === i ? "var(--cb-cream)" : "transparent",
                  borderLeft: `2px solid ${activeStep === i ? "var(--cb-sand)" : "transparent"}`,
                }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.12em", color: "var(--cb-sand)" }}>
                  {s.number}
                </span>
                <p style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: activeStep === i ? 500 : 300,
                  fontSize: "0.875rem",
                  color: activeStep === i ? "var(--cb-charcoal)" : "var(--cb-muted)",
                  marginTop: "0.25rem",
                }}>
                  {s.label}
                </p>
              </button>
            ))}
          </div>

          {/* Active content */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-display mb-5"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.25,
                  color: "var(--cb-charcoal)",
                }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--cb-muted)" }}>
                {step.description}
              </p>
              <a
                href="https://tidycal.com/contour-beauty/first-time-treatment"
                data-tidycal-path="contour-beauty/first-time-treatment"
                className="cb-btn-primary mt-8 inline-flex"
              >
                Termin buchen
              </a>
            </div>
            <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
              <img key={activeStep} src={step.image} alt={step.title}
                className="w-full object-cover anim-fade" style={{ aspectRatio: "4/5" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
