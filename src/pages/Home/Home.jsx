/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Main from './Main';
import Section2 from './Section2';
import Fy from './Fy';
import Feature from './Feature';

const homeStyle = css`

`;

const Home = () => {
  return (
    <div css={homeStyle}>
      <Main /> {/* 메인 서비스 타이틀 */}
      {/* 문제 인식 */}
      <Section2 /> {/* 기능 소개 */}
      <Fy /> {/* 파이 소개 */}
      <Feature /> {/* 기능 상세 소개 */}
    </div>
  );
};

export default Home;
