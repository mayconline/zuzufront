import React, {Fragment} from 'react';
import {CardContent, Content} from './styled';

import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';
import{MdLink} from 'react-icons/md';


const Listcakes = ({bolos}) =>{

    return(
        <Fragment>
            {bolos && 
        
        bolos.map(bolo=>(
           
            <Content key={bolo._id}>                    
            <CardContent>
        
            <figure >
            <img src={bolo.url} alt={bolo.descricao} />  
                
                <section>
                     <figcaption>
                        <h3>{bolo.descricao}</h3>
                        <span> Há {distanceInWords(bolo.createdAt, new Date(), {locale:pt})} </span>
                     </figcaption>

                     <div>
                     <a href={bolo.url}
                         target='_blank'
                           rel='noopener noreferrer'>                                     
                         <MdLink style={{marginRight:8}}  size={24} color='#222'/>
                       </a>                                                  
                     </div>
                </section>
          </figure>       
    
        </CardContent>
    </Content>
        
 ))}
        </Fragment>
       
    )
}

   
    

export default Listcakes;