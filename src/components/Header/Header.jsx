import React from 'react'
import Container from '../Layout/Container'
import { MdMailLock } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Header = () => {
    return (
        <div className='bg-[#282828] py-4 border-b-[3px] border-[#FFB800]'>
            <Container>
                <div className='flex'>
                    <div className='md:w-3/4'>
                        <div className='md:flex px-[10px] md:px-0'>
                            <div className='flex relative md:after:block after:hidden items-center gap-x-[5px] mr-[54px] after:content[""] after:absolute after:top-0 after:right-[-27px] after:w-[1px] after:h-[16px] after:bg-[#5C6A92]'>
                                <MdMailLock className='text-white' />
                                <p className='text-white font-pops text-[12px] leading-[18px]'>mail@yourcompany.com</p>
                            </div>

                            <div className='flex items-center gap-x-[5px]'>
                                <PiPhoneCall className='text-white' />
                                <p className='text-white font-pops text-[12px] leading-[18px] my-[10px] md:my-0'>+896 120 5889 (Toll free)</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4'>
                        <div className='md:flex flex justify-end text-white md:px-0 px-[10px] gap-x-[19px]'>
                            <a href=""><FaFacebookF/></a>
                            <a href=""><FaTwitter/></a>
                            <a href=""><FaLinkedinIn/></a>
                            <a href=""><FaInstagram/></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header