# Appligyaan Institute — Official Web Platform

Official website and technical curriculum portal for **Appligyaan Institute**, a practical technical skill development center located in Barasat, West Bengal.

Official Domain: **[www.appligyaan.in](https://www.appligyaan.in)**

---

## Technical Programs

* **Robotics and Embedded Systems (`APPLI-RES-101`)**
  * Practical hardware workbench training with Arduino Uno and ESP32 microcontrollers.
  * Sensor interfacing (ultrasonic, infrared, motion, temperature), motor drivers, relays, and power electronics.
  * Embedded C/C++ programming, serial communication, and IoT smart automation capstone prototypes.

* **Building Drawing using AutoCAD 2D (`APPLI-CAD-102`)**
  * Professional civil engineering drafting and architectural floor plans.
  * Municipal sanction drawings conforming to West Bengal municipal building bye-laws.
  * Structural column grids, foundation detailing, section elevations, and client blueprint scale plotting.

---

## Technology Stack

* **Structure:** Semantic HTML5 with embedded Schema.org JSON-LD structured data (`EducationalOrganization`, `LocalBusiness`, `Course`, `FAQPage`).
* **Styling:** CSS3 utilizing Custom Properties for theme tokens, responsive flexbox/grid layouts, and sub-second load times.
* **Scripting:** Pure Vanilla JavaScript (ES6+) for the mobile drawer, accessible FAQ accordion, and client-side admissions inquiry dispatcher.
* **Assets:** Web-optimized local assets stored in `assets/`.

---

## Project Structure

```text
Appligyan/
├── assets/
│   ├── autocad-drawing.jpeg   # AutoCAD course preview
│   ├── hero-banner.jpeg       # Full-width hero banner
│   ├── logo.jpeg              # Official institute insignia
│   ├── logo.svg               # Scalable vector logo
│   └── robotics-lab.png       # Robotics hardware workbench preview
├── app.js                     # Client controller logic & WhatsApp dispatcher
├── index.html                 # Main website markup & Schema.org metadata
├── styles.css                 # Global stylesheet & design tokens
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```

---

## Local Development

To run the site locally using Python's built-in HTTP server:

```powershell
python -m http.server 3000
```

Open your browser and navigate to:
```text
http://localhost:3000
```

---

## Deployment (Vercel)

This project is pre-configured for static hosting on Vercel:

1. Deploy directly using the Vercel CLI:
   ```powershell
   npx vercel
   ```
2. Or connect this repository to your Vercel dashboard at [vercel.com/new](https://vercel.com/new).

---

## Campus & Contact

* **Address:** 12 No. Railgate, Lichutala, Barasat, North 24 Parganas, West Bengal – 700124, India
* **Helplines:** +91 72782 84166 / +91 70440 26278
* **Email:** appligyaan@gmail.com
* **Compliance Officer:** Mr. Abhradip Mitra
