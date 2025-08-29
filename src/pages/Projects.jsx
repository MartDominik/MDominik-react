import { useOutletContext } from "react-router-dom";

export default function Projects() {

  const { translations, lang } = useOutletContext();

  return (
    <>
      <div className="title text-center">
        <h3>{translations.MyProjects}</h3>
      </div>
      <div className="container py-5 pj-container">
        <div className="accordion" id="cardAccordion">
          <div className="accordion-item custom-card">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed custom-card-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                {translations.okj}
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#cardAccordion">
              <div className="accordion-body">
                <p>{translations.okjDesc}</p>
                <strong>{translations.okjWeb}</strong><p dangerouslySetInnerHTML={{ __html: translations.okjWebDesc }} />
                <strong>{translations.okjApp}</strong><p dangerouslySetInnerHTML={{ __html: translations.okjAppDesc }} />
              </div>
            </div>
          </div>

          <div className="accordion-item custom-card">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed custom-card-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                {translations.maszek}
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#cardAccordion">
              <div className="accordion-body">
                <p dangerouslySetInnerHTML={{ __html: translations.maszekDesc }} />
                <p dangerouslySetInnerHTML={{ __html: translations.maszekTechDesc }} />
              </div>
            </div>
          </div>

          <div className="accordion-item custom-card">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed custom-card-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                {translations.bosch}
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#cardAccordion">
              <div className="accordion-body">
                <p dangerouslySetInnerHTML={{ __html: translations.boschDesc }} />
                <p dangerouslySetInnerHTML={{ __html: translations.boschTechDesc }} />
              </div>
            </div>
          </div>

          <div className="accordion-item custom-card">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed custom-card-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                {translations.uniHotel}
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#cardAccordion">
              <div className="accordion-body">
                <p dangerouslySetInnerHTML={{ __html: translations.uniHotelDesc }} />
                <p dangerouslySetInnerHTML={{ __html: translations.uniHotelTechDesc }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  );
}