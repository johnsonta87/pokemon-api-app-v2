import styled from 'styled-components';

export const GridLayoutStyles = styled.div`
  .pokemon-info-container {
    line-height: 1;
    color: #fff;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);

    span {
      font-size: 1.25rem;
      padding: 5px;
      text-transform: capitalize;
    }
  }

  .types-bg {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .type-bg {
      flex: 1 0 50%;
    }

    .bug-bg {
      background: ${(props) => props.theme.colors.bug};
    }
    .grass-bg {
      background: ${(props) => props.theme.colors.grass};
    }
    .poison-bg {
      background: ${(props) => props.theme.colors.poison};
    }
    .psychic-bg {
      background: ${(props) => props.theme.colors.psychic};
    }
    .rock-bg {
      background: ${(props) => props.theme.colors.rock};
    }
    .unknown-bg {
      background: ${(props) => props.theme.colors.unknown};
    }
    .fire-bg {
      background: ${(props) => props.theme.colors.fire};
    }
    .water-bg {
      background: ${(props) => props.theme.colors.water};
    }
    .flying-bg {
      background: ${(props) => props.theme.colors.flying};
    }
    .fighting-bg {
      background: ${(props) => props.theme.colors.fighting};
    }
    .electric-bg {
      background: ${(props) => props.theme.colors.electric};
    }
    .ghost-bg {
      background: ${(props) => props.theme.colors.ghost};
    }
    .fairy-bg {
      background: ${(props) => props.theme.colors.fairy};
    }
    .normal-bg {
      background: ${(props) => props.theme.colors.normal};
    }
    .ice-bg {
      background: ${(props) => props.theme.colors.ice};
    }
    .dark-bg {
      background: ${(props) => props.theme.colors.dark};
    }
    .ground-bg {
      background: ${(props) => props.theme.colors.ground};
    }
    .dragon-bg {
      background: ${(props) => props.theme.colors.dragon};
    }
    .steel-bg {
      background: ${(props) => props.theme.colors.steel};
    }
  }

  .bug-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.bug};
    }
  }
  .grass-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.grass};
    }
  }
  .poison-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.poison};
    }
  }
  .psychic-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.psychic};
    }
  }
  .rock-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.rock};
    }
  }
  .unknown-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.unknown};
    }
  }
  .fire-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.fire};
    }
  }
  .water-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.water};
    }
  }
  .flying-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.flying};
    }
  }
  .fighting-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.fighting};
    }
  }
  .electric-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.electric};
    }
  }
  .ghost-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.ghost};
    }
  }
  .fairy-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.fairy};
    }
  }
  .normal-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.normal};
    }
  }
  .ice-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.ice};
    }
  }
  .dark-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.dark};
    }
  }
  .ground-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.ground};
    }
  }
  .dragon-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.dragon};
    }
  }
  .steel-pokemon {
    .detail-header {
      background: ${(props) => props.theme.colors.steel};
    }
  }
`;
