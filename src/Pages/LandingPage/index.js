import React from "react";

import Header from "../../Components/Header";
import Faq from "../../Parts/Home/Faq";
import Intro from "../../Parts/Home/Intro";
import Intro2 from "../../Parts/Home/Intro2";
import Produto from "../../Parts/Home/Produtos";
import Team from "../../Parts/Home/Team";


export default function LandingPage() {
    return (
        <>
            <Header />
            <Intro />
            <Intro2 />
            <Team />
            <Faq />
            <Produto />
        </>
    );
}
