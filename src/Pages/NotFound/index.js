import React from 'react';
import Lottie from "react-lottie";

import icon from "../../assets/lotties/64076-404-not-found-page.json";
import Header from '../../Components/Header';

import { _NotFound  } from './styles';

export default function NotFound() {
    return (
        <_NotFound>
            <Header />
            <Lottie
                options={{
                    autoplay: true,
                    animationData: icon,
                }}
                width={760}
                height={360}
            />
            <p>Página não encontrada :/</p>
        </_NotFound>
    )
}
