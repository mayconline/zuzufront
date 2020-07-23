import styled from 'styled-components';

export const Content = styled.article`
  margin: 0.5rem auto;
  width: 100%;
  max-width: 328px;

  border-radius: 0.5rem;

  &:hover {
    box-sizing: border-box;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 4px 24px 0 rgba(5, 27, 44, 0.2);
    border-radius: 0.5rem;
  }
`;

export const CardContent = styled.div`
  img {
    display: flex;
    align-self: center;
    align-items: center;
    width: 100%;
    max-height: 450px;
    object-fit: cover;
  }
  section {
    display: flex;
    justify-content: space-between;
  }
  figcaption {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0.5rem;
    color: orangered;

    font-weight: bold;
    font-size: 1.2rem;

    h3 {
      text-shadow: 1px 1px 1px orange;
    }
    span {
      font-size: 0.7rem;
      padding: 0.5rem auto;
      color: #999;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 0.8rem;
      padding: 0.5rem auto;
      line-height: 18px;
      text-align: center;
      margin: 0 0.25rem;
      display: block;
    }

    div {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      align-items: center;
      padding-top: 0.7rem;

      button {
        background: transparent;
        border: transparent;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }

      a {
        color: #444;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
