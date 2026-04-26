"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Wie läuft eine erste Hautbehandlung bei Contour Beauty ab?",
    answer:
      "Zu Beginn führen wir immer eine gründliche Hautanalyse durch. Wir schauen uns deine Haut genau an, besprechen deine Anliegen und erstellen gemeinsam einen individuellen Behandlungsplan. Erst dann beginnen wir mit der eigentlichen Behandlung — so stellen wir sicher, dass das Ergebnis wirklich zu dir passt.",
  },
  {
    question: "Was ist der Unterschied zwischen Reviderm und einem normalen Facial?",
    answer:
      "Reviderm ist Schweizer Dermokosmetik, die von Dermatologen entwickelt wurde. Die Wirkstoffe sind klinisch erprobt und dringen tiefer in die Haut ein als herkömmliche Kosmetika. Das Ergebnis ist messbar und nachhaltig — kein oberflächlicher Glow, sondern echte Hautverbesserung.",
  },
  {
    question: "Wie lange hält Permanent Make-up und tut es weh?",
    answer:
      "Permanent Make-up hält je nach Technik und Hauttyp 1 bis 3 Jahre. Die Behandlung ist dank Betäubungscreme sehr angenehm — die meisten Kundinnen beschreiben es als leichtes Kribbeln. Powder Brows sind oft noch angenehmer als Microblading.",
  },
  {
    question: "Wie viele Aquafacial-Behandlungen brauche ich, um Ergebnisse zu sehen?",
    answer:
      "Nach der ersten Behandlung ist der Effekt bereits sichtbar — die Haut strahlt sofort mehr. Für nachhaltige Verbesserungen empfehlen wir eine Kur von 4 bis 6 Behandlungen im monatlichen Abstand.",
  },
  {
    question: "Kann ich während der Schwangerschaft behandelt werden?",
    answer:
      "Während der Schwangerschaft empfehlen wir keine intensiven Wirkstoffbehandlungen oder Permanent Make-up. Sanfte Pflegebehandlungen sind jedoch möglich. Sprich uns einfach an — wir finden gemeinsam eine passende Option.",
  },
];

export function Faq2() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="py-20 md:py-28 px-8 md:px-12 lg:px-16"
      style={{ backgroundColor: "var(--cb-linen)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Häufige Fragen</p>
            </div>
            <h2
              className="font-display mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
                color: "var(--cb-charcoal)",
              }}
            >
              Alles, was du wissen möchtest
            </h2>
            <p
              style={{
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "var(--cb-muted)",
              }}
            >
              Noch offene Fragen? Wir sind gerne für dich da.
            </p>
            <a href="/kontakt" className="cb-btn-secondary mt-8 inline-flex">
              Schreib uns
            </a>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderBottom: "1px solid rgba(28,25,23,0.1)" }}
              >
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span
                    style={{
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 400,
                      fontSize: "0.9375rem",
                      color: "var(--cb-charcoal)",
                      flex: 1,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: "var(--cb-sand)",
                      fontSize: "1rem",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div className="pb-6">
                    <p
                      style={{
                        fontFamily: "Jost, sans-serif",
                        fontWeight: 300,
                        fontSize: "0.9rem",
                        lineHeight: 1.8,
                        color: "var(--cb-muted)",
                        maxWidth: "62ch",
                      }}
                    >
                      {faq.answer}
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
