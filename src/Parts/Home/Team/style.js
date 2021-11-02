import style from "styled-components";

export const Teams = style.section`
    padding: 50px 0;
    margin: 50px 0;
`;

export const Title = style.h1`
    text-align: center;
    font-size: 50px;

    ${this}:after {
        content: "";
        display: block;
        width: 160px;
        height: 8px;
        border-radius: 50px;
        background-color: #78cdc9;
        margin: 2px auto;
    }
`;

export const Subtitle = style.span`
    display: block;
    font-size: 25px;
    text-align: center;
    margin: 32px auto;
`;

export const Wrap = style.div`
    max-width: 960px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: ${(props) => props.isReverse ? "row-reverse" : "row"};
    gap: 20px;
`;

export const Image = style.img`
    display: block;
    max-width: 100%;
    height: 220px;
`;

export const TeamContent = style.div`
    flex: 2;
    background: #f9f9f9;
    padding: 20px 50px;
    border-radius: 12px;
    transition: 0.5s ease-out;
    cursor: pointer;

    &:hover{
        background: #f2f2f2;
        transition: 0.5s ease-in;
    }
`;

export const Name = style.h1`
    font-size: 32px;
`;

export const Profession = style.span`
    display: block;
    font-size: 20px;
    margin: 5px 0 10px 0;
`;

export const Description = style.div`
    font-size: 16px;
    line-height: 1.5em;
    margin: 10px 0;
`;
