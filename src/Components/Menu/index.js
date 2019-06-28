import React, {Component, Fragment} from 'react';

import Toolbar from '../Toolbar';
import SideMenu from '../SideMenu';
import {Backdrop} from '../Backdrop';



export default class Menu extends Component {

state={
  sideMenuOpen:false,
  AdminBarOpen:false,
  usuarioLogado:{}
}

componentDidMount(){
  this.usuarioLogado();
}
  
/*metodo para alterar visibilidade do sidemenu*/

botaoToogleHandler =()=>{
  this.setState((prevState)=>{
    return {sideMenuOpen:!prevState.sideMenuOpen};
  })
};

backdropHandler=()=>{
  this.setState({sideMenuOpen:false});
};



AdminBar = ()=>{
 this.setState((prevState)=>{
    return {AdminBarOpen:!prevState.AdminBarOpen}
    
  })

};

usuarioLogado = async()=>{
  const token = await localStorage.getItem('@userToken')
  const nome = await localStorage.getItem('@userNome')
  const id = await localStorage.getItem('@userId')

  const obj = {
    token,
    nome,
    id
  }

  await this.setState({
    usuarioLogado:obj
  })

 
}

render(){
 
      return(
        <Fragment>
        
            <Toolbar sideMenuClick={this.botaoToogleHandler}
              
              AdminOpen={this.AdminBar}
              AdminBarState={this.state.AdminBarOpen}   
              usuarioLogado={this.state.usuarioLogado}       
            />
           
           
            <SideMenu show={this.state.sideMenuOpen} />
             
             {this.state.sideMenuOpen &&
            <Backdrop onClick={this.backdropHandler}/>
                }
            
        </Fragment>    
      )
      }
 }