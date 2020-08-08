import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 168px 4fr;
  grid-template-areas: "nothing letters"
                        "numbers game";
`;

export const CardsContainer = styled.div`
  grid-area: game;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(4, 200px);
  grid-gap: 16px;
  margin: 0 auto;
`;
export const Letters = styled.div`
margin: 0 52px;
  grid-area: letters;
  display: flex;
  justify-content: space-around;
  color: #fff;
  font-size: 64px;
`;
export const Numbers = styled.div`
  grid-area: numbers;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  color: #fff;
  font-size: 64px;
`;
export const EndGame = styled.div<{height: number; width: number;}>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  h1 {
    color: #3785e9;
    font-size: 80px;
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
`