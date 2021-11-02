import style from "styled-components";

export const Faqs = style.section`
    padding: 50px;
    margin-top: 180px;
    background: #f9f9f9;
`;

export const Title = style.h1`
    text-align: center;
    font-size: 50px;

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

export const Container = style.div`
    max-width: 100%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Wrap = style.div`
    background: #ffffff;
    flex: 1 1 420px;
    padding: 22px;
    margin: 20px 0;
    border-radius: 12px;
`;

export const Wrap_Title = style.div`
    font-size: 24px;
    padding-bottom: 10px;
    padding: 20px 0;

    &::after{
        content: "";
        display: block;
        width: 100px;
        height: 5px;
        border-radius: 50px;
        background-color: #78CDC9;
    }
`;

export const Wrap_Subtitle = style.div`
    line-height: 1.5em;
`;
