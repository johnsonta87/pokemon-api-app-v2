import styled from 'styled-components';

export const PokemonGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.theme.colors.tan};
  padding: 25px 15px;
  height: 500px;
  overflow-y: scroll;
  margin-top: 40px;
`;
