"use client";

import React from "react";

export function Header60() {
  return (
    <section className="relative h-screen min-h-[580px] flex items-end">
      <div className="absolute inset-0">
        <img src="/images/about-1.png" className="w-full h-full object-cover object-center"
          alt="Über Contour Beauty Hamburg" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,11,9,0.78) 0%, rgba(13,11,9,0.25) 60%, rgba(13,11,9,0.05) 100%)" }} />
      </div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 pb-20 md:pb-28">
        <p className="cb-label mb-5" style={{ color: "var(--cb-sand)" }}>Über uns</p>
        <h1 className="font-display"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 1.05,
            color: "var(--cb-cream)",
            maxWidth: "16ch",
          }}>
          Menschen machen den Unterschied.
        </h1>
        <p className="mt-6"
          style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(250,248,244,0.7)", maxWidth: "38ch" }}>
          Contour Beauty ist mehr als ein Studio — es ist ein Ort, an dem echte Schönheit entsteht.
        </p>
      </div>
    </section>
  );
}
