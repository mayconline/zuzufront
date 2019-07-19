import React, { Fragment, useState, useEffect} from 'react';

import {Section, Loading} from './styled';
import api from '../../Services/api';
import Listcakes from '../../Components/Listcakes';
import Menu from '../../Components/Menu';

import ReactLoading from 'react-loading';




export default function Bolos(){

    const [bolos, setBolos] = useState([])
    const [alterado, setAlterado] = useState(false)
    const [loading, setLoading] = useState(false)
   

    useEffect( () => { ArrayBolos();},[alterado]);

     
    const ArrayBolos = async ()=>{
        //start loading ...
          await setLoading(true);

         try{
        const res = await api.get('/bolos');
             await setBolos(res.data)  
                //end loading...
                  await setLoading(false);
        }
         catch(e){
                 //end loading...
                    await setLoading(false);
                        return e;
             }          
    }

      

    const  handleLike = async (_id) =>{
      await  api.post(`/bolos/${_id}/like`);
          await  setAlterado(!alterado)
    }

    return(
    
             <Fragment>
             <Menu/>
             {loading && (   
                   <Loading>
                        <ReactLoading type='bars' color='#f00' height={'10rem'} width={'10rem'} />    
                   </Loading>     
                     )} 

              <Section>
                <Listcakes bolos={bolos} like={handleLike}/>   
              </Section>            
            </Fragment>    
    )
}


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