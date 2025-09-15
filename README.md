# Portfolio Website - Mauritz Langer

Ein modernes, interaktives Portfolio mit KI-Integration, das meine Fähigkeiten als Full Stack Software Developer demonstriert.

## 🚀 Features

- **Responsive Design**: Optimiert für alle Geräte und Bildschirmgrößen
- **Dark/Light Mode**: Automatischer Theme-Wechsel mit localStorage-Persistierung
- **Mehrsprachig**: Deutsch und Englisch mit dynamischer Übersetzung
- **KI-Chat Integration**: Interaktiver AI-Assistent mit Gemini API
- **Animierte Partikel**: Dynamischer Hintergrund mit Canvas-basierter Animation
- **Scroll Animationen**: Smooth scrolling mit IntersectionObserver
- **Projekt Modals**: Detaillierte Projektbeschreibungen in Overlay-Fenstern
- **Kontaktformular**: Integration mit Formspree für E-Mail-Versendung

## 🛠️ Technologien

- **Frontend**: HTML5, CSS3 (mit CSS Custom Properties), Vanilla JavaScript
- **Styling**: TailwindCSS, Custom CSS Animations
- **Icons**: Lucide Icons
- **Fonts**: Inter (Google Fonts)
- **AI Integration**: Google Gemini API
- **Form Handling**: Formspree
- **Deployment**: GitHub Pages

## 📁 Projektstruktur

```
Portfolio/
├── index.html              # Hauptseite
├── css/
│   └── styles.css          # Custom CSS und Animationen
├── js/
│   └── main.js            # JavaScript Funktionalität
├── assets/
│   └── images/            # Bilder und Assets
├── docs/                  # Dokumentation
├── README.md              # Projektbeschreibung
├── LICENSE               # MIT Lizenz
└── .gitignore           # Git Ignore Datei
```

## 🚀 Schnellstart

### Voraussetzungen
- Moderner Webbrowser
- (Optional) Lokaler Webserver für Development

### Installation

1. Repository klonen:
```bash
git clone https://github.com/Mauritz-Langer/Portfolio.git
cd Portfolio
```

2. Projekt öffnen:
```bash
# Mit Live Server (VS Code Extension)
# Oder einfach index.html im Browser öffnen
open index.html
```

### Konfiguration

#### KI-Chat Setup
1. Gemini API Key bei [Google AI Studio](https://makersuite.google.com/app/apikey) erstellen
2. API Key in `js/main.js` einfügen:
```javascript
const apiKey = "YOUR_GEMINI_API_KEY_HERE";
```

#### Kontaktformular Setup
1. Formspree Account erstellen: [formspree.io](https://formspree.io/)
2. Neues Formular erstellen und Endpoint-ID kopieren
3. Action-URL in `index.html` anpassen:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🎨 Anpassung

### Farben und Themes
Die Farben sind über CSS Custom Properties definiert und können in `css/styles.css` angepasst werden:

```css
:root {
    --gradient-1: #0ea5e9;
    --gradient-2: #6366f1;
    --gradient-3: #a855f7;
    /* ... weitere Variablen */
}
```

### Inhalte ändern
Alle Texte sind in der `translations` Konstante in `js/main.js` gespeichert und können dort bearbeitet werden.

### Projekte hinzufügen
1. Neue Projekt-Sektion in `index.html` hinzufügen
2. Modal-HTML ergänzen
3. Übersetzungen in `js/main.js` hinzufügen

## 📱 Browser-Unterstützung

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🔧 Development

### Lokale Entwicklung
```bash
# Mit Python
python -m http.server 8000

# Mit Node.js
npx serve .

# Mit PHP
php -S localhost:8000
```

### Code-Stil
- Verwendung von modernem ES6+ JavaScript
- CSS Custom Properties für Theming
- Semantic HTML5
- Mobile-First Responsive Design

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für Details.

## 🤝 Contributing

Beiträge sind willkommen! Bitte erstellen Sie einen Fork und einen Pull Request für Verbesserungen.

## 📞 Kontakt

- **LinkedIn**: [Mauritz Langer](https://linkedin.com/in/mauritz-langer)
- **GitHub**: [Mauritz-Langer](https://github.com/Mauritz-Langer)
- **Website**: [Portfolio](https://mauritz-langer.github.io/Portfolio/)

---

**© 2025 Mauritz Langer. Alle Rechte vorbehalten.**
