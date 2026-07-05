# Tadabbur-Maqasid — Quran Deep Contemplation

A static web application for studying the Quran with Tadabbur (reflection) and Maqasid (objectives). The screen is split into two panels: the left panel displays the Quran text from quran.com, and the right panel shows Maqasid data — the objectives and thematic structure of each surah and verse groups.

## UI Layout

```
 ┌──────────────────────────────────────────────────────────────┐
 │  Tadabbur-Maqasid 📖 Last reading: Surah — Verse X [Set]    │
 ├──────────────────────────────────┬───────────────────────────┤
 │                                  │                           │
 │  quran.com/{surah}               │  Maqasid                 │
 │  ?startingVerse={ayah}           │                           │
 │                                  │  (thematic map)          │
 │  (quran.com iframe)              │                           │
 │                                  │                           │
 │           60%                    │           40%             │
 └──────────────────────────────────┴───────────────────────────┘
```

## Features

### 🌐 Multi-language Support
- Interface available in **Thai**, **English**, and **Malay**
- Maqasid content (themes and descriptions) translated into all three languages
- Language selector in the right panel header
- Language preference saved in `localStorage`

### 🔖 Last Reading Point
- Save your last reading position (surah + verse) to `localStorage`
- Displayed in the header bar with timestamp
- Modal form for editing with surah dropdown and verse input
- Max verse count auto-updates based on selected surah
- Defaults to Al-Fatihah verse 1 if no point is saved

### Left Panel (60%)
- Embeds quran.com via iframe: `https://quran.com/{surah_id}?startingVerse={ayah}`
- Auto-updates when reading point changes

### Right Panel (40%)
- Displays Maqasid data (surah objectives, thematic verse groups, and details)
- Data sourced from `quran_map_data.js`
- Syncs with the same surah as the left panel
- Independent browsing available (changing surah in the map dropdown won't affect the iframe)

### Map Toggle
- Header toggle button to show/hide the Maqasid panel
- When hidden, the left panel expands to full width
- State persisted in `localStorage`

### ⛶ Fullscreen Mode
- Fullscreen button in the header using the Fullscreen API
- Button icon changes to ✕ when in fullscreen mode

### 📱 Responsive Design
- Large screens (> 768px): side-by-side layout
- Small screens (< 768px): stacked vertically (left panel on top)

## File Structure

```
.
├── index.html            # Main HTML page
├── style.css             # All styles (split-panel, modal, responsive)
├── script.js             # Logic: SURAHS data, reading point, iframe, map, i18n
├── quran_map_data.js     # Maqasid data for all 114 surahs (TH/EN/MS)
├── README.md
```

## How to Use

### Getting Started
1. Open `index.html` in a web browser
2. The page loads Al-Fatihah verse 1 by default (left panel) with Maqasid data (right panel)

### Setting a Reading Point
1. Click the **Set** button in the header
2. Select a **Surah** from the dropdown
3. Enter the **Verse** number (max updates automatically)
4. Click **Save**
5. Both panels update to the selected surah and verse

### Managing the Maqasid Panel
- Click the toggle button to hide/show the right panel
- When hidden, the left panel expands to full width
- State is remembered across browser sessions

### Changing Language
- Select **TH** / **EN** / **MS** from the language dropdown in the map header
- The Maqasid content and UI labels switch immediately

### Fullscreen Mode
- Click **⛶** to enter fullscreen mode
- The button changes to **✕** — click to exit

### Reading the Quran
- The left panel shows quran.com for the selected surah and verse
- You can read, scroll, search, and listen to audio within the iframe

### Studying Maqasid
- The right panel displays Maqasid data for the current surah
- Includes: surah name, revelation type, thematic verse groupings, and detailed description
- Helps understand the overall structure and objectives of each surah

## Installation

Open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## Technology

| Item | Details |
|------|---------|
| HTML5 | Page structure |
| CSS3 | Flexbox layout, responsive design |
| JavaScript (ES6+) | All logic, no external dependencies |
| localStorage | Stores reading point, map visibility, language preference |
| quran.com | Embedded via iframe with `?startingVerse=` parameter |
| quran_map_data.js | Maqasid data (surah objectives and thematic verse groups) in Thai, English, and Malay |
