/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../../pages/Home/Main/Main';
import Section2 from './Section2';
import Fy from './Fy';
import Feature from './Feature';
import BetaTestButton from './BetatestBanner/BetatestBanner';
import JoinForm from './JoinForm/JoinForm';
import { setShouldScrollToJoinForm } from '../../stores/store';

const homeStyle = css``;

const Home = () => {
  const dispatch = useDispatch();
  const shouldScrollToJoinForm = useSelector((state) => state.scroll.shouldScrollToJoinForm);
  const mainSectionRef = useRef(null);
  const joinFormSectionRef = useRef(null);

  useEffect(() => {
    if (shouldScrollToJoinForm && joinFormSectionRef.current) {
      joinFormSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setShouldScrollToJoinForm(false)); // 스크롤 완료 후 상태 초기화
    }
  }, [shouldScrollToJoinForm, dispatch]);

  const scrollToMainSection = () => {
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div css={homeStyle}>
      <div ref={mainSectionRef}>
        <Main />
      </div>
      <Section2 />
      <BetaTestButton />
      <Fy />
      <Feature />
      <div ref={joinFormSectionRef}>
        <JoinForm scrollToMain={scrollToMainSection} />
      </div>
    </div>
  );
};

export default Home;
