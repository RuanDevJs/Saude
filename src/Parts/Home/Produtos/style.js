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
    margin-left: 20px;
    align-self: flex-start;
    a{
        margin: 0 auto;
        background: white;
        color: #592BBA;
        border: 2px solid #592BBA;
    }

    .span {
        display: block;
        margin-top: 50px;
        line-height: 1.3em;
        font-weight: 300;
        font-size: 15px;
        color: #c2c2c2;
        letter-spacing: 1px;
    }
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

    &.active_option{
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
    padding: 6px;
    line-height: 1.5em;
`;

export const Select = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    aling-items: fles-start;
`;

export const SelectOpitions = styled.div`
    padding: 45px;
    margin-bottom: 20px;
    background: #fff;
    border: 2px solid #592bba;
    border-radius: 12px;
    color: #592bba;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor pointer;
    transition: 0.2s ease-out;

    &.active_menu{
        transition: 0.2s ease-in;
        background: #592bba;
        border: 0;
        color: #fff !important;

        svg {
            color: white;
        }
    }
`;


export const SelectTitle = styled.span`
    font-size: 20px;
    font-weight: 900;
    margin-left: 5px;
`;



