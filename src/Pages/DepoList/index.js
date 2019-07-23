import React, {Fragment, useState, useEffect} from 'react';
import ReactLoading from 'react-loading';

import api from '../../Services/api';
import {Loading} from './styled';
import Menu from '../../Components/Menu';
import DepoPreview from '../../Components/DepoPreview';



export default function DepoList(){

    const [loading, setLoading] = useState(false)
    const [alterado, setAlterado] = useState(false);
    const [depoimentos, setDepoimentos] = useState([]);
    

    useEffect(()=>{ArrayDepoimentos()},[alterado])

    const ArrayDepoimentos = async ()=>{
        //start loading ...
        await setLoading(true);
     

        try{
            const res = await api.get('/depoimentos')
                await setDepoimentos(res.data)
                    //end loading...
                     await setLoading(false);

        }catch(e){
            //end loading...
            await setLoading(false);
            return e;
        }


    }

   async function handleChange(_id){
        //start loading ...
        await setLoading(true);

        
        const token= await localStorage.getItem('@userToken')
        const headers = await {'authorization':token}

       try{

        await api.put(`/depoimentos/${_id}/active`,{},{headers})
         await  setAlterado(!alterado)
        
                 //end loading...
                    await setLoading(false);

                

       } catch(e){
            //end loading...
            await setLoading(false);
            return console.log(`erro ao tentar alterar = ${e}`)
       }
    }

    return(
        <Fragment>
            <Menu/>
                 {loading && (   
                    <Loading>
                        <ReactLoading type='bars' color='#f00' height={'10rem'} width={'10rem'} />    
                    </Loading>     
                     )} 

            <DepoPreview depoimentos={depoimentos}
                handleChange={handleChange}        
              />
                    
        </Fragment>
    )
}