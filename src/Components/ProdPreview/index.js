import React, { Fragment } from 'react';
import { Container, FileInfo, Preview } from './styled';

import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdDeleteForever } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import filesize from 'filesize';

const ProdPreview = ({ bolos, deletar }) => (
  <Fragment>
    <Container>
      {!!bolos.length &&
        bolos.map(bolo => (
          <li key={bolo._id}>
            <FileInfo>
              <Fragment>
                <Preview
                  src={bolo.url}
                  onClick={() => {
                    window.open(`${bolo.url}`);
                  }}
                />
              </Fragment>

              <div>
                <strong>{bolo.descricao}</strong>

                {bolo.tags.map(tag => (
                  <strong key={Math.random()} className="tags">
                    {tag}
                  </strong>
                ))}

                <span>
                  Há{' '}
                  {distanceInWords(bolo.createdAt, new Date(), { locale: pt })}{' '}
                </span>
                <span>{filesize(bolo.size)}</span>
              </div>
            </FileInfo>

            <div>
              <span>{bolo.likes} </span>
              <FaRegHeart style={{ marginRight: 8 }} size={20} color="#666" />

              <button type="button">
                <MdDeleteForever
                  onClick={() => {
                    deletar(bolo._id);
                  }}
                  style={{ marginRight: 8 }}
                  size={24}
                  color="#f00"
                />
              </button>
            </div>
          </li>
        ))}
    </Container>
  </Fragment>
);

export default ProdPreview;
