import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
export const Row = styled.section`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Col = styled.article`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.col ? (props.col / 12) * 100 : '8:33')}%;
  }
`;
