import Xer from '@/components/Xer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main} role="main" aria-label="Xer Component Test Seite">
      <h1 className={styles.title}>Xer Component Test</h1>
      
      <section className={styles.section} aria-labelledby="ltr-heading">
        <h2 id="ltr-heading" className={styles.heading}>LTR (Links nach Rechts) - Standard</h2>
        <Xer 
          aria-label="Horizontale Scroll-Komponente LTR"
          aria-live="polite"
          aria-orientation="horizontal"
          aria-describedby="ltr-description"
          data-testid="xer-ltr-standard"
          data-tracking="xer-ltr-standard"
          data-component="xer"
          data-version="1.0.0"
          title="Standard Xer Komponente mit Links-nach-Rechts Scroll"
        >
          <li className={styles.item}>Item 1</li>
          <li className={styles.item}>Item 2</li>
          <li className={styles.item}>Item 3</li>
          <li className={styles.item}>Item 4</li>
          <li className={styles.item}>Item 5</li>
          <li className={styles.item}>Item 6</li>
          <li className={styles.item}>Item 7</li>
          <li className={styles.item}>Item 8</li>
        </Xer>
        <div id="ltr-description" className="sr-only">
          Standard Xer Komponente mit Links-nach-Rechts Scroll-Richtung
        </div>
      </section>

      <section className={styles.section} aria-labelledby="rtl-heading">
        <h2 id="rtl-heading" className={styles.heading}>RTL (Rechts nach Links)</h2>
        <Xer 
          direction="RTL"
          aria-label="Horizontale Scroll-Komponente RTL"
          aria-live="polite"
          aria-orientation="horizontal"
          aria-describedby="rtl-description"
          data-testid="xer-rtl"
          data-tracking="xer-rtl"
          data-component="xer"
          data-version="1.0.0"
          dir="rtl"
          lang="ar"
          title="RTL Xer Komponente mit Rechts-nach-Links Scroll"
        >
          <li className={styles.item}>Item 1</li>
          <li className={styles.item}>Item 2</li>
          <li className={styles.item}>Item 3</li>
          <li className={styles.item}>Item 4</li>
          <li className={styles.item}>Item 5</li>
          <li className={styles.item}>Item 6</li>
          <li className={styles.item}>Item 7</li>
          <li className={styles.item}>Item 8</li>
        </Xer>
        <div id="rtl-description" className="sr-only">
          RTL Xer Komponente mit Rechts-nach-Links Scroll-Richtung für arabische und hebräische Sprachen
        </div>
      </section>

      <section className={styles.section} aria-labelledby="center-heading">
        <h2 id="center-heading" className={styles.heading}>Zentriert (Center)</h2>
        <Xer 
          center
          aria-label="Zentrierte Xer Komponente"
          aria-live="polite"
          aria-orientation="horizontal"
          aria-describedby="center-description"
          data-testid="xer-center"
          data-tracking="xer-center"
          data-component="xer"
          data-version="1.0.0"
          title="Zentrierte Xer Komponente"
        >
          <li className={styles.item}>Item 1</li>
          <li className={styles.item}>Item 2</li>
          <li className={styles.item}>Item 3</li>
          <li className={styles.item}>Item 4</li>
        </Xer>
        <div id="center-description" className="sr-only">
          Zentrierte Xer Komponente mit zentrierten Inhalten
        </div>
      </section>

      <section className={styles.section} aria-labelledby="custom-heading">
        <h2 id="custom-heading" className={styles.heading}>Mit Custom Padding und Gap</h2>
        <Xer 
          paddingX="3rem"
          gap="3rem"
          aria-label="Xer Komponente mit Custom Padding und Gap"
          aria-live="polite"
          aria-orientation="horizontal"
          aria-describedby="custom-description"
          data-testid="xer-custom-padding"
          data-tracking="xer-custom-padding"
          data-component="xer"
          data-version="1.0.0"
          title="Xer Komponente mit angepasstem Padding und Gap"
        >
          <li className={styles.item}>Item 1</li>
          <li className={styles.item}>Item 2</li>
          <li className={styles.item}>Item 3</li>
          <li className={styles.item}>Item 4</li>
          <li className={styles.item}>Item 5</li>
          <li className={styles.item}>Item 6</li>
        </Xer>
        <div id="custom-description" className="sr-only">
          Xer Komponente mit angepasstem Padding (3rem) und Gap (3rem)
        </div>
      </section>

      <section className={styles.section} aria-labelledby="css-vars-heading">
        <h2 id="css-vars-heading" className={styles.heading}>Mit CSS-Variablen</h2>
        <Xer 
          paddingX="var(--padding-x, 1rem)"
          gap="var(--gap, 0.5rem)"
          aria-label="Xer Komponente mit CSS-Variablen"
          aria-live="polite"
          aria-orientation="horizontal"
          aria-describedby="css-vars-description"
          data-testid="xer-css-vars"
          data-tracking="xer-css-vars"
          data-component="xer"
          data-version="1.0.0"
          title="Xer Komponente mit CSS-Variablen"
        >
          <li className={styles.item}>Item 1</li>
          <li className={styles.item}>Item 2</li>
          <li className={styles.item}>Item 3</li>
          <li className={styles.item}>Item 4</li>
        </Xer>
        <div id="css-vars-description" className="sr-only">
          Xer Komponente mit CSS-Variablen für Padding und Gap
        </div>
      </section>

      <section className={styles.section} aria-labelledby="links-heading">
        <h2 id="links-heading" className={styles.heading}>Mit Link-Elementen (Tap vs Drag)</h2>
        <p className={styles.paragraph}>
          <strong>Tap vs Drag Test:</strong> Klicke auf einen Link um zu navigieren. 
          Wenn du klickst und ziehst, wird der Klick verhindert - nur reine Klicks ohne Drag führen zur Navigation.
        </p>
        <Xer 
          gap="1px"
          aria-label="Xer Komponente mit Link-Elementen - Tap vs Drag Test"
          aria-live="polite"
          aria-orientation="horizontal"
          aria-describedby="links-description"
          data-testid="xer-links"
          data-tracking="xer-links"
          data-component="xer"
          data-version="1.0.0"
          title="Xer Komponente mit Link-Elementen und Tap vs Drag Test"
        >
          <li>
            <a href="https://google.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche Google">
              <div className={styles.item}>Google</div>
            </a>
          </li>
          <li>
            <a href="https://github.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche GitHub">
              <div className={styles.item}>GitHub</div>
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche Stack Overflow">
              <div className={styles.item}>Stack Overflow</div>
            </a>
          </li>
          <li>
            <a href="https://reddit.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche Reddit">
              <div className={styles.item}>Reddit</div>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche YouTube">
              <div className={styles.item}>YouTube</div>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche Twitter">
              <div className={styles.item}>Twitter</div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche LinkedIn">
              <div className={styles.item}>LinkedIn</div>
            </a>
          </li>
          <li>
            <a href="https://medium.com" className={styles.linkItem} target="_blank" rel="noopener noreferrer" aria-label="Besuche Medium">
              <div className={styles.item}>Medium</div>
            </a>
          </li>
        </Xer>
        <div id="links-description" className="sr-only">
          Xer Komponente mit Link-Elementen und Tap vs Drag Test - verhindert Klicks nach Drag-Bewegungen
        </div>
        <p className={styles.paragraph}>
          <strong>Test:</strong> Versuche einen Link zu klicken und dann zu ziehen - der Link sollte nicht aktiviert werden. 
          Nur ein reiner Klick ohne Bewegung sollte zur Navigation führen.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="keyboard-heading">
        <h2 id="keyboard-heading" className={styles.heading}>Keyboard Navigation Test</h2>
        <p className={styles.paragraph}>Tab zum Fokussieren, dann native Pfeiltasten zum Scrollen verwenden</p>
        <Xer 
          aria-label="Keyboard Navigation Test - Verwende Tab zum Fokussieren und native Pfeiltasten zum Scrollen"
          aria-live="polite"
          aria-orientation="horizontal"
          aria-describedby="keyboard-description"
          data-testid="xer-keyboard"
          data-tracking="xer-keyboard"
          data-component="xer"
          data-version="1.0.0"
          title="Keyboard Navigation Test für Xer Komponente"
        >
          <li className={styles.item}>Keyboard Item 1</li>
          <li className={styles.item}>Keyboard Item 2</li>
          <li className={styles.item}>Keyboard Item 3</li>
          <li className={styles.item}>Keyboard Item 4</li>
          <li className={styles.item}>Keyboard Item 5</li>
          <li className={styles.item}>Keyboard Item 6</li>
          <li className={styles.item}>Keyboard Item 7</li>
          <li className={styles.item}>Keyboard Item 8</li>
          <li className={styles.item}>Keyboard Item 9</li>
          <li className={styles.item}>Keyboard Item 10</li>
        </Xer>
        <div id="keyboard-description" className="sr-only">
          Keyboard Navigation Test für Xer Komponente mit Tab und Pfeiltasten
        </div>
        <p className={styles.paragraph}><strong>Native Keyboard Navigation:</strong></p>
        <ul>
          <li><kbd>Tab</kbd> - Zum Element navigieren</li>
          <li><kbd>←</kbd> <kbd>→</kbd> - Native horizontale Scroll-Navigation</li>
          <li><kbd>↑</kbd> <kbd>↓</kbd> - Native vertikale Scroll-Navigation (bleibt bei Seite)</li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="custom-props-heading">
        <h2 id="custom-props-heading" className={styles.heading}>Mit zusätzlichen Props</h2>
        <Xer 
          id="custom-xer"
          className={styles.customStyles}
          aria-label="Angepasste Xer Komponente"
          aria-describedby="custom-props-description"
          aria-live="polite"
          aria-orientation="horizontal"
          data-testid="xer-custom"
          data-tracking="xer-custom"
          data-component="xer"
          data-version="1.0.0"
          title="Angepasste Xer Komponente mit zusätzlichen Props"
        >
          <li className={styles.item}>Custom Item 1</li>
          <li className={styles.item}>Custom Item 2</li>
          <li className={styles.item}>Custom Item 3</li>
          <li className={styles.item}>Custom Item 4</li>
          <li className={styles.item}>Custom Item 5</li>
        </Xer>
        <div id="custom-props-description" className="sr-only">
          Angepasste Xer Komponente mit zusätzlichen Props und Custom Styles
        </div>
        <div id="xer-description" className="sr-only">
          Zusätzliche Beschreibung für Screen Reader
    </div>
      </section>
    </main>
  );
}
