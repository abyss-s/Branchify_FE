/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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
        if (typeof value !== 'string') {
            return '문자열이어야 합니다.';
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
                setIsModalOpen(true); // 모달창 열기
                console.log('이메일 등록에 성공했습니다.', email);
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

    const containerStyle = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        height: 100vh;
        font-family: 'Pretendard';
        letter-spacing: 0.7;
    `;

    const titleStyle = css`
        font-size: 20px;
        font-weight: normal;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.5;
    `;

    const spanStyle = css`
        font-family: 'EF_jejudoldam';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-right: 5px;
        
        .highlight {
            color: var(--key, #f1502f);
        }
    `;

    const boldtitle = css`
        font-weight: bold;
        letter-spacing: 1;
    `;

    const formStyle = css`
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 400px;
        opacity: ${isFormVisible ? 1 : 0};
        transform: ${isFormVisible ? 'translateY(0)' : 'translateY(50px)'};
        transition: opacity 0.5s ease, transform 0.5s ease;
    `;

    const formTitleStyle = css`
        font-size: 18px;
        color: black;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    `;

    const formRowStyle = css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        width: 100%;
    `;

    const labelStyle = css`
        font-size: 16px;
        color: black;
        margin-left: 30px;
        width: 80px;
        text-align: left;
    `;

    const inputStyle = css`
        flex: 1;
        padding: 10px 0;
        font-size: 15px;
        border: none;
        border-bottom: 1px solid lightgray;
        outline: none;

        &::placeholder {
            color: lightgray;
        }

        &:focus {
            border-bottom-color: #f1502f;
        }
    `;

    const errorStyle = css`
        color: red;
        font-size: 14px;
        margin-top: 5px;
        margin-bottom: 10px;
        margin-left: 80px;
        text-align: left;
        width: 100%;
        padding-left: 30px;
    `;

    const buttonStyle = css`
        width: 100%;
        padding: 12px;
        font-size: 16px;
        color: white;
        background-color: #f1502f;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #dd4526;
        }
    `;

    const modalOverlayStyle = css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;

    const modalContentStyle = css`
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        width: 300px;
    `;

    const modalTitleStyle = css`
        font-size: 20px;
        font-weight: bold;
        color: #f1502f;
        margin-bottom: 10px;
    `;

    const closeButtonStyle = css`
        margin-top: 10px;
        padding: 8px 20px;
        font-size: 14px;
        color: white;
        background-color: #f1502f;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #dd4526;
        }
    `;

    return (
        <div css={containerStyle}>
            <h2 css={titleStyle}>
                혁신적인 프로젝트 관리 및 자동화 솔루션 서비스 <br />
                <span css={spanStyle}>
                    <span className="highlight">B</span>ranchify
                </span>
                <span css={boldtitle}>베타 테스터에 지금 바로 신청하세요.</span>
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
                        베타 테스터 신청하기
                    </button>
                </form>
            </div>

            {isModalOpen && (
                <div css={modalOverlayStyle}>
                    <div css={modalContentStyle}>
                        <h3 css={modalTitleStyle}>신청완료!</h3>
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
