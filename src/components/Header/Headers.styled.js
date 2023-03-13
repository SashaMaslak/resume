import styled from 'styled-components';

export const About = styled.div`
  display: flex;
  gap: 32px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 961px) {
    gap: 48px;
  }
`;

export const Hero = styled.div`
  background-color: rgba(244, 214, 68, 0.82);
  display: grid;
  grid-template-columns: auto auto minmax(36px, 292px);
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;
