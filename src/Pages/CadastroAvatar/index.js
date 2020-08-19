import React, { Component, Fragment } from 'react';
import api from '../../Services/api';
import { Card, Loading } from './styled';
import Menu from '../../Components/Menu';
import ReactLoading from 'react-loading';

import Upload from '../../Components/Upload';

export default class CadastroAvatar extends Component {
  state = {
    loading: false,
    file: null,
    avatarID: null,
    avatarUrl: null,
    userId: null,
  };

  async componentDidMount() {
    const userid = await localStorage.getItem('@userId');
    const token = await localStorage.getItem('@userToken');
    const headers = { authorization: token };

    try {
      const res = await api.get(`/usuarios/${userid}`, { headers });
      await this.setState({
        avatarID: res.data.avatar._id,
        avatarUrl: res.data.avatar.url,
        userId: userid,
      });
    } catch (e) {
      return e;
    }
  }

  handleImage = files => {
    this.setState({
      file: files[0],
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    //start loading ...
    await this.setState({ loading: true });
    //pega id do usuario
    const userid = await localStorage.getItem('@userId');

    if (!this.state.file) {
      //end loading ...
      await this.setState({ loading: false });
      return alert('favor inserir uma foto');
    }

    try {
      //criando um formData add os campos //
      const data = await new FormData();
      await data.append('file', this.state.file);

      //pegar o token do usuario //
      const token = await localStorage.getItem('@userToken');
      const headers = { authorization: token };

      //enviando pra api
      !this.state.avatarID
        ? await api.post(`/avataruser/${userid}/cadastro`, data, { headers })
        : await api.put(`/avataruser/${userid}/alterar`, data, { headers });

      //end loading ...
      await this.setState({ loading: false });

      //zera os states
      await this.setState({ file: null });

      this.props.history.push(`/usuarios/${userid}/perfil`);
    } catch (e) {
      //end loading ...
      await this.setState({ loading: false });
      return alert(`${e} Você não possui permissão para cadastrar produtos`);
    }
  };

  deletarFoto = async e => {
    await this.setState({ loading: true });

    try {
      //pegar o token do usuario //
      const token = await localStorage.getItem('@userToken');
      const headers = { authorization: token };

      await api.delete(`/avataruser/${this.state.userId}/delete`, { headers });
      await this.setState({ loading: false });

      this.props.history.push(`/usuarios/${this.state.userId}/perfil`);
      await this.setState({
        userId: null,
      });
    } catch (e) {
      await this.setState({ loading: false });
      return alert(`${e} Você não possui permissão para deletar produtos`);
    }
  };

  render() {
    return (
      <Fragment>
        <Menu />

        {this.state.loading && (
          <Loading>
            <ReactLoading
              type="bars"
              color="#f00"
              height={'10rem'}
              width={'10rem'}
            />
          </Loading>
        )}

        <Card>
          {this.state.avatarUrl && (
            <img src={this.state.avatarUrl} alt="Avatar do Usuario" />
          )}

          <form onSubmit={this.handleSubmit}>
            <Upload onUpload={this.handleImage} file={this.state.file} />

            {!this.state.avatarUrl && (
              <Fragment>
                <button type="submit" className="cadastrar">
                  CADASTRAR
                </button>
              </Fragment>
            )}

            {this.state.avatarUrl && (
              <Fragment>
                <footer>
                  <button type="submit" className="editar">
                    EDITAR
                  </button>
                  <button className="excluir" onClick={this.deletarFoto}>
                    Excluir
                  </button>
                </footer>
              </Fragment>
            )}
          </form>
        </Card>
      </Fragment>
    );
  }
}
