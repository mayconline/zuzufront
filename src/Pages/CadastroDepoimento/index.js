import React, {Component, Fragment} from 'react';
import api from '../../Services/api';
import {Card, Loading} from './styled';
import InputForm from '../../Components/InputForm';


import Menu from '../../Components/Menu';

import ReactLoading from 'react-loading';


export default class CadastroDepoimento extends Component{

    state={
        loading:false,
        nota:5,
        descricao:'',
        depoimento:[],
        id:''    
    };

    async componentDidMount(){
        const _id = await localStorage.getItem('@userId')
        
       try{
          
           const depo = await api.get('/depoimentos')

           for(let depoimento of depo.data){
                if(depoimento.idusuario._id===_id){
                    this.setState({depoimento})
                    this.setState({
                        id:depoimento._id,
                        nota:depoimento.nota,
                        descricao:depoimento.descricao
                    })
                }
                
        }
                  
       }catch(e){            
                   return e;
       }
       
   }

   
   
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    

    handleSubmit= async (e)=>{
        e.preventDefault();

        //start loading ...
        await this.setState({loading:true});

        const{nota, descricao} = this.state;

      if(!nota || !descricao)  {
            
            await this.setState({loading:false});
            return alert('favor preencha os campos');

        } 

       
    try{

    

        const obj = await {
            nota,
            descricao
        };

    //pegar o token do usuario //
    const token = await localStorage.getItem('@userToken')
    const id = await localStorage.getItem('@userId')
    const headers ={'authorization':token}


    //enviando pra api
  !this.state.id ? 
    await api.post('/depoimentos/criar', obj, {headers} )
    :
    await api.put(`/depoimentos/alterar/${this.state.id}`, obj, {headers} )
  
       
    //end loading ...
    await this.setState({loading:false});

   //zera os states
    await this.setState({
        nota:0,
        descricao:''
        
    })

    this.props.history.push(`/usuarios/${id}/perfil`);

    } catch(e){
         //end loading ...
             await this.setState({loading:false});
        return alert(`${e} Você não possui permissão para cadastrar depoimentos`);
    }
       
    }

    render(){
        return(
            <Fragment>
                <Menu/>

                {this.state.loading && (   
                   <Loading>
                        <ReactLoading type='bars' color='#f00' height={'10rem'} width={'10rem'} />    
                   </Loading>     
                     )} 

         <Card>
             
            <form onSubmit={ this.handleSubmit }>

              
            <InputForm 
                  label="nota"
                  id = "nota"
                  type="number"
                  name="nota"
                  value={this.state.nota}
                  onChange={this.handleChange}
                  placeholder="Insira uma nota de 0 a 5"
                  min="0" 
                  max="5"
              /> 
              
                <InputForm 
                  label="descricao"
                  id = "descricao"
                  type="text"
                  name="descricao"
                  value={this.state.descricao}
                  onChange={this.handleChange}
                  placeholder="Descrição"
              /> 

               
             
        {!this.state.id ?
        <button type="submit">CRIAR DEPOIMENTO</button> :
        <button type="submit">EDITAR DEPOIMENTO</button>
            }

                
               

            </form>
       
            </Card>

            

            </Fragment>
        
           
       )
    }
}