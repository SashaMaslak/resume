import styled from 'styled-components';

export const SummaryStyled = styled.div`
  margin-top: 16px;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 961px) {
    margin-top: 48px;
  }
`;

export const BlockSummary = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleSummary = styled.h2`
  padding: 4px;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
    font-size: 22px;
  }
  @media screen and (min-width: 961px) {
    margin-right: 48px;
    font-size: 24px;
  }
`;

export const LineSummary = styled.p`
  width: 80px;
  height: 2px;
  background-color: #595a5a;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
  @media screen and (min-width: 961px) {
    width: 150px;
  }
`;

export const TextSummary = styled.p`
  padding: 4px;
  margin-right: 16px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    font-size: 16px;
  }
  @media screen and (min-width: 961px) {
    margin-right: 48px;
  }
`;
