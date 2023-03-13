import React from 'react';
import {
  SummaryStyled,
  BlockSummary,
  TitleSummary,
  LineSummary,
  TextSummary,
} from './Summary.styled';

const Summary = ({ text, title }) => {
  return (
    <SummaryStyled>
      <BlockSummary>
        <TitleSummary>{title}</TitleSummary>
        <LineSummary />
      </BlockSummary>
      <TextSummary>{text}</TextSummary>
    </SummaryStyled>
  );
};

export default Summary;
