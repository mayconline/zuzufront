import React, {Fragment, Component} from 'react';

import {JSS} from './styled';

import {FaSearch} from "react-icons/fa";

export default class SearchBar extends Component{

    state={
        search:'',
        listSearch:[]
    }

    handleChange=(e)=>{
        this.setState({search:e.target.value})
        
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        window.location.href = `http://localhost:3000/bolos/busca/${this.state.search}`;
    }

    render(){
        return(
            <Fragment>
                <JSS>
                <form onSubmit={this.handleSubmit}>
                    <div className='group-search'>
                    <input
                        
                        id='search'
                        type='search'
                        placeholder='PESQUISAR BOLOS'
                        value={this.state.search}
                        onChange={this.handleChange}
                        
                    />
                    <button type='submit'>
                    <FaSearch size={25} color={'red'}/>
                    </button>
                    </div>
                    
                   
                </form>

                </JSS>
                
            </Fragment>
        )
    }
}