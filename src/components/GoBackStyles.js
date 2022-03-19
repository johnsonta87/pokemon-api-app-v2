import styled from 'styled-components';

export const GoBackStyles = styled.button`
  cursor: pointer;
  position: absolute;
  top: 3em;
  left: 0;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.white};
  z-index: 9;

  img {
    max-width: 50px;
    width: 100%;
  }
`;
