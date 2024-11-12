/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function BetaTesteButton({ scrollToJoinForm }) {
    const containerStyle = css`
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

    const title = css`
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
    `;

    const boldText = css`
        font-weight: bold;
    `;

    const testtext = css`
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 5px;
        margin-top: 40px;
        color: gray;
    `;

    const timetext = css`
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 10px;
    `;

    const buttonStyle = css`
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

        &:hover {
            background-color: #dd4526;
            }
    `;

    return (
        <div css={containerStyle}>
        <h2 css={title}>
            그 여정을 함께 할 <span css={boldText}>베타 테스터를 모집합니다.</span>
        </h2>
        <p css={testtext}>베타 테스터 기간</p>
        <p css={timetext}>2024.11.25 - 2024.12.9</p>
        <button css={buttonStyle} onClick={scrollToJoinForm}>
            베타테스터 신청하러 가기
        </button>
        </div>
    );
}

export default BetaTesteButton;
