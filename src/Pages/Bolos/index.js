import React, {Component, Fragment} from 'react';

import {Section} from './styled';
import api from '../../Services/api';
import Listcakes from '../../Components/Listcakes';
import Menu from '../../Components/Menu';

export default class Bolos extends Component{

    state={
        listaBolos:[]
    }

    async componentDidMount(){
        const res = await api.get('/bolos');
            this.setState({listaBolos:res.data});
    }

    handleLike = (_id) =>{
        api.post(`/bolos/${_id}/like`);
    }


    render(){
        return(
            <Fragment>
                <Menu/>
              <Section>
              <Listcakes bolos={this.state.listaBolos} like={this.handleLike}/>
              </Section>            
            </Fragment>
        )
    }
}