import React from 'react'
import servicesone from '../../assets/servicesone.png'
import servicestwo from '../../assets/servicestwo.png'
import servicesthree from '../../assets/servicesthree.png'


const Services = () => {
  return (
    <div>
      <div className='max-w-containerx mx-auto'>
        <div className='flex flex-col gap-y-6 lg:gap-y-0'>
          <div className='flex flex-wrap justify-end items-center gap-y-8'>
            <div className='lg:w-1/2'>
              <div className='text-center xl:ml-[80px] 2xl:ml-[380px] lg:text-left'>
                <h2 className='font-bold font-pops text-2xl lg:text-[64px] lg:leading-[96px] w-auto lg:w-[509px]'>Our Services</h2>
                <p className='font-pops font-medium text-base w-auto lg:w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
            </div>

            <div className='lg:w-1/2'>
              <div className='relative'>
                <img className='' src={servicesone} alt="" />
                <div className='w-full flex justify-center items-center h-full absolute top-0 bg-overlay'>
                  <div className='text-center lg:text-left py-[50px] md:py-0 px-3 lg:px-0'>
                    <h3 className='font-pops font-bold text-2xl md:text-3xl lg:text-2xl 2xl:text-[36px] text-white xl:leading-[54px]'>Modern natural oil and gas refineries.</h3>
                    <button className='py-2.5 px-2.5 md:py-3.5 md:px-[30px] bg-primary rounded-full md:rounded-none text-white hover:bg-green-500 mt-5'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex flex-wrap gap-y-8'>
            <div className='lg:w-1/2'>
              <div className='relative'>
                <img className='' src={servicestwo} alt="" />
                <div className='w-full flex justify-center items-center h-full absolute top-0 bg-overlay'>
                  <div className='text-center lg:text-left py-[50px] md:py-0'>
                    <h3 className='font-pops font-bold text-2xl md:text-3xl lg:text-2xl 2xl:text-[36px] text-white xl:leading-[54px]'>Supply of national industries.</h3>
                    <button className='py-2.5 px-2.5 md:py-3.5 md:px-[30px] bg-primary rounded-full md:rounded-none text-white hover:bg-green-500 mt-5'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-1/2'>
              <div className='relative'>
                <img className='lg:h-[228px] xl:h-[286px] 2xl:h-[410px]' src={servicesthree} alt="" />
                <div className='w-full flex justify-center items-center h-full absolute top-0 bg-overlay'>
                  <div className='text-center lg:text-left py-[50px] md:py-0'>
                    <h3 className='font-pops font-bold text-2xl md:text-3xl lg:text-2xl 2xl:text-[36px] text-white xl:leading-[54px]'>National fuel distribution and supply.</h3>
                    <button className='py-2.5 px-2.5 md:py-3.5 md:px-[30px] bg-primary rounded-full md:rounded-none text-white hover:bg-green-500 mt-5'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services