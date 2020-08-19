import styled from 'styled-components';

export const Section = styled.section`
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const Categories = styled.article`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 7rem 2rem;
  border-radius: 1rem;

  a {
    text-align: center;
    border: solid 0.1rem;
    background: #fff;
    border-radius: 1rem;
    color: #e54b4d;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-decoration: none;

    font-weight: bold;

    padding: 0.5rem 0.5625rem;

    &:hover {
      background: #e54b4d;
      color: #fff;
      border: solid 0.1rem transparent;
      text-decoration: none;
      display: flex;
      justify-content: center;
    }
  }
`;
