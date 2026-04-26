"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone, BiLogoInstagram, BiLogoFacebookCircle } from "react-icons/bi";

const contacts = [
  {
    icon: BiPhone,
    title: "Telefon & WhatsApp",
    subtitle: "Persönliche Beratung",
    value: "0172 410 66 46",
    href: "tel:+491724106646",
  },
  {
    icon: BiEnvelope,
    title: "E-Mail",
    subtitle: "Schreib mir jederzeit",
    value: "mail@contour-beauty.de",
    href: "mailto:mail@contour-beauty.de",
  },
  {
    icon: BiMap,
    title: "Studio",
    subtitle: "Geesthacht bei Hamburg",
    value: "An der Promenade 3, 21502 Geesthacht",
    href: "https://maps.google.com/?q=An+der+Promenade+3,+21502+Geesthacht",
  },
  {
    icon: BiLogoInstagram,
    title: "Instagram",
    subtitle: "Aktuelle Ergebnisse & Angebote",
    value: "@contour_beauty.de",
    href: "https://www.instagram.com/contour_beauty.de/",
  },
];

export function Contact13() {
  return (
    <>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ fontFamily: "Jost, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "var(--cb-charcoal)", textDecoration: "none", borderBottom: "1px solid rgba(28,25,23,0.2)" }}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div style={{ borderRadius: "2px", overflow: "hidden", height: "420px" }}>
            <iframe
              title="Contour Beauty Standort"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2FsD2JOSrFbAD3BnFvlw7XVDxJDvVqg8&q=C9J7%2B3Q+Geesthacht&zoom=17"
            />
          </div>
          <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.75rem", color: "var(--cb-muted)", marginTop: "0.75rem" }}>
            An der Promenade 3 · 21502 Geesthacht bei Hamburg
          </p>
        </div>
      </section>
    </>
  );
}
