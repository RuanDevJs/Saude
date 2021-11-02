import React, { useEffect, useState } from "react";

import {
    Box,
    BoxContent,
    BoxCTA,
    BoxTitle,
    Container,
    Link,
    LinkArea,
    Subtitle,
    Title,
    Wrap,
} from "./styles";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Mail from "@material-ui/icons/Mail";

export default function Intro2() {
    useEffect(() => {
        const box = document.querySelectorAll(".box");

        window.addEventListener("scroll", (e) => {
            box.forEach((el, index) => {
                const distance = el.offsetTop;
                const currentScroll = window.pageYOffset;

                if (currentScroll > distance - 360) {
                    setTimeout(() => el.classList.add("active"), index * 100);
                }
            });
        });
    }, []);

    return (
        <Container>
            <Title className="fw-900 c-purple">Saúde</Title>
            <Subtitle className="fw-300 c-grey">
                Trazemos Soluções Simples Através De Tecnologia
            </Subtitle>
            <Wrap>
                <Box className="box">
                    <BoxTitle className="c-purple fw-700" color="#f2f2f2">
                        Conecte-Se Com A Gente
                    </BoxTitle>
                    <BoxContent className="c-grey fw-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit pariatur beatae sunt fugit ratione
                        ducimus, amet aliquid, repudiandae consectetur quasi
                        unde fugiat eaque eum ad doloribus hic optio
                        necessitatibus recusandae tempora tempore.
                    </BoxContent>
                    <LinkArea>
                        <Link className="c-purple fw-500">Redes Sociais </Link>
                        <KeyboardArrowRightIcon htmlColor="#592bba" />
                    </LinkArea>
                </Box>
                <Box className="box">
                    <BoxTitle className="c-purple fw-700" color="#78CDC9">
                        Saúde + Tecnologia
                    </BoxTitle>
                    <BoxContent className="c-grey fw-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit pariatur beatae sunt fugit ratione
                        ducimus, amet aliquid, repudiandae consectetur quasi
                        unde fugiat eaque eum ad doloribus hic optio
                        necessitatibus recusandae tempora tempore.
                    </BoxContent>
                    <BoxCTA href="#" className="c-white-secondary fw-500">
                        Contratar
                    </BoxCTA>
                </Box>
                <Box className="box">
                    <BoxTitle className="c-purple fw-700" color="#f2f2f2">
                        Newsletter
                    </BoxTitle>
                    <BoxContent className="c-grey fw-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit pariatur beatae sunt fugit ratione
                        ducimus, amet aliquid, repudiandae consectetur quasi
                        unde fugiat eaque eum ad doloribus hic optio
                        necessitatibus recusandae tempora tempore.
                    </BoxContent>
                    <LinkArea>
                        <Link className="c-purple fw-500">Entrar em Contato </Link>
                        <Mail htmlColor="#592bba" style={{
                            marginLeft: "5px"
                        }}/>
                    </LinkArea>
                </Box>
            </Wrap>
        </Container>
    );
}
