import React from 'react';
import {Section, Categories} from './styled';
import {Container, Row, Col} from '../Grid';

const Categorias = () => (

   <Section>
       <Container>

           <Row>
             <Col col='3'>
             <Categories src='https://res.cloudinary.com/apinodeteste/image/upload/v1557150776/ZuzuCake/Categorias/Datas-Comemorativas_ubqfel.jpg' >       
            <a href='/bolos'>DATAS COMEMORATIVAS</a>
        </Categories>
             </Col>

             <Col col='3'>
             <Categories src='https://res.cloudinary.com/apinodeteste/image/upload/v1557150776/ZuzuCake/Categorias/Esportes_y7wzzu.jpg' >
        <a href='/bolos'>ESPORTES</a>
        </Categories>
            </Col>

            <Col col='3'>
            <Categories src='https://res.cloudinary.com/apinodeteste/image/upload/v1557150776/ZuzuCake/Categorias/Jogos_-Desenhos_cvwvno.jpg' >
        <a href='/bolos'>JOGOS E DESENHOS</a>
        </Categories>
            </Col>

            <Col col='3'>
            
        <Categories src='https://res.cloudinary.com/apinodeteste/image/upload/v1557150776/ZuzuCake/Categorias/Outros_vzoxcr.jpg' >
        <a href='/bolos'>DIVERSOS</a>
        </Categories>

            </Col>

           </Row>
       </Container>
       

        

       

   </Section>
);

export default Categorias;