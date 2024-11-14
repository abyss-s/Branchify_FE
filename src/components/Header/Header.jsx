// src/components/Header/Header.jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logoImage from '../../assets/images/logo-small.png';
import HeaderButton from './HeaderButton';
import MenuBar from './MenuBar';

const headerStyle = css`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const logoStyle = css`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <div css={headerStyle}>
        {/* 로고 이미지 */}
        <div css={logoStyle}>
          <img src={logoImage} alt="Logo" width='210px'/>
        </div>
        {/* 네비게이션 메뉴바 */}
        <MenuBar />
        {/* 버튼 */}
        <HeaderButton text="지금 도입하러 가기 ->" />
      </div>
    </>
  );
};

export default Header;
