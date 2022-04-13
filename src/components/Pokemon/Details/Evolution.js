import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@mui/material';

import useApiQuery from '../../../hooks/useApiQuery';

import { EvolutionStyles } from './EvolutionStyles';
import { getPreviousEvolution, getNextEvolution } from '../../../utils/helpers';
import NextEvolution from './NextEvolution';
import PreviousEvolution from './PreviousEvolution';

export default function Evolution({ evolutionChain, name }) {
  const {
    data: evolutionChainData,
    isLoading,
    refetch,
  } = useApiQuery(evolutionChain?.url);

  useEffect(() => {
    // we refetch data for when it's changed
    if (evolutionChain && isLoading) {
      refetch();
    }
  }, [evolutionChain, name, isLoading]);

  if (isLoading || !evolutionChainData) return <CircularProgress />;

  return (
    <EvolutionStyles>
      <div className="detail-header">
        <h2>Evolution Chain</h2>
      </div>
      <div className="evolution-chain-wrapper">
        {getPreviousEvolution(name, evolutionChainData) && (
          <PreviousEvolution
            name={name}
            evolutionChainData={evolutionChainData}
          />
        )}
        {getNextEvolution(name, evolutionChainData) && (
          <NextEvolution name={name} evolutionChainData={evolutionChainData} />
        )}
      </div>
    </EvolutionStyles>
  );
}

Evolution.propTypes = {
  evolutionChain: PropTypes.object,
  name: PropTypes.string,
};
