import { useOutletContext } from "react-router-dom";

export default function Home() {

    const { translations, lang } = useOutletContext();

    return (
        <div className="row home">
            <div className="row">
                <div className="col-12 text-center welcome">
                    <h1 className="">{translations.welcome}</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-xl-4 text-xl-end text-center mt-xl-3 intro">
                    <p className="">
                        {translations.myName}
                    </p>
                </div>

                <div className="col-12 col-xl-4">
                    <pre className="ascii-art">{translations.ascii}</pre>
                </div>

                <div className="col-12 col-xl-4 text-xl-start text-center mt-xl-3 intro">
                    <p className="">
                        {translations.workshop}
                    </p>
                </div>
            </div>
            <br />
            <div className="row justify-content-center homeDescription">
                <div className="col-12 text-center">
                    <h3 className="pt-5">{translations.description}</h3>
                </div>

            </div>
        </div>
    );
}
