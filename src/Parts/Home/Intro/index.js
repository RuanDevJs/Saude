import React from "react";
import style from "./style.module.css";

import Lottie from "react-lottie";

import Button from "../../../Components/Button";
import Icon from "../../../assets/lotties/icon-home.json";

export default function Intro() {
    return (
        <section id={style.intro}>
            <div className={style.intro_container}>
                <div>
                    <h1 className="fs-45 fw-900 c-purple">Revolucionar Sua Maneira<br />  De Conectar Com A Saúde</h1>
                    <p className="fs-20 fw-100 c-grey">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Button>Explorar</Button>
                </div>
                <Lottie
                    width={560}
                    height={560}
                    options={{
                        animationData: Icon,
                        autoplay: true
                    }}
                />
            </div>
        </section>
    );
}
