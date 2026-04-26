"use client";

import React from "react";

const gallery = [
  { src: "/images/pmu-1.png", label: "Powder Brows" },
  { src: "/images/treatment-1.png", label: "Microblading" },
  { src: "/images/about-2.png", label: "Lippenpigmentierung" },
  { src: "/images/gallery-1.png", label: "Kombiniert" },
];

export function Layout13() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-linen)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Ergebnisse</p>
            </div>
            <h2 className="font-display mb-5"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.2,
                color: "var(--cb-charcoal)",
              }}>
              Jedes Gesicht erzählt eine andere Geschichte
            </h2>
            <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--cb-muted)", maxWidth: "46ch" }}>
              So sieht Permanent Make-up aus, wenn es richtig gemacht wird — natürlich, individuell, zeitlos.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/kontakt" className="cb-btn-primary">Termin buchen</a>
            <a href="#techniken" className="cb-btn-secondary">Techniken ansehen</a>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((img) => (
            <div key={img.src} className="group">
              <div className="cb-img-zoom relative" style={{ borderRadius: "2px", overflow: "hidden" }}>
                <img src={img.src} alt={img.label} className="w-full object-cover" style={{ aspectRatio: "3/4" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(13,11,9,0.6), transparent)" }}>
                  <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 400, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cb-cream)" }}>
                    {img.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
