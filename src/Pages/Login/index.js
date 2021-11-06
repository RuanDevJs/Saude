import React from "react";
import {Helmet} from "react-helmet";

import Header from "../../Components/Header";
import Lottie from "react-lottie";

import icon from "../../assets/lotties/50124-user-profile.json";
import {
    Container,
    Form,
    Input,
    Item,
    Label,
    Left,
    Right,
    Title,
    Wrap,
} from "./style";
import Button from "../../Components/Button";

export default function Login() {
    return (
        <section id="login">
             <Helmet>
                <title>Saúde | Entrar</title>
                <meta name="description" content="Entrar" />
            </Helmet>
            <Header />
            <Container>
                <Left>
                    <Lottie
                        options={{
                            animationData: icon,
                            autoplay: true,
                        }}
                        width={500}
                        isClickToPauseDisabled={true}
                    />
                </Left>
                <Right>
                    <Wrap>
                        <Title className="fw-900 c-white">Login</Title>
                        <Form>
                            <Item>
                                <Label>CPF</Label>
                                <Input type="text" />
                            </Item>
                            <Item>
                                <Label>SENHA</Label>
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
