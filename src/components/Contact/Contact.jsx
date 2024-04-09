import React from 'react'
import Container from '../Layout/Container'

const Contact = () => {
  return (
    <div className='bg-primary border-b-[3px] border-[#FFB800]'>
        <Container className='py-[46px]'>
            <div className='flex flex-col lg:flex-row justify-between items-center text-center lg:text-left'>
                <div>
                    <p className='font-pops font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] lg:leading-[54px] text-white xl:w-[959px] w-auto'>Want to join as member branch in your area?</p>
                </div>
                <div>
                    <button className='text-white font-pops font-semibold hover:bg-green-500 text-base py-3.5 px-8 border-2'>CONTACT</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Contact