import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderone from '../../assets/sliderone.png'
import slidertwo from '../../assets/slidertwo.png'
import sliderthree from '../../assets/sliderthree.png'
import sliderfour from '../../assets/sliderfour.png'

const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      
    };


    return (
        <div className='max-w-containerx mx-auto'>
            <Slider {...settings}>
                <div className=''>
                    <img className="w-full object-cover" src={sliderone} alt="" />
                </div>
                <div className=''> 
                    <img className="w-full object-cover" src={slidertwo} alt="" />
                </div>
                <div className=''>
                    <img className="w-full object-cover" src={sliderthree} alt="" />
                </div>
                <div className=''>
                    <img className="w- object-cover" src={sliderfour} alt="" />
                </div>
            </Slider>
        </div>
    )
} 

export default Sliders