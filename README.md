# Xer Component

Eine universelle, SEO-optimierte und accessibility-freundliche React-Komponente für horizontale Scroll-Funktionalität mit Drag-to-Scroll (nur auf Cursor-Geräten).

## 🌟 Features

### **Core Features**
- ✅ **Horizontale Scroll-Funktionalität** mit nativer Browser-Unterstützung
- ✅ **Drag-to-Scroll** mit Trägheit (nur auf Cursor-Geräten)
- ✅ **Touch-Support** mit nativer Scroll-Funktionalität
- ✅ **Tap vs Drag Unterscheidung** - verhindert Klicks nach Drag-Bewegungen
- ✅ **LTR/RTL Support** für internationale Anwendungen
- ✅ **Zentrierte Inhalte** mit `center` Prop
- ✅ **Flexible Padding & Gap** mit direkten Werten oder CSS-Variablen

### **SEO Optimierung**
- ✅ **Semantische HTML-Struktur** mit korrekten ARIA-Rollen
- ✅ **Meta-Attribute** für Suchmaschinen-Crawling
- ✅ **Data-Attribute** für Analytics und Testing
- ✅ **Lang-Attribute** für Internationalisierung
- ✅ **Dir-Attribute** für Text-Richtung
- ✅ **Strukturierte Daten** für Rich Snippets

### **Accessibility (WCAG 2.1 AA)**
- ✅ **Screen Reader Support** mit ARIA-Labels und Descriptions
- ✅ **Keyboard Navigation** mit Tab und Pfeiltasten
- ✅ **Focus Management** mit sichtbaren Focus-Indikatoren
- ✅ **High Contrast Mode** Unterstützung
- ✅ **Reduced Motion** Unterstützung
- ✅ **Dark Mode** Unterstützung
- ✅ **Print Styles** für Druckversionen

### **Performance Optimierung**
- ✅ **Memoized Event Handler** mit `useCallback`
- ✅ **Memoized Styles** mit `useMemo`
- ✅ **Optimized Re-renders** durch Dependency Arrays
- ✅ **RequestAnimationFrame** für smooth Animations
- ✅ **Will-change CSS** für GPU-Beschleunigung
- ✅ **Touch Device Detection** mit `useMemo`

## 📦 Installation

```bash
npm install @xer/component
```

## 🚀 Verwendung

### **Grundlegende Verwendung**

```tsx
import { Xer } from '@xer/component';

function App() {
  return (
    <Xer aria-label="Horizontale Scroll-Komponente">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Xer>
  );
}
```

### **Mit allen Props**

```tsx
<Xer 
  direction="RTL"
  center
  paddingX="2rem"
  gap="1rem"
  aria-label="Zentrierte RTL Xer Komponente"
  aria-live="polite"
  aria-orientation="horizontal"
  data-testid="xer-component"
  data-tracking="xer-usage"
  lang="de"
  dir="ltr"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Xer>
```

### **Mit Link-Elementen**

```tsx
<Xer aria-label="Link-Navigation">
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
    <div>Link Item 1</div>
  </a>
  <a href="https://example.org" target="_blank" rel="noopener noreferrer">
    <div>Link Item 2</div>
  </a>
</Xer>
```

## 📋 Props

### **Core Props**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `children` | `React.ReactNode` | - | Hauptinhalt der Komponente |
| `direction` | `'LTR' \| 'RTL'` | `'LTR'` | Scroll-Richtung |
| `center` | `boolean` | `false` | Zentriert den Inhalt |
| `paddingX` | `string` | `'1rem'` | Horizontales Padding |
| `gap` | `string` | `'1rem'` | Gap zwischen Items |

### **Accessibility Props**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `aria-label` | `string` | - | Label für Screen Reader |
| `aria-describedby` | `string` | - | Beschreibung für Screen Reader |
| `aria-live` | `'polite' \| 'assertive' \| 'off'` | `'polite'` | Live-Region für Updates |
| `aria-orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientierung für Screen Reader |
| `aria-controls` | `string` | - | Verknüpfte Elemente |
| `aria-expanded` | `boolean` | - | Erweiterbare Inhalte |
| `aria-hidden` | `boolean` | - | Versteckte Elemente |
| `role` | `string` | `'region'` | ARIA-Rolle |

### **SEO Props**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `data-testid` | `string` | - | Test-ID für Testing |
| `data-tracking` | `string` | - | Tracking-ID für Analytics |
| `lang` | `string` | - | Sprache für Internationalisierung |
| `dir` | `'ltr' \| 'rtl' \| 'auto'` | - | Text-Richtung |

## 🎯 Accessibility Features

### **Screen Reader Support**
- ✅ **ARIA-Labels** für semantische Beschreibung
- ✅ **ARIA-Live-Regions** für dynamische Updates
- ✅ **ARIA-Orientation** für Scroll-Richtung
- ✅ **ARIA-Controls** für verknüpfte Elemente

### **Keyboard Navigation**
- ✅ **Tab-Fokus** für Navigation
- ✅ **Pfeiltasten** für Scroll-Navigation
- ✅ **Home/End** für schnelle Navigation
- ✅ **Focus-Indikatoren** für sichtbare Fokus-Zustände

### **Visual Accessibility**
- ✅ **High Contrast Mode** Unterstützung
- ✅ **Reduced Motion** für Benutzer mit Bewegungssensitivität
- ✅ **Dark Mode** Unterstützung
- ✅ **Print Styles** für Druckversionen

## 🔧 Performance Features

### **Optimized Rendering**
- ✅ **Memoized Event Handler** verhindern unnötige Re-renders
- ✅ **Memoized Styles** optimieren Style-Berechnungen
- ✅ **Dependency Arrays** für präzise Effect-Updates

### **Smooth Animations**
- ✅ **RequestAnimationFrame** für 60fps Animations
- ✅ **Will-change CSS** für GPU-Beschleunigung
- ✅ **Inertia Scrolling** für natürliche Bewegungen

### **Touch Optimization**
- ✅ **Touch Device Detection** mit `useMemo`
- ✅ **Native Scroll** auf Touch-Geräten
- ✅ **Custom Drag** nur auf Cursor-Geräten

## 🎨 CSS Customization

### **CSS Variables**
```css
:root {
  --focus-color: #007bff;
  --focus-color-dark: #4dabf7;
  --border-color: #000;
}
```

### **Media Queries**
```css
/* High Contrast Mode */
@media (prefers-contrast: high) { ... }

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) { ... }

/* Dark Mode */
@media (prefers-color-scheme: dark) { ... }

/* Print */
@media print { ... }
```

## 🧪 Testing

### **Unit Tests**
```tsx
import { render, screen } from '@testing-library/react';
import { Xer } from '@xer/component';

test('renders Xer component', () => {
  render(<Xer data-testid="xer-test">Content</Xer>);
  expect(screen.getByTestId('xer-test')).toBeInTheDocument();
});
```

### **Accessibility Tests**
```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('should not have accessibility violations', async () => {
  const { container } = render(<Xer>Content</Xer>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 📊 Browser Support

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile Safari** 14+
- ✅ **Chrome Mobile** 90+

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📄 License

MIT License - siehe [LICENSE](LICENSE) Datei für Details.

## 🙏 Credits

Entwickelt mit ❤️ für maximale Accessibility und Performance.
