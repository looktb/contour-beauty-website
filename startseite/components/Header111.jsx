"use client";

import React from "react";

export function Header111() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/ai-salon-interior.jpg"
          className="w-full h-full object-cover object-center anim-scale"
          alt="Contour Beauty — Hautpflege in Hamburg"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,11,9,0.75) 0%, rgba(13,11,9,0.3) 50%, rgba(13,11,9,0.1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <p className="cb-label mb-5 anim-fade-up" style={{ color: "var(--cb-sand)" }}>
            Contour Beauty · Hamburg
          </p>

          <h1
            className="font-display anim-fade-up anim-delay-1 mb-8"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.05,
              color: "var(--cb-cream)",
              maxWidth: "14ch",
            }}
          >
            Schönheit,<br />die bleibt.
          </h1>

          <p
            className="anim-fade-up anim-delay-2 mb-10"
            style={{
              fontFamily: "Jost, sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              letterSpacing: "0.03em",
              color: "rgba(250,248,244,0.75)",
              maxWidth: "38ch",
            }}
          >
            Reviderm-Hautbehandlungen und Permanent Make-up —
            individuell, wissenschaftlich fundiert, in Hamburg.
          </p>

          <div className="flex flex-wrap gap-4 anim-fade-up anim-delay-3">
            <a href="/kontakt" className="cb-btn-primary">
              Termin buchen
            </a>
            <a href="/hautbehandlungen" className="cb-btn-light">
              Behandlungen entdecken
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 md:right-12 lg:right-16 flex items-center gap-3 anim-fade anim-delay-4"
        style={{ color: "rgba(250,248,244,0.5)" }}
      >
        <span style={{ fontFamily: "Jost, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <span
          className="block"
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: "rgba(250,248,244,0.3)",
          }}
        />
      </div>
    </section>
  );
}
