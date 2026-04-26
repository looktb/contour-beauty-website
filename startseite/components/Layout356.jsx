"use client";

import React from "react";

const services = [
  {
    number: "01",
    label: "Hautanalyse",
    title: "Wir sehen deine Haut, nicht die Norm",
    description:
      "Jede Haut erzählt eine Geschichte. Bevor wir behandeln, verstehen wir sie. Eine präzise Analyse zeigt, was deine Haut wirklich braucht — nicht, was der Trend verspricht.",
    highlights: ["Hauttyp erkennen", "Probleme verstehen", "Behandlungsplan entwickeln"],
    image: "/images/skin-1.png",
    href: "/hautbehandlungen",
  },
  {
    number: "02",
    label: "Reviderm",
    title: "Wissenschaft, die unter die Haut geht",
    description:
      "Schweizer Dermokosmetik, entwickelt von Dermatologen. Reviderm-Behandlungen verbessern Textur, Ton und Vitalität — sichtbar, messbar und nachhaltig.",
    highlights: ["Klinisch getestete Wirkstoffe", "Sichtbare Ergebnisse", "Individuelle Protokolle"],
    image: "/images/treatment-2.png",
    href: "/hautbehandlungen",
  },
  {
    number: "03",
    label: "Aquafacial",
    title: "Die Tiefenreinigung, die deine Haut verdient",
    description:
      "IONTO Aquafacial kombiniert Hydro-Peeling, Ultraschall und Vakuum-Lymphdrainage — für einen sofort strahlenden Teint und langfristige Hautverbesserung.",
    highlights: ["Tiefenreinigung", "Sofortige Ausstrahlung", "Ohne Ausfallzeit"],
    image: "/images/ai-aquafacial-treatment.jpg",
    href: "/hautbehandlungen",
  },
];

export function Layout356() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--cb-cream)" }}>
      {/* Section header */}
      <div className="px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" />
          <p className="cb-label">Unsere Behandlungen</p>
        </div>
        <h2
          className="font-display"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.15,
            color: "var(--cb-charcoal)",
            maxWidth: "20ch",
          }}
        >
          Drei Wege zu deiner besten Haut
        </h2>
      </div>

      {/* Service list */}
      <div className="divide-y" style={{ borderColor: "rgba(28,25,23,0.1)" }}>
        {services.map((service, i) => (
          <div key={service.number} className="px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
            <a href={service.href} className="group block py-10 md:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Number + label */}
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                  <span
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 300,
                      fontSize: "0.8125rem",
                      letterSpacing: "0.1em",
                      color: "var(--cb-sand)",
                    }}
                  >
                    {service.number}
                  </span>
                  <span
                    className="cb-label"
                    style={{ color: "var(--cb-muted)" }}
                  >
                    {service.label}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <h3
                    className="font-display mb-4 group-hover:text-cb-sand transition-colors duration-300"
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      lineHeight: 1.2,
                      color: "var(--cb-charcoal)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 300,
                      fontSize: "0.9375rem",
                      lineHeight: 1.75,
                      color: "var(--cb-muted)",
                      maxWidth: "52ch",
                    }}
                  >
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2"
                        style={{
                          fontFamily: "Jost, sans-serif",
                          fontWeight: 400,
                          fontSize: "0.8125rem",
                          letterSpacing: "0.04em",
                          color: "var(--cb-charcoal)",
                        }}
                      >
                        <span
                          className="block w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--cb-sand)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="lg:col-span-4 lg:col-start-9">
                  <div
                    className="cb-img-zoom aspect-[4/3] overflow-hidden"
                    style={{ borderRadius: "2px" }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex lg:col-span-1 justify-end items-center">
                  <span
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: "var(--cb-sand)", fontSize: "1.25rem" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
