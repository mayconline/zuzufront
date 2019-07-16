import React, {Component, Fragment} from 'react';
import {Loading} from './styled';

import SlideIntro from '../../Components/SlideIntro';
import Jumbotron from '../../Components/Jumbotron';
import Categorias from '../../Components/Categorias';
import Delivery from '../../Components/Delivery';
import Menu from '../../Components/Menu';
import Depoimentos from '../../Components/Depoimentos';
import api from '../../Services/api';

import ReactLoading from 'react-loading';

export default class Main extends Component{

    state={
        fotos:[],
        depoimentos:[],
        loading:false
    }

    async componentDidMount(){
         //start loading ...
         await this.setState({loading:true});

        try{

            const depo = await api.get('/depoimentos')
            const res = await api.get('/bolos/slide')

            
           
            this.setState({ fotos:res.data, depoimentos:depo.data });
                
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
                <Delivery/>
                <Depoimentos depoimentos={this.state.depoimentos}/>
            </Fragment>
        )
    }
}