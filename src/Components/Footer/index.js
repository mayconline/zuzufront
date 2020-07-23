import React, { Fragment } from 'react';
import { Container } from './styled';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const AdminBar = ({ whatsapp, facebook }) => (
  <Fragment>
    <Container>
      <header className="menu">
        <h4>© 2020 Zuzu Cakes</h4>

        <nav className="social_bar">
          <a href={facebook} rel="noopener noreferrer" target="_blank">
            <FaFacebookF color={'#fff'} size={30} />
          </a>
          <a
            href="https://instagram.com/zuzucake.s?igshid=1sgypfz2ofkmm"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram color={'#fff'} size={30} />
          </a>
          <a href={whatsapp} rel="noopener noreferrer" target="_blank">
            <FaWhatsapp color={'#fff'} size={30} />
          </a>
        </nav>
      </header>
    </Container>
  </Fragment>
);

export default AdminBar;
