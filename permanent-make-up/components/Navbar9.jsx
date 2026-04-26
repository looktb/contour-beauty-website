"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export function Navbar9() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { href: "/hautbehandlungen", label: "Hautbehandlungen" },
    { href: "/permanent-make-up", label: "Permanent Make-up" },
    { href: "/über-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
  ];
  const navBg = scrolled ? "rgba(250,248,244,0.97)" : "transparent";
  const linkColor = scrolled ? "var(--cb-charcoal)" : "rgba(250,248,244,0.9)";
  const iconColor = scrolled ? "var(--cb-charcoal)" : "white";
  return (
    <header className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
      style={{ backgroundColor: navBg, backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(28,25,23,0.08)" : "none" }}>
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 md:px-12 lg:px-16">
        <a href="/"><img src="/images/logo.png" alt="Contour Beauty" className="h-9 w-auto"
          style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }} /></a>
        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => <a key={l.href} href={l.href} className="cb-nav-link" style={{ color: linkColor }}>{l.label}</a>)}
        </div>
        <div className="hidden lg:flex">
          <a href="/kontakt" className="cb-btn-primary"
            style={scrolled ? {} : { backgroundColor: "transparent", color: "rgba(250,248,244,0.9)", borderColor: "rgba(250,248,244,0.4)" }}>
            Termin buchen</a>
        </div>
        <button className="flex lg:hidden flex-col items-center justify-center gap-1.5 w-10 h-10"
          onClick={() => setOpen((p) => !p)} aria-label="Menü">
          <motion.span className="block h-px w-6 origin-center" style={{ backgroundColor: iconColor }}
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
          <motion.span className="block h-px w-6" style={{ backgroundColor: iconColor }}
            animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} />
          <motion.span className="block h-px w-6 origin-center" style={{ backgroundColor: iconColor }}
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute left-0 right-0 top-full px-8 py-8 flex flex-col gap-6"
            style={{ backgroundColor: "rgba(250,248,244,0.98)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(28,25,23,0.08)" }}>
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} className="cb-nav-link text-sm"
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                onClick={() => setOpen(false)}>{l.label}</motion.a>
            ))}
            <a href="/kontakt" className="cb-btn-primary mt-2 self-start">Termin buchen</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
