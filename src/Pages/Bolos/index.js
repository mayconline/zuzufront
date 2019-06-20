import React, {Component, Fragment} from 'react';

import {Section} from './styled';
import api from '../../Services/api';
import Listcakes from '../../Components/Listcakes';

export default class Bolos extends Component{

    state={
        listaBolos:[]
    }

    async componentDidMount(){
        const res = await api.get('/bolos');
            this.setState({listaBolos:res.data});
    }

    render(){
        return(
            <Fragment>
              <Section>
              <Listcakes bolos={this.state.listaBolos} />
              </Section>            
            </Fragment>
        )
    }
}