import React, { useState, useEffect, useRef } from "react";

const Terminal = ({ lang }) => {
  const [commandBuffer, setCommandBuffer] = useState("");
  const [lines, setLines] = useState([]);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  // Parancsok
  const commandResponsesHu = {
    "": "",
    lang: "hu",
    help: "",
    clear: "__clear__",
    nev: "Martinecz Dominik",
    szuletes: "2003.11.24",
    vegzettseg:
      "Végzettségeim:\n  - Középiskola: Eötvös... - informatika szak\n  - OKJ: Hengersor... - Szoftverfejlesztő informatikus\n  - Egyetem: Gábor... - Mérnökinformatikus (jelenleg is ide járok.)\n  - Nyelvvizsga: ITOLC... - B2?",
    tapasztalat:
      "Tapasztalataim:\n  Projektjeim:\n    - OKJ: Mestermunka Laravel Weboldal + C# alkalmazás [itt megtekinthető]\n    - Maszek?: C# Szolárium vendég kezelő alkalmazás\n  Gyakornoki állásaim:\n    - Bosch: Weboldal fejlesztő (jelenleg is itt dolgozom.)",
    keszseg:
      "Webfejlesztés:\n  - PHP\n  - Laravel\n  - Bootstrap\n  - jQuerry\n \nAlkalmazás:\n  - C#\n  - Python",
    hobbi:
      "Hobbijaim:\n  - Webfejlesztéssel való kísérletezés\n  - Országúti biciklizés\n  - Horgászás",
  };

  const commandResponsesEn = {
    "": "",
    lang: "en",
    help: "",
    clear: "__clear__",
    name: "Dominik Martinecz",
    birth: "2003.11.24",
    education:
      "My Education:\n  - High School: Eötvös... - Computer Science specialization\n  - Vocational: Hengersor... - Software Developer\n  - University: Gábor... - Engineering Informatics (currently attending)\n  - Language Exam: ITOLC... - B2?",
    experience:
      "My Experience:\n  Projects:\n    - Vocational: Master Thesis Laravel Website + C# Application [viewable here]\n    - Freelance?: C# Solarium guest management application\n  Internships:\n    - Bosch: Web Developer (currently working here)",
    skill:
      "Web Development:\n  - PHP\n  - Laravel\n  - Bootstrap\n  - jQuery\n\nApplications:\n  - C#\n  - Python",
    hobbi:
      "My Hobbies:\n  - Experimenting with web development\n  - Road cycling\n  - Fishing",
  };

  // Help feltöltése
  const updateHelp = (obj) => {
    obj.help =
      obj.lang === "hu" ? "Elérhető parancsok:\n" : "Available commands:\n";
    obj.help += Object.keys(obj)
      .filter((key) => key !== "lang" && key !== "")
      .map((key) => "- " + key)
      .join("\n");
  };
  updateHelp(commandResponsesHu);
  updateHelp(commandResponsesEn);

  // Sor hozzáadása
  const appendLine = (content, isCommand = false) => {
    setLines((prev) => [...prev, { text: content, isCommand }]);
  };

  // Parancs futtatása
  const executeCommand = (cmd) => {
    appendLine(cmd, true);

    let response = "";
    if (lang === "en") {
      response = commandResponsesEn[cmd.toLowerCase()];
    } else if (lang === "hu") {
      response = commandResponsesHu[cmd.toLowerCase()];
    }

    if (response === "__clear__") {
      setLines([]);
    } else if (response) {
      response.split("\n").forEach((line) => appendLine(line));
    } else {
      if (cmd !== "") {
        if (lang === "en") {
          appendLine(
            `Error: '${cmd}' is not a valid command. Type 'help' to see the available options.`
          );
        } else {
          appendLine(
            `Hiba: '${cmd}' nem érvényes parancs. Írd be a 'help' parancsot a lehetőségekhez.`
          );
        }
      }
    }
    setCommandBuffer("");
  };

  // Input key kezelése
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(commandBuffer.trim());
      e.preventDefault();
    }
  };

  // Autoscroll
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div
      className="terminal-wrapper"
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      <div className="terminal-header">
        <span className="terminal-title">bash — MDominik@portfolio:~</span>
        <button
          className="close-button"
          data-bs-toggle="modal"
          data-bs-target="#noEscModal"
        >
          ✖
        </button>
      </div>
      <div className="terminal-container">
        <div id="terminal-output" className="terminal-output" ref={outputRef}>
          {lines.map((line, index) => (
            <div key={index} className="line">
              {line.isCommand && (
                <span className="prompt">MDominik@portfolio:~$ </span>
              )}
              {line.text}
            </div>
          ))}
          {/* Input sor */}
          <div className="line">
            <span className="prompt">MDominik@portfolio:~$ </span>
            <span id="command-input">{commandBuffer}</span>
            <input
              ref={inputRef}
              type="text"
              value={commandBuffer}
              onChange={(e) => setCommandBuffer(e.target.value)}
              onKeyDown={handleKeyDown}
              className="hidden-input"
              autoFocus
            />
            <span className="input-cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
