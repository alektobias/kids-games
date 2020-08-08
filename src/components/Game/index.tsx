import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { Container, CardsContainer, Letters, Numbers, EndGame } from './styles';
import Card from '../Card';
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom';


interface Props {
  data: Array<{ image: string; name: string }>;
}

function shuffle(a: Array<{ image: string; name: string }>): Array<{ image: string; name: string }> {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Game: React.FC<Props> = ({ data }) => {
  const [selection, setSelection] = useState<
    Array<{ image: string; name: string; index: number }>
  >([]);
  const [corrects, setCorrects] = useState<number[]>([]);

  const gameCards = useMemo(() => {
    const cards = [...data, ...data];
    return shuffle(cards);
  }, [data]);

  const [endGame, setEndGame] = useState<boolean>(false)

  useEffect(() => {
    if(selection.length === 2) {
    
      if(selection[0].name === selection[1].name){
        setCorrects([...corrects, selection[0].index, selection[1].index ])
        setSelection([])
      } else {
        setTimeout(() => setSelection([]), 1200)
        
      }
    }
  }, [selection, corrects])

  useEffect(() => {
   if(corrects.length === 16) setEndGame(true) 
  }, [corrects])


  const handleClick = useCallback((data: {image: string; name: string, index: number}) => {
    if(!corrects.includes(data.index)) {
      if (selection[0]?.index !== data.index){
        return setSelection([...selection, data])
      }
     } 
  }, [selection, corrects])
  const selectedIndex = useMemo(() => selection.map(selected=> selected.index), [selection])

  return (
    <Container>
    
      <CardsContainer>
        {gameCards.map((animal, index) => (
          <div onClick={() => handleClick({...animal, index})} key={index}> 

          <Card data={animal} flip={false || corrects.includes(index) || selectedIndex.includes(index) }  />
          </div>
        ))}
      </CardsContainer>
      <Letters>
      <strong>A</strong>
        <strong>B</strong>
        <strong>C</strong>
        <strong>D</strong>
      </Letters>
      <Numbers>
        <strong>1</strong>
        <strong>2</strong>
        <strong>3</strong>
        <strong>4</strong>
      </Numbers>
      {endGame && 
      <>
      <EndGame width={window.innerWidth}
      height={window.innerHeight}>
        <h1>
          Parabéns, você ganhou!
        </h1>
        <nav>
        <Link to={window.location.pathname} onClick={() => window.location.reload()} >Recomeçar</Link>
        <Link to="/">Voltar para o menu</Link>
        </nav>
      </EndGame>
      <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
    /> </>}
      
    </Container>
  );
};

export default Game;
