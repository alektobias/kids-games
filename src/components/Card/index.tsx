import React, { useState, useCallback } from 'react';
import { Container, CardWrapper, FrontCard, BackCard } from './styles';

interface Props {
  data: {
    image: string;
    name: string;
  };
  flip: boolean;
}

const Card: React.FC<Props> = ({ data, flip }) => {
  // const [flip, setFlip] = useState(initialFlip);
  const { image, name } = data;

  // const handleClick = useCallback(() => {
  //   if(initialFlip) return
  //   setFlip(!flip)
  // }, [flip])

  return (
    <Container>
      <CardWrapper flip={flip} >
        <FrontCard>
          <img src={image} alt={name} />
        </FrontCard>
        <BackCard>
          <p>trás</p>
        </BackCard>
      </CardWrapper>
    </Container>
  );
};

export default Card;
