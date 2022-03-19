import React, { useEffect } from 'react';

import { useStateMachine } from 'little-state-machine';

// Hooks
import { usePokemonDetails } from '../../hooks';
import { updateDetails } from '../../store/actions';

import { PokemonInfo, SinglePokemonStyles } from './DetailsStyles';

export default function Details() {
  // Global State
  const {
    actions,
    state: {
      details: { id },
    },
  } = useStateMachine({ updateDetails });

  const { data: pokemon, isLoading } = usePokemonDetails(`pokemon/${id}`);

  useEffect(() => {
    if (pokemon && !isLoading) {
      actions.updateDetails({ data: pokemon });
    }
  }, [id]);

  return (
    <SinglePokemonStyles>
      <PokemonInfo>
        <div />
      </PokemonInfo>
    </SinglePokemonStyles>
  );
}
