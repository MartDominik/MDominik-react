import { useOutletContext } from "react-router-dom";
import Terminal from "./utils/Terminal";

export default function About() {

  const { translations, lang } = useOutletContext();

  return (
    <>
      <div className="title text-center">
        <h3>{translations.about}</h3>
      </div>
    <div className="terminalContent">
      <p className="text-center pt-5">{translations.write}<code>help</code></p>
      <Terminal lang={lang} />
    </div>
    </>
  );
}