import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    justify-content:center;
    text-align:center;
    align-content:center;
    
    background: #e52d27;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #b31217, #e52d27);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #b31217, #e52d27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
flex-direction:column;
height: 100vh;

img{
            width: 300px;
            padding:0.5rem;
            text-decoration:none;
            font-size:2rem;
            font-weight:bold;
            border-radius:0.5rem;
        }


`;

export const Card = styled.main`

        border-radius:0.5rem;
        padding:1rem;       
        min-width:350px;
        max-width:900px;
        display:block;
        margin: 1rem auto;
        background:#fafafa;

        box-sizing: border-box;  
        box-shadow:0 4px 24px 0 rgba(5,27,44,.2);

            h2{
            color:#f00;
            text-shadow: 1px 1px 1px orange;
            text-align:center;
            padding:1rem;
            }
    
            
            input {
                    border:none;         
               border-bottom:.1rem solid #999; 
               
                outline:none;
                border-radius:4px;
                color:#999;
                margin-bottom:1rem;

                    &:hover,:focus{
                       border-bottom: .1rem solid #008f36;          
                    }
            }
            
            label{
                color:#f00;
                text-transform: uppercase;
               
                display:flex;
                justify-content:flex-start;
                align-content:center;
                align-items:center;

                padding-left: 1rem;
                    span{
                        margin-top: 0.5rem;
                        padding-left: 0.5rem;
                    }
            }

            button{
                
                border-radius:0.5rem;
              
                border:none;
                
                display:flex;
                justify-content:center;
                align-content:center;
                align-items:center;

                cursor:pointer;
                background:#008f36;
                color:#fff;

                margin: 0 auto;
                padding:0 1rem;
                      &:hover {
                         opacity:0.7;                      
                        box-shadow: 0px 0px 5px 0px #008f36;
                        }

                    span{
                        display:flex;
                        justify-content:center;
                        text-align:center;
                        font-size:1rem;
                        padding:1rem;
                    }

                   
            }
      
`;


export const Loading = styled.div`

display:flex;
flex:1;
justify-content:center;

`;