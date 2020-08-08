import React, { useMemo } from 'react';

import Leao from '../../assets/animals/Leao.svg';
import Tartaruga from '../../assets/animals/Tartaruga.svg';
import Girafa from '../../assets/animals/Girafa.svg';
import Coruja from '../../assets/animals/Coruja.svg';
import Elefante from '../../assets/animals/Elefante.svg';
import Raposa from '../../assets/animals/Raposa.svg';
import Macaco from '../../assets/animals/Macaco.svg';
import Crocodilo from '../../assets/animals/Crocodilo.svg';
import Game from '../../components/Game';

const Animals: React.FC = () => {
  const animals = useMemo(
    () => [
      { name: 'Leao', image: Leao },
      { name: 'Tartaruga', image: Tartaruga },
      { name: 'Girafa', image: Girafa },
      { name: 'Coruja', image: Coruja },
      { name: 'Elefante', image: Elefante },
      { name: 'Raposa', image: Raposa },
      { name: 'Macaco', image: Macaco },
      { name: 'Crocodilo', image: Crocodilo },
    ],
    []
  );

  return <Game data={animals} />;
};
export default Animals;
