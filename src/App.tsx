import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Presentation from './pages/Presentation';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { LanguageContextProvider } from './context/LanguageContext';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <LanguageContextProvider>
      <ThemeProvider theme={theme}>
        <Presentation toggleTheme={toggleTheme} />
        <div className='App'>
          <GlobalStyle />
          <About toggleTheme={toggleTheme} />
          <Technologies toggleTheme={toggleTheme} />
          <Projects toggleTheme={toggleTheme} />
          <Contact toggleTheme={toggleTheme} />
        </div>
        <Footer toggleTheme={toggleTheme} />
      </ThemeProvider>
    </LanguageContextProvider>
  );
}

export default App;
