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
        slidesToScroll: 1
    };

    return (
        <div className='max-w-containerx mx-auto'>
            <Slider {...settings}>
                <div>
                    <img src={sliderone} alt="" />
                </div>
                <div>
                    <img src={slidertwo} alt="" />
                </div>
                <div>
                    <img src={sliderthree} alt="" />
                </div>
                <div>
                    <img src={sliderfour} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Sliders