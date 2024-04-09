import React from 'react'
import Container from '../Layout/Container'
import blogone from '../../assets/blogone.png'
import blogtwo from '../../assets/blogtwo.png'
import blogthree from '../../assets/blogthree.png'
import { RiArrowDropRightLine } from "react-icons/ri";

const Blog = () => {
    return (
        <div className='bg-[#F0F0F0]'>
            <Container className='lg:py-[110px] py-[50px]'>
                <div className='flex flex-wrap justify-between text-center lg:text-left gap-y-5'>
                    <div className='relative w-full md:w-[240px] lg:w-[325px] xl:w-[339px]'>
                        <img className='w-full' src={blogone} alt="" />
                        <div className='w-full flex justify-center items-center h-full absolute top-0 bg-overlay'>
                            <div className=''>
                                <h3 className='font-pops font-bold lg:w-[249px] w-auto text-3xl md:text-[24px] leading-9 text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                                <button className='font-pops font-semibold text-[12px] leading-[18px] bg-[#ACACAA] py-2.5 px-[22px] text-white mt-[50px]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full md:w-[240px] lg:w-[325px] xl:w-[339px]'>
                        <img className='w-full' src={blogtwo} alt="" />
                        <div className='w-full flex justify-center items-center h-full absolute top-0 bg-overlay'>
                            <div className=''>
                                <h3 className='font-pops font-bold lg:w-[249px] w-auto text-3xl md:text-[24px] leading-9 text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                                <button className='font-pops font-semibold text-[12px] leading-[18px] bg-[#ACACAA] py-2.5 px-[22px] text-white mt-[50px]'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full md:w-[240px] lg:w-[325px] xl:w-[339px]'>
                        <img className='w-full' src={blogthree} alt="" />
                        <div className='w-full flex justify-center items-center h-full absolute top-0 bg-overlay'>
                            <div className=''>
                                <h3 className='font-pops font-bold lg:w-[249px] w-auto text-3xl md:text-[24px] leading-9 text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h3>
                                <button className='font-pops font-semibold text-[12px] leading-[18px] bg-[#ACACAA] py-2.5 px-[22px] text-white mt-[50px]'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex md:justify-end justify-center py-2.5 lg:py-7 cursor-pointer'>
                    <p className='font-pops font-bold text-base'>MORE FROM THE BLOG</p>
                    <RiArrowDropRightLine className='text-2xl'/>
                </div>
            </Container>
        </div>
    )
}

export default Blog