import React from 'react';
import Button from '../Button';

import { AccountCircle, LocalHospital, PersonPin } from '@material-ui/icons';

import icon from "../../assets/img/headers/Icon.svg";
import { Header, Container, Left, Img, Center, Nav, MenuLink, Right, Title, UserName, CloseTab } from './style';

export default function HeaderAuth() {
    return (
        <Header>
            <Container>
                <Left>
                    <Img src={icon} />
                </Left>
                <Center>
                    <Nav>
                        <MenuLink>
                            <AccountCircle htmlColor="#fff" />
                            <Title>Meus Dados</Title>
                        </MenuLink>
                        <MenuLink>
                            <LocalHospital htmlColor="#fff"/>
                            <Title>Consulta</Title>
                        </MenuLink>
                        <MenuLink>
                            <PersonPin htmlColor="#fff" />
                            <Title>Medicos</Title>
                        </MenuLink>
                    </Nav>
                </Center>
                <Right>
                    <Button>
                        Sair
                    </Button>
                </Right>
            </Container>
        </Header>
    )
}
