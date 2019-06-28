import React, {Fragment} from 'react';
import{Link, NavLink} from 'react-router-dom';


import {Header, TopHeader, ToogleMenu}  from './styled';
import AdminBar from '../AdminBar';



import { FaBirthdayCake,
     FaRegAddressCard, FaRegCommentDots,
      FaFacebookF,
     FaInstagram, FaWhatsapp, 
     FaBars} from "react-icons/fa";
     
import SearchBar from '../SearchBar';
 
const Toolbar = ({AdminOpen, AdminBarState, sideMenuClick, usuarioLogado}) =>(
    <Fragment>


        {AdminBarState &&(
            <AdminBar AdminClose={AdminOpen}/>
        )}
       
       
       {!AdminBarState &&(
            
        <TopHeader >
        <div className='social_bar'>                
        <a href="https://web.facebook.com/zulmira.serafim" rel='noopener noreferrer' target='_blank'><FaFacebookF color={'#000'} size={20}/></a>
        <a href="https://www.instagram.com/zulmira_serafim" rel='noopener noreferrer' target='_blank'><FaInstagram color={'#000'} size={20}/></a>
        <a href="https://web.whatsapp.com/send?phone=5521967524431&text=ola" rel='noopener noreferrer' target='_blank'><FaWhatsapp color={'#000'} size={20}/></a>          
        </div>


        <div className='admin_area'>
        <ul>

            {!usuarioLogado.nome && (
                <Fragment>
                <li> <Link to="/login"  className='login'> ENTRAR</Link></li>
                <li > <Link to="/registro" className='register' > REGISTRAR</Link></li>
                </Fragment>
               
            ) 
             }

         {usuarioLogado.nome &&(
             <Fragment>
                <li> <Link to="/login"  className='login'> {` ${usuarioLogado.nome}`}</Link></li>
                <li>  <FaBars onClick={AdminOpen} color={'#E54B4D'} size={30}/></li>
             </Fragment>
                
             )}
            


            
           
            
      
        </ul>
        </div>           
</TopHeader> 

      
       )}

        <Header> 
        <nav className='toolbar_navigation'>
        
              <div className='toolbar_logo'>
            <Link to="/"> <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1556741879/ZuzuCake/Logo/zuzuLogo_x0crgs.png' alt='ZuzuCakes' /></Link>   
                 </div>
          
    <SearchBar />

          {/*activeClassName=selected coloca a classe automatica*/}
                   
            <div className='toolbar_navigation_item'>
                <ul>
                <li><NavLink to="/bolos" exact activeClassName="selected"> <FaBirthdayCake size={30}/> <p>BOLOS</p></NavLink></li>    
                <li><a href="/#quemsomos" rel='noopener noreferrer'><FaRegAddressCard size={30}/><p>QUEM SOMOS</p></a></li>
                <li><a href="/#contato" rel='noopener noreferrer'><FaRegCommentDots size={30}/><p>CONTATO</p></a></li>
                </ul>
            </div>
  
        </nav>
        
       
      
    </Header>

    <ToogleMenu >
            <button onClick={sideMenuClick}>
            <FaBars color={'#E54B4D'} size={30}/>
            <p>MENU</p>
            </button>
        
        
        </ToogleMenu>
    
           
        

    </Fragment>

);

export default Toolbar;