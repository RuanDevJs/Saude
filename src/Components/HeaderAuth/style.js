import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    padding: 10px;
    background: #592bba;
`;

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    flex: 1;
    padding: 5px;
`;

export const Img = styled.img`
    display: block;
    max-width: 100%;
`;

export const Center = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    aling-items: center;
`;

export const Nav = styled.ul`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuLink = styled.li`
    display: flex;
    align-items: center;
`;

export const Title = styled(Link)`
    font-size: 18px;
    font-weight: 700;
    margin-left: 4px;
    color: #f2f2f2;
    transition: 0.2s ease-out;

    &:hover {
        color: #c2c2c2;
        transition: 0.2s ease-in;
    }

`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
        width: 120px;
        padding: 10px;
        box-shadow: 2px 2px 16px rgba(0,0,0,16%);
    }
`;

