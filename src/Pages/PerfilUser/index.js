import React, {Fragment, useState, useEffect} from 'react';

import Menu from '../../Components/Menu';
import DadosPerfil from '../../Components/DadosPerfil';
import api from '../../Services/api';

import Footer from '../../Components/Footer';

import {detectar_mobile} from '../../Services/whats';
import {detectar_mobile_f} from '../../Services/face';

import {Loading, Main} from './styled';
import ReactLoading from 'react-loading';


export default function PerfilUser(){

 
    const [usuario, setUsuario] = useState([]);
    const [depoimentos, setDepoimentos] = useState([])   
    const [loading, setLoading] = useState(false);
    const [whatsapp, setWhatsapp] = useState('')
    const [facebook, setFacebook] = useState('')

    useEffect( () => { ArrayDados();},[]);
    useEffect( () => {  changeWhats();},[whatsapp]);
    useEffect( () => { changeFace();},[facebook]);


    const ArrayDados = async ()=>{
        const _id = await localStorage.getItem('@userId')
        const token= await localStorage.getItem('@userToken')
        const headers ={'authorization':token}

        //start loading ...
        await setLoading(true);
        
       try{
        const res = await api.get(`/usuarios/${_id}`,{headers})
         setUsuario(res.data);


        const depo = await api.get('/depoimentos')

        for(let depoimentos of depo.data){
             if(depoimentos.idusuario._id===_id){
                 setDepoimentos(depoimentos)
                }
            }

            //end loading ...
          await setLoading(false);

    }catch(e){        
         //end loading ...
        await setLoading(false);   
                return e;
    }
       
    } 
        
       

  const deletarConta = async(_id)=>{
            //start loading ...
            await  setLoading(true);

        try{

              //pegar o token do usuario //
            const token = await localStorage.getItem('@userToken')
            const headers ={'authorization':token}

             await api.delete(`/usuarios/${_id}`,{headers});
                await localStorage.clear();
                    //end loading ...
                        await setLoading(false);
                         this.props.history.push(`/`);
                
             return alert(`Deletado com sucesso`);

        }catch(e) {
           //end loading ...
           await setLoading(false);
         return alert(`${e} Você não possui permissão para deletar`);
        }
   }

     
  const  deletarDepo = async (_id)=>{
        
   //start loading ...
   await setLoading(true);
   
    try{

        //pegar o token do usuario //
const token = await localStorage.getItem('@userToken')
const headers ={'authorization':token}

        await api.delete(`/depoimentos/${_id}`,{headers});
           //end loading ...
             await setLoading(false);
             window.location.reload();        
       
    }  
    catch(e){
        //end loading ...
        await setLoading(false);
         return alert(`${e} Você não possui permissão para deletar`);

    }
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
               <Menu />
                <Main>

               
               {loading && (   
                   <Loading>
                        <ReactLoading type='bars' color='#f00' height={'10rem'} width={'10rem'} />    
                   </Loading>     
                     )} 


                <DadosPerfil usuario={usuario}
                    depoimento={depoimentos}
                    deletarDepo={deletarDepo}
                    deletarConta={deletarConta}
                />   
                 </Main>
                <Footer 
                whatsapp={whatsapp}
                facebook={facebook}
                
                />           
            </Fragment>
              )
    
}