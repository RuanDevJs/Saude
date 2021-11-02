import styled, { keyframes } from "styled-components";

const Animate = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 20px, 0);
    }
`;


export const Container = styled.div`
    padding: 50px 0;
    margin-top: 160px;
    background-color: #f9f9f9;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 50px;
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

export const Subtitle = styled.p`
    font-size: 25px;
    text-align: center;
    max-width: 360px;
    margin: 20px auto 0 auto;
`;

export const Wrap = styled.div`
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Box = styled.div`
    opacity: 0;
    flex: 1;
    margin: 0 35px;
    padding: 35px;
    background: #ffffff;
    border-radius: 12px;
    filter: blur(0);

    &.active {
        filter: blur(1);
        opacity: 1;
        animation: ${Animate} 0.5s forwards;
        transition: 0.5s ease-in;
    }
`;

export const BoxTitle = styled.h3`
    font-size: 24px;

    &:after {
        content: "";
        display: block;
        width: 100px;
        height: 8px;
        border-radius: 50px;
        background-color: ${({ color }) => color};
        margin: 5px 0 20px 0;
    }
`;

export const BoxContent = styled.span`
    margin: 15px 0;
    font-size: 18px;
    line-height: 1.5em;
`;

export const BoxCTA = styled.a`
    display: block;
    text-align: center;
    width: 25%;
    padding: 12px;
    border-radius: 50px;
    margin: 25px 0;
    font-size: 18px;
    letter-spacing: 0.5px;
    background: #592bba;
    transition: 0.3s ease-out;
    cursor: pointer;

    &:hover {
        transition: 0.3s ease-in;
        background-color: #591bbc;
        color: #ffffff !important;
    }
`;

export const LinkArea = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled.a`
    display: block;
    margin: 25px 0;
    font-size: 18px;
    letter-spacing: 0.5px;
    transition: 0.3s ease-out;
    cursor: pointer;

    &:hover {
        transition: 0.3s ease-in;
        color: #591bbc !important;
    }
`;

