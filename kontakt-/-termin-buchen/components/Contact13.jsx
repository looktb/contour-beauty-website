"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone, BiTime } from "react-icons/bi";

const contacts = [
  {
    icon: BiEnvelope,
    title: "E-Mail",
    subtitle: "Schreib mir jederzeit",
    value: "info@contour-beauty.de",
    href: "mailto:info@contour-beauty.de",
  },
  {
    icon: BiPhone,
    title: "Telefon",
    subtitle: "Mo–Fr 10–18 Uhr",
    value: "+49 (0)40 — auf Anfrage",
    href: "tel:+49",
  },
  {
    icon: BiMap,
    title: "Studio",
    subtitle: "Hamburg",
    value: "Adresse auf Anfrage",
    href: "#",
  },
  {
    icon: BiTime,
    title: "Öffnungszeiten",
    subtitle: "Termine nach Vereinbarung",
    value: "Mo–Sa flexibel",
    href: null,
  },
];

export function Contact13() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-linen)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="cb-divider" />
          <p className="cb-label">Alle Wege</p>
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
          Erreiche mich — so wie es dir passt
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map(({ icon: Icon, title, subtitle, value, href }) => (
            <div key={title} className="py-6 px-0"
              style={{ borderTop: "1px solid rgba(28,25,23,0.12)" }}>
              <div className="mb-4">
                <Icon size={22} style={{ color: "var(--cb-sand)" }} />
              </div>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, fontSize: "1.125rem", color: "var(--cb-charcoal)", marginBottom: "0.25rem" }}>
                {title}
              </p>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.8125rem", color: "var(--cb-muted)", marginBottom: "0.75rem" }}>
                {subtitle}
              </p>
              {href ? (
                <a href={href}
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "var(--cb-charcoal)", textDecoration: "none", borderBottom: "1px solid rgba(28,25,23,0.2)" }}>
                  {value}
                </a>
              ) : (
                <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "var(--cb-charcoal)" }}>
                  {value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
