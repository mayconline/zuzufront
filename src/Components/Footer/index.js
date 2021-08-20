import React, { Fragment } from 'react';
import { Container } from './styled';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const AdminBar = ({ whatsapp, facebook }) => (
  <Fragment>
    <Container>
      <header className="menu">
        <h4>© 2021 Zuzu Cakes</h4>

        <nav className="social_bar">
          <a
            href="https://zuzucakes.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebookF color={'#fff'} size={30} />
          </a>
          <a
            // href="https://instagram.com/zuzucake.s?igshid=1sgypfz2ofkmm"
            href="https://zuzucakes.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram color={'#fff'} size={30} />
          </a>
          <a
            href="https://zuzucakes.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaWhatsapp color={'#fff'} size={30} />
          </a>
        </nav>
      </header>
    </Container>
  </Fragment>
);

export default AdminBar;
