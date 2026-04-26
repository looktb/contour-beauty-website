"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export function Navbar9() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/permanent-make-up", label: "Permanent Make-up" },
    { href: "/hautbehandlungen", label: "Hautbehandlungen" },
    { href: "/über-uns", label: "Über mich" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(250,248,244,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(28,25,23,0.08)" : "none",
      }}
    >
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 md:px-12 lg:px-16">
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Contour Beauty"
            className="h-12 w-auto"
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="cb-nav-link"
              style={{ color: scrolled ? "var(--cb-charcoal)" : "rgba(250,248,244,0.9)" }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://tidycal.com/contour-beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="cb-btn-primary"
            style={scrolled ? {} : {
              backgroundColor: "transparent",
              color: "rgba(250,248,244,0.9)",
              borderColor: "rgba(250,248,244,0.4)",
            }}
          >
            Termin buchen
          </a>
        </div>

        <button
          className="flex lg:hidden flex-col items-center justify-center gap-1.5 w-10 h-10"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          aria-label="Menü öffnen"
        >
          <motion.span
            className="block h-px w-6 origin-center"
            style={{ backgroundColor: scrolled ? "var(--cb-charcoal)" : "white" }}
            animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px w-6"
            style={{ backgroundColor: scrolled ? "var(--cb-charcoal)" : "white" }}
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-px w-6 origin-center"
            style={{ backgroundColor: scrolled ? "var(--cb-charcoal)" : "white" }}
            animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute left-0 right-0 top-full px-8 py-8 flex flex-col gap-6"
            style={{
              backgroundColor: "rgba(250,248,244,0.98)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(28,25,23,0.08)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="cb-nav-link text-sm"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="https://tidycal.com/contour-beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="cb-btn-primary mt-2 self-start"
            >
              Termin buchen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
