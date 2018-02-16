import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import {Link} from 'react-router-dom';

function Carousel(props) {
  console.log(props.chars);

      var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    }
    return (
      <div className='container'>

        <Slider {...settings}>
         {props.chars.map((char)=>{
            return  (
              <Link to={ {pathname: `/char/${char.name}`, char: char }} key={char.name}>
               <div className="carousel">
                  <div className="char-img">
                    <img src={`../img/${char.name.replace(/\s+/g, '')}.jpg`} />
                  </div>
               </div>
              </Link>
            );
         })}
        </Slider>
      </div>
    );

}
export default Carousel;

