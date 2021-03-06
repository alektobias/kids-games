import React from 'react';
import { Container, CardWrapper, FrontCard, BackCard } from './styles';
import Star from '../../assets/star.png'
interface Props {
  data: {
    image: string;
    name: string;
  };
  flip: boolean;
}

const Card: React.FC<Props> = ({ data, flip }) => {
  const { image, name } = data;

 
  return (
    <Container>
      <CardWrapper flip={flip} >
        <FrontCard>
        <img src={image} alt={name} />
        </FrontCard>
        <BackCard>
          <img src={Star} alt="start" />
        </BackCard>
      </CardWrapper>
    </Container>
  );
};

export default Card;
