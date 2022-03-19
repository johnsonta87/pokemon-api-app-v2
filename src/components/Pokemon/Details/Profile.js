import React from 'react';
import PropTypes from 'prop-types';
import { useStateMachine } from 'little-state-machine';
import { removeHyphen } from '../../../utils/helpers';

import { ProfileStyles } from './ProfileStyles';

export default function Profile({ details }) {
  // Global State
  const {
    state: {
      details: { species },
    },
  } = useStateMachine();

  const {
    base_experience: baseExperience,
    height,
    weight,
    abilities,
  } = details;

  const {
    base_happiness: baseHappiness,
    egg_groups: eggGroups,
    capture_rate: captureRate,
    growth_rate: growthRate,
    hatch_counter: hatchCounter,
    habitat,
  } = species;

  if (!species) return null;

  return (
    <ProfileStyles>
      <div className="detail-header">
        <h2>Profile</h2>
      </div>
      <div className="pokemon-profile-row">
        <strong>Height:</strong> <p>{height || 0} m</p>
        <strong>Weight:</strong> <p>{weight || 0} kg</p>
      </div>

      {baseExperience && abilities && (
        <div className="pokemon-profile-row">
          <strong>Base exp:</strong> <p>{baseExperience}</p>
          <strong>Abilities:</strong>&nbsp;
          <p className="abilities-slot capitalize">
            {`${abilities
              .map((ability) => removeHyphen(ability.ability.name))
              .join(', ')}`}
          </p>
        </div>
      )}

      {captureRate && habitat.name ? (
        <div className="pokemon-profile-row">
          <strong>Chance to catch:</strong>{' '}
          <p className="capitalize">{captureRate}%</p>
          <strong>Habitat:</strong>{' '}
          <p className="capitalize">{removeHyphen(habitat.name)}</p>
        </div>
      ) : (
        ''
      )}

      {baseHappiness && growthRate.name ? (
        <div className="pokemon-profile-row">
          <strong>Base Happiness:</strong> <p>{baseHappiness}%</p>
          <strong>Growth:</strong>{' '}
          <p className="capitalize">{removeHyphen(growthRate.name)}</p>
        </div>
      ) : (
        ''
      )}

      {eggGroups && hatchCounter ? (
        <div className="pokemon-profile-row">
          <strong>Egg Groups:</strong>
          <p className="capitalize">
            {eggGroups.map((egg) => removeHyphen(egg.name)).join(', ')}
          </p>
          <strong>Hatch:</strong> <p>{hatchCounter} steps</p>
        </div>
      ) : (
        ''
      )}
    </ProfileStyles>
  );
}

Profile.propTypes = {
  details: PropTypes.object.isRequired,
};
