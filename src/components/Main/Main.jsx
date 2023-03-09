import Avatar from './Avatar/Avatar';
import Summary from './Summary/Summary';

const Main = () => {
  return (
    <section
      style={{
        display: 'flex',
      }}
    >
      <Avatar
        src={
          'https://drive.google.com/file/d/1JD5IYKCGm2hrzSEHTlcZ3E1CK26Xs0JT/view?usp=share_link'
        }
        alt="photo"
        width={320}
      />
      <Summary />
    </section>
  );
};

export default Main;
