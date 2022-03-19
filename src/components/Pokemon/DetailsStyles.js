import styled from 'styled-components';

export const SinglePokemonStyles = styled.div`
  position: relative;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 25px;
    color: #fff;
    max-width: 600px;
    @media (max-width: 767px) {
      max-width: 90%;
    }
    .pokemon-name {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: capitalize;
      color: #fff;
    }
    .pokemon-id {
      margin: 0;
      color: #fff;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;

export const PokemonInfo = styled.div`
  position: relative;
  .image {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    bottom: -80px;
    margin-top: -80px;
  }
`;
