import React from 'react';

import { useStateMachine } from 'little-state-machine';

// Hooks
import { updateDetails, updateDashboard } from '../store/actions';
import { GoBackStyles } from './GoBackStyles';

export default function GoBack() {
  // Global State
  const { actions } = useStateMachine({ updateDetails, updateDashboard });

  const handleClick = (e) => {
    e.preventDefault();

    actions.updateDetails({
      id: '',
      name: '',
      stats: {},
      species: {},
      evolution: {},
    });

    actions.updateDashboard({
      display: true,
    });
  };
  return (
    <GoBackStyles type="button" onClick={handleClick}>
      <img src="/arrow-left.svg" alt="Go back" />
    </GoBackStyles>
  );
}
