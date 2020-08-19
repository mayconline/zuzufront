import styled from 'styled-components';

export const Card = styled.section`
  border-radius: 0.5rem;
  padding: 1rem;
  min-width: 360px;
  max-width: 900px;
  display: block;
  margin: 1rem auto;
  background: #fff;

  h3 {
    color: #f00;
    text-shadow: 1px 1px 1px orange;
    text-align: center;
  }

  input {
    border: none;
    border-bottom: 0.1rem solid #999;
    text-transform: uppercase;
    outline: none;
    border-radius: 4px;
    color: #999;

    &:hover,
    :focus {
      border-bottom: 0.1rem solid #008f36;
    }
  }

  label {
    color: #f00;
    text-transform: uppercase;
  }

  footer {
    margin: 1rem auto;
    text-align: center;

    .excluir {
      border: solid 0.1rem #ebedef;
      border-radius: 0.2rem;
      text-transform: uppercase;
      color: #fff;
      display: inline-block;
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      margin-right: 0.5rem;

      padding: 0.375rem 0.5625rem;
      cursor: pointer;
      background: #e54b4d;

      &:hover {
        background: transparent;
        color: #e54b4d;

        display: inline-block;
        border: solid 0.1rem #e54b4d;
        border-radius: 0.2rem;
      }
    }

    .editar {
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      font-weight: bold;
      padding: 0.375rem 0.5625rem;
      cursor: pointer;
      display: inline-block;

      margin-right: 0.5rem;
      border: solid 0.1rem transparent;

      &:hover {
        color: #e54b4d;
      }
    }
  }

  .cadastrar {
    border: solid 0.1rem #ebedef;
    border-radius: 0.2rem;
    text-transform: uppercase;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;

    padding: 0.375rem 0.5625rem;
    cursor: pointer;
    background: green;

    &:hover {
      background: transparent;
      color: green;

      display: block;
      border: solid 0.1rem green;
      border-radius: 0.2rem;
    }
  }

  img {
    width: 140px;
    height: 180px;
    padding: 0.5rem;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
