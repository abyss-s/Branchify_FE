/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import feature2 from '../../assets/images/feature-2.png';

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
    width:60%;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
    img {
      width: 95%;
    }
  }
`;

const paragraphStyle = css`
  color: black;
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin-bottom: 30px;
  text-align: center;
`;

const Feature = () => {
  return (
    <div css={containerStyle}>
      <p css={paragraphStyle}>
      Slack에서 이모지 하나만 달아도 한번에 Jira와 Notion에 이슈 생성!<br />
      파이와 함께라면 더 이상 번거롭게 일할 필요가 없어요. 🫢
      </p>
      <img src={feature2} alt="" />
    </div>
  );
};

export default Feature;
