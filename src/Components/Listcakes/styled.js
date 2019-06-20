import styled from 'styled-components';


export const Content = styled.article`
    margin:0.5rem auto;
    width:100%;
    max-width:328px;
   
    border-radius:0.5rem;
    
 
    &:hover{
    
    box-sizing: border-box;
    transition: box-shadow .3s ease;
    box-shadow:0 4px 24px 0 rgba(5,27,44,.2);
    border-radius:0.5rem;
    
  }
`;



export const CardContent = styled.div`
   
    img{
                    display:flex;
                    align-self:center; 
                    align-items:center;
                   
                    width:100%;
                   
                    max-height:450px;
                    cursor: pointer;
                   
                }
                section{
                    display:flex;
                    justify-content:space-between;
                }
                figcaption{
                    display:flex;
                    justify-content:space-between;
                    flex-direction:column;
                 padding:0.5rem;
                 color:orangered;
                
                 font-weight:bold;
                 font-size:1.2rem;
                 
                 h3{
                    text-shadow: 1px 1px 1px orange;
                 }
                        span{
                            font-size:0.7rem;
                            padding:0.5rem auto;
                            color:#999;
                        }
                  }
   
                  div{
                    display:flex;
                    justify-content:flex-end;
                   flex-direction:row;
                    
                    a{
                        color: #444;
                        margin-top:1rem;
                        &:hover{
                            opacity:0.7;
                        }
                    }
                  }
    
`;
