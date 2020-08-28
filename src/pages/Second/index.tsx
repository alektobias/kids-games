import React, { useMemo } from 'react';

import one from '../../assets/jesus/1.png';
import two from '../../assets/jesus/2.png';
import three from '../../assets/jesus/3.png';
import four from '../../assets/jesus/4.png';
import five from '../../assets/jesus/5.png';
import six from '../../assets/jesus/6.png';
import seven from '../../assets/jesus/7.png';
import eight from '../../assets/jesus/8.png';

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
      { name: '7', image: seven },
      { name: '8', image: eight },
    ],
    []
  );

  return <Game data={second} />;
};
export default Second;
