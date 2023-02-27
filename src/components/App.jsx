import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <Header>
        <div></div>
      </Header>
      <Main>
        <div></div>
      </Main>
      <Footer>
        <div></div>
      </Footer>
    </>
  );
};
