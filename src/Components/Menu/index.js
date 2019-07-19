import React, {Component, Fragment} from 'react';

import Toolbar from '../Toolbar';


import api from '../../Services/api';


export default class Menu extends Component {

state={
 
  AdminBarOpen:false,
  usuarioLogado:{}
 
}

async componentDidMount(){
 await  this.usuarioLogado();
}
  




AdminBar = ()=>{
 this.setState((prevState)=>{
    return {AdminBarOpen:!prevState.AdminBarOpen}
    
  })

};

usuarioLogado = async()=>{
  const token = await localStorage.getItem('@userToken')
  const nome = await localStorage.getItem('@userNome')
  const id = await localStorage.getItem('@userId')

  const headers ={'authorization':token}
  const res = await api.get(`/usuarios/${id}`,{headers})
  

  const obj = {
    token,
    nome,
    id,
    staff:res.data.staff
    
  }



  await this.setState({
    usuarioLogado:obj
  })

 
}

logOut = async()=>{

   await localStorage.clear();
   window.location.reload();   

}


render(){
 
  
  return(
        <Fragment>
        
            <Toolbar 
              
              AdminOpen={this.AdminBar}
              AdminBarState={this.state.AdminBarOpen}   
              usuarioLogado={this.state.usuarioLogado}  
              logOut={this.logOut}     
            />
           
        </Fragment>    
      )
      }
 }