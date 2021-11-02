import styled, { keyframes } from "styled-components";

export const Animate = keyframes`
    from{
        opacity: 0;
        transform: translate3d(0,0,0);
    }
    to{
        opacity: 1;
        transform: translate3d(20px,0,0);
    }
`;

export const Produtos = styled.section`
    padding: 50px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    margin-bottom: 50px;

    &::after{
        content: "";
        display: block;
        width: 120px;
        height: 10px;
        margin: 0 auto;
        border-radius: 50px;
        background-color: #78CDC9;
    }
`;

export const Container = styled.div`
    max-width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Left = styled.div`
   flex: 1;
   padding: 30px;
   background: #f9f9f9;
   border-radius: 12px;
   box-shadow: 1px 1px 1px rgba(0,0,0,1%);
   transition: 0.5s ease-out;

   &:hover{
       box-shadow: 6px 6px 16px rgba(0,0,0,16%);
       transition: 0.5s ease-in;
   }
`;

export const Right = styled.div`
    flex: 1;
    padding: 20px;
    background: #f9f9f9;
    margin-left: 20px;
`;

export const Menu = styled.div`
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    border-radius: 50px;

    &:hover{
        background: #f2f2f2;
        transition: 0.5s ease-in;
    }
`;

export const Option = styled.h2`
    font-size: 20px;
    letter-spacing: 0.8px;
    width: 50%;
    padding: 20px 15px;
    border-radius: 50px;
    color: #c2c2c2;
    cursor: pointer;

    &.active_menu{
        background: #592BBA !important;
        color: #ffffff;
        transition: 0.5s ease-out;
    }

`;

export const Table = styled.ul`
    margin-top: 5px;
    padding: 20px;
    display: none;
    flex-flow: wrap column;
    align-items: fles-start;
    transition: 0.5s ease-out;

    &.active {
        display: flex;
        animation: ${Animate} 0.5s forwards;
    }
`;

export const List = styled.li`
    margin-bottom: 20px;
    border-bottom: 2px solid #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ListTitle = styled.span`
    display: block;
    padding: 20px 0;
    font-size: 18px;
`;
