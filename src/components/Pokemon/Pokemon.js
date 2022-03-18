import React from 'react';
import PropTypes from 'prop-types';
import { PokemonStyles } from './PokemonStyles';

export default function Pokemon({ details }) {
  return (
    <PokemonStyles type="button">
      <img
        src={`https://img.pokemondb.net/sprites/x-y/normal/${details.name}.png`}
        alt={details.name}
      />
      <span className="button-name">{details.name}</span>
    </PokemonStyles>
  );
}

Pokemon.propTypes = {
  details: PropTypes.object.isRequired,
};
