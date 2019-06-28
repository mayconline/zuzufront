import React, {Component, Fragment} from 'react';


import SlideIntro from '../../Components/SlideIntro';
import Jumbotron from '../../Components/Jumbotron';
import Categorias from '../../Components/Categorias';
import Delivery from '../../Components/Delivery';
import Menu from '../../Components/Menu';
import api from '../../Services/api';

export default class Main extends Component{

    state={
        fotos:[]
    }

    async componentDidMount(){
        const res = await api.get('/bolos/slide')
            this.setState({fotos:res.data});
    }

    render(){
        return(
            <Fragment>
                <Menu/>           
                <SlideIntro fotos={this.state.fotos}/>
                <Jumbotron/>
                <Categorias/>
                <Delivery/>
            </Fragment>
        )
    }
}