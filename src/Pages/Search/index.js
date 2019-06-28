import React, {Component, Fragment} from 'react';
import api from '../../Services/api';

import Listcakes from '../../Components/Listcakes';
import {Section} from './styled';
import Menu from '../../Components/Menu';

export default class Search extends Component{

    state={
        listSearch:[]
    }


    async componentDidMount(){
       const {id} = await this.props.match.params;
      
        const res = await api.get(`/bolos/busca/${id}`);
        await this.setState({listSearch:res.data});
        
    }

    
    handleLike = (_id) =>{
        api.post(`/bolos/${_id}/like`);
    }

    render(){

        const {listSearch} = this.state

        return(
            <Fragment>
                <Menu/>
                <Section>
              <Listcakes bolos={listSearch} like={this.handleLike}/>
              </Section>
            </Fragment>
           
        )
    }
}