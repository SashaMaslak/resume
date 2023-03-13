import styled from 'styled-components';

export const Photo = styled.img`
  display: block;
  max-width: 320px;
  @media screen and (max-width: 961px) {
    max-width: 280px;
  }
`;
