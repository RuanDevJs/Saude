import React from "react";
import {
    Faqs,
    Title,
    Container,
    Wrap,
    Wrap_Title,
    Wrap_Subtitle,
} from "./style";

import icon from "../../../assets/img/faq/icon.svg";
import { Link, LinkArea } from "../Intro2/styles";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const faqs = [
    {
        title: "Conecte-Se Com A Gente",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title: "Conecte-Se Com A Gente",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title: "Conecte-Se Com A Gente",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title: "Conecte-Se Com A Gente",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
        title: "Conecte-Se Com A Gente",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
];

export default function Faq() {
    return (
        <Faqs>
            <Title className="fw-900 c-purple">FAQ</Title>
            <Container>
                <Wrap style={{ backgroundColor: "transparent" }}>
                    <Wrap_Title className="fs-32 fw-900 c-grey">
                        System.<span className="fw-900 c-purple">Saúde</span>
                    </Wrap_Title>
                    <Wrap_Subtitle className="fw-300 fs-16 c-grey">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                    </Wrap_Subtitle>
                </Wrap>
                {faqs.map(({ title, subtitle }, index) => {
                    return (
                        <Wrap style={{alignSelf: "flex-end"}} key={index}>
                            <img src={icon} alt="icon" />
                            <Wrap_Title className="fw-700 c-purple">
                                {title}
                            </Wrap_Title>
                            <Wrap_Subtitle className="fw-300 fs-16 c-grey">
                                {subtitle}
                            </Wrap_Subtitle>
                            <LinkArea>
                        <Link className="c-purple fw-500">Redes Sociais </Link>
                        <KeyboardArrowRightIcon htmlColor="#592bba" />
                    </LinkArea>
                        </Wrap>
                    );
                })}
            </Container>
        </Faqs>
    );
}
