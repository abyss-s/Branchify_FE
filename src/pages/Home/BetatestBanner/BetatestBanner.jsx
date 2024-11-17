/** @jsxImportSource @emotion/react */
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  containerStyle,
  title,
  boldText,
  testtext,
  timetext,
  buttonStyle,
  floatingAnimation,
} from './BetatestStyle.js';
import useVisibilityObserver from './useVisibilityObserver';
import { setShouldScrollToJoinForm } from '../../../stores/store.js';

function BetaTestButton() {
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const isVisible = useVisibilityObserver(buttonRef); // 버튼 가시성 확인

  const handleClick = () => {
    dispatch(setShouldScrollToJoinForm(true));
  };

  return (
    <div css={containerStyle}>
      <h2 css={title}>
        우리가 일하는 방식,
        <br />그 여정을 함께 할{' '}
        <span css={boldText}>베타 테스터를 모집합니다.</span>
      </h2>
      <p css={testtext}>베타 테스트 기간</p>
      <p css={timetext}>2024.11.25 - 2024.12.9</p>
      <button
        css={[buttonStyle, isVisible && floatingAnimation]}
        ref={buttonRef}
        onClick={handleClick}
      >
        베타테스트 신청하러 가기
      </button>
    </div>
  );
}

export default BetaTestButton;
