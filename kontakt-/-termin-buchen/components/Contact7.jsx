"use client";

import React, { useState } from "react";

const inputStyle = {
  width: "100%",
  padding: "0.875rem 1.25rem",
  fontFamily: "Jost, sans-serif",
  fontWeight: 300,
  fontSize: "0.9rem",
  color: "var(--cb-charcoal)",
  backgroundColor: "transparent",
  border: "1px solid rgba(28,25,23,0.2)",
  outline: "none",
  letterSpacing: "0.02em",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontFamily: "Jost, sans-serif",
  fontWeight: 400,
  fontSize: "0.75rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--cb-muted)",
  marginBottom: "0.5rem",
};

export function Contact7() {
  const [form, setForm] = useState({ name: "", email: "", treatment: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message && form.consent) setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 px-8 md:px-12 lg:px-16" style={{ backgroundColor: "var(--cb-cream)" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: intro */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="cb-divider" />
              <p className="cb-label">Termin anfragen</p>
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
              Schreib mir
            </h2>
            <p className="mb-10"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", lineHeight: 1.85, color: "var(--cb-muted)", maxWidth: "44ch" }}>
              Sag mir, was dich interessiert und wann du Zeit hast. Ich melde mich innerhalb von 24 Stunden bei dir.
            </p>

            <div className="cb-img-zoom" style={{ borderRadius: "2px", overflow: "hidden" }}>
              <img src="/images/skin-1.png" alt="Contour Beauty Kontakt"
                className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="py-16">
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontWeight: 300, fontSize: "1.75rem", color: "var(--cb-charcoal)", marginBottom: "1rem" }}>
                  Danke für deine Nachricht. ✦
                </p>
                <p style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.9375rem", color: "var(--cb-muted)" }}>
                  Ich melde mich so schnell wie möglich bei dir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Dein Name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>E-Mail *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="deine@email.de" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Behandlung</label>
                  <select name="treatment" value={form.treatment} onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                    <option value="">Bitte wählen…</option>
                    <option>Hautanalyse & Beratung</option>
                    <option>Reviderm-Behandlung</option>
                    <option>IONTO Aquafacial</option>
                    <option>Powder Brows</option>
                    <option>Microblading</option>
                    <option>Lippenpigmentierung</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Nachricht *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Erzähl mir von deinen Wünschen und wann du Zeit hast…"
                    style={{ ...inputStyle, resize: "vertical" }} />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" name="consent" id="consent" checked={form.consent}
                    onChange={handleChange} required
                    style={{ marginTop: "2px", accentColor: "var(--cb-sand)", width: "14px", height: "14px", flexShrink: 0, cursor: "pointer" }} />
                  <label htmlFor="consent"
                    style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, fontSize: "0.8125rem", color: "var(--cb-muted)", cursor: "pointer", lineHeight: 1.6 }}>
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a href="#" style={{ color: "var(--cb-charcoal)", textDecoration: "underline" }}>Datenschutzerklärung</a> zu.
                  </label>
                </div>

                <button type="submit" className="cb-btn-primary w-full">
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
