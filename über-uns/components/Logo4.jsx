"use client";

import React from "react";

const certifications = [
  { name: "Reviderm", subtitle: "Zertifizierte Spezialistin" },
  { name: "Phi Academy", subtitle: "Permanent Make-up" },
  { name: "IONTO", subtitle: "Aquafacial Certified" },
  { name: "AZAV", subtitle: "Zertifizierter Ausbildungsbetrieb" },
];

export function Logo4() {
  return (
    <section className="py-16 md:py-20 px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cb-linen)", borderTop: "1px solid rgba(28,25,23,0.07)", borderBottom: "1px solid rgba(28,25,23,0.07)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0">
          <p className="flex-shrink-0 md:w-48"
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cb-warm)" }}>
            Zertifizierungen & Partner
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 lg:gap-16 md:border-l md:pl-12"
            style={{ borderColor: "rgba(28,25,23,0.1)" }}>
            {certifications.map((c) => (
              <div key={c.name}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500, fontSize: "1.125rem", color: "var(--cb-charcoal)", letterSpacing: "0.04em" }}>
                  {c.name}
                </p>
                <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.75rem", color: "var(--cb-muted)", marginTop: "2px" }}>
                  {c.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
