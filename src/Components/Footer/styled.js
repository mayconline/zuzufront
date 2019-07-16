import styled from 'styled-components';

export const Container = styled.footer`

background: #c00;
width:100%;
color:white;



    .menu{
        
        margin:0;
        padding: 0.7rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
        p{
            font-size:1.2rem;
        }

           .social_bar{

                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;    
                                     
                    svg:hover{
                        color:black;
                        padding:0.5rem;
                     }
                                        

                a{
                                 color:white;
                                 text-decoration: none;
                                
                                 text-align: center;
                                 padding: 0.375rem 0.5625rem;
                                 font-size:0.7rem;
                                 font-weight:bold;
                                
                                 margin:0.2rem;
                                 border-radius:2rem;
                                 display: inline-block;
                                 cursor: pointer;
                                  &:hover{
                                    background:linear-gradient(160deg, #FAD961 0%, #F76B1C 100%);
                             
                                   
                                  }
                }                  
           }

    }
`;