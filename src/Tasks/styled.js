import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
         display: none;
    `}
`;

export const Content = styled.span`
    letter-spacing: 0.5px;

    ${({ done }) => done && css`
        text-decoration: line-through;
        color: #888888;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(120, 65%, 35%);

        &:hover {
            background: hsl(120, 65%, 40%);
        }

        &:active {
            background: hsl(120, 65%, 45%);
        }
    `}

    ${({ remove }) => remove && css`
        background: hsl(0, 65%, 40%);

        &:hover {
            background: hsl(0, 65%, 45%);
        }

        &:active {
            background: hsl(0, 65%, 50%);
        }
    `}
`;