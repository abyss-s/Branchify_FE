/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const mainStyle = css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 50px;
    padding: 4rem 12rem;

    @media (max-width: 1440px) {
        padding: 2rem 6rem;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        h1 {
        font-size: 40px;
        }
        p {
        font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
    `;

    export const lnbStyle = css`
    display: flex;
    flex-direction: column;
    width: 594px;
    `;

    export const h1Style = css`
    color: #000;
    font-family: 'Pretendard Variable';
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -2.4px;
    `;

    export const spanStyle = css`
    font-family: 'EF_jejudoldam';
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -2.5px;
    & .highlight {
        color: var(--key, #f1502f);
    }
    `;

    export const pStyle = css`
    color: var(--gray-600, #6a6a6a);
    font-family: 'Pretendard Variable';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 24px;
    padding-top: 20px;
    `;

    export const rnbStyle = css`
    display: flex;
    flex-direction: column;
    width: 402px;
    position: relative;
    margin-top: 50px;
    `;

    export const imgStyle = css`
    position: absolute;
    opacity: 0;

    :nth-of-type(1) {
        width: 386px;
        animation-delay: 0s;
        z-index: 3;
        top: 0;
        left: 0;
    }
    :nth-of-type(2) {
        width: 331px;
        animation-delay: 0.5s;
        z-index: 2;
        top: 50px;
        left: 25px;
    }
    :nth-of-type(3) {
        width: 269px;
        animation-delay: 1s;
        z-index: 1;
        top: 100px;
        left: 50px;
    }

    @keyframes fadeIn {
        from {
        opacity: 0;
        transform: translateY(20px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }
`;
