/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';
import Main from './Main';
import Section2 from './Section2';
import Fy from './Fy';
import Feature from './Feature';
import BetaTesteButton from './BetatestBanner';
import JoinForm from './JoinForm';

const homeStyle = css`

`;

const Home = () => {
  const mainRef = useRef(null); 
  const joinFormRef = useRef(null); 

  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToJoinForm = () => {
    if (joinFormRef.current) {
      joinFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div css={homeStyle}>
      <div ref={mainRef}>
        <Main /> {/* 메인 서비스 타이틀 */}
      </div>
      <Section2 /> {/* 기능 소개 */}
      <BetaTesteButton scrollToJoinForm={scrollToJoinForm} /> {/* 베타 테스트 배너 */}
      <Fy /> {/* 파이 소개 */}
      <Feature /> {/* 기능 상세 소개 */}
      <div ref={joinFormRef}>
        <JoinForm scrollToMain={scrollToMain} /> {/* 베타 테스트 참여 폼 */}
      </div>
    </div>
  );
};

export default Home;
