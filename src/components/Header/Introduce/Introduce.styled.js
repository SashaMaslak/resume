import styled from 'styled-components';

export const IntroduceStyled = styled.div`
  width: 280px;
  padding: 8px;
  text-align: center;
  @media screen and (min-width: 768px) {
    min-width: 320px;
    padding: 16px;
  }
  @media screen and (min-width: 961px) {
    min-width: 420px;
  }
`;

export const StyledTitle = styled.h1`
  color: #292d2d;
  font-size: 22px;
  font-weight: bold;
  line-height: 130%;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  @media screen and (min-width: 961px) {
    font-size: 32px;
  }
`;

export const StyledSubTitle = styled.p`
  color: #292d2d;
  font-size: 16px;
  font-weight: bold;
  line-height: 130%;
`;
