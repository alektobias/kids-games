import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Jogo da Memória</h1>
      <nav>
        <Link to="/animals">Reino Animal</Link>
        <Link to="/vegetables">Reino Vegetal</Link>
        <Link to="/minerals">Reino Mineral</Link>
      </nav>
    </Container>
  );
};

export default Home;
