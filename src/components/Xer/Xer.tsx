
import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import styles from './Xer.module.css';

export type XerDirection = 'LTR' | 'RTL';

export interface XerProps {
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
export const Xer: React.FC<XerProps> = ({
  children,
  direction = 'LTR',
  center = false,
  paddingX = '1rem',
  gap = '1rem',
  className,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-live': ariaLive = 'polite',
  'aria-orientation': ariaOrientation = 'horizontal',
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-hidden': ariaHidden,
  role = 'region',
  'aria-atomic': ariaAtomic,
  'aria-relevant': ariaRelevant,
  'aria-busy': ariaBusy,
  'aria-current': ariaCurrent,
  'aria-selected': ariaSelected,
  'aria-required': ariaRequired,
  'aria-readonly': ariaReadonly,
  'aria-invalid': ariaInvalid,
  'aria-details': ariaDetails,
  'aria-errormessage': ariaErrormessage,
  'data-testid': dataTestid,
  'data-tracking': dataTracking,
  'data-component': dataComponent = 'xer',
  'data-version': dataVersion = '1.0.0',
  lang,
  dir,
  title,
  tabIndex = 0,
  skipLink,
  renderMode = 'client',
  hydration = 'eager',
  seoWatermark = true,
  ...props
}) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const dragThreshold = 10;
  const hasDraggedRef = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  // Touch Device Detection - nur für Custom Drag Logik
  const isTouchDevice = useMemo(() => 
    typeof window !== 'undefined' && 'ontouchstart' in window, 
    []
  );



  // Performance: Memoized Event Handler
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Nur auf Cursor-Geräten Custom Drag aktivieren
    if (isTouchDevice) return;
    if (!outerRef.current) return;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    setIsMouseDown(true);
    setIsDragging(true);
    hasDraggedRef.current = false;
    startX.current = e.pageX - outerRef.current.offsetLeft;
    scrollLeft.current = outerRef.current.scrollLeft;
    velocity.current = 0;
    e.preventDefault();
  }, [isTouchDevice]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // Nur auf Cursor-Geräten Custom Drag aktivieren
    if (isTouchDevice) return;
    if (!isMouseDown || !outerRef.current) return;
    const x = e.pageX - outerRef.current.offsetLeft;
    const delta = x - startX.current;
    if (!hasDraggedRef.current) {
      if (Math.abs(delta) < dragThreshold) {
        return;
      }
      hasDraggedRef.current = true;
    }
    outerRef.current.scrollLeft = scrollLeft.current - delta;
    velocity.current = e.movementX * -1;
  }, [isTouchDevice, isMouseDown, dragThreshold]);

  const handleMouseUp = useCallback(() => {
    // Nur auf Cursor-Geräten Custom Drag aktivieren
    if (isTouchDevice) return;
    if (hasDraggedRef.current) {
      if (Math.abs(velocity.current) > 0) {
        startInertiaScroll();
      }
    }
    setIsDragging(false);
    setIsMouseDown(false);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    // Nur auf Cursor-Geräten Custom Drag aktivieren
    if (isTouchDevice) return;
    if (isMouseDown && hasDraggedRef.current) {
      if (Math.abs(velocity.current) > 0) {
        startInertiaScroll();
      }
    }
    setIsDragging(false);
    setIsMouseDown(false);
  }, [isTouchDevice, isMouseDown]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    // Verhindere Klicks wenn gedraggt wurde
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const startInertiaScroll = useCallback(() => {
    if (!outerRef.current || Math.abs(velocity.current) < 0.5) {
      velocity.current = 0;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      return;
    }
    outerRef.current.scrollLeft += velocity.current;
    velocity.current *= 0.92;
    animationFrameId.current = requestAnimationFrame(startInertiaScroll);
  }, []);

  // Performance: Event Listener für globale Mouse-Up Events
  useEffect(() => {
    if (isTouchDevice) return;

    const handleGlobalMouseUp = () => {
      if (isMouseDown) {
        handleMouseUp();
      }
    };

    if (isMouseDown) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mouseleave', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mouseleave', handleGlobalMouseUp);
    };
  }, [isMouseDown, isTouchDevice, handleMouseUp]);

  // Cleanup Animation Frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Performance: Memoized Styles
  const dynamicStyles = useMemo(() => {
    const styles: React.CSSProperties = {};
    styles.paddingLeft = paddingX;
    styles.paddingRight = paddingX;
    styles.gap = gap;
    return styles;
  }, [paddingX, gap]);

  // Accessibility: Memoized ARIA Attributes
  const ariaAttributes = useMemo(() => ({
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    'aria-live': ariaLive,
    'aria-orientation': ariaOrientation,
    'aria-controls': ariaControls,
    'aria-expanded': ariaExpanded,
    'aria-hidden': ariaHidden,
    'aria-atomic': ariaAtomic ?? true, // Default: Komplette Updates
    'aria-relevant': ariaRelevant ?? 'additions removals', // Default: Hinzufügungen und Entfernungen
    'aria-busy': ariaBusy,
    'aria-current': ariaCurrent,
    'aria-selected': ariaSelected,
    'aria-required': ariaRequired,
    'aria-readonly': ariaReadonly,
    'aria-invalid': ariaInvalid,
    'aria-details': ariaDetails,
    'aria-errormessage': ariaErrormessage,
  }), [
    ariaLabel, ariaDescribedby, ariaLive, ariaOrientation, ariaControls, 
    ariaExpanded, ariaHidden, ariaAtomic, ariaRelevant, ariaBusy, 
    ariaCurrent, ariaSelected, ariaRequired, ariaReadonly, ariaInvalid,
    ariaDetails, ariaErrormessage
  ]);

  // SEO: Memoized Data Attributes
  const dataAttributes = useMemo(() => ({
    'data-testid': dataTestid,
    'data-tracking': dataTracking,
    'data-component': dataComponent,
    'data-version': dataVersion,
  }), [dataTestid, dataTracking, dataComponent, dataVersion]);

    // Client-Side Rendering: Vollständige Interaktivität mit Drag
  return (
    <div
      ref={outerRef}
      id={id}
      className={`${styles.xer} ${direction === 'RTL' ? styles.rtl : ''} ${isDragging ? styles.dragging : ''} ${className || ''}`}
      role={role}
      tabIndex={tabIndex}
      lang={lang}
      dir={dir || (direction === 'RTL' ? 'rtl' : 'ltr')}
      title={title}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...ariaAttributes}
      {...dataAttributes}
      {...props}
    >
      <ul 
        className={`${styles['xer-items-hugger']} ${center ? styles.center : ''}`}
        style={dynamicStyles}
        aria-label={ariaLabel ? `${ariaLabel} - Items` : 'Scroll Items'}
      >
        {children}
      </ul>
      
      {seoWatermark && (
        <div 
          className={styles['seo-watermark']}
          aria-hidden="true"
          data-engineer="II-II-II"
          data-component="Xer"
          data-version={dataVersion}
          title="Xer component engineered by II-II-II"
        >
          <span className={styles['sr-only']}>
            Xer component engineered by II-II-II - Advanced horizontal scroll component with drag functionality, touch support, and accessibility features
          </span>
        </div>
      )}
    </div>
  );
};

export default Xer; 