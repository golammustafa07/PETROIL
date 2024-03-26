import React from 'react'
import Container from '../Layout/Container'

const Supplies = () => {
    return (
        <div>
            <Container className="pt-[78px] pb-[100px]">
                <div className='flex flex-wrap justify-between items-center text-center lg:text-left gap-y-5'>
                    <div className='mx-auto lg:mx-0'>
                        <h2 className='font-pops font-bold text-[32px] lg:text-[48px] lg:leading-[72px] leading-[48px] lg:w-[289px] w-auto'>The biggest
                            supplier on
                            the country</h2>
                    </div>
                    <div className='mx-auto lg:mx-0'>
                        <p className='font-pops font-medium text-base lg:w-[651px] w-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Supplies