import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsHeader({ stats }) {
  if (!stats && stats === null) return null;

  return (
    <>
      <div className="details-header">
        <h2 className="pokemon-name">{stats?.name}</h2>
        <h4 className="pokemon-id">{`#${stats?.id}`}</h4>
      </div>

      <div className="detail-image">
        <img
          src={`https://projectpokemon.org/images/normal-sprite/${stats?.name}.gif`}
          alt={stats?.name}
        />
      </div>
    </>
  );
}

DetailsHeader.propTypes = {
  stats: PropTypes.object.isRequired,
};
