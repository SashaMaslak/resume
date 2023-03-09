import ContactItem from './ContactItem';
import Box from 'components/Box';
import { StyledList } from './Contacts.styled';

const Contacts = ({ contacts }) => {
  return (
    <Box bg="#fff" minWidth="280px">
      <StyledList>
        {contacts.map(({ title, text }) => (
          <ContactItem title={title} text={text} />
        ))}
      </StyledList>
    </Box>
  );
};

export default Contacts;
