import React from 'react';

type XerDirection = 'LTR' | 'RTL';
interface XerProps {
    /**
     * Hauptinhalt der Xer Komponente
     */
    children?: React.ReactNode;
    /**
     * Scroll-Richtung: LTR (links nach rechts) oder RTL (rechts nach links)
     * @default 'LTR'
     */
    direction?: XerDirection;
    /**
     * Zentriert den Inhalt im Container
     * @default false
     */
    center?: boolean;
    /**
     * Horizontales Padding (links und rechts)
     * @default "1rem"
     * @example "20px" oder "var(--padding-x)"
     */
    paddingX?: string;
    /**
     * Gap zwischen den Items (kann direkte Werte oder CSS-Variablen sein)
     * @default "1rem"
     * @example "1rem" oder "var(--gap)"
     */
    gap?: string;
    /**
     * Zusätzliche CSS-Klassen
     */
    className?: string;
    /**
     * ID für Accessibility und Testing
     */
    id?: string;
    /**
     * ARIA-Label für Screen Reader
     */
    'aria-label'?: string;
    /**
     * ARIA-Describedby für zusätzliche Beschreibung
     */
    'aria-describedby'?: string;
    /**
     * ARIA-Live-Region für dynamische Updates
     */
    'aria-live'?: 'polite' | 'assertive' | 'off';
    /**
     * ARIA-Orientation für Screen Reader
     */
    'aria-orientation'?: 'horizontal' | 'vertical';
    /**
     * ARIA-Controls für verknüpfte Elemente
     */
    'aria-controls'?: string;
    /**
     * ARIA-Expanded für erweiterbare Inhalte
     */
    'aria-expanded'?: boolean;
    /**
     * ARIA-Hidden für versteckte Elemente
     */
    'aria-hidden'?: boolean;
    /**
     * ARIA-Role für semantische Bedeutung
     */
    role?: string;
    /**
     * ARIA-Atomic für Live-Region Updates
     */
    'aria-atomic'?: boolean;
    /**
     * ARIA-Relevant für Live-Region Updates
     */
    'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals';
    /**
     * ARIA-Busy für Loading-Zustände
     */
    'aria-busy'?: boolean;
    /**
     * ARIA-Current für aktive Elemente
     */
    'aria-current'?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
    /**
     * ARIA-Selected für ausgewählte Elemente
     */
    'aria-selected'?: boolean;
    /**
     * ARIA-Required für erforderliche Elemente
     */
    'aria-required'?: boolean;
    /**
     * ARIA-Readonly für schreibgeschützte Elemente
     */
    'aria-readonly'?: boolean;
    /**
     * ARIA-Invalid für ungültige Elemente
     */
    'aria-invalid'?: boolean | 'grammar' | 'spelling';
    /**
     * ARIA-Describedby für zusätzliche Beschreibungen
     */
    'aria-details'?: string;
    /**
     * ARIA-Errormessage für Fehlermeldungen
     */
    'aria-errormessage'?: string;
    /**
     * Data-Attribute für SEO und Analytics
     */
    'data-testid'?: string;
    /**
     * Data-Attribute für Tracking
     */
    'data-tracking'?: string;
    /**
     * Data-Attribute für Komponenten-Typ
     */
    'data-component'?: string;
    /**
     * Data-Attribute für Version
     */
    'data-version'?: string;
    /**
     * Lang-Attribut für Internationalisierung
     */
    lang?: string;
    /**
     * Dir-Attribut für Text-Richtung
     */
    dir?: 'ltr' | 'rtl' | 'auto';
    /**
     * Title-Attribut für Tooltip
     */
    title?: string;
    /**
     * Tabindex für Keyboard-Navigation
     */
    tabIndex?: number;
    /**
     * Skip-Link für schnelle Navigation
     */
    skipLink?: string;
    /**
     * Rendering-Modus (immer client für Drag-Funktionalität)
     */
    renderMode?: 'client';
    /**
     * Hydration-Strategie (immer eager für sofortige Interaktivität)
     */
    hydration?: 'eager';
    /**
     * SEO-Wasserzeichen aktivieren (Standard: true)
     */
    seoWatermark?: boolean;
}
/**
 * Xer Komponente
 *
 * Eine universelle, SEO-optimierte und accessibility-freundliche Komponente
 * mit horizontaler Scroll-Funktionalität und Drag-to-Scroll (nur auf Cursor-Geräten).
 *
 * @example
 * ```tsx
 * <Xer
 *   direction="RTL"
 *   center
 *   paddingX="2rem"
 *   gap="1rem"
 *   aria-label="Xer Komponente"
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Xer>
 * ```
 */
declare const Xer: React.FC<XerProps>;

export { Xer, Xer as default };
export type { XerProps };
