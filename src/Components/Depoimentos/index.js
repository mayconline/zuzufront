import React, {Component, Fragment} from 'react';
import Slider  from 'react-slick';

import {Depoimento, Rating, Header} from './styled';
import {FaStar, FaRegStar} from "react-icons/fa";

export default class Depoimentos extends Component {

    render(){

        const{depoimentos}=this.props

        const settings = {
          
            focusOnSelect: true,
            pauseOnHover: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
                    dots: true,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0                       
                  };    

        return(

            <Fragment>
                
                 
            
                <Header>
                   
                 <Slider {...settings} >
                    
                 {depoimentos &&
                         depoimentos.map(depoimento=>(

                            <Depoimento key={depoimento._id}>
                               
                                <img src={depoimento.idusuario.avatar.url} alt='avatar dos usuarios' />

                                
{depoimento && depoimento.nota===0 &&(
    <Rating>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}


{depoimento && depoimento.nota===1 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}

{depoimento && depoimento.nota===2 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}

{depoimento && depoimento.nota===3 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    <FaRegStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}
    


{depoimento && depoimento.nota===4 &&(
<Rating>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaStar color={'#fbec5d'} size={30}/>
<FaRegStar color={'#fbec5d'} size={30}/>
</Rating>
)}

{depoimento && depoimento.nota===5 &&(
    <Rating>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    <FaStar color={'#fbec5d'} size={30}/>
    </Rating>
    )}
                                    
                                     <p>"{depoimento.descricao}"</p>                                      
                                      <cite> - {depoimento.idusuario.nome}</cite>  
                                         
                                          
                                    
                            </Depoimento>
                                       
                                          
                                                                                       
                                                                                                                                                                              
                                    ))}
                 </Slider>
                 </Header> 
            </Fragment>
        )
    }
}