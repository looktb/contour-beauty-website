"use client";

import React, { useState, useEffect } from "react";

const fallback = [
  {
    quote: "Ich habe viele Studios ausprobiert, aber Contour Beauty ist etwas anderes. Das Ergebnis nach drei Reviderm-Behandlungen war besser als alles, was ich zuvor erlebt hatte. Meine Haut sieht aus wie Porzellan.",
    name: "Mia K.",
    detail: "Reviderm-Kundin seit 2023",
    stars: 5,
  },
  {
    quote: "Die Powder Brows von Contour Beauty haben mein Gesicht verändert. Nicht dramatisch — genau richtig. Natürlich, präzise und absolut zeitlos. Ich bekomme ständig Komplimente.",
    name: "Sarah L.",
    detail: "Permanent Make-up · Powder Brows",
    stars: 5,
  },
  {
    quote: "Das Aquafacial war der Beginn meiner neuen Hautpflegeroutine. Nach der ersten Behandlung war ich sofort überzeugt. Die Haut strahlt einfach.",
    name: "Julia M.",
    detail: "Aquafacial-Kundin",
    stars: 5,
  },
];

function Avatar({ name }) {
  const initial = name ? name.charAt(0).toUpperCase() : "G";
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{ backgroundColor: "var(--cb-blush)" }}
    >
      <span
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "clamp(5rem, 15vw, 10rem)",
          color: "var(--cb-sand)",
          lineHeight: 1,
        }}
      >
        {initial}
      </span>
    </div>
  );
}

export function Testimonial15() {
  const [active, setActive] = useState(0);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews.map((r) => ({
            quote: r.text,
            name: r.author_name,
            detail: r.relative_time_description,
            stars: r.rating,
            total: data.total,
          })));
        }
      })
      .catch(() => {});
  }, []);

  const testimonials = reviews || fallback;
  const t = testimonials[Math.min(active, testimonials.length - 1)];
  const totalReviews = reviews?.[0]?.total;

  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="cb-divider" />
          <p className="cb-label">Kundenstimmen</p>
        </div>
        <div className="flex items-center gap-3 mb-12">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "var(--cb-sand)", fontSize: "1rem" }}>★</span>
            ))}
          </div>
          <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "var(--cb-muted)" }}>
            {totalReviews
              ? <>Über <strong style={{ color: "var(--cb-charcoal)", fontWeight: 500 }}>{totalReviews} Fünf-Sterne-Bewertungen</strong> auf Google</>
              : <>Über <strong style={{ color: "var(--cb-charcoal)", fontWeight: 500 }}>100 Fünf-Sterne-Bewertungen</strong> auf Google</>
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar panel */}
          <div className="order-2 lg:order-1" style={{ borderRadius: "2px", overflow: "hidden", aspectRatio: "4/5" }}>
            <Avatar key={active} name={t.name} />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex gap-1 mb-8">
              {[...Array(t.stars)].map((_, i) => (
                <span key={i} style={{ color: "var(--cb-sand)", fontSize: "0.875rem" }}>★</span>
              ))}
            </div>

            <blockquote
              key={active}
              className="anim-fade-up"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.375rem, 3vw, 2rem)",
                lineHeight: 1.5,
                color: "var(--cb-charcoal)",
                marginBottom: "2.5rem",
              }}
            >
              „{t.quote}"
            </blockquote>

            <div className="mb-10">
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.05em", color: "var(--cb-charcoal)" }}>
                {t.name}
              </p>
              <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.8125rem", color: "var(--cb-muted)" }}>
                {t.detail}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  aria-label={`Bewertung ${i + 1}`}
                  style={{
                    width: i === active ? "2.5rem" : "1rem",
                    height: "1px",
                    backgroundColor: i === active ? "var(--cb-charcoal)" : "var(--cb-blush)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
