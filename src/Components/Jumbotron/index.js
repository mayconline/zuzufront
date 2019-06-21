import React, {Component, Fragment} from 'react';
import {Title} from './styled';

import {FaWhatsapp} from 'react-icons/fa';


export default class Jumbotron extends Component {   

    state={
        whatsapp:'',
        whatsappWeb:'https://web.whatsapp.com/send?phone=5521967524431&text=ola',
        whatsappMobile:'https://wa.me/5521967524431?text=Ola'
    }

   
    async componentDidMount(){
       
     await this.detectar_mobile(); 
       
    };


    detectar_mobile = () =>{ 
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
           return  this.setState({whatsapp:this.state.whatsappMobile})
           
          
         }
        else {
           return  this.setState({whatsapp:this.state.whatsappWeb})
         }
       }


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


    


