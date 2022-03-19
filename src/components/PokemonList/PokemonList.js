import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon/Pokemon';
import { PokemonGrid } from './PokemonListStyles';

export default function PokemonList({ pokemons }) {
  if (!pokemons) return null;

  return (
    <PokemonGrid>
      {pokemons.map((pokemon, index) => (
        <Pokemon key={pokemon.name} id={index + 1} details={pokemon} />
      ))}
    </PokemonGrid>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
