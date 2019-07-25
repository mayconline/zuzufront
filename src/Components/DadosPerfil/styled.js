import styled from 'styled-components';

export const Container = styled.main`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`;

export const Rating = styled.div`
    display:flex;
    justify-content:center;
    padding:1rem;
`;


export const Depoimento = styled.aside`

min-width:350px;
        max-width:900px;
        min-height:350px;
        display:flex;
        justify-content:center;
        align-content:center;
        align-items:center;
        flex-direction:column;
        background:#fafafa;
        box-sizing: border-box;  
        box-shadow:4px 4px 24px 0 rgba(5,27,44,.2);    
        margin:0.7rem 0.5rem;
        flex:1;
        border-radius:0.5rem;
       
        h3{
            color:#f00;
            text-shadow: 1px 1px 1px orange;
            text-align:center;
            padding:1rem;
            font-size:1.3rem;
        }

       p{
        font-style:italic;
        font-size:1.2rem;
        padding:0.5rem;
        text-align:center;
      
       }

       cite{
           padding-bottom:1rem;
           text-transform:uppercase;
       }
        &:hover{
            border-left:solid 0.1rem #f00;
        border-right:solid 0.1rem #f00;
        
        }

        footer{
            margin:1rem auto;
            

            .editar{
                
                color:#000;
                text-decoration: none;
                text-transform:uppercase;                     
                text-align: center;
                font-weight:bold;
                padding: 0.375rem 0.5625rem;
                cursor:pointer;
                display: inline-block;
                             
                margin-right: 0.5rem; 
                border:solid 0.1rem transparent; 
    
                        &:hover{
                    color:#E54B4D;
                         }
                     }
    
                     .excluir{
                   border:solid 0.1rem #ebedef; 
                   border-radius:0.2rem;
                   text-transform:uppercase;   
                   color: #fff;
                   display: inline-block;
                   text-decoration: none;                  
                    text-align: center;
                    font-weight:bold;
                    margin-right: 0.5rem; 
    
                   padding: 0.375rem 0.5625rem;
                   cursor:pointer;
                   background: #E54B4D;
    
                    &:hover{
                        background: transparent;
                        color:#E54B4D;
                        
                        display: inline-block;
                        border:solid 0.1rem #E54B4D;
                        border-radius:0.2rem;
                    }
               }


              .criar{
                background:green;
                color: #fff;
                display: inline-block;
                border:solid 0.1rem green;
                border-radius:0.2rem;
                text-transform:uppercase;  
                text-decoration: none;                  
                text-align: center;
                font-weight:bold;
                margin-right: 0.5rem; 
                padding: 0.375rem 0.5625rem;
                cursor:pointer;
                 &:hover{
                    background: transparent;
                        color:green;
                }
              }
        }


`;


export const Section = styled.section`
       
        min-width:350px;
        max-width:900px;
        display:flex;
        justify-content:center;
        align-content:center;
        align-items:center;
        flex-direction:column;
        background:#fafafa;
        box-sizing: border-box;  
        box-shadow:-3px -3px 24px 0 rgba(5,27,44,.2);      
        margin:0.7rem 0;
        border-radius:0.5rem;
        
     
        &:hover{
            border-left:solid 0.1rem #f00;
        border-right:solid 0.1rem #f00;
        
        }

        h2{
            color:#f00;
            text-shadow: 1px 1px 1px orange;
            text-align:center;
            padding:1rem;
            font-size:1.3rem;
            text-transform:uppercase;
            }

            img{
            width: 140px;
            height: 180px;
            padding:0.5rem;
            text-decoration:none;
            font-size:2rem;
            font-weight:bold;
            border-radius:50%;
            cursor:pointer;
            
        }

        strong{
            text-transform:uppercase;
        
        }
    
        p{
            padding-bottom:0.5rem;
        }



    footer{
        margin:1rem auto;


        .editar{
                
                color:#000;
                text-decoration: none;
                text-transform:uppercase;                     
                text-align: center;
                font-weight:bold;
                padding: 0.375rem 0.5625rem;
                cursor:pointer;
                display: inline-block;
                             
                margin-right: 0.5rem; 
                border:solid 0.1rem transparent; 
    
                        &:hover{
                    color:#E54B4D;
                         }
                     }
    
                     .excluir{
                   border:solid 0.1rem #ebedef; 
                   border-radius:0.2rem;
                   text-transform:uppercase;   
                   color: #fff;
                   display: inline-block;
                   text-decoration: none;                  
                    text-align: center;
                    font-weight:bold;
                    margin-right: 0.5rem; 
    
                   padding: 0.375rem 0.5625rem;
                   cursor:pointer;
                   background: #E54B4D;
    
                    &:hover{
                        background: transparent;
                        color:#E54B4D;
                        
                        display: inline-block;
                        border:solid 0.1rem #E54B4D;
                        border-radius:0.2rem;
                    }
               }
    
    }

    
`;