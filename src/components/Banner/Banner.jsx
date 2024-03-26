import React from 'react'
import Container from '../Layout/Container'

const Banner = () => {
    return (
        <div className='bg-banner bg-no-repeat bg-center bg-cover'>
            <div className='bg-overlay w-full md:h-[783px]'>
                <Container>
                    <div className='md:py-[258px] text-center lg:text-left py-[50px]'>
                        <h1 className='md:leading-[96px] text-3xl md:text-[48px] lg:text-[64px] lg:mx-0 font-pops font-bold md:w-[642px] w-auto mx-auto lg:w-[842px] text-white'>We exist since 1975 on the oil and gas industry.</h1>
                        
                        <button className='md:pt-[13px] mx-auto md:pb-[14px] py-[10px] px-5 md:px-10 font-pops rounded-full md:rounded-none text-base bg-primary font-semibold text-white mt-[15px] md:mt-[31px] hover:bg-green-500'>LEARN MORE</button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Banner