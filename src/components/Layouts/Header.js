import React from 'react';
import Container from '@mui/material/Container';
import { HeaderStyles } from './HeaderStyles';

export default function Header() {
  return (
    <HeaderStyles>
      <Container>
        <h1>Kanto Pokedex App</h1>
        <p>An app to view information on each pokemon</p>
      </Container>
    </HeaderStyles>
  );
}
