import React, { Component, Fragment } from 'react';

import Toolbar from '../Toolbar';

import api from '../../Services/api';
import { detectar_mobile } from '../../Services/whats';
import { detectar_mobile_f } from '../../Services/face';

export default class Menu extends Component {
  state = {
    AdminBarOpen: false,
    usuarioLogado: {},
    whatsapp: '',
    facebook: '',
  };

  async componentDidMount() {
    this.usuarioLogado();
    const res = await detectar_mobile();
    const face = await detectar_mobile_f();
    this.setState({ whatsapp: res, facebook: face });
  }

  AdminBar = () => {
    this.setState(prevState => {
      return { AdminBarOpen: !prevState.AdminBarOpen };
    });
  };

  usuarioLogado = async () => {
    const token = await localStorage.getItem('@userToken');
    const nome = await localStorage.getItem('@userNome');
    const id = await localStorage.getItem('@userId');

    const headers = { authorization: token };
    const res = await api.get(`/usuarios/${id}`, { headers });

    const obj = {
      token,
      nome,
      id,
      staff: res.data.staff,
    };

    await this.setState({
      usuarioLogado: obj,
    });
  };

  logOut = async () => {
    await localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          AdminOpen={this.AdminBar}
          AdminBarState={this.state.AdminBarOpen}
          usuarioLogado={this.state.usuarioLogado}
          logOut={this.logOut}
          // whatsapp={this.state.whatsapp}
          // facebook={this.state.facebook}
          whatsapp={'https://zuzucakes.netlify.app/'}
          facebook={'https://zuzucakes.netlify.app/'}
        />
      </Fragment>
    );
  }
}
