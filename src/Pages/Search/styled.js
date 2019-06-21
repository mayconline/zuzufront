import styled from 'styled-components';

export const Section = styled.section`

margin-top:0.5rem;
column-count:4;

    @media(max-width:400px){
        column-count:1;       
    }
  
  div{
        break-inside:avoid-column;
        overflow:hidden;
    }
`;
