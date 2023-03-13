import Box from 'components/Box';
import Contacts from './Contacts/Contacts';
import Introduce from './Introduce/Introduce';
import OtherInfo from './OtherInfo/OtherInfo';
import Avatar from './Avatar/Avatar';
import Summary from './Summary/Summary';
import contacts from '../../contacts.json';
import photo from '../../images/photo.jpg';
import { About, Hero } from './Headers.styled';

const Header = () => {
  return (
    <Box position="relative">
      <About>
        <Avatar src={photo} alt="photo" />

        <Summary
          title="S U M M A R Y"
          text="I am a Junior Front-End developer. I focus on HTML5, CSS3, JS, React. English — Pre-Intermediate. Looking for a remote job. Development, practice and work for the result are important for me. I intend to develop innovative technologies and deliver value to people."
        />
      </About>
      <Hero>
        <Introduce
          name="OLEKSANDR MASLAK"
          profession="JUNIOR FROND-END DEVELOPER"
        />
        <Contacts contacts={contacts} />
        <OtherInfo />
      </Hero>
    </Box>
  );
};

export default Header;
