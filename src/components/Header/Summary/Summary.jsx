import React from 'react';
import Box from 'components/Box';
import {
  BlockSummary,
  TitleSummary,
  LineSummary,
  TextSummary,
} from './Summary.styled';

const Summary = ({ text, title }) => {
  return (
    <Box mt={48}>
      <BlockSummary>
        <TitleSummary>{title}</TitleSummary>
        <LineSummary />
      </BlockSummary>
      <TextSummary>{text}</TextSummary>
    </Box>
  );
};

export default Summary;
