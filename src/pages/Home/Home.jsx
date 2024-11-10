/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Main from './Main';

const homeStyle = css`
  padding: 4rem 12rem;

  @media (max-width: 1440px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Home = () => {
  return (
    <div css={homeStyle}>
      <Main />
    </div>
  );
};

export default Home;
