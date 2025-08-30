import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer({ translations, lang, onChangeLang }) {
    return (
        <div className="offcanvas offcanvas-start" tabindex="-1" id="mobileSidebar" aria-labelledby="mobileSidebarLabel">
            <div className="offcanvas-header d-flex justify-content-between align-items-center">
                <h5 className="offcanvas-title" id="mobileSidebarLabel">{translations.menu}</h5>
                <button type="button" className="btn bezar" data-bs-dismiss="offcanvas" aria-label="Bezárás">✖</button>
            </div>
            <div className="offcanvas-body">
                <div className="text-center">
                    <h4>MartineczDominik@</h4>
                    <img src="https://github.com/MartDominik.png" alt="Profilkép" />
                    <div className="langSelect">
                        <p>
                            <a href="#" onClick={() => onChangeLang("hu")} className={lang === "hu" ? "fw-bold" : ""}>
                                Magyar
                            </a>{" "}
                            |{" "}
                            <a href="#" onClick={() => onChangeLang("en")} className={lang === "en" ? "fw-bold" : ""}>
                                English
                            </a>
                        </p>
                    </div>
                </div>

                <nav className="mt-4">
                    <Link to="/">{translations.home}</Link>
                    <Link to="/about">{translations.about}</Link>
                    <Link to="/projects">{translations.projects}</Link>
                </nav>

                <div className="social-icons-fixed">
                    <h6>{translations.contactMe}<br /><a className="emailLink" href="mailto:martdom85@gmail.com">martdom85@gmail.com</a></h6>
                    <div className="d-flex align-items-center my-2 w-100 justify-content-center socialHrWithText">
                        <hr className="m-0" />
                        <span className="mx-3">{translations.or}</span>
                        <hr className="m-0" />
                    </div>
                    <div className="icons">
                        <a href="https://www.instagram.com/mart_d0m/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook" target="_blank" rel="noreferrer"></i></a>
                        <a href="https://www.linkedin.com/in/dominikmartinecz/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/MartDominik" target="_blank"><i className="fab fa-github" rel="noreferrer"></i></a>
                        <a href="https://www.hackerrank.com/profile/martdom85" target="_blank" rel="noreferrer"><i className="fab fa-hackerrank"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
