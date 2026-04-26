"use client";

import React from "react";

export function Layout427() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: image + story */}
          <div>
            <div className="cb-img-zoom mb-10" style={{ borderRadius: "2px", overflow: "hidden" }}>
              <img src="/images/hero-2.png" alt="Contour Beauty Geschichte"
                className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Geschichte</p>
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
              Wie Contour Beauty entstand
            </h2>
            <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.85, color: "var(--cb-muted)", maxWidth: "50ch" }}>
              Ich glaube, dass echte Schönheit nicht von außen kommt — sie entsteht, wenn du dich in deiner Haut wohlfühlst und dein bestes Selbst zeigen kannst. Contour Beauty ist meine Antwort auf die Frage, wie ich das für andere möglich machen kann.
            </p>
            <p className="mt-5" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.85, color: "var(--cb-muted)", maxWidth: "50ch" }}>
              Was als persönliche Leidenschaft begann, ist heute ein Studio, in dem Frauen aus Hamburg und darüber hinaus ihre Haut neu kennenlernen — mit Wissenschaft, Handwerk und echtem Verständnis.
            </p>
          </div>

          {/* Right: image + philosophy */}
          <div className="flex flex-col justify-end h-full">
            <div className="cb-img-zoom mb-10 mt-auto" style={{ borderRadius: "2px", overflow: "hidden" }}>
              <img src="/images/about-2.png" alt="Contour Beauty Philosophie"
                className="w-full object-cover" style={{ aspectRatio: "3/4" }} />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Philosophie</p>
            </div>
            <blockquote
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "1.375rem",
                lineHeight: 1.6,
                color: "var(--cb-charcoal)",
              }}>
              „Jede Kundin verdient volle Aufmerksamkeit — nicht als Typ, sondern als Mensch."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
