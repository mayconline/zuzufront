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

  button {
    font-size: 0.8rem;
    border-radius: 0.5rem;
    padding: 0.7rem;
    border: none;
    margin: 0.25rem;
    cursor: pointer;
    background: #008f36;
    color: #fff;
    &:hover {
      opacity: 0.7;
      box-shadow: 0px 0px 5px 0px #008f36;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
