import React, { useMemo } from 'react';

import one from '../../assets/atitudes-de-paz-2/1.png';
import two from '../../assets/atitudes-de-paz-2/2.png';
import three from '../../assets/atitudes-de-paz-2/3.png';
import four from '../../assets/atitudes-de-paz-2/4.png';
import five from '../../assets/atitudes-de-paz-2/5.png';
import six from '../../assets/atitudes-de-paz-2/6.png';

import Game from '../../components/Game';

const Second: React.FC = () => {
  const second = useMemo(
    () => [
      { name: '1', image: one },
      { name: '2', image: two },
      { name: '3', image: three },
      { name: '4', image: four },
      { name: '5', image: five },
      { name: '6', image: six },
    ],
    []
  );

  return <Game data={second} />;
};
export default Second;
