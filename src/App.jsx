import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

// bootstrap linkelés
import "./assets/styles/bootstrap.min.css";
import "./assets/scripts/bootstrap.min.js";

//saját css linkelés
import "./assets/styles/global.css";

//saját
// import "./assets/scripts/lang.js";

function App() {

  const [lang, setLang] = useState("hu");
  const translations = {

    // ── Common navigation ────────────────────────────────────────
    about: lang === "hu" ? "Rólam" : "About Me",
    contact: lang === "hu" ? "Kapcsolat" : "Contact",
    projects: lang === "hu" ? "Projektek" : "Projects",
    home: lang === "hu" ? "Kezdőlap" : "Home",
    welcome: lang === "hu" ? "Üdvözöllek az oldalon!" : "Welcome to the site!",
    or: lang === "hu" ? "vagy" : "or",
    menu: lang === "hu" ? "Menü" : "Menu",

    // ── ASCII art (kept identical – language‑independent) ────────
    ascii: lang === "hu" ?
` __  __            _   _                        ____                  _       _ _    
|  \\/  | __ _ _ __| |_(_)_ __   ___  ___ ____  |  _ \\  ___  _ __ ___ (_)_ __ (_) | __
| |\\/| |/ _\` | '__| __| | '_ \\ / _ \\/ __|_  /  | | | |/ _ \\| '_ \` _ \\| | '_ \\| | |/ /
| |  | | (_| | |  | |_| | | | |  __/ (__ / /   | |_| | (_) | | | | | | | | | | |   < 
|_|  |_|\\__,_|_|   \\__|_|_| |_|\\___|\\___/___|  |____/ \\___/|_| |_| |_|_|_| |_|_|_|\\_\\
`:
`____                  _       _ _       __  __            _   _                     
|  _ \\  ___  _ __ ___ (_)_ __ (_) | __  |  \\/  | __ _ _ __| |_(_)_ __   ___  ___ ____
| | | |/ _ \\| '_ \` _ \\| | '_ \\| | |/ /  | |\\/| |/ _\` | '__| __| | '_ \\ / _ \\/ __|_  /
| |_| | (_) | | | | | | | | | | |   <   | |  | | (_| | |  | |_| | | | |  __/ (__ / / 
|____/ \\___/|_| |_| |_|_|_| |_|_|_|\\_\\  |_|  |_|\\__,_|_|   \\__|_|_| |_|\\___|\\___/___|
`,
    // ── Intro / description ───────────────────────────────────────
    myName: lang === "hu" ? "Szia! A nevem" : "Hi! My name is",
    workshop: lang === "hu" ? "és ez a digitális műhelyem." : "and this is my digital workshop.",
    write: lang === "hu" ? "Írj be egy parancsot az alábbi terminálba. Például:"
      : "Type a command in the terminal below. For example:",
    noEsc: lang === "hu" ? "Nincs menekvés. A terminál örökre itt marad."
      : "There is no escape. The terminal will stay here forever.",

    description: lang === "hu"
      ? `Ez az én "portfólió" oldalam, amit ✨vibe-coding✨ módban, rengeteg koffeinnel, puszta unalomból raktam össze. (Valahogy működik.)
Ez egy kísérleti játszótér, ahol interaktív megoldásokon keresztül fedezheted fel, hogyan közelítem meg a kreatív kódolást.`
      : `This is my "portfolio" page, which I ✨vibe-coded✨ entirely just out of boredom with loads of caffeine. (Somehow, it works.)
It’s a small experimental playground where you can explore interactive ideas and see how I approach creative coding.`,

    // ── Error ───────────────────────────────────────
    "E404": lang === "hu" ? "404 oldal nem található" : "404 page not found",
    "goHome": lang === "hu" ? "kattints ide a főoldalhoz" : "click here to go home",

    // ── Projects ───────────────────────────────────────
    MyProjects: lang === "hu" ? "Egy pár projektem" : "Some of my projects",

    okj: lang === "hu" ? "Mestermunka - PecAdmin" : "Masterpiece - PecAdmin",
    okjDesc: lang === "hu"
      ? "Ez egy horgászversenyeknek a hirdetésére, illetve kezelésére szolgáló koplex rendszer."
      : "This is a complex system designed for the advertisement and management of fishing competitions.",

    okjWeb: lang === "hu" ? "Webes felület:" : "Web interface:",
    okjWebDesc: lang === "hu"
      ? " Egy <b>Laravel</b> weboldal, ami <b>Bootstrap</b> kertrendszerben lett felépítve. Ez az oldal szolgál az adott horgászversenyeknek a hirdetésére és jelentkezésére."
      : " A <b>Laravel</b> website built with the <b>Bootstrap</b> framework. This site serves to advertise fishing competitions and handle registrations.",

    okjApp: lang === "hu" ? "Alkalmazás:" : "Application:",
    okjAppDesc: lang === "hu"
      ? " Egy <b>C#</b> asztali alkalmazás, ami <b>WPF</b> keretrendszerben lett felépítve. Ez az alkalmazás szolgál az aktív versenyeknek a valós időben történő állásának a rögzítésére, illetve struktúrált Excel táblázatban is visszaadja az eredményeket."
      : " A <b>C#</b> desktop application built using the <b>WPF</b> framework. This application records the real‑time standings of active competitions and also exports the results into a structured Excel spreadsheet.",

    maszek: lang === "hu" ? "Maszek? - Szolárium vendég kezelő"
      : "Freelance? - Solarium Guest Manager",
    maszekDesc: lang === "hu"
      ? 'Egy Szoláriumnak egy "egyszerűbb" vendég kezelő rendszere.'
      : "A simple guest management system for a solarium.",
    maszekTechDesc: lang === "hu"
      ? "Egy <b>C#</b> asztali alkalmazás ami nyílván tartja a vendégeknek az alkalmait, bérleteit, illetve Email küldéssel lehet a vendégeket tájékoztatni aktuális információkról."
      : "A <b>C#</b> desktop application that keeps track of guests’ sessions and passes, and can send emails to notify them about current information.",

    bosch: lang === "hu" ? "Gyakornoki állás - Bosch" : "Internship - Bosch",
    boschDesc: lang === "hu" ? "Itt egy belsős weboldalt fejlszetek."
      : "Here I develop an internal website.",
    boschTechDesc: lang === "hu"
      ? "Egy <b>PHP</b> weboldalnak a fejlesztésében segítek a <strong>Bosch</strong>-nál ahol komplex formokért, illetve API‑kulcsal való adattovábbításért felelek."
      : "I assist in the development of a <b>PHP</b> website at <strong>Bosch</strong>, where I am responsible for complex forms and data transmission using API keys.",

    uniHotel: lang === "hu" ? "Egyetem - OOP" : "University - OOP",
    uniHotelDesc: lang === "hu"
      ? 'Ez a "nano" projekt volt az 2. félévi "Objektum Orientált Programozás" órámnak a záró feladata.'
      : "This was the final project for my 2nd semester \"Object‑Oriented Programming\" course.",
    uniHotelTechDesc: lang === "hu"
      ? 'Egy <b>Python</b> konzolos projekt ami egy hotelnek a szobafoglalásért felelt. Egy "vidám" és új megközelítéssel.'
      : "A <b>Python</b> console project that handled room reservations for a hotel, implemented with a fun and fresh approach.",

    // ── Contact info ───────────────────────────────────────────────
    contactMe: lang === "hu" ? "Elérhetsz a következő címen:" : "You can contact me at:",

    // ── Modal Code stuff | (not active) ──────────────────────────────
    modalTitle: lang === "hu" ? "Lépj be a móka zónába.." : "Enter the Fun Zone..",
    modalLabel: lang === "hu" ? "Találtál egy kódot? Írd be és nézd meg, mi változott!"
      : "Found a code? Enter it and see what changes!",
    modalInputPlaceholder: lang === "hu" ? "Írd ide a kódot..." : "Type the code here...",
    modalActedCodes: lang === "hu" ? "Aktivált kódok:" : "Activated codes:",
    modalNoCodes: lang === "hu" ? "Nincsenek aktivált kódok." : "No activated codes yet.",

    match: lang === "hu" ? "✅ Találat!" : "✅ Match found!",
    emptyMatch: lang === "hu" ? "⚠️ Kérlek, írj be valamit!" : "⚠️ Please enter something!",
    noMatch: lang === "hu" ? "❌ Nincs találat!" : "❌ No match found!",
    resetMatches: lang === "hu" ? "🔄 Minden kód visszaállítva." : "🔄 All codes reset.",
    check: lang === "hu" ? "Ellenőrzés" : "Check",
    reset: lang === "hu" ? "Nullázás" : "Reset",
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout translations={translations} lang={lang} onChangeLang={setLang} />}
      >
        {/* Nested routes az Outlet-be */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>

      <Route path="*" element={<NotFound translations={translations} />} />
    </Routes>
  );
}

export default App;