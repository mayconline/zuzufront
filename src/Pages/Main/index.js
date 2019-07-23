import React, {Component, Fragment} from 'react';
import {Loading} from './styled';

import SlideIntro from '../../Components/SlideIntro';
import Jumbotron from '../../Components/Jumbotron';
import Categorias from '../../Components/Categorias';
import Delivery from '../../Components/Delivery';
import Menu from '../../Components/Menu';
import Depoimentos from '../../Components/Depoimentos';
import Footer from '../../Components/Footer';
import api from '../../Services/api';
import {detectar_mobile} from '../../Services/whats';

import ReactLoading from 'react-loading';

export default class Main extends Component{

    state={
        fotos:[],
        depoimentos:[],
        loading:false,
        usuarioLogado:'',
        whatsapp:''
    }

    async componentDidMount(){
         //start loading ...
         await this.setState({loading:true});
         const usuarioLogado =  await localStorage.getItem('@userId');
        
            this.setState({usuarioLogado:usuarioLogado})

            const whats = await detectar_mobile(); 
                this.setState({whatsapp:whats})
             
        

        try{

            const depo = await api.get('/depoimentos/active')
            const res = await api.get('/bolos/slide')

          
           await this.setState({ fotos:res.data, depoimentos:depo.data});
           await this.setState({usuarioLogado:usuarioLogado});
                
            //end loading ...
                 await this.setState({loading:false});

        }catch(e){            
                    //end loading ...
                 await this.setState({loading:false});
                        return e;
        }
        
    }

    render(){
        return(
            <Fragment>
                <Menu/>   
                 
                {this.state.loading && (   
                   <Loading>
                        <ReactLoading type='bars' color='#f00' height={'10rem'} width={'10rem'} />    
                   </Loading>     
                     )} 

                <SlideIntro fotos={this.state.fotos}/>
                <Jumbotron/>
                <Categorias/>
                <Delivery usuarioLogado={this.state.usuarioLogado}/>
                <Depoimentos depoimentos={this.state.depoimentos}/>
                <Footer whatsapp={this.state.whatsapp}/>
            </Fragment>
        )
    }
}