import React, { useMemo } from 'react';

import one from '../../assets/moises/1.png';
import two from '../../assets/moises/2.png';
import three from '../../assets/moises/3.png';
import four from '../../assets/moises/4.png';
import five from '../../assets/moises/5.png';
import six from '../../assets/moises/6.png';
import seven from '../../assets/moises/7.png';
import eight from '../../assets/moises/8.png';

import Game from '../../components/Game';

const First: React.FC = () => {
  const first = useMemo(
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

  return <Game data={first} />;
};
export default First;
