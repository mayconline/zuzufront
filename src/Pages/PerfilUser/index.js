import React, {Component, Fragment} from 'react';

import Menu from '../../Components/Menu';
import DadosPerfil from '../../Components/DadosPerfil';
import api from '../../Services/api';

export default class PerfilUser extends Component {

    state={
        usuario:[],
        depoimentos:[]
        
    }

    async componentDidMount(){
        
        const token= await localStorage.getItem('@userToken')
        const headers ={'authorization':token}
        const _id = await localStorage.getItem('@userId')

       try{
           const res = await api.get(`/usuarios/${_id}`,{headers})
             this.setState({usuario:res.data});

           const depo = await api.get('/depoimentos')

           for(let depoimentos of depo.data){
                if(depoimentos.idusuario._id===_id){
                    this.setState({depoimentos})
                }
        }

            
                  

       }catch(e){            
                   return e;
       }
       
   }

    render(){
        return(
            <Fragment>
                <Menu />
                <DadosPerfil usuario={this.state.usuario}
                    depoimento={this.state.depoimentos}
                />
            </Fragment>
              )
    }
}