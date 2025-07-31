import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useMemo, useCallback, useEffect } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var styles = {"xer":"Xer-module_xer__aIUOz","rtl":"Xer-module_rtl__5zZEh","xer-items-hugger":"Xer-module_xer-items-hugger__Un6AT","center":"Xer-module_center__QTcIq","seo-watermark":"Xer-module_seo-watermark__66SCZ","sr-only":"Xer-module_sr-only__4QVdl"};

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
const Xer = (_a) => {
    var { children, direction = 'LTR', center = false, paddingX = '1rem', gap = '1rem', className, id, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedby, 'aria-live': ariaLive = 'polite', 'aria-orientation': ariaOrientation = 'horizontal', 'aria-controls': ariaControls, 'aria-expanded': ariaExpanded, 'aria-hidden': ariaHidden, role = 'region', 'aria-atomic': ariaAtomic, 'aria-relevant': ariaRelevant, 'aria-busy': ariaBusy, 'aria-current': ariaCurrent, 'aria-selected': ariaSelected, 'aria-required': ariaRequired, 'aria-readonly': ariaReadonly, 'aria-invalid': ariaInvalid, 'aria-details': ariaDetails, 'aria-errormessage': ariaErrormessage, 'data-testid': dataTestid, 'data-tracking': dataTracking, 'data-component': dataComponent = 'xer', 'data-version': dataVersion = '1.0.0', lang, dir, title, tabIndex = 0, skipLink, renderMode = 'client', hydration = 'eager', seoWatermark = true } = _a, props = __rest(_a, ["children", "direction", "center", "paddingX", "gap", "className", "id", 'aria-label', 'aria-describedby', 'aria-live', 'aria-orientation', 'aria-controls', 'aria-expanded', 'aria-hidden', "role", 'aria-atomic', 'aria-relevant', 'aria-busy', 'aria-current', 'aria-selected', 'aria-required', 'aria-readonly', 'aria-invalid', 'aria-details', 'aria-errormessage', 'data-testid', 'data-tracking', 'data-component', 'data-version', "lang", "dir", "title", "tabIndex", "skipLink", "renderMode", "hydration", "seoWatermark"]);
    const outerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const velocity = useRef(0);
    const dragThreshold = 10;
    const hasDraggedRef = useRef(false);
    const animationFrameId = useRef(null);
    // Touch Device Detection - nur für Custom Drag Logik
    const isTouchDevice = useMemo(() => typeof window !== 'undefined' && 'ontouchstart' in window, []);
    // Performance: Memoized Event Handler
    const handleMouseDown = useCallback((e) => {
        // Nur auf Cursor-Geräten Custom Drag aktivieren
        if (isTouchDevice)
            return;
        if (!outerRef.current)
            return;
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
    const handleMouseMove = useCallback((e) => {
        // Nur auf Cursor-Geräten Custom Drag aktivieren
        if (isTouchDevice)
            return;
        if (!isMouseDown || !outerRef.current)
            return;
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
        if (isTouchDevice)
            return;
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
        if (isTouchDevice)
            return;
        if (isMouseDown && hasDraggedRef.current) {
            if (Math.abs(velocity.current) > 0) {
                startInertiaScroll();
            }
        }
        setIsDragging(false);
        setIsMouseDown(false);
    }, [isTouchDevice, isMouseDown]);
    const handleClick = useCallback((e) => {
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
        if (isTouchDevice)
            return;
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
        const styles = {};
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
        'aria-atomic': ariaAtomic !== null && ariaAtomic !== void 0 ? ariaAtomic : true, // Default: Komplette Updates
        'aria-relevant': ariaRelevant !== null && ariaRelevant !== void 0 ? ariaRelevant : 'additions removals', // Default: Hinzufügungen und Entfernungen
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
    return (jsxs("div", Object.assign({ ref: outerRef, id: id, className: `${styles.xer} ${direction === 'RTL' ? styles.rtl : ''} ${isDragging ? styles.dragging : ''} ${className || ''}`, role: role, tabIndex: tabIndex, lang: lang, dir: dir || (direction === 'RTL' ? 'rtl' : 'ltr'), title: title, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseLeave, onClick: handleClick }, ariaAttributes, dataAttributes, props, { children: [jsx("ul", { className: `${styles['xer-items-hugger']} ${center ? styles.center : ''}`, style: dynamicStyles, "aria-label": ariaLabel ? `${ariaLabel} - Items` : 'Scroll Items', children: children }), seoWatermark && (jsx("div", { className: styles['seo-watermark'], "aria-hidden": "true", "data-engineer": "II-II-II", "data-component": "Xer", "data-version": dataVersion, title: "Xer component engineered by II-II-II", children: jsx("span", { className: styles['sr-only'], children: "Xer component engineered by II-II-II - Advanced horizontal scroll component with drag functionality, touch support, and accessibility features" }) }))] })));
};

export { Xer, Xer as default };
//# sourceMappingURL=index.esm.js.map
