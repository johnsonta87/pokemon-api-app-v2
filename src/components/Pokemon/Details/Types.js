import React from 'react';
import PropTypes from 'prop-types';

import { TypeStyles } from './TypesStyles';

export default function Types({ types }) {
  if (!types) return null;

  return (
    <TypeStyles>
      <ul>
        {types.map((type) => (
          <li key={type.slot} className={`pokemon-type ${type.type.name}-type`}>
            <span>{type.type.name}</span>
          </li>
        ))}
      </ul>
    </TypeStyles>
  );
}

Types.propTypes = {
  types: PropTypes.array,
};
