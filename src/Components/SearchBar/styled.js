import styled from 'styled-components';

export const JSS = styled.article`

  margin:0.5rem;
    form{
        
        display:flex;
        justify-content:center;
        width:100%;
        min-width:280px;
        background:#fafafa;
        border-radius:0.5rem;
        
        
        @media (max-width:1024px) {
                  display:flex;
                
            justify-content:center;
            align-items:center;
            

                 }

       
      
        .group-search{
      
        align-items:center;
        align-content:center;
        
        
        border-radius:0.5rem;
        
        display:flex;
          width:100%;
          min-width:280px;
        padding-left:0.5rem;

        
        
    
        }

        input {
            width:100%;
            min-width: 280px;
                    border: none;                                     
                    outline:none;                  
                    color:#999;
                    
                    padding:0.5rem;
                    font-size:1rem;
                    &:hover,:focus{
                      opacity:0.5rem;  
                      color:#e52d27;     
                    }

                    
                    
              }
            

            button{
               
                border-radius:0.5rem;
                padding:0.5rem;
                border:none;
                margin-bottom: 0.25rem;
                cursor:pointer;
                background:#fafafa;
                color:red;

                
                      &:hover {
                         opacity:0.7;                      
                       
                        }
                     
            }

    }

           
`;