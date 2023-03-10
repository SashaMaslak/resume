import Box from 'components/Box';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import skills from '../../skills.json';
import experienceProjects from '../../experienceProjects.json';
import experienceWork from '../../experienceWork.json';
import experienceEduction from '../../experienceEduction.json';

const Main = () => {
  return (
    <Box display={'flex'}>
      <Sidebar skills={skills} titleSidebar="MY SKILLS" />
      <Content
        titleExProjects="PROJECT EXPERIENCE"
        experienceProjects={experienceProjects}
        titleExWorks="WORK EXPERIENCE"
        experienceWork={experienceWork}
        titleExEducations="MY EDUCATION"
        experienceEduction={experienceEduction}
      />
    </Box>
  );
};

export default Main;
