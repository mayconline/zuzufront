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


export const Loading = styled.div`

display:flex;
flex:1;
justify-content:center;
align-items:center;
flex-direction:column;

    p{
        font-size:1.2rem;
        font-weight:bold;
        color:#f00;
        margin:0.5rem;
    }

`;


export const Main = styled.main`
    margin:0.7rem;
`