import { useOutletContext } from "react-router-dom";
import ScrambleText from "./utils/ScrambleText";

export default function NotFound({ translations }) {

    // const { translations, lang } = useOutletContext();

    return (
        <div className="content-error">
            {/* <div className="text-error" data-text={translations.E404}>{translations.E404}</div> */}
            <div className="text-error">
                <ScrambleText text={translations.E404} />
            </div>
            <div className="text-link-container">
                <a href="/home"><ScrambleText text={translations.goHome} /></a>
            </div>
        </div>
    );

}