"use client";

import React, { useState } from "react";

const faqs = [
  { q: "Wie lange hält Permanent Make-up?", a: "Zwischen 1 und 3 Jahren, je nach Hauttyp und Pflege. Die Farbe verblasst allmählich — kein plötzliches Verschwinden. Ein Auffrischtermin nach ca. einem Jahr hält die Ergebnisse frisch." },
  { q: "Tut es weh?", a: "Nein. Wir verwenden eine hochwertige Betäubungscreme, die den Bereich vollständig unempfindlich macht. Du spürst leichten Druck, aber keinen Schmerz. Die meisten Kundinnen entspannen sich während der Behandlung." },
  { q: "Was ist der Unterschied zwischen Powder Brows und Microblading?", a: "Powder Brows erzeugen einen sanften, gepuderten Look mit gleichmäßiger Farbfüllung — ideal für alle Hauttypen. Microblading zeichnet haarfeine Striche und wirkt besonders natürlich, hält aber etwas kürzer und funktioniert besser bei trockener Haut." },
  { q: "Wie läuft der Nachsorgeprozess ab?", a: "Nach der Behandlung erhältst du genaue Pflegeanweisungen. Die Heilungsphase dauert ca. 7–14 Tage. Nach 4–6 Wochen findet ein Auffrischtermin statt — dieser ist im Preis inbegriffen." },
  { q: "Kann ich Permanent Make-up entfernen lassen?", a: "Ja. Wir bieten auch PMU-Removal an. Je nach Pigmenttiefe und Farbe sind mehrere Sitzungen nötig. Ein Beratungsgespräch klärt, was für dich möglich ist." },
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
              <p className="cb-label">FAQ</p>
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
              Häufige Fragen
            </h2>
            <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--cb-muted)" }}>
              Noch Fragen? Wir sind für dich da.
            </p>
            <a href="/kontakt" className="cb-btn-secondary mt-8 inline-flex">Schreib uns</a>
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
