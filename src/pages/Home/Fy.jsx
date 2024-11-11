/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import fyImage from '../../assets/images/fy.png';

const containerStyle = css`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    h1 {
        font-size: 24px;
    }
    p{
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
  font-family: 'Pretendard';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0.31px;
`;

const paragraphStyle = css`
  color: var(--Labels-Secondary, rgba(60, 60, 67, 0.6));
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.41px;
`;

const Fy = () => {
  return (
    <div css={containerStyle}>
      <img src={fyImage} alt="" />
      <div>
        <h1 css={titleStyle}>안녕하세요. 저는 ‘파이’에요!</h1>
        <p css={paragraphStyle}>
          파이는 여러분의 프로젝트를 관리해줄 똑똑하고 친절한
          ‘흰머리오목눈이’에요. <br />
          프로젝트에서 발생하는 변경사항은 파이가 매일 밤 정리해서 알려준답니다.
        </p>
      </div>
    </div>
  );
};

export default Fy;
