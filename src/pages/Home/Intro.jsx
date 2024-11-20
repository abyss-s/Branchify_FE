/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import intro from '../../assets/images/intro.png';

const containerStyle = css`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    margin-bottom: 200px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 6rem 0;

    img {
        width:50%;
    }

    @media (max-width: 768px) {
        padding: 4rem 1rem;
        h1 {
        font-size: 20px;
        }
        p {
        font-size: 16px;
        }
        img {
        width: 50%;
        }
    }
    `;

    const titleStyle = css`
        overflow: hidden;
        color: var(--Labels-Primary, #000);
        font-family: 'Pretendard-Bold';
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: 0.31px;
    `;

    const paragraphStyle = css`
    color: gray;
    font-family: 'Pretendard-Semibold';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.4px;
    text-align: center;
    `;

    const sectionStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
    `;

    const textStyle = css`
    color: black;
    font-family: 'Pretendard-Medium';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.4px;
    margin-bottom: 40px;
    `;

    const Feature = () => {
    return (
        <div css={containerStyle}>
            <h1 css={titleStyle}>혹시 팀원들과 소통하면서 불편함을 느끼신 적이 있나요?</h1>
            <p css={paragraphStyle}>
            Slack과 SaaS의 통합으로 소통과 협업의 새로운 기준을 만들어 보세요.
            </p>
            <div css={sectionStyle}>
                <img src={intro} alt="" />
                <p css={textStyle}> ‘왜 맨날 중요한 정보가 누락되고 <br/>
                같은 말을 다르게 이해해서 오해가 생기고<br/>
                서로의 맥락을 놓쳐 협업이 어긋나는 걸까?’</p>
            </div>
        </div>
    );
};

export default Feature;
