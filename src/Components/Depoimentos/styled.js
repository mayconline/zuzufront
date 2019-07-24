import styled from 'styled-components';

export const Header = styled.section`
  
   
  background: #e52d27;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #b31217, #e52d27);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #b31217, #e52d27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


 
       button.slick-arrow, .slick-next, .slick-prev{
        
         display:none !important;
         
       }   

`;



export const Rating = styled.div`
    display:flex;
    justify-content:center;
    padding:1rem;
`;

export const Depoimento = styled.article`

        
        display:flex;
        justify-content:center;
        align-content:center;
        align-items:center;
        flex-direction:column;
       
        
        
       &:hover{
        box-sizing: border-box;  
        box-shadow:4px 4px 24px 0 rgba(5,27,44,.2);    
       }
       
      
        min-width:350px;
        max-width:100%;
        
        margin: 0.7rem 0 ;


       p{
        font-style:italic;
        font-size:1.2rem;
        padding:0.5rem;
        text-align:center;
        color:#fff;
       }

       cite{
           padding-bottom:1rem;
           text-transform:uppercase;
           display:block;
           text-align:center;
           color:#fbec5d;
       }
    
        
        img{
            width: 150px;
            padding:0.5rem;
            text-decoration:none;
            font-size:2rem;
            font-weight:bold;
            border-radius:50%;           
            margin:0 auto;
            
        }


`;


