import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background: none;
`;

export const CardWrapper = styled.div<{ flip: boolean }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  transform: ${props => (props.flip ? 0 : 'rotateY( 180deg)')};
`;

export const FrontCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  img {
    user-select: none;
    height: 80%;
  }
`;

export const BackCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #fafafa;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
`;
