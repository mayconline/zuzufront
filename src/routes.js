import React  from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {isAuth , isAdmin} from './Services/auth';

import Main from './Pages/Main';
import Bolos from './Pages/Bolos';
import Cadastro from './Pages/Cadastro';
import Search from './Pages/Search';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import RecSenha from './Pages/RecSenha';
import ResetSenha from './Pages/ResetSenha';
import PerfilUser from './Pages/PerfilUser';
import CadastroDepoimento from './Pages/CadastroDepoimento';
import CadastroAvatar from './Pages/CadastroAvatar';



const PrivateRoute = ({component:Component, ...rest}) =>(
    <Route       
       {...rest}
        render={props=>(
            isAuth() ? 
                    ( <Component {...props}/> )
                    :
                    ( <Redirect to={{pathname:`/login`, state:{from: props.location}}} />  )
            )}
    />
);

const AdminRoute = ({component:Component, ...rest}) =>(
    <Route       
       {...rest}
        render={props=>(
            isAdmin() ? 
                    ( <Component {...props}/> )
                    :
                    ( <Redirect to={{pathname:`/login`, state:{from: props.location}}} />  )
            )}
    />
);




function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/registro' exact component={Registro}/>
            <Route path='/bolos' exact component={Bolos}/>  
            <Route path='/bolos/busca/:id' exact component={Search}/>            
            <Route path='/usuarios/recuperar-senha' exact component={RecSenha}/>
            <Route path='/usuarios/:idrec/resetar-senha' exact component={ResetSenha}/>

            <PrivateRoute path='/usuarios/:id/perfil' exact component={PerfilUser}/>
            <PrivateRoute path='/usuarios/:id/alterar' exact component={Registro}/>
            <PrivateRoute path='/depoimentos/criar' exact component={CadastroDepoimento}/>
            <PrivateRoute path='/depoimentos/alterar/:id' exact component={CadastroDepoimento}/>
            <PrivateRoute path='/avataruser/:id/cadastro' exact component={CadastroAvatar}/>
            <PrivateRoute path='/avataruser/:id/alterar' exact component={CadastroAvatar}/>

            <AdminRoute path='/admin/bolos/cadastro' exact component={Cadastro}/>           
        </Switch>
        
    );
}

export default Routes;