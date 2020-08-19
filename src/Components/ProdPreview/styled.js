import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;

  min-width: 360px;
  max-width: 900px;
  display: block;
  margin: 1rem auto;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    /* border-bottom:0.1rem solid #999; */
    padding: 0.5rem;
    margin: 0.5rem;
    background: #fff;
    border-radius: 0.5rem;

    & + li {
      margin-top: 15px;
    }

    div {
      span {
        color: #999;
      }

      button {
        background: transparent;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
      }
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    .tags {
      color: orangered;
      font-size: 10px;
    }

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
  cursor: pointer;
`;
