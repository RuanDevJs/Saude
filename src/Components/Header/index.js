import React from "react";
import icon from "../../assets/img/icon.svg";

import { Link } from "react-router-dom";

import { Center, HeaderContainer, Left, Menu, Right, SignIn, Wrapper, Button, RightContainer } from "./styles";

export default function Header() {
    return (
        <HeaderContainer>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <img src={icon} alt="icon-saude"/>
                    </Link>
                </Left>
                <Center>
                    <Menu className="fs-20 c-purple-secondary fw-300" href="#">
                        Sobre
                    </Menu>
                    <Menu className="fs-20 c-purple-secondary fw-300" href="#">
                        Produtos
                    </Menu>
                    <Menu className="fs-20 c-purple-secondary fw-300" href="#">
                        Contato
                    </Menu>
                </Center>
                <Right>
                    <RightContainer>
                        <SignIn className="fs-24 fw-500 c-purple" to="/login">Login</SignIn>
                        <Button className="fs-24 fw-500 c-purple" to="/cadastro">CRIAR CONTA</Button>
                    </RightContainer>
                </Right>
            </Wrapper>
        </HeaderContainer>
    );
}
