"use client";

import React from "react";
import { BookingButton } from "../../src/components/BookingButton";

const treatments = [
  {
    number: "01",
    title: "Microdermabrasion",
    description: "Sanftes Schleifen entfernt tote Zellen, verfeinert das Hautbild und weckt die natürliche Ausstrahlung.",
    image: "/images/skin-1.png",
  },
  {
    number: "02",
    title: "Needling",
    description: "Feine Nadeln stimulieren die körpereigene Kollagenproduktion und geben der Haut neue Kraft und Fülle.",
    image: "/images/skin-2.png",
  },
  {
    number: "03",
    title: "Detox & Tiefenreinigung",
    description: "Intensive Reinigung befreit die Poren, reguliert Talgproduktion und lässt die Haut wieder frei atmen.",
    image: "/images/ai-aquafacial-treatment.jpg",
  },
  {
    number: "04",
    title: "Feuchtigkeitsaufbau",
    description: "Hochdosierte Hydration füllt Feuchtigkeitsdepots auf und macht die Haut geschmeidig und lebendig.",
    image: "/images/testimonial-1.png",
  },
];

export function Layout300() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-linen)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" />
          <p className="cb-label">Behandlungsangebot</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="font-display"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              color: "var(--cb-charcoal)",
              maxWidth: "20ch",
            }}>
            Was Reviderm für deine Haut tun kann
          </h2>
          <BookingButton
            label="Alle Behandlungen buchen"
            className="cb-btn-secondary flex-shrink-0"
            variants={[
              { label: "Microneedling — Gesicht & Hals", path: "microneedling-perfection-gesicht-and-hals" },
              { label: "Microneedling — Gesicht, Hals & Dekolleté", path: "microneedling-perfection-gesicht-hals-dekollete" },
              { label: "Anti-Aging Ritual — Gesicht & Hals", path: "anti-aging-ritual-timeless-contour-gesicht-and-hals" },
              { label: "Anti-Aging Ritual — Gesicht, Hals & Dekolleté", path: "anti-aging-ritual-timeless-contour-gesicht-hals-dekollete" },
              { label: "Hydra Calming Facial — Gesicht & Hals", path: "hydra-calming-luxury-facial-fur-trockene-haut-gesicht-and-hals" },
              { label: "Hydra Calming Facial — Gesicht, Hals & Dekolleté", path: "hydra-calming-luxury-facial-fur-trockene-haut-gesicht-hals-dekollete" },
              { label: "Glow Solution — Gesicht & Hals", path: "glow-solution-reverse-needling-therapy-apparative-kosmetik" },
              { label: "Glow Solution — Gesicht, Hals & Dekolleté", path: "glow-solution-reverse-needling-therapy-apparative-kosmetik-2" },
              { label: "Clarifying Facial Teenager", path: "clarifying-facial-teenager-haut-pure-balance" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t) => (
            <div key={t.number} className="group">
              <div className="cb-img-zoom mb-5" style={{ borderRadius: "2px", overflow: "hidden" }}>
                <img src={t.image} alt={t.title} className="w-full object-cover" style={{ aspectRatio: "3/4" }} />
              </div>
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--cb-sand)" }}>
                {t.number}
              </span>
              <h3 className="mt-2 mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, fontSize: "1.375rem", color: "var(--cb-charcoal)" }}>
                {t.title}
              </h3>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.8125rem", lineHeight: 1.75, color: "var(--cb-muted)" }}>
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
