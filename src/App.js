import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './Styles/global';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}
