import styled from 'styled-components';

export const SinglePokemonStyles = styled.div`
  position: relative;
  padding-top: 3em;
`;

export const PokemonInfo = styled.div`
  position: relative;

  .above-poke-tabs {
    max-width: 600px;
    margin: 0 auto;
    display: block;
    position: relative;
    width: 100%;
    height: 120px;
    background-color: ${(props) => props.theme.colors.white};
    -webkit-border-top-left-radius: 25px;
    -webkit-border-top-right-radius: 25px;
    -moz-border-radius-topleft: 25px;
    -moz-border-radius-topright: 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: ${(props) => props.theme.colors.tan};
    -webkit-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 767px) {
      max-width: 90%;
    }
  }

  .pokemon-tabs-wrapper {
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
  }

  .pokemon-tabs {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    padding: 0 25px 50px;
    background: ${(props) => props.theme.colors.tan};
    -webkit-box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.25);

    .detail-image {
      position: absolute;
      top: -150px;
      right: 0;
      max-width: 300px;

      img {
        width: 150px;
      }
    }
  }
`;
