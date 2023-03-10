import Box from 'components/Box';
import { StyledTitle, StyledSubTitle } from './Introduce.styled';

const Introduce = ({ name, profession }) => {
  return (
    <Box minWidth="420px" padding="16px" textAlign="center">
      <StyledTitle>{name}</StyledTitle>
      <StyledSubTitle>{profession}</StyledSubTitle>
    </Box>
  );
};

export default Introduce;
