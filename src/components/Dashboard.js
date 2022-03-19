import React, { useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';

// Hooks
import { usePokemons } from '../hooks';
import { updateDetails } from '../store/actions';

// Components
import Details from './Pokemon/Details';
import PokemonList from './PokemonList/PokemonList';

export default function Dashboard() {
  // Global State
  const { actions } = useStateMachine({ updateDetails });

  const { data: pokemons, isLoading } = usePokemons();

  useEffect(() => {
    actions.updateDetails({
      id: '',
      name: '',
      stats: {},
    });
  }, []);

  if (isLoading) return null;

  return (
    <div>
      <Details />
      <PokemonList pokemons={pokemons.results} />
    </div>
  );
}
