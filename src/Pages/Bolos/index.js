import React, {Component, Fragment, useState, useEffect} from 'react';

import {Section, Loading} from './styled';
import api from '../../Services/api';
import Listcakes from '../../Components/Listcakes';
import Menu from '../../Components/Menu';

import ReactLoading from 'react-loading';
import { noConflict } from 'q';



function Bolos(){

    const [bolos, setBolos] = useState([])
   

    useEffect( () => {

        const ArrayBolos = async ()=>{
            const res = await api.get('/bolos');
           await setBolos(res.data)  
           console.log(res)         
        }
       
        ArrayBolos();

        
      },[bolos.length]);

     

      

    const  handleLike = (_id) =>{
        api.post(`/bolos/${_id}/like`);
    }

  
  
    

  
    return(
    
             <Fragment>
             <Menu/>
              <Section>
              <Listcakes bolos={bolos} like={handleLike}/>
           
              </Section>            
            </Fragment>    
    )
}

export default Bolos;

/*
export default class Bolos extends Component{

    state={
        listaBolos:[],
        loading:false
    }


    async componentDidMount(){
        //start loading ...
        await this.setState({loading:true});

       try{
        const res = await api.get('/bolos');
        this.setState({listaBolos:res.data});
                   //end loading ...
                await this.setState({loading:false});

       }catch(e){            
                   //end loading ...
                await this.setState({loading:false});
                       return e;
       }
       
   }


    handleLike = (_id) =>{
        api.post(`/bolos/${_id}/like`);
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


              <Section>
              <Listcakes bolos={this.state.listaBolos} like={this.handleLike}/>
              </Section>            
            </Fragment>
        )
    }
}*/