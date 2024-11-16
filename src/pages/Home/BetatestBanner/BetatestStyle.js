/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    background-color: black;
    color: #ffffff;
    text-align: center;
    font-family: 'Pretendard';
    letter-spacing: 1px;
`;

export const title = css`
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
`;

export const boldText = css`
    font-weight: bold;
`;

export const testtext = css`
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 5px;
    margin-top: 40px;
    color: gray;
`;

export const timetext = css`
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 10px;
`;

export const buttonStyle = css`
    margin-top: 18px;
    padding: 12px 60px;
    font-size: 16px;
    font-weight: normal;
    color: #ffffff;
    background-color: #F1502F;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: 'Pretendard';

    &:hover {
        background-color: #dd4526;
    }
`;
