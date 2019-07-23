import React, {Component, Fragment} from 'react';
import {Title} from './styled';

import {FaWhatsapp} from 'react-icons/fa';
import {detectar_mobile} from '../../Services/whats';

export default class Jumbotron extends Component {   

    state={
        whatsapp:''   
    }

   
    async componentDidMount(){
       
    const res =  await detectar_mobile(); 
        this.setState({whatsapp:res})
    };


   render(){

    return(
        <Fragment>
            <Title id="contato">
        <h1>Bolos Temáticos Personalizados</h1>
        <h2>Recheios para todos os gostos, para tornar seu dia 
            especial e inesquecível. 
                              
          </h2>
            <h3 ><FaWhatsapp size={50} color={'#00e676'}/></h3>
            <span>  (21)96752-4431 </span>
         

          <a href={this.state.whatsapp} rel='noopener noreferrer' target='_blank'>PEÇA JÁ O SEU</a> 
          
</Title>


        </Fragment>
        
     
    )
   }

   }


    


