import { ThemeProvider } from 'styled-components';
import React from 'react';

import { GlobalStyle, theme } from './theme';

import About from './pages/About';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import GlobalFonts from './fonts/fonts';
import Home from './pages/Home';
import BookNow from './common/BookNow';
import { render } from 'react-dom';

const App = () => {
  return (
    <ThemeProvider theme={ theme } >
      <GlobalStyle />

      <BookNow />

      <GlobalFonts />

      <Home />
      <Gallery />
      <About />
      <Agenda />
      <Contact />
      <Footer />
      </ThemeProvider>
  );
}

export default App;
