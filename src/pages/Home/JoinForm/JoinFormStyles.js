/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    height: 100vh;
    font-family: 'Pretendard';
    letter-spacing: 0.7;
`;

export const titleStyle = css`
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 20px;
    text-align: center;
    line-height: 1.5;
`;

export const spanStyle = css`
    font-family: 'EF_jejudoldam';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 5px;

    .highlight {
        color: var(--key, #f1502f); 
    }
`;

export const boldtitle = css`
    font-weight: bold;
    letter-spacing: 1;
`;

export const formStyle = css`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
    transition: opacity 0.5s ease, transform 0.5s ease;
`;

export const formTitleStyle = css`
    font-size: 18px;
    color: black;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

export const formRowStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
`;

export const labelStyle = css`
    font-size: 16px;
    color: black;
    margin-left: 30px;
    width: 80px;
    text-align: left;
`;

export const inputStyle = css`
    flex: 1;
    padding: 10px 0;
    font-size: 15px;
    border: none;
    border-bottom: 1px solid lightgray;
    outline: none;

    &::placeholder {
        color: lightgray;
    }

    &:focus {
        border-bottom-color: #f1502f;
    }
`;

export const errorStyle = css`
    color: red;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left: 80px;
    text-align: left;
    width: 100%;
    padding-left: 30px;
    `;

export const buttonStyle = css`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    color: white;
    background-color: #f1502f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: 'Pretendard';

    &:hover {
        background-color: #dd4526;
    }
`;

export const modalOverlayStyle = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const modalContentStyle = css`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
`;

export const modalTitleStyle = css`
    font-size: 20px;
    font-weight: bold;
    color: #f1502f;
    margin-bottom: 10px;
`;

export const modalTextStyle = css`
    font-size: 16px;
    font-weight: normal;
    color: black;
    margin-bottom: 8px;
    line-height : 1.5;
`;

export const closeButtonStyle = css`
    font-family: 'Pretendard';  
    margin-top: 10px;
    padding: 8px 20px;
    font-size: 17px;
    color: white;
    background-color: #f1502f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #dd4526;
    }
`;
