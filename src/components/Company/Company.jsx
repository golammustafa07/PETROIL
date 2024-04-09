import React from 'react'
import Container from '../Layout/Container'
import company from '../../assets/company.png'

const Company = () => {
    return (
        <div className='bg-[#F0F0F0]'>
            <Container className='py-[50px] xl:py-[136px]'>
                <div className='flex flex-col lg:flex-row gap-y-2.5'>
                    <div className='bg-primary py-[50px] px-[50px] lg:py-[100px] lg:px-[75.5px] text-center lg:text-left'>
                        <h2 className='font-pops font-bold text-xl md:text-[36px] text-white lg:leading-[54px] w-auto lg:w-[262px]'>Learn more about our company</h2>
                    </div>

                    <div className='relative'>
                        <img className='w-full lg:h-[410px]' src={company} alt="" />
                        <div className='w-full h-full flex justify-center items-center top-0 absolute'>
                            <button className='font-pops font-semibold text-base py-3.5 px-[30px] bg-white text-primary hover:text-white hover:bg-primary'>Learn More</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Company