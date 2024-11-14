/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import markIcon from '../../assets/icons/mark.png';
import msg1 from '../../assets/images/message-1.png';
import msg2 from '../../assets/images/message-2.png';
import msg3 from '../../assets/images/message-3.png';

const mainStyle = css`
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

const lnbStyle = css`
  display: flex;
  flex-direction: column;
  width: 594px;
`;

const h1Style = css`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2.4px;
`;

const spanStyle = css`
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

const pStyle = css`
  color: var(--gray-600, #6a6a6a);
  font-family: 'Pretendard Variable';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 24px;
  padding-top: 20px;
`;

const rnbStyle = css`
  display: flex;
  flex-direction: column;
  width: 402px;
  position: relative; /* 부모 요소에 위치 설정 */
  margin-top: 50px;
`;

const imgStyle = css`
  position: absolute;
  opacity: 0;
  animation: fadeIn 0.5s forwards;

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
    to {
      opacity: 1;
    }
  }
`;

const Main = () => {
  return (
    <section css={mainStyle}>
      {/* 왼쪽 */}
      <div css={lnbStyle}>
        <img
          src={markIcon}
          alt=""
          css={css`
            width: 40.192px;
            height: 56.271px;
            flex-shrink: 0;
          `}
        />
        <h1 css={h1Style}>비개발자를 위한 협업 관리 도구</h1>
        <h1 css={h1Style}>
          <span css={spanStyle}>
            <span className="highlight">B</span>ranchify
          </span>{' '}
          입니다.
        </h1>
        <p css={pStyle}>
          개발자와 소통이 되지 않아 답답했던 과거는 이제 안녕! <br />
          이제는 우리 프로젝트의 진행상황과 내용을 제대로 이해할 시간이에요.
        </p>
      </div>
      {/* 오른쪽 */}
      <div css={rnbStyle}>
        <img src={msg1} alt="" css={imgStyle} />
        <img src={msg2} alt="" css={imgStyle} />
        <img src={msg3} alt="" css={imgStyle} />
      </div>
    </section>
  );
};

export default Main;
