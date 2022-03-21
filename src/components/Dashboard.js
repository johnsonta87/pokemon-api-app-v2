import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { useStateMachine } from 'little-state-machine';

// Hooks
import { usePokemons } from '../hooks';
import { updateDetails, updateDashboard } from '../store/actions';

// Components
import Details from './Pokemon/Details/Details';
import PokemonList from './PokemonList/PokemonList';

export default function Dashboard() {
  // Global State
  const {
    state: {
      dashboard: { display },
    },
    actions,
  } = useStateMachine({ updateDetails, updateDashboard });

  const { data: pokemons, isLoading } = usePokemons();

  useEffect(() => {
    actions.updateDetails({
      id: '',
      name: '',
      stats: {},
      species: {},
      evolution: {},
    });

    actions.updateDashboard({
      display: true,
    });
  }, []);

  if (isLoading) return <CircularProgress />;

  return (
    <main>
      <Details />
      {display && <PokemonList pokemons={pokemons.results} />}
    </main>
  );
}
