import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMGONE from '../../assets/IMGONE.jpg'
import IMGTWO from '../../assets/IMGTWO.jpg'
import IMGTHREE from '../../assets/IMGTHREE.jpg'
import IMGFOUR from '../../assets/IMGFOUR.jpg'



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
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  };


  return (
    <div className='max-w-containerx mx-auto'>
      <Slider className='' {...settings}>
        <div className=''>
          <img className="w-auto xmd:w-[380px] xlmd:w-[400px] lg:w-[330px] xl:w-[305px] xxl:w-[465px]" src={IMGONE} alt="" />
        </div>
        <div className=''>
          <img className="w-auto  xmd:w-[380px] xlmd:w-[400px] lg:w-[330px] xl:w-[305px] xxl:w-[465px]" src={IMGTWO} alt="" />
        </div>
        <div className=''>
          <img className="w-auto xmd:w-[380px] xlmd:w-[400px] lg:w-[330px] xl:w-[305px] xxl:w-[465px]" src={IMGTHREE} alt="" />
        </div>
        <div className=''>
          <img className="w-auto xmd:w-[380px] xlmd:w-[400px] lg:w-[330px] xl:w-[305px] xxl:w-[465px]" src={IMGFOUR} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Sliders