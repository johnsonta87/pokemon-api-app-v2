import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { TypeStyles } from './TypesStyles';

export default function Types({ types }) {
  if (!types) return null;

  return (
    <TypeStyles>
      <List horizontal>
        {types.map((type) => (
          <ListItem
            key={type.slot}
            className={`pokemon-type ${type.type.name}-type`}
          >
            <span>{type.type.name}</span>
          </ListItem>
        ))}
      </List>
    </TypeStyles>
  );
}

Types.propTypes = {
  types: PropTypes.object.isRequired,
};
