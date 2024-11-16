/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
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

function BetaTestButton({ scrollToJoinForm }) {
    const buttonRef = useRef(null);
    const isVisible = useVisibilityObserver(buttonRef);

    return (
        <div css={containerStyle}>
            <h2 css={title}>
                우리가 일하는 방식,<br />그 여정을 함께 할 <span css={boldText}>베타 테스터를 모집합니다.</span>
            </h2>
            <p css={testtext}>베타 테스트 기간</p>
            <p css={timetext}>2024.11.25 - 2024.12.9</p>
            <button
                css={[buttonStyle, isVisible && floatingAnimation]}
                ref={buttonRef}
                onClick={scrollToJoinForm}
            >
                베타테스트 신청하러 가기
            </button>
        </div>
    );
}

export default BetaTestButton;
