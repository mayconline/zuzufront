import React, {Fragment, Component} from 'react';
import api from '../../Services/api';
import {Link}from 'react-router-dom';

import {Container, Card, Loading} from './styled';
import InputForm from '../../Components/InputForm';
import ReactLoading from 'react-loading';

import {FaBroom} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default class RecSenha extends Component{

    state={
        usuario:'', 
        loading:false
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

      
    handleSubmit = async (e)=>{
        e.preventDefault();

       
        //start loading ...
        await this.setState({loading:true});

        const {usuario} = this.state;

        if(!usuario.length ) {
            
            await this.setState({loading:false});
            return alert('favor preencha os campos');

        } 


        try {
                  
            const obj = await {
                usuario:usuario              
            };

            await api.post('usuarios/recsenha', obj)
                await this.setState({ usuario:'' });
                     //end loading ...
                    await this.setState({loading:false}); 
                    
            alert(`Link enviado para ${usuario}, se não chegar na caixa de entrada
                    favor verificar a caixa de span`)
    
        }
        catch(e){
           
             //end loading ...
             this.setState({loading:false});  

            alert('favor verifique os dados digitados')
        }

      

    }



    render(){
        return(
            
            <Fragment>
                <Container>

                     <h1>
                    <Link to="/"> <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1556741879/ZuzuCake/Logo/zuzuLogo_x0crgs.png' alt='Zuzu Cakes' /></Link>   
                    </h1>

                    {this.state.loading && (
                   
                   <Loading>
                        <ReactLoading type='bars' color='#fafafa' height={'10rem'} width={'10rem'} />    
                   </Loading>
                   
               )} 

                    <Card>
                        <h2>FAVOR INSIRA SEU EMAIL DE CADASTRO</h2>
                        <span>Será Enviado um Link de Redefinição de Senha para o Email Cadastrado</span>

                        <form onSubmit={this.handleSubmit}>

                        <label>
                        <MdMailOutline color={'#f00'} size={20}/>
                        <span>Usuario</span>
                        </label>

                        <InputForm 
                           
                            id = "usuario"
                            type="text"
                            name="usuario"
                            value={this.state.usuario}
                            onChange={this.handleChange}
                            placeholder="DIGITE SEU USUARIO"
                            /> 
                        
                            <button type="submit"> 
                               <FaBroom color={'#fff'} size={30} />
                            <span>ENVIAR EMAIL</span>
                            </button>

                        </form>

                        <footer>
                        <p>Não tem registro ?</p><Link to="/registro" className='register' > Registre-se </Link>
                        </footer>
                        

                     
                        
                    </Card>
               
                </Container>
                
              
            </Fragment>
       
        )
    }
}

