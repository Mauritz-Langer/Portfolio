# Setup Guide - Portfolio Website

## Erste Schritte

### 1. Repository Setup
```bash
git clone https://github.com/Mauritz-Langer/Portfolio.git
cd Portfolio
```

### 2. Lokale Entwicklung
Da es sich um ein statisches Website-Projekt handelt, können Sie es direkt im Browser öffnen oder einen lokalen Server verwenden:

#### Option A: Direkt im Browser
```bash
open index.html
```

#### Option B: Mit lokalem Server (empfohlen)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000

# VS Code Live Server Extension
# Rechtsklick auf index.html → "Open with Live Server"
```

## Konfiguration

### KI-Chat aktivieren

1. **Google Gemini API Key erstellen:**
   - Besuchen Sie [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Erstellen Sie einen neuen API Key
   - Kopieren Sie den Key

2. **API Key einfügen:**
   ```javascript
   // In js/main.js, Zeile ~465
   const apiKey = "YOUR_GEMINI_API_KEY_HERE";
   ```

### Kontaktformular aktivieren

1. **Formspree Account erstellen:**
   - Registrieren Sie sich bei [Formspree](https://formspree.io/)
   - Erstellen Sie ein neues Formular
   - Notieren Sie sich die Form-ID

2. **Form-ID einfügen:**
   ```html
   <!-- In index.html, Zeile ~332 -->
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Anpassungen

### Persönliche Daten ändern

1. **Texte und Übersetzungen:**
   Alle Inhalte befinden sich in `js/main.js` im `translations` Objekt:
   ```javascript
   const translations = {
       de: {
           heroName: "Ihr Name",
           aboutParagraph1: "Ihre Beschreibung...",
           // ... weitere Texte
       },
       en: {
           // Englische Übersetzungen
       }
   };
   ```

2. **Links und Social Media:**
   ```html
   <!-- GitHub Link -->
   <a href="https://github.com/IHR_USERNAME" target="_blank">

   <!-- LinkedIn Link -->
   <a href="https://linkedin.com/in/IHR_PROFIL" target="_blank">
   ```

3. **Projektinformationen:**
   - Aktualisieren Sie die Projekt-URLs in den Modals
   - Passen Sie Projektbeschreibungen an
   - Ersetzen Sie Placeholder-Bilder

### Design anpassen

1. **Farben:**
   ```css
   /* In css/styles.css */
   :root {
       --gradient-1: #0ea5e9;  /* Ihre Hauptfarbe */
       --gradient-2: #6366f1;  /* Ihre Sekundärfarbe */
       --gradient-3: #a855f7;  /* Ihre Akzentfarbe */
   }
   ```

2. **Bilder:**
   - Platzieren Sie Ihre Bilder in `assets/images/`
   - Aktualisieren Sie die Bild-URLs in `index.html`
   - Optimieren Sie Bilder für Web (WebP format empfohlen)

## Deployment

### GitHub Pages
1. Repository auf GitHub pushen
2. Settings → Pages → Source: "Deploy from a branch"
3. Branch: main, Folder: / (root)
4. Ihre Website ist verfügbar unter: `https://username.github.io/Portfolio/`

### Netlify
1. Repository mit Netlify verbinden
2. Build settings: 
   - Build command: (leer lassen)
   - Publish directory: `/`
3. Deploy starten

### Vercel
1. Repository mit Vercel verbinden
2. Framework Preset: "Other"
3. Root Directory: `/`
4. Deploy starten

## Performance Optimierung

### Bilder optimieren
```bash
# Mit ImageOptim (macOS) oder TinyPNG online
# WebP Format für bessere Kompression verwenden
```

### Lazy Loading
```html
<!-- Für Bilder außerhalb des Viewports -->
<img src="image.jpg" loading="lazy" alt="Beschreibung">
```

### CSS/JS Minifizierung
Für Produktion können Sie CSS und JS minifizieren:
- CSS: [cssnano](https://cssnano.co/)
- JavaScript: [Terser](https://terser.org/)

## Troubleshooting

### Häufige Probleme

1. **KI-Chat funktioniert nicht:**
   - Überprüfen Sie den API Key
   - Kontrollieren Sie die Browser-Konsole auf Fehler
   - Stellen Sie sicher, dass die Gemini API aktiviert ist

2. **Formular sendet keine E-Mails:**
   - Überprüfen Sie die Formspree Form-ID
   - Verifizieren Sie Ihre E-Mail-Adresse bei Formspree

3. **Partikel-Animation läuft nicht:**
   - Überprüfen Sie die Browser-Kompatibilität
   - Deaktivieren Sie Adblocker temporär

4. **Responsive Design Probleme:**
   - Testen Sie in verschiedenen Browsern
   - Überprüfen Sie die Viewport-Meta-Tags

### Browser-Kompatibilität
- Chrome 88+: ✅ Vollständig unterstützt
- Firefox 85+: ✅ Vollständig unterstützt  
- Safari 14+: ✅ Vollständig unterstützt
- Edge 88+: ✅ Vollständig unterstützt
- Internet Explorer: ❌ Nicht unterstützt

## Wartung

### Regelmäßige Updates
- Überprüfen Sie CDN-Links auf neue Versionen
- Aktualisieren Sie Projektinformationen
- Testen Sie alle Funktionen nach Browser-Updates

### Backup
```bash
# Repository-Backup
git clone --mirror https://github.com/username/Portfolio.git
```
