import React, {Fragment, Component} from 'react';
import {Link}from 'react-router-dom';

import {Container, Card, Loading} from './styled';
import InputForm from '../../Components/InputForm';

import api from '../../Services/api';

import {FaBroom} from "react-icons/fa";
import { MdLockOutline ,MdMailOutline } from "react-icons/md";

import ReactLoading from 'react-loading';

export default class Login extends Component {

    state={
        usuario:'',
        senha:'',  
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

        const {usuario, senha} = this.state;

        if(!usuario.length || !senha.length ) {
            
            await this.setState({loading:false});
            return alert('favor preencha os campos');

        } 


        try {
            const obj = await {
                usuario:usuario,
                senha:senha
            };

            
         const res =  await api.post('usuarios/login', obj)

          await this.setState({
            usuario:'',
            senha:''
        });
          
            await localStorage.setItem('@userToken', res.data.jwtToken);
            await localStorage.setItem('@userId', res.data.user._id);
            await localStorage.setItem('@userNome', res.data.user.nome);
            

          const logado = await localStorage.getItem('@userToken')
            
          if(!logado) {
               return ;
             } else this.props.history.push('/');

           //end loading ...
        await this.setState({loading:false});   
    
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
                        <h2>SEJA BEM VINDO !!!</h2>
                     
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

                        <label>
                        <MdLockOutline color={'#f00'} size={20}/>
                        <span>SENHA</span>
                        </label>
                       

                        <InputForm                            
                            id = "senha"
                            type="password"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.handleChange}
                            placeholder="DIGITE SUA SENHA"
                            />
                           
                          
                         <footer>
                         <p><Link to="/usuarios/recuperar-senha" className='reset' > Esqueceu a senha ?</Link></p>


                            <button type="submit"> 
                               <FaBroom color={'#fff'} size={30} />
                            <span>ENTRAR</span>
                            </button>

                             </footer> 
                        
                       


                        </form>

                         <span>Não tem registro?</span><Link to="/registro" className='register' > Registre-se </Link>

                     
                        
                    </Card>
               
                </Container>
                
              
            </Fragment>
        )
    }
}

