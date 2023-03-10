import {
  ItemExpStyled,
  IconPerson,
  DateColumn,
  LineColumn,
  LineStyled,
  CircleStyled,
  InfoColumn,
  TitleWrapper,
  TitleExp,
  TechList,
} from './ItemExp.styled';
import { RiTeamLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';

const ItemExp = ({ item }) => {
  const { name, teamProject, startDate, finishDate, technologies } = item;
  return (
    <ItemExpStyled>
      <DateColumn>
        {finishDate && <p>{finishDate}</p>}
        {startDate && <p>{startDate}</p>}
      </DateColumn>
      <LineColumn>
        <LineStyled />
        <CircleStyled />
      </LineColumn>

      <InfoColumn>
        <TitleWrapper>
          <TitleExp>{name}</TitleExp>
          <IconPerson data-title="team project">
            {item?.teamProject && teamProject && <RiTeamLine />}
          </IconPerson>
          <IconPerson data-title="personal project">
            {item?.teamProject && !teamProject && <BsPerson />}
          </IconPerson>
        </TitleWrapper>

        <TechList>
          {technologies.map((techlonogy, idx) => (
            <li key={idx}>{techlonogy}</li>
          ))}
        </TechList>
      </InfoColumn>
    </ItemExpStyled>
  );
};

export default ItemExp;
