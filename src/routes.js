import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './Pages/Main';
import Bolos from './Pages/Bolos';
import Cadastro from './Pages/Cadastro';

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/bolos' exact component={Bolos}/>  
            <Route path='/bolos/busca/:id' exact component={Cadastro}/>  
            <Route path='/admin/bolos/cadastro' exact component={Cadastro}/>
            
        </Switch>
        
    );
}

export default Routes;