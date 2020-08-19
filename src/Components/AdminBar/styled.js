import styled from 'styled-components';

export const Container = styled.nav`
  background: linear-gradient(to left, #b31217, #e52d27);
  width: 100%;
  color: white;

  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;

    ul {
      list-style: none;

      display: flex;
      flex-wrap: wrap;

      li {
        cursor: pointer;
        display: flex;
        text-align: center;

        align-items: center;

        path:hover {
          color: black;
          padding: 0.5rem;
        }
      }

      a {
        color: white;
        text-decoration: none;

        padding: 0.375rem 0.5625rem;
        font-size: 0.7rem;
        font-weight: bold;
        border-radius: 2rem;

        &:hover {
          background: linear-gradient(160deg, #fad961 0%, #f76b1c 100%);
        }
      }
    }
  }
`;
