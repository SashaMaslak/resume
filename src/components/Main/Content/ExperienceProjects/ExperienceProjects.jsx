import Box from 'components/Box';
import ItemExp from '../ItemExp';

const ExperienceProjects = ({ experiences }) => {
  return (
    <Box as="ul" p={0} mt="24px">
      {experiences.map((item, idx) => (
        <ItemExp key={idx} item={item} />
      ))}
    </Box>
  );
};

export default ExperienceProjects;
