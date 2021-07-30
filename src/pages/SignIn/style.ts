import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 400px;
    height: 100vh;

    margin: 0 auto;

    display: flex;
    justify-content: center;
    flex-direction: column;
    img {
      width: 140px;
      height: 140px;

      border-radius: 50%;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      margin: 24px 0;
    }
  }
`;
