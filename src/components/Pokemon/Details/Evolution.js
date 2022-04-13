import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@mui/material';

import useApiQuery from '../../../hooks/useApiQuery';

import { EvolutionStyles } from './EvolutionStyles';
import { capitalize, getNextEvolution } from '../../../utils/helpers';

export default function Evolution({ evolutionChain, name }) {
  const {
    data: evolutionChainData,
    isLoading,
    refetch,
  } = useApiQuery(evolutionChain?.url);

  useEffect(() => {
    if (evolutionChainData && !isLoading) {
      refetch();
    }
  }, [isLoading]);

  if (isLoading || !evolutionChainData) return <CircularProgress />;

  const evolutionName = getNextEvolution(
    name,
    evolutionChainData
  )?.species?.name.toString();
  const evolutionLevel = getNextEvolution(name, evolutionChainData)
    ?.evolution_details[0]?.min_level;

  if (!getNextEvolution(name, evolutionChainData)) return null;

  return (
    <EvolutionStyles>
      <div className="detail-header">
        <h2>Evolution Chain</h2>
      </div>
      <div className="evolution-chain-wrapper">
        Evolves to
        <span>
          <img
            src={`https://img.pokemondb.net/sprites/x-y/normal/${evolutionName}.png`}
            alt={evolutionName}
          />
          <strong>{evolutionName}</strong>
        </span>
        at level
        <span>
          <strong>{evolutionLevel}</strong>
        </span>
      </div>
    </EvolutionStyles>
  );
}

Evolution.propTypes = {
  evolutionChain: PropTypes.object,
  name: PropTypes.string,
};
