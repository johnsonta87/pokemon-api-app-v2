import React from 'react';
import PropTypes from 'prop-types';
import { GridLayoutStyles } from './GridLayoutStyles';

export default function GridLayout({ children, stats }) {
  if (!stats) return null;

  return (
    <GridLayoutStyles>
      <div
        className={`poke-info-container ${
          stats &&
          stats?.types &&
          stats?.types.map((type) => `${type.type.name}-pokemon `).join('')
        }`}
      >
        <div className="types-bg">
          {stats &&
            stats?.types &&
            stats?.types.map((type, i) => (
              <span key={i} className={`type-bg ${type.type.name}-bg`} />
            ))}
        </div>
        {children}
      </div>
    </GridLayoutStyles>
  );
}

GridLayout.propTypes = {
  children: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired,
};
