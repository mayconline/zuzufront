import React, { Component, Fragment } from 'react';
import ReactLoading from 'react-loading';
import InputForm from '../../Components/InputForm';
import Menu from '../../Components/Menu';
import ProdPreview from '../../Components/ProdPreview';
import Upload from '../../Components/Upload';
import api from '../../Services/api';
import { Card, Loading } from './styled';

export default class Cadastro extends Component {
  state = {
    loading: false,
    file: null,
    descricao: '',
    tag: '',
    tags: [],
    listaBolos: [],
  };

  async componentDidMount() {
    const res = await api.get('/bolos');
    this.setState({ listaBolos: res.data });
  }

  deletarBolo = async _id => {
    await this.setState({ loading: true });

    try {
      //pegar o token do usuario //
      const token = await localStorage.getItem('@userToken');
      const headers = { authorization: token };

      await api.delete(`/bolos/${_id}`, { headers });
      await this.setState({ loading: false });
      window.location.reload();
    } catch (e) {
      await this.setState({ loading: false });
      return alert(`${e} Você não possui permissão para deletar produtos`);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleImage = files => {
    this.setState({
      file: files[0],
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    //start loading ...
    await this.setState({ loading: true });

    try {
      //pegando valor da tag do input, splitando e gerando um array//
      let tag = await this.state.tag;
      let split = await tag.split(' ');
      await this.setState({ tags: split });

      //criando um formData add os campos //
      const data = await new FormData();
      await data.append('file', this.state.file);
      await data.append('descricao', this.state.descricao.trim());

      //enviar um array com formData precisa utilizar o for //
      for (let tag of this.state.tags) {
        (await tag.length) > 0 && (await data.append('tags', tag.trim()));
      }

      //pegar o token do usuario //
      const token = await localStorage.getItem('@userToken');
      const headers = { authorization: token };

      //enviando pra api
      await api.post('/bolos/cadastro', data, { headers });

      //end loading ...
      await this.setState({ loading: false });

      //zera os states
      await this.setState({
        file: null,
        descricao: '',
        tag: '',
        tags: [],
      });

      this.props.history.push('/bolos');
    } catch (e) {
      //end loading ...
      await this.setState({ loading: false });
      return alert(`${e} Você não possui permissão para cadastrar produtos`);
    }
  };

  render() {
    return (
      <Fragment>
        <Menu />

        {this.state.loading && (
          <Loading>
            <p>Carregando, Por favor Aguarde ...</p>
            <ReactLoading
              type="bars"
              color="#f00"
              height={'10rem'}
              width={'10rem'}
            />
          </Loading>
        )}

        <Card>
          <form onSubmit={this.handleSubmit}>
            <Upload onUpload={this.handleImage} file={this.state.file} />

            <InputForm
              label="descricao"
              id="descricao"
              type="text"
              name="descricao"
              value={this.state.descricao}
              onChange={this.handleChange}
              placeholder="Digite uma descricao para foto"
            />

            <InputForm
              label="tags"
              id="tags"
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              placeholder="Palavras chaves pros clientes procurarem por elas, exemplo: TIMES FUTEBOL CHANTILY CHOCOLATE ..."
            />

            <button type="submit">CADASTRAR</button>
          </form>
        </Card>

        {this.state.loading && (
          <Loading>
            <p>Carregando, Por favor Aguarde ...</p>
            <ReactLoading
              type="bars"
              color="#f00"
              height={'10rem'}
              width={'10rem'}
            />
          </Loading>
        )}

        <section>
          <ProdPreview
            bolos={this.state.listaBolos}
            deletar={this.deletarBolo}
          />
        </section>
      </Fragment>
    );
  }
}
