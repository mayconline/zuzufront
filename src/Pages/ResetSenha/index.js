import React, { Fragment, Component } from 'react';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

import { Container, Card, Loading } from './styled';
import InputForm from '../../Components/InputForm';
import ReactLoading from 'react-loading';

import { FaBroom } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import ZuzuLogo from '../../Assets/svg/ZuzuLogo';

export default class ResetSenha extends Component {
  state = {
    senha: '',
    confirmasenha: '',
    loading: false,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    //start loading ...
    await this.setState({ loading: true });

    const { senha, confirmasenha } = this.state;
    const { idrec } = this.props.match.params;

    if (!idrec) {
      await this.setState({ loading: false });
      return alert('Link Invalido');
    }

    if (!senha.length || !confirmasenha.length) {
      await this.setState({ loading: false });
      return alert('favor preencha os campos');
    }

    if (senha !== confirmasenha) {
      await this.setState({ loading: false });
      return alert('as senhas digitadas não são iguais');
    }

    try {
      const obj = await {
        senha: senha,
      };

      await api.post(`usuarios/${idrec}/recsenha`, obj);
      await this.setState({ senha: '' });
      await this.props.history.push('/login');

      //end loading ...
      await this.setState({ loading: false });

      alert(`Senha Alterada com Sucesso, Favor realizar o Login`);
    } catch (e) {
      //end loading ...
      this.setState({ loading: false });

      alert(`Link Invalido ou Expirado, Favor Gerar Outro Link `);

      this.props.history.push('/usuarios/recuperar-senha');
    }
  };

  render() {
    return (
      <Fragment>
        <Container>
          <h1>
            <Link to="/">
              <ZuzuLogo />
            </Link>
          </h1>

          {this.state.loading && (
            <Loading>
              <ReactLoading
                type="bars"
                color="#fafafa"
                height={'10rem'}
                width={'10rem'}
              />
            </Loading>
          )}

          <Card>
            <h2>ALTERAR SENHA</h2>

            <form onSubmit={this.handleSubmit}>
              <label>
                <MdLockOutline color={'#f00'} size={20} />
                <span>SENHA</span>
              </label>

              <InputForm
                id="senha"
                type="password"
                name="senha"
                value={this.state.senha}
                onChange={this.handleChange}
                placeholder="DIGITE SUA SENHA"
              />

              <label>
                <MdLockOutline color={'#f00'} size={20} />
                <span>CONFIRMAR SENHA</span>
              </label>

              <InputForm
                id="confirmasenha"
                type="password"
                name="confirmasenha"
                value={this.state.confirmasenha}
                onChange={this.handleChange}
                placeholder="DIGITE SUA SENHA NOVAMENTE"
              />

              <button type="submit">
                <FaBroom color={'#fff'} size={30} />
                <span>ALTERAR SENHA</span>
              </button>
            </form>
          </Card>
        </Container>
      </Fragment>
    );
  }
}
