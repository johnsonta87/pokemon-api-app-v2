import styled from 'styled-components';

export const PokemonStyles = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  background: rgba(173, 216, 230, 0.4);
  border: 2px solid #87ceeb;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #87ceeb;
  }

  &:active {
    outline: 0;
  }
`;
