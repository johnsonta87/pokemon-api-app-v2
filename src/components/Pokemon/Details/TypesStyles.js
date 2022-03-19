import styled from 'styled-components';

export const TypeStyles = styled.div`
  margin-bottom: 1em;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 1em 0 0;
      color: ${(props) => props.theme.colors.white};
      text-transform: capitalize;
    }
  }
`;
