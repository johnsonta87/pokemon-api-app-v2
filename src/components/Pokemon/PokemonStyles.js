import styled from 'styled-components';

export const PokemonButton = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  background: rgba(173, 216, 230, 0.4);
  border: 2px solid ${(props) => props.theme.colors.ice};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.ice};
  }

  &:active {
    outline: 0;
  }
`;
