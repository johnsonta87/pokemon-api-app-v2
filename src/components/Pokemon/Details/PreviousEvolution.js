import React from 'react';
import PropTypes from 'prop-types';
import { getPreviousEvolution } from '../../../utils/helpers';

export default function PreviousEvolution({ name, evolutionChainData }) {
  // get evolved level and name from chain we pass in
  const evolutionName = getPreviousEvolution(
    name,
    evolutionChainData
  )?.species?.name.toString();
  const evolutionLevel = getPreviousEvolution(name, evolutionChainData)
    ?.evolves_to[0]?.evolution_details[0]?.min_level;

  return (
    <div>
      Evolves from
      <span>
        <img
          src={`https://img.pokemondb.net/sprites/x-y/normal/${evolutionName}.png`}
          alt={evolutionName}
        />
        <strong>{evolutionName}</strong>
      </span>
      {evolutionLevel && (
        <>
          at level
          <span>
            <strong>{evolutionLevel}</strong>
          </span>
        </>
      )}
    </div>
  );
}

PreviousEvolution.propTypes = {
  evolutionChainData: PropTypes.object,
  name: PropTypes.string,
};
