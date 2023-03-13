import DateColumn from './ContentComponents/DateColumn';
import LineColumn from './ContentComponents/LineColumn';
import TitleExp from './ContentComponents/TitleExp';
import ListExp from './ContentComponents/ListExp';
import { ItemExpStyled, InfoColumn } from './ItemExp.styled';

const ItemExp = ({ item }) => {
  const { startDate, finishDate, technologies } = item;
  return (
    <ItemExpStyled>
      <DateColumn finishDate={finishDate} startDate={startDate} />
      <LineColumn />
      <InfoColumn>
        <TitleExp item={item} />
        <ListExp technologies={technologies} />
      </InfoColumn>
    </ItemExpStyled>
  );
};

export default ItemExp;
