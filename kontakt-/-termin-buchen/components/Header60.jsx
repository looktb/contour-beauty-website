"use client";

import React from "react";

export function Header60() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cb-charcoal)" }}>
      <div className="max-w-[1440px] mx-auto">
        <p className="cb-label mb-5" style={{ color: "var(--cb-sand)" }}>Kontakt & Termin</p>
        <h1 className="font-display"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            lineHeight: 1.08,
            color: "var(--cb-cream)",
            maxWidth: "16ch",
          }}>
          Lass uns ins Gespräch kommen.
        </h1>
        <p className="mt-6"
          style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(250,248,244,0.65)", maxWidth: "42ch" }}>
          Buche deinen Termin, stelle uns eine Frage oder schau einfach vorbei — wir freuen uns, von dir zu hören.
        </p>
      </div>
    </section>
  );
}
