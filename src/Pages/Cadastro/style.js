import styled from "styled-components";

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    position: relative;
    top: -50px;
`;

export const Left = styled.div`
    flex: 1;
    background: #f3f2f2;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
`;

export const Right = styled.div`
    flex: 1;
    background: #592bba;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`;

export const Wrap = styled.div`
    padding: 10px;
`;

export const Title = styled.h1`
    padding: 10px 0;
    text-align: center;
    font-size: 32px;
    ${this}:after {
        content: "";
        display: block;
        width: 60px;
        height: 8px;
        border-radius: 50px;
        background-color: #78cdc9;
        margin: 2px auto;
    }
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    a {
        color: #592bba;
        background: #fff;
    }
`;

export const Item = styled.div`
    padding: 16px;
`;

export const Label = styled.div`
    padding: 0 0 5px 0;
    font-size: 18px;
    font-weight: 500;
    color: white;
`;

export const Input = styled.input`
    width: 260px;
    padding: 20px 15px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: #f2f2f2;

    font-size: 16px;
    font-weight: 700;
    color: #3B403F;
    letter-spacing: 1px;
    transition: 0.2s ease-out;

    &:hover {
        transition: 0.2s ease-in;
        background: #f9f9f9;
        box-shadow: 4px 4px 16px rgba(0,0,0,16%);
    }
`;
