import React, {Fragment, useState, useEffect} from 'react';
import api from '../../Services/api';

import Listcakes from '../../Components/Listcakes';
import {Section} from './styled';
import Menu from '../../Components/Menu';

export default function Search({match}){

    const [ListSearch, setListSearch] = useState([])
    const [alterado, setAlterado] = useState(false)

    useEffect( ()=>{ ArrayBusca(); },[alterado])

   const ArrayBusca = async ()=>{
      const {id} = await match.params;
      
        const res = await api.get(`/bolos/busca/${id}`);
        await setListSearch(res.data);
        
    }

    
   async function handleLike(_id){
    await  api.post(`/bolos/${_id}/like`);
       
     await  setAlterado(!alterado)
    }


        return(
            <Fragment>
                <Menu/>
                <Section>
              <Listcakes bolos={ListSearch} like={handleLike}/>
              </Section>
            </Fragment>
           
        )
    }
