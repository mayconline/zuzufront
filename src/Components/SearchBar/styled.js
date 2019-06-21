import styled from 'styled-components';

export const JSS = styled.article`

    form{
        
        
        .group-search{
        display:flex;
        justify-content:center;
        align-items:center;
        align-content:center;
        background:#fff;
        border-radius:0.5rem;

        @media (max-width:1024px) {
                  
                  display:none;  

             }
    
        }

        input {
                    border: none;                                     
                    outline:none;                  
                    color:#999;
                    width:40rem;
                    padding:0.5rem;
                    font-size:1rem;
                    &:hover,:focus{
                      opacity:0.5rem;        
                    }

                    
                    
              }
            

            button{
               
                border-radius:0.5rem;
                padding:0.7rem;
                border:none;
                margin: .25rem;
                cursor:pointer;
                background:transparent;
                color:red;

                
                      &:hover {
                         opacity:0.7;                      
                       
                        }
                     
            }

    }

           
`;