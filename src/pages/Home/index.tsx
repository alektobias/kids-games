import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Jogo da Memória</h1>
      <nav>
        <Link to="/first">Primeira Revelação</Link>
        <Link to="/second">Segunda Revelação</Link>
        <Link to="/third">Terceira Revelação</Link>
      </nav>
    </Container>
  );
};

export default Home;
