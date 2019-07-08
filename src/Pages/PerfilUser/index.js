import React, {Component, Fragment} from 'react';

import Menu from '../../Components/Menu';
import DadosPerfil from '../../Components/DadosPerfil';

export default class PerfilUser extends Component {

    render(){
        return(
            <Fragment>
                <Menu />
                <DadosPerfil/>
            </Fragment>
              )
    }
}