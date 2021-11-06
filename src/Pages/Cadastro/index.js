import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../Components/Header";
import Lottie from "react-lottie";

import icon from "../../assets/lotties/68312-login.json";

import { Container, Form, Input, Item, Label, Left, Right, Title, Wrap } from "./style";
import Button from "../../Components/Button";


export default function Cadastro() {
    return (
        <section id="cadastro">
            <Helmet>
                <title>Saúde | Cadastrar</title>
                <meta name="description" content="Crie sua conta" />
            </Helmet>
            <Header />
            <Container>
                <Left>
                    <Lottie
                        options={{
                            animationData: icon,
                            autoplay: true,
                        }}
                        isClickToPauseDisabled={true}
                        width={500}
                    />
                </Left>
                <Right>
                    <Wrap>
                        <Title className="fw-900 c-white">
                            Cadastro
                        </Title>
                        <Form>
                            <Item>
                                <Label>
                                    CPF
                                </Label>
                                <Input type="text"/>
                            </Item>
                            <Item>
                                <Label>
                                    Nome Completo
                                </Label>
                                <Input type="text" />
                            </Item>
                            <Item>
                                <Label>
                                    Email
                                </Label>
                                <Input type="email" />
                            </Item>
                            <Item>
                                <Label>
                                    SENHA
                                </Label>
                                <Input type="password" />
                            </Item>
                            <Button>Entrar</Button>
                        </Form>
                    </Wrap>
                </Right>
            </Container>
        </section>
    );
}
