import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: 80px;
    color: #fff;
  }
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin-top: 32px;
    a {
      background: #3785e9;
      padding: 16px 24px;
      border-radius: 20px;
      color: #fff;
      font-weight: bold;
      font-size: 32px;
    }
  }
`;
