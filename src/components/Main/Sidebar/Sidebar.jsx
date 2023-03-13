import Box from 'components/Box';
import {
  TitleSkills,
  TitleItemSkills,
  ListSkills,
  ItemSkills,
  ItemLink,
} from './Sidebar.styled';

const Sidebar = ({ skills, titleSidebar }) => {
  const func = skillsItem => {
    switch (skillsItem) {
      case 'Linkedin':
        return (
          <ItemLink
            href="https://www.linkedin.com/in/oleksandr-maslak-3688ab20a/"
            target="_blank"
          >
            {skillsItem}
          </ItemLink>
        );

      case 'Github':
        return (
          <ItemLink href="https://github.com/SashaMaslak" target="_blank">
            {skillsItem}
          </ItemLink>
        );

      case 'Telegram':
        return (
          <ItemLink href="https://t.me/OlexandrMaslak" target="_blank">
            {skillsItem}
          </ItemLink>
        );

      default:
        return <span href="">{skillsItem}</span>;
    }
  };

  return (
    <Box width={'320px'} bg={'#292d2d'} p={'32px 32px 32px 64px'}>
      <TitleSkills>{titleSidebar}</TitleSkills>
      {skills.map(({ title, skillsList }, idx) => (
        <Box key={idx} mt={32}>
          <TitleItemSkills>{title}</TitleItemSkills>
          <ListSkills>
            {skillsList.map((skillsItem, idx) => {
              return <ItemSkills key={idx}>{func(skillsItem)}</ItemSkills>;
            })}
          </ListSkills>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;

// {
//   switch (skillsItem) {
//     case 'Linkedin':
//       <a>{skillsItem}</a>;
//       break;
//     case 'Telegram':
//       <a>{skillsItem}</a>;
//       break;
//     case 'Github':
//       <a>{skillsItem}</a>;
//       break;
//     default:
//       skillsItem;

//   }
// }
