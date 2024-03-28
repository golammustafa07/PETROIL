import React from 'react'
import Container from '../Layout/Container'
import company from '../../assets/company.png'

const Company = () => {
    return (
        <div>
            <Container className='py-[136px]'>
                <div className='flex'>
                    <div className='bg-primary py-[100px] px-[75.5px]'>
                        <h2 className='font-pops font-bold text-[36px] text-white leading-[54px] w-[262px]'>Learn more about our company</h2>
                    </div>

                    <div className='relative'>
                        <img className='h-[410px]' src={company} alt="" />
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