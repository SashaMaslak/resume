import React from 'react';
import Contacts from './Contacts/Contacts';
import Introduce from './Introduce/Introduce';
import OtherInfo from './OtherInfo/OtherInfo';
import contacts from '../../contacts.json';
import Box from 'components/Box';

const Header = () => {
  return (
    <Box
      bg="#f4d644"
      display="grid"
      gridTemplateColumns="auto auto 1fr"
      justifyContent="center"
      alignItems="center"
    >
      <Introduce
        name="OLEKSANDR MASLAK"
        profession="JUNIOR FROND-END DEVELOPER"
      />
      <Contacts contacts={contacts} />
      <OtherInfo />
    </Box>
  );
};

export default Header;
