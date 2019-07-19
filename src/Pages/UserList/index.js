import React ,{useState , useEffect, Fragment} from 'react';
import ReactLoading from 'react-loading';
import api from '../../Services/api';
import {Loading} from './styled';
import Menu from '../../Components/Menu';
import UserPreview from '../../Components/UserPreview';

export default function UserList(){

    const [usuarios, setUsuarios] = useState([]);
    const [alterado, setAlterado] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{ ArrayUsuarios(); },[alterado])

   
  
    const ArrayUsuarios = async ()=>{
        //start loading ...
        await setLoading(true);
        const token= await localStorage.getItem('@userToken')
        const headers ={'authorization':token}

        try{
            const res = await api.get('/usuarios', {headers})
                await setUsuarios(res.data)
                    //end loading...
                     await setLoading(false);

        }catch(e){
            //end loading...
            await setLoading(false);
            return e;
        }
    }

    const altStaff = async (_id)=>{

     
        //start loading ...
        await setLoading(true);

        const token= await localStorage.getItem('@userToken')
        const headers ={'authorization':token}

        try{
            
          await api.post(`/usuarios/${_id}/altstaff`, {headers})
           
             await  setAlterado(!alterado)
            console.log(alterado)
        

        }catch(e){
             //end loading...
             await setLoading(false);
             return e;
            
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

            <UserPreview usuarios={usuarios} altStaff={altStaff}/>
        </Fragment>
    )
}