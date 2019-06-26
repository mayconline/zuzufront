import React, {Fragment, Component} from 'react';
import {Link}from 'react-router-dom';

import {Container, Card} from './styled';
import InputForm from '../../Components/InputForm';



import {FaBroom} from "react-icons/fa";
import { MdLockOutline ,MdMailOutline } from "react-icons/md";

export default class Login extends Component {
    render(){
        return(
            <Fragment>
                <Container>

                     <h1>
                    <Link to="/"> <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1556741879/ZuzuCake/Logo/zuzuLogo_x0crgs.png' alt='Zuzu Cakes' /></Link>   
                    </h1>
                    <Card>
                        <h2>SEJA BEM VINDO !!!</h2>
                     
                        <form onSubmit={()=>{}}>

                        <label>
                        <MdMailOutline color={'#f00'} size={20}/>
                        <span>Usuario</span>
                        </label>

                        <InputForm 
                           
                            id = "usuario"
                            type="text"
                            name="usuario"
                            value={()=>{}}
                            onChange={()=>{}}
                            placeholder="DIGITE SEU USUARIO"
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
                           
                          
                           

                         <button type="submit"> 
                         <FaBroom color={'#fff'} size={30} />
                         <span>ENTRAR</span>
                         </button>

                        </form>

                    
                    </Card>
               
                </Container>
                
              
            </Fragment>
        )
    }
}

