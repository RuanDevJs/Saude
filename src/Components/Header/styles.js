import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    padding: 30px 60px;
`;

export const Wrapper = styled.div`
    margin: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 50px;
`;

export const Left = styled.div`
    flex: 1;
`;

export const Center = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Right = styled.div`
    flex: 1;
`;

export const Menu = styled.a`
    cursor: pointer;
    margin: 0 50px;
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignIn = styled(Link)`
    display: block;
    margin-right: 34px;
`;

export const Button = styled(Link)`
    border: 3px solid #592BBA;
    width: 174px;
    padding: 14px 23px;
    border-radius: 4px;
    transition: 0.2s ease-out;

    ${this}:hover{
        background: #592BBA;
        transition: 0.2s ease-in;
        color: #ffffff !important;
    }
`;


