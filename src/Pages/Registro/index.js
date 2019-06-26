import React, {Fragment, Component} from 'react';
import {Link}from 'react-router-dom';

import {Container, Card} from './styled';
import InputForm from '../../Components/InputForm';

import { MdLockOutline ,MdPersonOutline, MdMailOutline, MdAccountCircle} from "react-icons/md";

export default class Registro extends Component {
    render(){
        return(
            <Fragment>
                <Container>

                     <h1>
                    <Link to="/"> <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1556741879/ZuzuCake/Logo/zuzuLogo_x0crgs.png' alt='Zuzu Cakes' /></Link>   
                    </h1>
                    <Card>
                        <h2>CRIE SUA CONTA</h2>
                     
                        <form onSubmit={()=>{}}>

                        <label>
                        <MdPersonOutline color={'#f00'} size={20}/>
                        <span>NOME</span>
                        </label>

                        <InputForm 
                           
                            id = "nome"
                            type="text"
                            name="nome"
                            value={()=>{}}
                            onChange={()=>{}}
                            placeholder="DIGITE SEU NOME"
                            /> 

                        <label>
                        <MdMailOutline color={'#f00'} size={20}/>
                        <span>USUARIO</span>
                        </label>

                        <InputForm 
                           
                            id = "usuario"
                            type="email"
                            name="usuario"
                            value={()=>{}}
                            onChange={()=>{}}
                            placeholder="DIGITE SEU EMAIL"
                            /> 

                        <label>
                        <MdLockOutline color={'#f00'} size={20}/>
                        <span>SENHA</span>
                        </label>
                       

                        <InputForm                            
                            id = "senha"
                            type="password"
                            name="senha"
                            value={()=>{}}
                            onChange={()=>{}}
                                 placeholder="DIGITE SUA SENHA"
                            />
                           
                           <label>
                        <MdLockOutline color={'#f00'} size={20}/>
                        <span>CONFIRMAR SENHA</span>
                        </label>
                       

                        <InputForm                            
                            id = "confirmasenha"
                            type="password"
                            name="confirmasenha"
                            value={()=>{}}
                            onChange={()=>{}}
                                 placeholder="DIGITE SUA SENHA NOVAMENTE"
                            />
                          
                           

                         <button type="submit"> 
                         <MdAccountCircle color={'#fff'} size={30} />
                         <span>CRIAR CONTA</span>
                         </button>

                        </form>

                    
                    </Card>
               
                </Container>
                
              
            </Fragment>
        )
    }
}