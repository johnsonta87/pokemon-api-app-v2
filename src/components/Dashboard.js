import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { useStateMachine } from 'little-state-machine';

// Hooks
import { usePokemons } from '../hooks';
import { updateDetails } from '../store/actions';

// Components
import Details from './Pokemon/Details/Details';
import PokemonList from './PokemonList/PokemonList';

export default function Dashboard() {
  // Global State
  const {
    state: {
      details: { stats },
    },
    actions,
  } = useStateMachine({ updateDetails });

  const { data: pokemons, isLoading } = usePokemons();

  useEffect(() => {
    actions.updateDetails({
      id: '',
      name: '',
      stats: {},
    });
  }, []);

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <Details />
      <PokemonList pokemons={pokemons.results} />
    </div>
  );
}
