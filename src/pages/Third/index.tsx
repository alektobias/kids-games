import React, { useMemo } from 'react';

import one from '../../assets/allan_kardec/1.png';
import two from '../../assets/allan_kardec/2.png';
import three from '../../assets/allan_kardec/3.png';
import four from '../../assets/allan_kardec/4.png';
import five from '../../assets/allan_kardec/5.png';
import six from '../../assets/allan_kardec/6.png';
import seven from '../../assets/allan_kardec/7.png';
import eight from '../../assets/allan_kardec/8.png';
import Game from '../../components/Game';

const Third: React.FC = () => {
  const third = useMemo(
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

  return <Game data={third} />;
};
export default Third;
