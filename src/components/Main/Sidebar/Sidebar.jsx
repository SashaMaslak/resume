import Box from 'components/Box';
import {
  TitleSkills,
  TitleItemSkills,
  ListSkills,
  ItemSkills,
} from './Sidebar.styled';

const Sidebar = ({ skills, titleSidebar }) => {
  return (
    <Box width={'320px'} bg={'#292d2d'} p={'32px 32px 32px 64px'}>
      <TitleSkills>{titleSidebar}</TitleSkills>
      {skills.map(({ title, skillsList }, idx) => (
        <Box key={idx} mt={32}>
          <TitleItemSkills>{title}</TitleItemSkills>
          <ListSkills>
            {skillsList.map((skillsItem, idx) => (
              <ItemSkills key={idx}>{skillsItem}</ItemSkills>
            ))}
          </ListSkills>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
