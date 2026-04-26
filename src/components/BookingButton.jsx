import React, { useState, useRef, useEffect } from "react";

const BASE = "contour-beauty";

export function BookingButton({ label, className, style, path, variants }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  if (path) {
    return (
      <a
        href={`https://tidycal.com/${BASE}/${path}`}
        data-tidycal-path={`${BASE}/${path}`}
        className={className}
        style={style}
      >
        {label}
      </a>
    );
  }

  if (variants) {
    return (
      <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
        <button className={className} style={style} onClick={() => setOpen((v) => !v)}>
          {label}
        </button>
        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              backgroundColor: "var(--cb-cream)",
              border: "1px solid rgba(28,25,23,0.12)",
              minWidth: "280px",
              zIndex: 50,
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "Jost, sans-serif",
                fontWeight: 400,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--cb-muted)",
                padding: "0.75rem 1.25rem 0.5rem",
              }}
            >
              Behandlungsbereich wählen
            </p>
            {variants.map(({ label: vLabel, path: vPath }) => (
              <a
                key={vPath}
                href={`https://tidycal.com/${BASE}/${vPath}`}
                data-tidycal-path={`${BASE}/${vPath}`}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 1.25rem",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "var(--cb-charcoal)",
                  textDecoration: "none",
                  borderTop: "1px solid rgba(28,25,23,0.07)",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--cb-linen)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {vLabel}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={`https://tidycal.com/${BASE}`}
      data-tidycal-path={BASE}
      className={className}
      style={style}
    >
      {label}
    </a>
  );
}
