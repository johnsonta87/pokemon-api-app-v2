import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@mui/material';

import useApiQuery from '../../../hooks/useApiQuery';

import { EvolutionStyles } from './EvolutionStyles';
import { getPreviousEvolution, getNextEvolution } from '../../../utils/helpers';
import NextEvolution from './NextEvolution';
import PreviousEvolution from './PreviousEvolution';

export default function Evolution({ evolutionChain, name }) {
  const { data: evolutionChainData, isLoading } = useApiQuery(
    evolutionChain?.url
  );

  if (isLoading || !evolutionChainData) return <CircularProgress />;

  if (evolutionChainData?.evolves_to.length === 0) return null;

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
