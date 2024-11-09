/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Main from './Main';

const homeStyle = css`
  padding: 2rem 10rem;
`;

const Home = () => {
  return (
    <div css={homeStyle}>
      <Main />
    </div>
  );
};

export default Home;
