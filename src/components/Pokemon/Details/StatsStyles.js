import styled from 'styled-components';

export const StatsStyles = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  .stat {
    text-transform: capitalize;
    font-weight: bold;
    flex: 0 0 30%;
    margin-right: 10px;

    @media (min-width: 768px) {
      text-align: right;
      margin-right: 15px;
    }
  }
`;
