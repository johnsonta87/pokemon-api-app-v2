import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStateMachine } from 'little-state-machine';

import { CircularProgress } from '@mui/material';

import useApiQuery from '../../../hooks/useApiQuery';
import { updateDetails } from '../../../store/actions';

import { EvolutionStyles } from './EvolutionStyles';

export default function Evolution({ evolutionChain, evolvesFrom }) {
  // Global State
  const {
    actions,
    state: {
      details: { id, evolution },
    },
  } = useStateMachine({ updateDetails });

  const { chain } = evolution;

  const { data: evolutionChainData, isLoading } = useApiQuery(
    evolutionChain?.url
  );

  useEffect(() => {
    if (id && evolutionChainData && !isLoading) {
      actions.updateDetails({ evolution: { chain: evolutionChainData } });
    }
  }, [id, isLoading]);

  if (isLoading) return <CircularProgress />;

  return (
    <EvolutionStyles>
      <div className="detail-header">
        <h2>Evolution Chain</h2>
      </div>
      Evolves to{' '}
      {chain?.evolves_to.map((pokemon) => (
        <span>
          <img
            src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon?.species?.name}.png`}
            alt={pokemon?.species?.name}
          />
          <strong>{pokemon?.species?.name}</strong>
        </span>
      ))}{' '}
      at{' '}
      {chain?.evolves_to.map((pokemon) => (
        <strong>{pokemon?.evolution_details[0].min_level}</strong>
      ))}{' '}
      level.
    </EvolutionStyles>
  );
}

Evolution.propTypes = {
  evolutionChain: PropTypes.object,
  evolvesFrom: PropTypes.object,
};
