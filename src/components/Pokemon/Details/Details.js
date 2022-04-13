import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { useStateMachine } from 'little-state-machine';

// Hooks
import { Container } from '@mui/material';
import { usePokemonDetails } from '../../../hooks';
import { updateDetails } from '../../../store/actions';

// Components
import { DetailsHeader, Types, Species, Profile, Stats, Evolution } from '.';
import GridLayout from '../../Layouts/GridLayout';
import GoBack from '../../GoBack';

// Styles
import { PokemonInfo, SinglePokemonStyles } from './DetailsStyles';

export default function Details() {
  // Global State
  const {
    actions,
    state: {
      details: { id, stats, species },
    },
  } = useStateMachine({ updateDetails });

  const { data: pokemon, isLoading } = usePokemonDetails(`pokemon/${id}`);

  useEffect(() => {
    if (id && pokemon && !isLoading) {
      actions.updateDetails({ stats: pokemon });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isLoading]);

  if (isLoading)
    return (
      <Container>
        <CircularProgress />
      </Container>
    );

  if (!stats || !pokemon || !id) return null;

  return (
    <GridLayout stats={stats}>
      <GoBack />
      <SinglePokemonStyles>
        <PokemonInfo>
          <DetailsHeader stats={stats} />

          <span className="above-poke-tabs" />
          <div className="pokemon-tabs-wrapper">
            <div className="pokemon-tabs">
              <div className="detail-image">
                <img
                  src={`https://projectpokemon.org/images/normal-sprite/${stats.name}.gif`}
                  alt={stats.name}
                />
              </div>

              <Types types={stats.types} />

              <Species />
              <Profile details={stats} />
              <Stats stats={stats.stats} />
              <Evolution
                evolutionChain={species.evolution_chain}
                evolvesFrom={species.evolves_from_species}
              />
            </div>
          </div>
        </PokemonInfo>
      </SinglePokemonStyles>
    </GridLayout>
  );
}
