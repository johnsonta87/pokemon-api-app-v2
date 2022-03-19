import styled from 'styled-components';

export const HeaderStyles = styled.header`
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 0;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);

  h1,
  p {
    margin: 0;
  }

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
