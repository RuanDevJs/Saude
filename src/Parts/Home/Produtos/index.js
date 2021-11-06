import React, { useEffect } from "react";
import {
    Container,
    Left,
    List,
    ListTitle,
    Menu,
    Option,
    Produtos,
    Right,
    Select,
    SelectOpitions,
    SelectTitle,
    Table,
    Title,
} from "./style";

import CheckCircle from "@material-ui/icons/CheckCircle";
import Cancel from "@material-ui/icons/Cancel";

import Button from "../../../Components/Button";

const data_mensal = [
    {
        title: "Sistema De Saúde Na Web",
        status: true,
    },
    {
        title: "Sistema De Saúde Mobile",
        status: false,
    },
    {
        title: "Sistema De Saúde Com Segurança Avançada",
        status: false,
    },
    {
        title: "Suporte 24 Horas",
        status: true,
    },
];

const data_anual = [
    {
        title: "Sistema De Saúde Na Web",
        status: true,
    },
    {
        title: "Sistema De Saúde Mobile",
        status: true,
    },
    {
        title: "Sistema De Saúde Com Segurança Avançada",
        status: true,
    },
    {
        title: "Suporte 24 Horas",
        status: true,
    },
];

export default function Produto() {
    useEffect(() => {
        const menu = document.querySelectorAll("[data-menu]");
        const tables = document.querySelectorAll("[data-table]");
        const options = document.querySelectorAll("[data-option]");

        tables[0].classList.add("active");
        menu[0].classList.add("active_menu");
        options[0].classList.add("active_option");

        function ActiveTable(index) {
            tables.forEach((el) => el.classList.remove("active"));
            menu.forEach((el) => el.classList.remove("active_menu"));
            options.forEach((el) => el.classList.remove("active_option"));

            tables[index].classList.add("active");
            menu[index].classList.add("active_menu");
            options[index].classList.add("active_option");
        }

        menu.forEach((el, index) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                ActiveTable(index);
            });
        });
    }, []);

    return (
        <Produtos>
            <Title className="fw-900 c-purple">Produtos</Title>
            <Container>
                <Left>
                    <Menu>
                        <Option className="fw-700" left data-option>
                            Mensal
                        </Option>
                        <Option className="fw-900" right data-option>
                            Anual
                        </Option>
                    </Menu>
                    <Table data-table>
                        {data_mensal.map(({ title, status }) => {
                            return (
                                <List key={title + "@2"}>
                                    <ListTitle className="c-grey fw-300">
                                        {title}
                                    </ListTitle>
                                    {status ? (
                                        <CheckCircle htmlColor="#592BBA" />
                                    ) : (
                                        <Cancel htmlColor="#F22738" />
                                    )}
                                </List>
                            );
                        })}
                        <Button>Assinar Já</Button>
                    </Table>
                    <Table data-table>
                        {data_anual.map(({ title, status }) => {
                            return (
                                <List key={title + "@1"}>
                                    <ListTitle className="c-grey fw-300">
                                        {title}
                                    </ListTitle>
                                    {status ? (
                                        <CheckCircle htmlColor="#592BBA" />
                                    ) : (
                                        <Cancel htmlColor="#F22738" />
                                    )}
                                </List>
                            );
                        })}
                        <Button>Assinar Já</Button>
                    </Table>
                </Left>
                <Right>
                    <Select>
                        <SelectOpitions data-menu>
                            <CheckCircle htmlColor="#592bba" />
                            <SelectTitle>Mensal</SelectTitle>
                        </SelectOpitions>
                        <SelectOpitions data-menu>
                            <CheckCircle htmlColor="#592bba" />
                            <SelectTitle>Anual</SelectTitle>
                        </SelectOpitions>
                    </Select>
                    <Button>Assinar</Button>
                    <span className="span">
                        Não encontrou o ideal pra você ? <br/>Entre em contato com: <br/><br/>
                        contato.salutem@hotmail.com
                    </span>
                </Right>
            </Container>
        </Produtos>
    );
}
