import styled from 'styled-components';

export const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  @media screen and (max-width: 961px) {
    grid-template-columns: 280px 1fr;
  }
`;
