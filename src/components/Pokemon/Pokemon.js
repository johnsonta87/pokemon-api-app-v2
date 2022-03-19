import React from 'react';
import PropTypes from 'prop-types';

import { useStateMachine } from 'little-state-machine';
import { updateDetails } from '../../store/actions';

import { PokemonButton } from './PokemonStyles';

export default function Pokemon({ id, details }) {
  // Global State
  const { actions } = useStateMachine({ updateDetails });

  const handleClick = (e) => {
    e.preventDefault();
    actions.updateDetails({ id, name: details.name });
  };

  return (
    <PokemonButton type="button" onClick={handleClick}>
      <img
        src={
          `https://projectpokemon.org/images/normal-sprite/${details.name}.gif` ||
          `https://img.pokemondb.net/sprites/x-y/normal/${details.name}.png`
        }
        alt={details.name}
      />
      <span className="button-name">{details.name}</span>
    </PokemonButton>
  );
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  details: PropTypes.object.isRequired,
};
