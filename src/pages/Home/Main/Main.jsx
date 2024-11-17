/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { mainStyle, lnbStyle, h1Style, spanStyle, pStyle, rnbStyle, imgStyle } from './MainStyle.js';
import useVisibleAnimation from './useVisibleAnimation';
import markIcon from '../../../assets/icons/mark.png';
import msg1 from '../../../assets/images/message-1.png';
import msg2 from '../../../assets/images/message-2.png';
import msg3 from '../../../assets/images/message-3.png';

const Main = () => {
  const { imagesRef, visibleIndexes } = useVisibleAnimation();

  return (
    <section css={mainStyle}>
      {/* 왼쪽 */}
      <div css={lnbStyle}>
        <img
          src={markIcon}
          alt=""
          css={{
            width: '40.192px',
            height: '56.271px',
            flexShrink: 0,
          }}
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
        {[msg1, msg2, msg3].map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            ref={(el) => (imagesRef.current[index] = el)}
            css={[
              imgStyle,
              visibleIndexes.includes(index) &&
                css`
                  animation: fadeIn 0.5s forwards;
                `,
            ]}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
