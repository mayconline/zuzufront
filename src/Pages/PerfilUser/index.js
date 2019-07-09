import React, {Component, Fragment} from 'react';

import Menu from '../../Components/Menu';
import DadosPerfil from '../../Components/DadosPerfil';
import api from '../../Services/api';

export default class PerfilUser extends Component {

    state={
        usuario:[]
        
    }

    async componentDidMount(){
        
        const token= await localStorage.getItem('@userToken')
        const headers ={'authorization':token}
        const _id = await localStorage.getItem('@userId')

       try{
           const res = await api.get(`/usuarios/${_id}`,{headers})
           this.setState({usuario:res.data});
                  

       }catch(e){            
                   return e;
       }
       
   }

    render(){
        return(
            <Fragment>
                <Menu />
                <DadosPerfil usuario={this.state.usuario}/>
            </Fragment>
              )
    }
}