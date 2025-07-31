import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Source Maps für bessere Debugging-Erfahrung
  productionBrowserSourceMaps: false,
  
  // Turbopack ist jetzt stabil, keine experimentellen Einstellungen nötig
  // Die Standard-Konfiguration funktioniert perfekt mit CSS Modules
};

export default nextConfig;
