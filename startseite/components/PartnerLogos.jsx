"use client";

import React from "react";

export function PartnerLogos() {
  return (
    <section
      className="py-14 px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cb-linen)", borderTop: "1px solid rgba(28,25,23,0.06)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <p
          className="text-center mb-10"
          style={{
            fontFamily: "Jost, sans-serif",
            fontWeight: 500,
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--cb-muted)",
          }}
        >
          Unsere Partner
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {/* Ionto */}
          <a
            href="https://www.ionto-comed.de"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70 flex items-center gap-3"
            aria-label="IONTO-COMED"
          >
            <img
              src="/images/partner/ionto.png"
              alt="IONTO-COMED Aquafacial"
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* Reviderm */}
          <a
            href="https://www.reviderm.com/shop/institute/12678"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="Reviderm Shop"
          >
            <img
              src="/images/partner/reviderm-logo.svg"
              alt="Reviderm"
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
