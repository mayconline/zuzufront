import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './Pages/Main';
import Bolos from './Pages/Bolos';

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/bolos' exact component={Bolos}/>  
        </Switch>
        
    );
}

export default Routes;