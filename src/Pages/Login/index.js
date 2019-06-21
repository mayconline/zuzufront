import React, {Fragment, Component} from 'react';
import {Link}from 'react-router-dom';

import {Container} from './styled';

export default class Login extends Component {
    render(){
        return(
            <Fragment>
                <Container>
                <h1>
                <Link to="/"> <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1556741879/ZuzuCake/Logo/zuzuLogo_x0crgs.png' alt='ZuzuCakes' /></Link>   
                </h1>
                </Container>
                
              
            </Fragment>
        )
    }
}