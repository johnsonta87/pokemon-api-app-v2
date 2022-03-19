import styled from 'styled-components';

export const SpeciesStyles = styled.div`
  margin-bottom: 25px;

  .species-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    h4 {
      margin: 0;
      color: ${(props) => props.theme.colors.white};
      padding: 4px 6px;
    }

    .genus {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
    }

    .isBaby {
      background-color: #7b68ee;
    }

    .isLegendary {
      background: linear-gradient(90deg, #dc143c, #f08080 70%);
    }

    .isMythical {
      background: linear-gradient(90deg, #7b68ee, #8a2be2 70%);
    }
  }
`;
