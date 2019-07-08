import styled from 'styled-components';

export const Container = styled.main`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
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
        margin:0.7rem 0;
        
        
        border-right:solid 0.1rem transparent;
        border-left:dotted 0.1rem #f00;
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
        border-right:dotted 0.1rem #f00;
        
        border-left:solid 0.1rem transparent;
     
        &:hover{
            border-left:solid 0.1rem #f00;
        border-right:solid 0.1rem #f00;
        
        }

        h1{
            color:#f00;
            text-shadow: 1px 1px 1px orange;
            text-align:center;
            padding:1rem;
            }

            img{
            width: 150px;
            padding:0.5rem;
            text-decoration:none;
            font-size:2rem;
            font-weight:bold;
            border-radius:50%;
            cursor:pointer;
            
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