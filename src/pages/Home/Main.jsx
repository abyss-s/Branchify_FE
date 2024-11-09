/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import markIcon from '../../assets/icons/mark.png';

const mainStyle = css`
  display: flex;
  flex-direction: column;
  width: 594px;
  height: 273px;
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

const Main = () => {
  return (
    <div css={mainStyle}>
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
  );
};

export default Main;
