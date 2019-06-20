import styled from 'styled-components';

export const Title = styled.header`

 
 padding:1rem;
 margin:0.5rem;



  h1{
    text-align:center;     
    color:#f00;
    margin:0.5rem;

    text-shadow: 1px 1px 1px orange;

    

                 &::after, &::before{
                  content:'';
                   width:200px;
                   height:2px;
                   background:#f00;
                  display:block;
                  margin: 1rem auto;
                  
                }
                
  }  
    
                
  h2{
    text-align:center;     
    color:#010101;
    margin:0.5rem auto;
    font-weight:300;
    font-size:1rem;
    font-style:italic;
    

  }           

    a{
     
      border:solid 0.1rem #ebedef; 
               border-radius:0.2rem;
               color: #E54B4D;
               display: flex;
               justify-content:center;
               text-decoration: none;                  
                
                font-weight:bold;
                margin: 0.7rem auto; 

               padding: 0.5rem 0.5625rem;
               max-width:250px;

               &:hover{
                    background: #E54B4D;
                    color:#fff;
                    border:solid 0.1rem transparent; 
                    text-decoration: none;  
                    display: flex;
               justify-content:center;
                }

    } 

    h3{
      display:flex;
      justify-content:center;
    }

    span{
      display:flex;
      justify-content:center;
      font-size:1.2rem;
      color:#00e676;
      font-weight:bold;
    }
`;
