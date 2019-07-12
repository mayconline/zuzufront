import React, {Fragment, Component} from 'react';
import {Link}from 'react-router-dom';

import {Container, Card, Loading} from './styled';
import InputForm from '../../Components/InputForm';
import ReactLoading from 'react-loading';

import { MdLockOutline ,MdPersonOutline, MdMailOutline, MdAccountCircle} from "react-icons/md";
import api from '../../Services/api';

export default class Registro extends Component {

    state={
        nome:'',
        usuario:'',
        senha:'',
        confirmasenha:'',
        loading:false,
        id:''
        
    }

  
    async componentDidMount(){
        
        const token= await localStorage.getItem('@userToken')
        const headers ={'authorization':token}
        const {id} = this.props.match.params;

       try{
           const res = await api.get(`/usuarios/${id}`,{headers})
             this.setState({
                 id,
                 usuario:res.data.usuario,
                 nome:res.data.nome
             });
           
        }catch(e){            
            return e;
       }
       
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

        const {nome, usuario, senha, confirmasenha} = this.state;

        if(!nome || !usuario || !senha || !confirmasenha) {
            
            await this.setState({loading:false});
            return alert('favor preencha os campos');

        } 

        if(senha!==confirmasenha) {
            await this.setState({loading:false});
            return alert('as senhas digitadas não são iguais');
        }

        try {
                       
      if(!this.state.id) {

        // usuario nao registrado , chama o registar //

        const obj = await {
            nome:nome,
            usuario:usuario,
            senha:senha
        };

        const res = await api.post('usuarios/registro', obj)

        await this.setState({
            nome:'',
            usuario:'',
            senha:''
        });
          
            await localStorage.setItem('@userToken', res.data.jwtToken);
            await localStorage.setItem('@userId', res.data.registro._id);
            await localStorage.setItem('@userNome', res.data.registro.nome);

          const logado = await localStorage.getItem('@userToken')
            
          if(!logado) {
               return ;
             } else this.props.history.push('/');

           //end loading ...
        await this.setState({loading:false});   


      } else {
            // usuario ja tem registro, chama o alterar usuario //
        const token= await localStorage.getItem('@userToken')
        const headers ={'authorization':token}

        const obj = await {
            nome:nome,
            usuario:usuario,
            senha:senha
        };

        const res =   await api.put(`/usuarios/${this.state.id}/alterar`, obj,{headers})

        await this.setState({
            nome:'',
            usuario:'',
            senha:''
        });

        await localStorage.setItem('@userToken', res.data.jwtToken);
        await localStorage.setItem('@userId', res.data.alterado._id);
        await localStorage.setItem('@userNome', res.data.alterado.nome);

        const logado = await localStorage.getItem('@userToken')
            
          if(!logado) {
               return ;
             } else this.props.history.push(`/usuarios/${this.state.id}/perfil`);

           //end loading ...
        await this.setState({loading:false});   


      }
        
    }  catch(e){
           
             //end loading ...
             this.setState({loading:false});  

             return alert(` ${e} ocorreu um erro ao tentar registrar, favor tente novamente`)
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
                        <h2>CRIE SUA CONTA</h2>
                     
                        <form onSubmit={this.handleSubmit}>

                        <label>
                        <MdPersonOutline color={'#f00'} size={20}/>
                        <span>NOME</span>
                        </label>

                        <InputForm 
                           
                            id = "nome"
                            type="text"
                            name="nome"
                            value={this.state.nome}
                            onChange={this.handleChange}
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
                            value={this.state.usuario}
                            onChange={this.handleChange}
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
                            value={this.state.senha}
                            onChange={this.handleChange}
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
                            value={this.state.confirmasenha}
                            onChange={this.handleChange}
                            placeholder="DIGITE SUA SENHA NOVAMENTE"
                            />
                          
                           
                    {!this.state.id ? (
                        <button type="submit"> 
                        <MdAccountCircle color={'#fff'} size={30} />
                        <span>CRIAR CONTA</span>
                        </button>

                    ):(
                        <button type="submit"> 
                        <MdAccountCircle color={'#fff'} size={30} />
                        <span>ALTERAR</span>
                        </button>

                    )} 
                         

                        </form>

                    
                    </Card>
               
                </Container>

           
                
                
              
            </Fragment>
        )
    }
}