import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    red: '#ff1111',
    tan: '#ffe4b5',

    grass: '#78C850',
    poison: '#A040A0',
    flying: '#A890F0',
    fire: '#F08030',
    fighting: '#C03028',
    psyhic: '#F85888',
    water: '#6890F0',
    bug: '#A8B820',
    dark: '#705848',
    ground: '#E0C068',
    electric: '#F8D030',
    fairy: '#EE99AC',
    dragon: '#7038F8',
    unknown: '#68A090',
    ghost: '#705898',
    ice: '#98D8D8',
    normal: '#A8A878',
    rock: '#B8A038',
    steel: '#B8B8D0',
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  a {
    color: #3CB371;

    &:hover {
      color: #78C850;
    }
  }

  button {
    text-transform: capitalize;
    background-color: ${(props) => props.theme.colors.ice};
    min-width: 150px;
    margin-bottom: 1em !important;
    border-radius: 25px;
    border-radius: 25px !important;
    transition: 0.1s background ease-in;
  }



  .detail-header {
    padding: 1em 1.5em;
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    display: block;
    margin-bottom: 1em;
    border-radius: 5px;

    h2 {
      font-size: 1.25rem;
      margin: 0;
    }
  }

  .pokemon-type {
    span {
      padding: 0.5em;
    }
  }

    .bug-type {
      span {
        background: ${(props) => props.theme.colors.bug};
      }
    }
    .grass-type {
      span {
        background: ${(props) => props.theme.colors.grass};
      }
    }
    .poison-type {
      span {
        background: ${(props) => props.theme.colors.poison};
      }
    }
    .psychic-type {
      span {
        background: ${(props) => props.theme.colors.psychic};
      }
    }
    .rock-type {
      span {
        background: ${(props) => props.theme.colors.rock};
      }
    }
    .unknown-type {
      span {
        background: ${(props) => props.theme.colors.unknown};
      }
    }
    .fire-type {
      span {
        background: ${(props) => props.theme.colors.fire};
      }
    }
    .water-type {
      span {
        background: ${(props) => props.theme.colors.water};
      }
    }
    .flying-type {
      span {
        background: ${(props) => props.theme.colors.flying};
      }
    }
    .fighting-type {
      span {
        background: ${(props) => props.theme.colors.fighting};
      }
    }
    .electric-type {
      span {
        background: ${(props) => props.theme.colors.electric};
      }
    }
    .ghost-type {
      span {
        background: ${(props) => props.theme.colors.ghost};
      }
    }
    .fairy-type {
      span {
        background: ${(props) => props.theme.colors.fairy};
      }
    }
    .normal-type {
      span {
        background: ${(props) => props.theme.colors.normal};
      }
    }
    .ice-type {
      span {
        background: ${(props) => props.theme.colors.ice};
      }
    }
    .dark-type {
      span {
        background: ${(props) => props.theme.colors.dark};
      }
    }
    .ground-type {
      span {
        background: ${(props) => props.theme.colors.ground};
      }
    }
    .dragon-type {
      span {
        background: ${(props) => props.theme.colors.dragon};
      }
    }
    .steel-type {
      span {
        background: ${(props) => props.theme.colors.steel};
      }
    }

`;
