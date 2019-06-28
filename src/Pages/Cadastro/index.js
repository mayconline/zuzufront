import React, {Component, Fragment} from 'react';
import api from '../../Services/api';
import {Card, Loading} from './styled';
import InputForm from '../../Components/InputForm';
import Upload from  '../../Components/Upload';
import ProdPreview from '../../Components/ProdPreview';
import Menu from '../../Components/Menu';

import ReactLoading from 'react-loading';

export default class Cadastro extends Component{

    state={
        loading:false,
        file:null,
        descricao:'',
        tag:'',
        tags:[],
        listaBolos:[]
    };

    async componentDidMount(){
        const res = await api.get('/bolos');
            this.setState({listaBolos:res.data});
    }

    deletarBolo = async (_id)=>{
        
        await  this.setState({loading:true});
       
        try{
            await api.delete(`/bolos/${_id}`);
                await this.setState({loading:false});
                 window.location.reload();        
           
        }  
        catch{
             await   this.setState({loading:false});
        }
    }


    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleImage= (files)=>{
        this.setState({
            file:files[0]
        })
    }

    handleSubmit= async (e)=>{
        e.preventDefault();

        //start loading ...
        await this.setState({loading:true});

        //pegando valor da tag do input, splitando e gerando um array//
     let tag = await this.state.tag
     let split = await tag.split(' ')
        await this.setState({tags:split})
      
        //criando um formData add os campos //
      const data = await new FormData();
         await   data.append('file', this.state.file);
         await   data.append('descricao', this.state.descricao);

         //enviar um array com formData precisa utilizar o for //
        for(let tag of this.state.tags){
            await   data.append('tags', tag);
            
        }
        //enviando pra api
        await api.post('/bolos/cadastro', data)

        //end loading ...
        await this.setState({loading:false});

        //zera os states
        await this.setState({
            file:null,
            descricao:'',
            tag:'',
            tags:[]
        })

        this.props.history.push('/bolos');

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
             
            <form onSubmit={this.handleSubmit}>

                <Upload onUpload={this.handleImage}
                    file={this.state.file}
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

                <InputForm 
                  label="tags"
                  id = "tags"
                  type="text"
                  name="tag"
                  value={this.state.tag}
                  onChange={this.handleChange}
                  placeholder="Descrição"
              /> 
             

                <button type="submit">CADASTRAR</button>

            </form>
       
            </Card>

            <section>
            <ProdPreview 
            bolos={this.state.listaBolos}
            deletar={this.deletarBolo}
                />
            </section>
            

            </Fragment>
        
           
       )
    }
}