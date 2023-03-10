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
      {/* <ExperienceProjects experienceProjects={experienceProjects} /> */}
      <TitleExperiences>{titleExEducations}</TitleExperiences>
      {/* <TitleExperiences>{titleExWorks}</TitleExperiences>
      <ul>
        {experienceWork.map((item, idx) => (
          <li key={idx}></li>
        ))}
      </ul>
      <TitleExperiences>{titleExEducations}</TitleExperiences>
      <ul>
        {experienceEduction.map((item, idx) => (
          <li key={idx}></li>
        ))}
      </ul> */}
    </Box>
  );
};

export default Content;
