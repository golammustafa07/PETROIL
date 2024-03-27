import React, { useState } from 'react'
import Container from '../Layout/Container'
import Logo from '../../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [Show, SetShow] = useState(false)
    const handleClick = () => {
        SetShow(!Show);
    }

    return (
        <div className='bg-primary'>
            <Container className='py-8 px-3 md:px-0' >
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={Logo} alt="" />
                    </div>

                    <div onClick={handleClick} className='md:hidden'>
                        {
                            Show == true ? <RxCross2 className='text-white text-2xl'/> : <FaBars className='text-white text-2xl'/>
                        }
                    </div>

                    <div className='md:block hidden'>
                        <div className='flex items-center gap-x-6 lg:gap-x-[72px]'>
                            <div>
                                <ul className='flex gap-x-6 lg:gap-x-12'>
                                    <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>Home</a></li>
                                    <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>About</a></li>
                                    <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>Services</a></li>
                                    <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>Gallery</a></li>
                                    <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>Blog</a></li>
                                </ul>
                            </div>
                            <div>
                                <button className='bg-transparent font-pops border-[2px] border-white font-semibold text-[16px] leading-6 text-white py-[14px] px-8 hover:bg-green-500'>CONTACT</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NAVBAR for Mobile Devices */}
                <div className={`${Show ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col gap-y-6 '>
                        <div>
                            <ul className='flex flex-col gap-y-6'>
                                <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>Home</a></li>
                                <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>About</a></li>
                                <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>Services</a></li>
                                <li><a href="" className='font-pops font-semibold text-base text-white pt-[10px]'>Gallery</a></li>
                                <li><a href="" className='font-pops font-semibold text-base text-white mr-[72px] pt-[10px]'>Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-transparent font-pops border-[2px] border-white font-semibold text-[16px] leading-6 text-white py-[14px] px-8 hover:bg-green-500'>CONTACT</button>
                        </div>
                    </div>
                </div>
                {/* NAVBAR for Mobile Devices */}




                {/* MY MISTAKES */}
                {/* <div className='flex items-center justify-between px-[10px] md:px-0 w-full'>
                    <div className='w-1/4'>
                        <img src={Logo} alt="" />

                       
                        <div className='md:hidden block'>
                            <ul className=''>
                                <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>Home</a></li>
                                <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>About</a></li>
                                <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>Services</a></li>
                                <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>Gallery</a></li>
                                <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white mr-[72px] pt-[10px]'>Blog</a></li>
                            </ul>
                            <button className='bg-transparent font-pops border-[2px] border-white font-semibold text-[16px] leading-6 text-white pt-[13px] pr-8 pb-[14px] pl-[31px] hover:bg-green-500 mt-[10px] md:mt-0'>CONTACT</button>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <div onClick={handleClick} className='md:hidden'>
                            {
                                Show == true ? <RxCross2 /> : <FaBars />
                            }
                        </div>

                        <div className='w-3/4'>
                            <div className={`md:flex px-[10px] md:px-0 justify-end items-center absolute top-[-200px] left-0 w-full md:static ${Show ? 'top-[160px]' : 'top-0 left-0'}`}>
                                <ul className='md:flex gap-x-[47px]'>
                                    <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>Home</a></li>
                                    <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>About</a></li>
                                    <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>Services</a></li>
                                    <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white pt-[10px]'>Gallery</a></li>
                                    <li><a href="" className='font-pops font-semibold text-[16px] leading-6 text-white mr-[72px] pt-[10px]'>Blog</a></li>
                                </ul>
                                <button className='bg-transparent font-pops border-[2px] border-white font-semibold text-[16px] leading-6 text-white pt-[13px] pr-8 pb-[14px] pl-[31px] hover:bg-green-500 mt-[10px] md:mt-0'>CONTACT</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Container>
        </div>
    )
}

export default Navbar