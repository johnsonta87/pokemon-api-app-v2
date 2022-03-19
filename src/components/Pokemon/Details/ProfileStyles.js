import styled from 'styled-components';

export const ProfileStyles = styled.div`
  .profile-header {
    width: 100%;
  }
  .pokemon-profile-row {
    display: flex;
    margin: 0 auto 15px;
    > strong {
      flex-basis: 20%;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      margin-right: 3px;
    }
    > p {
      -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      margin: 0 2px;
    }
    .abilities-slot {
      text-transform: capitalize;
    }
  }
`;
