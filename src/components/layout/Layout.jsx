import React from "react";
import Header from "./Header";
import HeaderButton from "../common/HeaderButton";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout({ translations, lang, onChangeLang }) {
    return (
        <>
            <HeaderButton />
            <div className="container-fluid">
                <div className="row">
                    <Header translations={translations} lang={lang} onChangeLang={onChangeLang} />
                    <div className="col-12 col-lg-9 bg-col2 pt-5 content-custom">
                        <Outlet context={{ translations, lang, onChangeLang }} /> {/* ide töltődik be a routolt content */}
                    </div>
                </div>
            </div>
            <Footer translations={translations} lang={lang} onChangeLang={onChangeLang} />
        </>
    );
}