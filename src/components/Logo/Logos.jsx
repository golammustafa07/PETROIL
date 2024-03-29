import React from 'react'
import Container from '../Layout/Container'
import logoone from '../../assets/logoone.png'
import logotwo from '../../assets/logotwo.png'
import logothree from '../../assets/logothree.png'
import logofour from '../../assets/logofour.png'

const Logos = () => {
  return (
    <div>
        <Container className="lg:py-[116px] py-10">
            <div className='flex flex-col px-[10px] xl:px-0 md:flex-row items-center justify-between gap-y-5'>
                <div className='flex gap-x-[5px] items-center'>
                    <img src={logoone} alt="" />
                    <p className='font-robo font-black text-3xl md:text-2xl lg:text-[36px] lg:leading-[42px] text-[#858585]'>PETROMAX</p>
                </div>

                <div className='flex gap-x-[5px] items-center'>
                  <img src={logotwo} alt="" />
                  <p className=' font-sans font-semibold text-3xl lg:text-[36px] lg:leading-[49px] text-[#858585]'>Thevron</p>
                </div>

                <div className='flex gap-x-[5px] items-center'>
                  <img src={logothree} alt="" />
                  <p className=' font-poppins font-bold text-3xl lg:text-[36px] lg:leading-[54px] text-[#858585]'>BARCOO</p>
                </div>

                <div className='flex gap-x-[5px] items-center'>
                  <img src={logofour} alt="" />
                  <p className=' font-robo text-3xl lg:text-[36px] lg:leading-[54px] text-[#858585]'>BioSool</p>
                </div>
            </div>
        </Container>  
    </div>
  )
}

export default Logos