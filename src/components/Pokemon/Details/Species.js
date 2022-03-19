import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { useStateMachine } from 'little-state-machine';
import { updateDetails } from '../../../store/actions';

import { SpeciesStyles } from './SpeciesStyles';
import usePokemonSpecies from '../../../hooks/usePokemonSpecies';

export default function Species() {
  // Global State
  const {
    actions,
    state: {
      details: { id, species },
    },
  } = useStateMachine({ updateDetails });

  const {
    genera,
    is_baby: isBaby,
    is_legendary: isLegendary,
    is_mythical: isMythical,
    flavor_text_entries: flavorEntries,
  } = species;

  const { data: speciesData, isLoading } = usePokemonSpecies(id);

  useEffect(() => {
    if (id && speciesData && !isLoading) {
      actions.updateDetails({ species: speciesData });
    }
  }, [id, isLoading]);

  if (isLoading) return <CircularProgress />;

  return (
    <SpeciesStyles>
      <div className="species-header">
        {genera &&
          genera
            .filter((item) => item.language.name === 'en')
            .map((genus, i) => (
              <p className="genus" key={i}>
                {genus.genus}
              </p>
            ))}

        {isBaby && <h4 className="isBaby">Baby</h4>}
        {isLegendary && <h4 className="isLegendary">Legendary</h4>}
        {isMythical && <h4 className="isMythical">Mythical</h4>}
      </div>

      {flavorEntries &&
        flavorEntries
          .filter((item) => item.version.name === 'diamond')
          .map((flavor, i) => <p key={i}>{flavor.flavor_text}</p>)}
    </SpeciesStyles>
  );
}
