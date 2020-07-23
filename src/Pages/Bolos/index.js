import React, { Fragment, useState, useEffect } from 'react';

import { Section, Loading, Main } from './styled';
import api from '../../Services/api';
import Listcakes from '../../Components/Listcakes';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';

import { detectar_mobile } from '../../Services/whats';
import { detectar_mobile_f } from '../../Services/face';

import ReactLoading from 'react-loading';

export default function Bolos() {
  const [bolos, setBolos] = useState([]);
  const [alterado, setAlterado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsapp, setWhatsapp] = useState('');
  const [facebook, setFacebook] = useState('');

  useEffect(() => {
    ArrayBolos();
  }, [alterado]);

  useEffect(() => {
    changeWhats();
  }, [whatsapp]);

  useEffect(() => {
    changeFace();
  }, [facebook]);

  const ArrayBolos = async () => {
    //start loading ...
    await setLoading(true);

    try {
      const res = await api.get('/bolos');
      await setBolos(res.data);
      //end loading...
      await setLoading(false);
    } catch (e) {
      //end loading...
      await setLoading(false);
      return e;
    }
  };

  async function changeWhats() {
    const whats = await detectar_mobile();
    await setWhatsapp(whats);
  }

  async function changeFace() {
    const face = await detectar_mobile_f();
    await setFacebook(face);
  }

  const handleLike = async _id => {
    await api.post(`/bolos/${_id}/like`);
    await setAlterado(!alterado);
  };

  return (
    <Fragment>
      <Menu />
      <Main>
        {loading && (
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

        <Section>
          <Listcakes bolos={bolos} like={handleLike} />
        </Section>
      </Main>

      <Footer whatsapp={whatsapp} facebook={facebook} />
    </Fragment>
  );
}
