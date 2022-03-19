import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FooterStyles } from './FooterStyles';

export default function Footer() {
  return (
    <FooterStyles>
      <Typography variant="body2" color="text.secondary" align="center">
        <strong>Data sources:</strong>{' '}
        <Link color="inherit" href="https://pokeapi.co" target="_blank">
          https://pokeapi.co
        </Link>
        <br />
        Built by{' '}
        <Link
          color="inherit"
          href="https://github.com/johnsonta87"
          target="_blank"
        >
          @johnsonta87
        </Link>
      </Typography>
    </FooterStyles>
  );
}
