import React , {Fragment} from 'react';

import {Container, FileInfo, Preview} from './styled';


import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';

import{MdDeleteForever, MdBuild} from 'react-icons/md';



export default function UserPreview({usuarios, altstaff}){

    return(
        <Fragment>

    <Container>

    {  !!usuarios.length &&
        usuarios.map(usuario =>(             
            <li key={usuario._id}>

            <FileInfo >                   
                      <Fragment >
                           <Preview src={usuario.avatar.url}/>  
                      </Fragment>

                  <div>
                    <strong>{usuario.nome}</strong>
                    <span>Perfil: {usuario.staff}</span>
                    <span>{usuario.usuario}</span>
                    <span>Criado Há {distanceInWords(usuario.createdAt, new Date(), {locale:pt})} </span>                                                                          
                </div>  
                                    
            </FileInfo>

            <div>                 
              
              

              <button type='button'>
              <MdBuild onClick={()=>{altstaff(usuario._id)}} style={{marginRight:8}}  size={24} color='#03f'/>
              </button> 
           
              <button type='button'>
              <MdDeleteForever onClick={()=>{}} style={{marginRight:8}}  size={24} color='#f00'/>
              </button>                         
           </div>              
            </li>   
        )
    )
 }
    </Container>   
</Fragment>
    )
}