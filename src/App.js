import React from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './Styles/global';


//import Menu from './Components/Menu';

function App() {
  return (
    
    <BrowserRouter>
    <GlobalStyle/>
      
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
