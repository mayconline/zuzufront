import React from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './Styles/global';

export default function App() {
  return (
    
    <BrowserRouter>
    <GlobalStyle/>
      
      <Routes/>
    </BrowserRouter>
  );
}

