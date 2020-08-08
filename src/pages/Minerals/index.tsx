import React, { useMemo } from 'react';

import Ametista from '../../assets/minerals/Ametista.svg';
import Bronze from '../../assets/minerals/Bronze.svg';
import Diamante from '../../assets/minerals/Diamante.svg';
import Esmeralda from '../../assets/minerals/Esmeralda.svg';
import Ouro from '../../assets/minerals/Ouro.svg';
import Prata from '../../assets/minerals/Prata.svg';
import Ruby from '../../assets/minerals/Ruby.svg';
import Safira from '../../assets/minerals/Safira.svg';
import Game from '../../components/Game';

const Minerals: React.FC = () => {
  const minerals = useMemo(
    () => [
      { name: 'Ametista', image: Ametista },
      { name: 'Bronze', image: Bronze },
      { name: 'Diamante', image: Diamante },
      { name: 'Esmeralda', image: Esmeralda },
      { name: 'Ouro', image: Ouro },
      { name: 'Prata', image: Prata },
      { name: 'Ruby', image: Ruby },
      { name: 'Safira', image: Safira },
    ],
    []
  );

  return <Game data={minerals} />;
};
export default Minerals;
