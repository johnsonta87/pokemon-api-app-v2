import React from 'react';
import PropTypes from 'prop-types';
import { DetailsHeaderStyles } from './DetailsHeaderStyles';

export default function DetailsHeader({ stats }) {
  if (!stats && stats === null) return null;

  return (
    <DetailsHeaderStyles>
      <div className="details-header">
        <h2 className="pokemon-name">{stats?.name}</h2>
        <h4 className="pokemon-id">{`#${stats?.id}`}</h4>
      </div>
    </DetailsHeaderStyles>
  );
}

DetailsHeader.propTypes = {
  stats: PropTypes.object.isRequired,
};
