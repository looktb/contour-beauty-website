"use client";

import React from "react";

export function Testimonial13() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
            <img src="/images/testimonial-1.png" alt="Kundenstimme" className="w-full object-cover" style={{ aspectRatio: "1/1" }} />
          </div>
          <div>
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "var(--cb-sand)", fontSize: "0.875rem" }}>★</span>
              ))}
            </div>
            <blockquote className="font-display mb-8"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.375rem, 3vw, 2rem)",
                lineHeight: 1.5,
                color: "var(--cb-charcoal)",
              }}>
              „Meine Haut hat sich verändert, aber ich habe mich auch verändert. Ich vertraue ihr jetzt wieder."
            </blockquote>
            <div style={{ borderTop: "1px solid rgba(28,25,23,0.1)", paddingTop: "1.5rem" }}>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "var(--cb-charcoal)" }}>Sarah M.</p>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.8125rem", color: "var(--cb-muted)" }}>Nach drei Reviderm-Behandlungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
