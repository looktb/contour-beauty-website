"use client";

import React, { useState } from "react";

const faqs = [
  { q: "Wie schnell bekomme ich einen Termin?", a: "In der Regel innerhalb von 1–2 Wochen. Für dringende Wünsche versuche ich, kurzfristig etwas zu finden. Schreib mir einfach." },
  { q: "Muss ich eine Anzahlung leisten?", a: "Nein. Eine Anzahlung ist nicht erforderlich. Bei Absagen bitte ich um mindestens 24 Stunden Vorankündigung." },
  { q: "Wie lange dauert ein Erstgespräch?", a: "Das Erstgespräch ist kostenfrei und dauert ca. 15–20 Minuten. Wir besprechen deine Haut, deine Wünsche und den möglichen Behandlungsplan." },
  { q: "Kann ich mehrere Behandlungen an einem Tag kombinieren?", a: "Ja, das ist möglich — zum Beispiel ein Aquafacial und eine PMU-Beratung. Wir planen das gemeinsam, damit alles passt." },
];

export function Faq3() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Fragen zum Termin</p>
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
              Das musst du wissen
            </h2>
            <a href="mailto:info@contour-beauty.de" className="cb-btn-secondary mt-8 inline-flex">
              Direkt schreiben
            </a>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(28,25,23,0.1)" }}>
                <button className="w-full text-left py-6 flex items-start justify-between gap-6"
                  onClick={() => setOpen(open === i ? null : i)}>
                  <span style={{ fontFamily: "Jost, sans-serif", fontWeight: 400, fontSize: "0.9375rem", color: "var(--cb-charcoal)", flex: 1 }}>{f.q}</span>
                  <span className="flex-shrink-0 transition-transform duration-300"
                    style={{ color: "var(--cb-sand)", fontSize: "1rem", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                {open === i && (
                  <div className="pb-6">
                    <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.8, color: "var(--cb-muted)", maxWidth: "62ch" }}>
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
