/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setScrollToJoinForm } from '../../stores/store';
import Main from './Main';
import Section2 from './Section2';
import Fy from './Fy';
import Feature from './Feature';
import BetaTestBanner from './BetatestBanner/BetatestBanner';
import JoinForm from './JoinForm/JoinForm';

const homeStyle = css``;

const Home = () => {
  const dispatch = useDispatch();
  const mainSectionRef = useRef(null);
  const joinFormSectionRef = useRef(null);

  useEffect(() => {
    const scrollToJoinForm = () => {
      if (joinFormSectionRef.current) {
        joinFormSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    dispatch(setScrollToJoinForm(scrollToJoinForm)); // 스크롤 함수 Redux에 등록
  }, [dispatch]);

  const scrollToMainSection = () => {
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div css={homeStyle}>
      <div ref={mainSectionRef}>
        <Main /> {/* 메인 서비스 타이틀 */}
      </div>
      <Section2 /> {/* 기능 소개 */}
      <BetaTestBanner /> {/* 베타 테스트 배너 */}
      <Fy /> {/* 파이 소개 */}
      <Feature /> {/* 기능 상세 소개 */}
      <div ref={joinFormSectionRef}>
        <JoinForm scrollToMain={scrollToMainSection} />{' '}
        {/* 베타 테스트 참여 폼 */}
      </div>
    </div>
  );
};

export default Home;
