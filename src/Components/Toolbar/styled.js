import styled from 'styled-components';

export const Header = styled.header`

/*background:#FF2525;*/

background: #e52d27;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #b31217, #e52d27);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #b31217, #e52d27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


border-bottom: 0.25rem solid #D1913C ;
border-top: 0.25rem solid orange ;






    nav{
      
       display:flex;
       justify-content:space-between;
       flex-wrap:wrap;
    align-items: center;
    
    @media (max-width:1024px) {
                  
                  display:block;
              justify-self: center;
              align-items:center;
              box-sizing:border-box;
  
                   }



         .toolbar_logo {
            display:flex;
            justify-content:flex-start;
            padding-left:2rem;
           
          
                img{
                    max-height:8rem;
                }

             @media (max-width:1024px) {
                  display:flex;
                
            justify-content:center;
            align-items:center;

                 }
            }



         .toolbar_navigation_item {
             display:flex;
             justify-content:flex-end;
             justify-self: flex-end;
             align-items:center;
             flex-wrap:wrap;
                margin:0;
           

                    ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                
               

               
                                .selected{
                                    background:linear-gradient(160deg, #FAD961 0%, #F76B1C 100%);
                                  }

                             a {
                                 color:white;
                                 text-decoration: none;
                                 display: block;
                                 text-align: center;
                                 padding:1rem;
                                 font-size:1rem;
                                 font-weight:bold;
                                
                                 margin:0.2rem;
                                 border-radius:2rem;

                                  &:hover{
                                    background:linear-gradient(160deg, #FAD961 0%, #F76B1C 100%);
                             
                                   
                                  }

                                  p{
                                    font-size:0.75rem;
                                    display: block;
                                    margin:0 auto;
                                    padding:.1rem;
                                        
                                  }         

                                                        
                                  
                                }

                    }

                   @media (max-width:1024px){
                      display:flex;
                      justify-content:center;
                      flex-wrap:wrap;
                             &::before{
                                content:'';
                                width:100%;
                                height:0.25rem;
                                background:#D1913C;
                                display:block;
                               
                  
                                 }  
                        
                    }

            }               
    }

`;

export const TopHeader = styled.header`

background:#fff;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
align-content:center;
padding:0;

    .social_bar{

        

        padding:0.25rem;

        a{
            align-items:center;
            padding: 0.375rem 0.5625rem;
            
            path:hover{
                color:#E54B4D;
    
            }
        }
    }


    .admin_area{
       padding:0.25rem;

       
           ul{

                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;      

                    li{
                        cursor: pointer;
                    }                   
           }

           .login   {
            color:#000;
            text-decoration: none;
            text-transform:uppercase;                     
            text-align: center;
            font-weight:bold;

            padding: 0.375rem 0.5625rem;

            display: inline-block;
                         
            margin-right: 0.5rem; 
            border:solid 0.1rem transparent; 

                    &:hover{
                color:#E54B4D;
                     }

                }

           
            
           .register{
               border:solid 0.1rem #ebedef; 
               border-radius:0.2rem;
               color: #E54B4D;
               display: inline-block;
               text-decoration: none;                  
                text-align: center;
                font-weight:bold;
                margin-right: 0.5rem; 
                text-transform:uppercase;
               padding: 0.375rem 0.5625rem;

                &:hover{
                    background: #E54B4D;
                    color:#fff;
                    border:none;
                    display: inline-block;
                    border:solid 0.1rem transparent; 
                }
           }
           
    }
`;


