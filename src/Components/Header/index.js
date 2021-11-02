import React from "react";
import icon from "../../assets/img/icon.svg";
import { Center, HeaderContainer, Left, Menu, Right, SignIn, Wrapper, Button, RightContainer } from "./styles";

export default function Header() {
    return (
        <HeaderContainer>
            <Wrapper>
                <Left>
                    <img src={icon} alt="icon-saude"/>
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
                        <SignIn className="fs-24 fw-500 c-purple" href="#">Login</SignIn>
                        <Button className="fs-24 fw-500 c-purple" href="#">CRIAR CONTA</Button>
                    </RightContainer>
                </Right>
            </Wrapper>
        </HeaderContainer>
    );
}
