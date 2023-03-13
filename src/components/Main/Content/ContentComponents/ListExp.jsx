import { ListExpStyled } from './ListExp.styled';

const ListExp = ({ technologies }) => {
  return (
    <ListExpStyled>
      {technologies.map((techlonogy, idx) => (
        <li key={idx}>{techlonogy}</li>
      ))}
    </ListExpStyled>
  );
};

export default ListExp;
