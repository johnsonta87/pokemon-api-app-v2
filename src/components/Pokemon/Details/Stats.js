import React from 'react';
import PropTypes from 'prop-types';

import { removeHyphen } from '../../../utils/helpers';
import { StatsStyles } from './StatsStyles';

export default function Stats({ stats }) {
  if (!stats) return null;

  return (
    <StatsStyles>
      <div className="detail-header">
        <h2>Base stats</h2>
      </div>
      <div className="stats-container">
        {stats &&
          stats.map((stat, index) => (
            <div key={index} className="stat-bar">
              <span className="stat">{removeHyphen(stat.stat.name)}</span>
              <span className="stat-value">{stat.base_stat}</span>
            </div>
          ))}
      </div>
    </StatsStyles>
  );
}

Stats.propTypes = {
  stats: PropTypes.array,
};
