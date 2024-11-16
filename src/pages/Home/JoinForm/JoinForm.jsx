/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
    containerStyle,
    titleStyle,
    spanStyle,
    boldtitle,
    formStyle,
    formTitleStyle,
    formRowStyle,
    labelStyle,
    inputStyle,
    errorStyle,
    buttonStyle,
    modalOverlayStyle,
    modalContentStyle,
    modalTitleStyle,
    modalTextStyle,
    closeButtonStyle,
    } from './JoinFormStyles.js';

    function JoinForm({ scrollToMain }) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const formRef = useRef(null);

    const validateEmail = (value) => {
        if (!value) {
        return '이메일은 필수 입력 요소입니다.';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
        return '유효한 이메일 형식이어야 합니다.';
        }
        return '';
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(validateEmail(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateEmail(email);

        if (validationError) {
        setError(validationError);
        } else {
        setError('');
        try {
            await axios.post('http://101.101.217.98:8080/api/branchify/beta-tester', { email });
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error submitting email:', error);
            setError('이메일 등록에 실패했습니다. 다시 시도해 주세요.');
        }
        }
    };

    const closeModal = () => {
        setEmail('');
        setIsModalOpen(false);
        scrollToMain();
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsFormVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
        );

        if (formRef.current) observer.observe(formRef.current);

        return () => {
        if (formRef.current) observer.unobserve(formRef.current);
        };
    }, []);

    return (
        <div css={containerStyle}>
        <h2 css={titleStyle}>
            혁신적인 프로젝트 관리 및 자동화 솔루션 서비스 <br />
            <span css={spanStyle}>
            <span className="highlight">B</span>ranchify
            </span>
            <span css={boldtitle}>베타 테스트에 지금 바로 신청하세요.</span>
        </h2>
        <div ref={formRef} css={formStyle}>
            <h3 css={formTitleStyle}>신청서</h3>
            <form onSubmit={handleSubmit}>
            <div css={formRowStyle}>
                <label css={labelStyle}>이메일</label>
                <input
                css={inputStyle}
                type="email"
                placeholder="이메일을 입력해주세요."
                value={email}
                onChange={handleEmailChange}
                />
            </div>
            {error && <div css={errorStyle}>{error}</div>}
            <button css={buttonStyle} type="submit">
                베타 테스트 신청하기
            </button>
            </form>
        </div>

        {isModalOpen && (
            <div css={modalOverlayStyle}>
            <div css={modalContentStyle}>
                <h3 css={modalTitleStyle}>신청완료🎉</h3>
                <p css={modalTextStyle}>작성해주신 이메일로 연락드릴 예정입니다!<br/>
                베타 테스트에 참여해주셔서 감사합니다.</p>
                <button css={closeButtonStyle} onClick={closeModal}>
                닫기
                </button>
            </div>
            </div>
        )}
        </div>
    );
}

export default JoinForm;
