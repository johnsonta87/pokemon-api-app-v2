import React from 'react';
import PropTypes from 'prop-types';
import { getNextEvolution } from '../../../utils/helpers';

export default function NextEvolution({ name, evolutionChainData }) {
  // get evolved level and name from chain we pass in
  const evolutionName = getNextEvolution(
    name,
    evolutionChainData
  )?.species?.name.toString();
  const evolutionLevel = getNextEvolution(name, evolutionChainData)
    ?.evolution_details[0]?.min_level;

  return (
    <div>
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
  );
}

NextEvolution.propTypes = {
  evolutionChainData: PropTypes.object,
  name: PropTypes.string,
};
