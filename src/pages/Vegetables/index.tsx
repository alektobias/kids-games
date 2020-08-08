import React, { useMemo } from 'react';

import Abobora from '../../assets/vegetables/Abobora.svg';
import Berinjela from '../../assets/vegetables/Berinjela.svg';
import Brocolis from '../../assets/vegetables/Brocolis.svg';
import Cebola from '../../assets/vegetables/Cebola.svg';
import Cenoura from '../../assets/vegetables/Cenoura.svg';
import Cogumelo from '../../assets/vegetables/Cogumelo.svg';
import Maca from '../../assets/vegetables/Maca.svg';
import Tomate from '../../assets/vegetables/Tomate.svg';
import Game from '../../components/Game';

const Vegetables: React.FC = () => {
  const vegetables = useMemo(
    () => [
      { name: 'Abobora', image: Abobora },
      { name: 'Berinjela', image: Berinjela },
      { name: 'Brocolis', image: Brocolis },
      { name: 'Cebola', image: Cebola },
      { name: 'Cenoura', image: Cenoura },
      { name: 'Cogumelo', image: Cogumelo },
      { name: 'Maca', image: Maca },
      { name: 'Tomate', image: Tomate },
    ],
    []
  );

  return <Game data={vegetables} />;
};
export default Vegetables;
