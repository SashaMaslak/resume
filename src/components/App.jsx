import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Box from './Box';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        maxWidth={1280}
        m={theme.position.a}
        px={theme.space[4]}
        py={theme.space[1]}
      >
        <Header />
        <Main>
          <div></div>
        </Main>
        <Footer>
          <div></div>
        </Footer>
      </Box>
    </ThemeProvider>
  );
};
