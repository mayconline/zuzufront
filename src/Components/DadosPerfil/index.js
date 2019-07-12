import React, {Fragment} from 'react';
import { Section, Container, Depoimento, Rating } from './styled';
import {Link} from 'react-router-dom';


import {FaStar, FaRegStar} from "react-icons/fa";

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

const DadosPerfil = ({usuario, depoimento, deletarDepo}) =>(
    <Fragment>
    
    <Container>
        
    <Section>
       

        <h2>PERFIL</h2>
         <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1562595741/avatar/person_avatar_gcuj7q.jpg' alt='Avatar do Usuario' />   
        <p><strong>{usuario && usuario.nome}</strong></p>
        <p>Criado em {format(usuario && usuario.createdAt, 'DD/MM/YYYY', {locale:pt})} </p>

        <p>EMAIL: {usuario && usuario.usuario}</p>
        <p>SENHA: xxxxxxxxxx</p>

        <footer>
       <Link to='/depoimentos/criar'><button className='editar'>Editar</button></Link> 
       <button className='excluir'>Excluir</button>            
        </footer>
        

</Section>
<Depoimento>
<h3>DEPOIMENTO</h3>



{depoimento && depoimento.nota===0 &&(
    <Rating>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}


{depoimento && depoimento.nota===1 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}

{depoimento && depoimento.nota===2 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}

{depoimento && depoimento.nota===3 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}
    


{depoimento && depoimento.nota===4 &&(
<Rating>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaRegStar color={'#fbec5d'} size={30}/>
</Rating>
)}

{depoimento && depoimento.nota===5 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}



        <p>"{depoimento && depoimento.descricao ? depoimento.descricao:'Deixe seu Comentário, é muito importante para nós'}" 
        </p>
        <cite> - {depoimento.idusuario && depoimento.idusuario.nome}</cite>

        <footer>
       
        {depoimento.descricao ? (
            <Fragment>
                 <Link to={`/depoimentos/alterar/${depoimento._id}`}><button className='editar'>Editar</button></Link> 
                    <button className='excluir' onClick={()=>deletarDepo(depoimento._id)}>Excluir</button> 
            </Fragment>
            
        ):(
            <Link to='/depoimentos/criar'><button className='editar'>Criar</button></Link> 
       ) }
        

                     
        </footer>
        
</Depoimento>


    </Container>
  
    </Fragment>
)

export default DadosPerfil;