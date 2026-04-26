"use client";

import React, { useState } from "react";

export function Cta2() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="py-20 md:py-28 px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cb-cream)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Newsletter</p>
            </div>
            <h2
              className="font-display mb-5"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                color: "var(--cb-charcoal)",
              }}
            >
              Bleibe informiert und inspiriert
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "var(--cb-muted)",
                maxWidth: "40ch",
              }}
            >
              Exklusive Einblicke, saisonale Pflegetipps und Neuigkeiten aus
              dem Studio — direkt in dein Postfach.
            </p>

            {submitted ? (
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "1.125rem",
                  color: "var(--cb-warm)",
                }}
              >
                Danke — wir melden uns bald bei dir. ✦
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  placeholder="deine@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    padding: "0.75rem 1.25rem",
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--cb-charcoal)",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(28,25,23,0.2)",
                    outline: "none",
                    letterSpacing: "0.02em",
                  }}
                />
                <button type="submit" className="cb-btn-primary flex-shrink-0">
                  Anmelden
                </button>
              </form>
            )}

            <p
              className="mt-3"
              style={{
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: "0.75rem",
                color: "var(--cb-muted)",
              }}
            >
              Kein Spam. Jederzeit abbestellbar.{" "}
              <a href="#" className="underline">Datenschutz</a>
            </p>
          </div>

          {/* Image */}
          <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
            <img
              src="/images/ai-skincare-products.jpg"
              alt="Contour Beauty Newsletter"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
