import React, {Fragment, useState, useEffect} from 'react';
import api from '../../Services/api';

import Listcakes from '../../Components/Listcakes';
import {Section, Loading, Main} from './styled';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';

import {detectar_mobile} from '../../Services/whats';
import {detectar_mobile_f} from '../../Services/face';
import ReactLoading from 'react-loading';

export default function Search({match}){

    const [ListSearch, setListSearch] = useState([])
    const [alterado, setAlterado] = useState(false)
    const [loading, setLoading] = useState(false)
    const [whatsapp, setWhatsapp] = useState('')
    const [facebook, setFacebook] = useState('')

    useEffect( ()=>{ ArrayBusca(); 
          // eslint-disable-next-line
    },[alterado])

    useEffect( () => {  changeWhats();},[whatsapp]);

    useEffect( () => { changeFace();},[facebook]);

   const ArrayBusca = async ()=>{
      const {id} = await match.params;

       //start loading ...
       await setLoading(true);

       try{
        const res = await api.get(`/bolos/busca/${id}`);
        await setListSearch(res.data);

            //end loading...
           await setLoading(false);

       }catch(e){
           //end loading...
           await setLoading(false);
           return e;
       }
      
        
        
    }

    
   async function handleLike(_id){
    await  api.post(`/bolos/${_id}/like`);
       
     await  setAlterado(!alterado)
    }

    async function changeWhats(){
        const whats = await detectar_mobile(); 
                await setWhatsapp(whats) 
      }
  
      async function changeFace(){
        const face = await detectar_mobile_f(); 
                await setFacebook(face) 
      }
  


        return(
            <Fragment>
                <Menu/>
                <Main>
                {loading && (   
                   <Loading>
                        <ReactLoading type='bars' color='#f00' height={'10rem'} width={'10rem'} />    
                   </Loading>     
                     )} 

                <Section>
              <Listcakes bolos={ListSearch} like={handleLike}/>
              </Section>
              </Main>

              <Footer 
                whatsapp={whatsapp}
                facebook={facebook}                
                /> 

            </Fragment>
           
        )
    }
