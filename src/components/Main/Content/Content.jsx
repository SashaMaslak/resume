import Box from 'components/Box';
import { TitleExperiences } from './Content.styled';
import ExperienceProjects from './ExperienceProjects/ExperienceProjects';

const Content = ({
  titleExProjects,
  experienceProjects,
  titleExWorks,
  experienceWork,
  titleExEducations,
  experienceEduction,
}) => {
  return (
    <Box p={'32px 32px 32px 64px'}>
      <TitleExperiences>{titleExProjects}</TitleExperiences>
      <ExperienceProjects experiences={experienceProjects} />
      <TitleExperiences>{titleExWorks}</TitleExperiences>
      <ExperienceProjects experiences={experienceWork} />
      <TitleExperiences>{titleExEducations}</TitleExperiences>
      <ExperienceProjects experiences={experienceEduction} />
    </Box>
  );
};

export default Content;
