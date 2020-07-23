import React, { Fragment } from 'react';
import { CardContent, Content } from './styled';

import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FaRegHeart, FaPaperclip } from 'react-icons/fa';

const Listcakes = ({ bolos, like }) => {
  return (
    <Fragment>
      {bolos &&
        bolos.map(bolo => (
          <Content key={bolo._id}>
            <CardContent>
              <figure>
                <img src={bolo.url} alt={bolo.descricao} />

                <section>
                  <figcaption>
                    <h3>{bolo.descricao}</h3>
                    <span>
                      {' '}
                      Há{' '}
                      {distanceInWords(bolo.createdAt, new Date(), {
                        locale: pt,
                      })}{' '}
                    </span>
                  </figcaption>
                  <footer>
                    <div>
                      <button type="button" onClick={() => like(bolo._id)}>
                        <FaRegHeart
                          style={{ marginRight: 8 }}
                          size={20}
                          color="#666"
                        />
                      </button>

                      <a
                        href={bolo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPaperclip
                          style={{ marginRight: 8 }}
                          size={20}
                          color="#666"
                        />
                      </a>
                    </div>
                    <strong>
                      <p>{bolo.likes} curtidas</p>
                    </strong>
                  </footer>
                </section>
              </figure>
            </CardContent>
          </Content>
        ))}
    </Fragment>
  );
};

export default Listcakes;
