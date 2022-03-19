import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { useStateMachine } from 'little-state-machine';

// Hooks
import { usePokemonDetails } from '../../../hooks';
import { updateDetails } from '../../../store/actions';

import { PokemonInfo, SinglePokemonStyles } from './DetailsStyles';
import DetailsHeader from './DetailsHeader';

export default function Details() {
  // Global State
  const {
    actions,
    state: {
      details: { id, stats },
    },
  } = useStateMachine({ updateDetails });

  const { data: pokemon, isLoading } = usePokemonDetails(`pokemon/${id}`);

  useEffect(() => {
    if (id && pokemon && !isLoading) {
      actions.updateDetails({ stats: pokemon });
    }
  }, [id, isLoading]);

  if (isLoading) return <CircularProgress />;

  return (
    <SinglePokemonStyles>
      <PokemonInfo>
        <DetailsHeader stats={stats} />

        <span className="above-poke-tabs" />
        <div className="pokemon-tabs-wrapper">
          <div>
            <div className="pokemon-tabs">
              <div types={stats?.types} />

              <div species={stats?.species} />
              <div details={stats?.data} species={stats?.species} />
              <div stats={stats} />

              <div species={stats?.species} />
            </div>
          </div>
        </div>
      </PokemonInfo>
    </SinglePokemonStyles>
  );
}
