import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";
import StartseiteePage from "../startseite/index.jsx";
import HautbehandlungenPage from "../hautbehandlungen/index.jsx";
import PermanentMakeUpPage from "../permanent-make-up/index.jsx";
import UeberUnsPage from "../über-uns/index.jsx";
import KontaktPage from "../kontakt-/-termin-buchen/index.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ErrorBoundary><StartseiteePage /></ErrorBoundary>} />
      <Route path="/hautbehandlungen" element={<ErrorBoundary><HautbehandlungenPage /></ErrorBoundary>} />
      <Route path="/permanent-make-up" element={<ErrorBoundary><PermanentMakeUpPage /></ErrorBoundary>} />
      <Route path="/über-uns" element={<ErrorBoundary><UeberUnsPage /></ErrorBoundary>} />
      <Route path="/kontakt" element={<ErrorBoundary><KontaktPage /></ErrorBoundary>} />
    </Routes>
  );
}
