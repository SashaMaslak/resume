import Avatar from './Avatar/Avatar';

const Main = () => {
  return (
    <section
      style={{
        display: 'flex',
      }}
    >
      <Avatar src={'../../images/photo.jpg'} alt="photo" width={320} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 28,
          color: 'green',
          outline: '1px solid grey',
        }}
      >
        Summary
      </div>
    </section>
  );
};

export default Main;
