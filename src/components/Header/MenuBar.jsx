// src/components/MenuBar/MenuBar.jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const menuStyle = css`
  display: flex;
  gap: 20px;
  color: var(--gray-600, #6a6a6a);
  text-align: center;
  font-family: 'Pretendard-Bold';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  > li {
    padding: 5px 10px;
    :hover {
      color: var(--gray-900, #1a1a1a);
      cursor: pointer;
    }
  }
`;

const MenuBar = () => {
  return (
    <ul css={menuStyle}>
      <li>서비스 소개</li>
      <li>가격</li>
    </ul>
  );
};

export default MenuBar;
