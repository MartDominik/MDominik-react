import { useState, useEffect } from "react";

export default function ScrambleText({ text, speed = 50 }) {
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState(text);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=+<>,./?[{()}]!@#$%^&*~`\\|'.split('');

  useEffect(() => {
    let scrambleInterval = setInterval(() => {
      setDisplay((prev) => {
        return prev.split('').map((char, i) => {
          if (i < progress) return text[i]; // már felfedett
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('');
      });
    }, 1000 / 60);

    const revealInterval = setInterval(() => {
      setProgress((p) => {
        if (p < text.length) return p + 1;
        clearInterval(revealInterval);
        clearInterval(scrambleInterval);
        return p;
      });
    }, speed);

    return () => {
      clearInterval(revealInterval);
      clearInterval(scrambleInterval);
    };
  }, [progress, text, speed]);

  return <span>{display}</span>;
}
