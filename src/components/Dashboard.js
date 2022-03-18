import React from 'react';
import usePokemons from '../hooks/usePokemons';
import PokemonList from './PokemonList/PokemonList';

export default function Dashboard() {
  const { data: pokemons, isLoading, error } = usePokemons();

  if (isLoading) return null;

  return (
    <div>
      <PokemonList pokemons={pokemons.results} />
    </div>
  );
}
