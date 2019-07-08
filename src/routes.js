import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './Pages/Main';
import Bolos from './Pages/Bolos';
import Cadastro from './Pages/Cadastro';
import Search from './Pages/Search';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import RecSenha from './Pages/RecSenha';
import ResetSenha from './Pages/ResetSenha';
import PerfilUser from './Pages/PerfilUser';

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/registro' exact component={Registro}/>
            <Route path='/bolos' exact component={Bolos}/>  
            <Route path='/bolos/busca/:id' exact component={Search}/>  
            <Route path='/admin/bolos/cadastro' exact component={Cadastro}/>
            <Route path='/usuarios/recuperar-senha' exact component={RecSenha}/>
            <Route path='/usuarios/:idrec/resetar-senha' exact component={ResetSenha}/>
            <Route path='/usuarios/:id/perfil' exact component={PerfilUser}/>
            
        </Switch>
        
    );
}

export default Routes;