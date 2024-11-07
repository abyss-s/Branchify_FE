/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from './Header/Header';

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: azure; // test
`;

const Layout = () => {
  return (
    <>
      <Header />
      <div css={layoutStyle}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
