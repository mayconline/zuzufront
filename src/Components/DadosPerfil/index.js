import React, {Fragment} from 'react';
import { Section, Container, Depoimento } from './styled';

const DadosPerfil = () =>(
    <Fragment>
    
    <Container>
        
    <Section>
        

        <h1>PERFIL</h1>
         <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1562595741/avatar/person_avatar_gcuj7q.jpg' alt='Avatar do Usuario' />   
        <p><strong>ADMINISTRADOR</strong></p>
        <p>Criado em: 01/01/2019</p>

        <p>EMAIL: xxxx@xxxx.com.br</p>
        <p>SENHA: xxxxxxx</p>

        <footer>
        <button className='editar'>Editar</button>
        <button className='excluir'>Excluir</button>               
        </footer>
        

</Section>
<Depoimento>
<h1>DEPOIMENTO</h1>
         
        <p>"Bolo maravilhoso, muito gostoso e bem feito, amei"</p>

        <footer>
        <button className='editar'>Editar</button>
        <button className='excluir'>Excluir</button>               
        </footer>
        
</Depoimento>


    </Container>
  
    </Fragment>
)

export default DadosPerfil;