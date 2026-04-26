"use client";

import React from "react";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";

export function Footer9() {
  return (
    <footer style={{ backgroundColor: "var(--cb-charcoal)", color: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(250,248,244,0.1)" }}>
          <div className="lg:col-span-4">
            <a href="/" className="block mb-6">
              <img src="/images/logo.png" alt="Contour Beauty" className="h-8 w-auto"
                style={{ filter: "brightness(0) invert(1)" }} />
            </a>
            <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.8, color: "rgba(250,248,244,0.55)", maxWidth: "30ch" }}>
              Reviderm-Hautbehandlungen und Permanent Make-up in Hamburg.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/contourbeautyhh/" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(250,248,244,0.6)" }}><BiLogoInstagram size={20} /></a>
              <a href="#" style={{ color: "rgba(250,248,244,0.6)" }}><BiLogoFacebookCircle size={20} /></a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-5" style={{ fontFamily: "Jost, sans-serif", fontWeight: 500, fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,248,244,0.4)" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {[["Hautbehandlungen", "/hautbehandlungen"], ["Permanent Make-up", "/permanent-make-up"], ["Über uns", "/über-uns"], ["Kontakt", "/kontakt"]].map(([l, h]) => (
                <li key={h}><a href={h} style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "rgba(250,248,244,0.6)", textDecoration: "none" }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="mb-5" style={{ fontFamily: "Jost, sans-serif", fontWeight: 500, fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,248,244,0.4)" }}>
              Kontakt
            </h4>
            <address style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.9, color: "rgba(250,248,244,0.6)", fontStyle: "normal" }}>
              Contour Beauty Hamburg<br />Hamburg, Deutschland
            </address>
            <a href="/kontakt" className="cb-btn-light mt-6 inline-flex"
              style={{ fontSize: "0.75rem", padding: "0.625rem 1.5rem" }}>Termin buchen</a>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.75rem", color: "rgba(250,248,244,0.3)" }}>
            © 2025 Contour Beauty Hamburg. Alle Rechte vorbehalten.
          </p>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontWeight: 300, fontSize: "0.875rem", color: "rgba(250,248,244,0.25)" }}>
            Schönheit, die bleibt.
          </p>
        </div>
      </div>
    </footer>
  );
}
