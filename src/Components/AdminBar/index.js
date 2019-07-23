import React, {Fragment} from 'react';
import{Link} from 'react-router-dom';

import {Container} from './styled';

import {FaTools, FaUser, FaTimes, FaPowerOff, FaStar} from "react-icons/fa";


const AdminBar = ({AdminClose,logOut})=>(

    <Fragment>
    <Container>
        <div className='menu'>
            <ul>
                
                
                <li><Link to="/admin/bolos/cadastro"><FaTools size={15} color={'#fff'}/><p>CADASTRAR</p></Link></li>
                <li><Link to="/admin/user/cadastro"><FaUser size={15} color={'#fff'}/><p>USUARIOS</p></Link></li>
                <li><Link to="/admin/user/depoimentos"><FaStar size={15} color={'#fff'}/><p>DEPOIMENTOS</p></Link></li>
                <li><Link to='/' onClick={logOut} ><FaPowerOff size={15} color={'#fff'}/><p>DESLOGAR</p></Link></li>
                <li> <FaTimes onClick={AdminClose} color={'#fff'} size={30}/></li>
                

                
            </ul>
        </div>
    
    </Container>
   
</Fragment>
)
   


export default AdminBar;