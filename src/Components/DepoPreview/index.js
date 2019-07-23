import React , {Fragment} from 'react';

import {Container, FileInfo, Preview} from './styled';


import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';


import {FaStar, FaRegStar} from "react-icons/fa"
import Switch from "react-switch";



export default function DepoPreview({depoimentos, handleChange }){

    return(
        <Fragment>

    <Container>

    {  !!depoimentos.length &&
        depoimentos.map(depoimento =>(             
            <li key={depoimento._id}>
                        
            <FileInfo >                   
                      <Fragment >
                           <Preview src={ depoimento.idusuario && depoimento.idusuario.avatar.url}/>  
                      </Fragment>

                  <div>
                    <strong>{depoimento.idusuario.nome}</strong>

                    

                    <span>
                                                        
{depoimento && depoimento.nota===0 &&(
  <span>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </span>
    )}


{depoimento && depoimento.nota===1 &&(
<span>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
  </span>
    )}

{depoimento && depoimento.nota===2 &&(
 <span>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
 </span>
    )}

{depoimento && depoimento.nota===3 &&(
<span>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
</span>
    )}
    


{depoimento && depoimento.nota===4 &&(
<span>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaRegStar color={'#fbec5d'} size={30}/>
</span>
)}

{depoimento && depoimento.nota===5 &&(
   <span>
    <FaStar color={'#fbec5d'} size={20}/>
    <FaStar color={'#fbec5d'} size={20}/>
    <FaStar color={'#fbec5d'} size={20}/>
    <FaStar color={'#fbec5d'} size={20}/>
    <FaStar color={'#fbec5d'} size={20}/>
   </span>
    )}
                    </span>
                    


                    
                    <span>{depoimento.descricao && depoimento.descricao}</span>
                    <span>Criado Há {distanceInWords(depoimento.createdAt, new Date(), {locale:pt})} </span>                                                                          
                </div>  
                                    
            </FileInfo>

            <div>                 
              
              
                
             
              <Switch 
                    onChange={()=>{handleChange(depoimento._id)}}
                    checked={depoimento.active}
              />
              
                                   
           </div>              
            </li>   
        )
    )
 }
    </Container>   
</Fragment>
    )
}