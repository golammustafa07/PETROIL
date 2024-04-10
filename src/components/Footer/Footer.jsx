import React from 'react'
import Container from '../Layout/Container'
import footerlogo from '../../assets/footerlogo.png'
import { MdMailLock } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import cartone from '../../assets/cartone.png'
import carttwo from '../../assets/carttwo.png'


const Footer = () => {
  return (
    <div className='bg-[#1F1F1F]'>
      <Container className='py-20'>
        <div className='flex flex-col lg:flex-row lg:items-start items-center lg:text-left text-center justify-center lg:justify-between'>
          <div className='flex lg:flex-none flex-col lg:justify-start justify-center lg:items-start items-center'>
            <img src={footerlogo} alt="" />

            <div className='mt-8 flex lg:flex-none flex-col lg:justify-start justify-center lg:items-start items-center'>
              <div className='flex items-center gap-x-[5px]'>
                <MdMailLock className='text-white' />
                <p className='text-white font-pops text-[14px] leading-[21px]'>mail@yourcompany.com</p>
              </div>
              <div className='flex items-center gap-x-[5px] py-4'>
                <PiPhoneCall className='text-white' />
                <p className='text-white font-pops text-[14px] leading-[21px]'>+896 120 5889 (Toll free)</p>
              </div>
              <div className='flex items-center gap-x-[5px]'>
                <SiGooglemaps className='text-white' />
                <p className='text-white font-pops text-[14px] leading-[21px]'>101 Baker Street, New York, USA, 12345</p>
              </div>
            </div>

            <div className='flex gap-x-3 mt-8 md:mx-0 mx-auto cursor-pointer'>
              <div className='bg-primary w-[30px] h-[30px] rounded-full relative'>
                <FaFacebookF className='text-white absolute top-1.5 left-1.5' />
              </div>
              <div className='bg-primary w-[30px] h-[30px] rounded-full relative cursor-pointer'>
                <FaTwitter className='text-white absolute top-1.5 left-1.5' />
              </div>
              <div className='bg-primary w-[30px] h-[30px] rounded-full relative cursor-pointer'>
                <FaLinkedinIn className='text-white absolute top-1.5 left-1.5' />
              </div>
              <div className='bg-primary w-[30px] h-[30px] rounded-full relative cursor-pointer'>
                <FaInstagram className='text-white absolute top-1.5 left-1.5' />
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='font-pops font-bold text-base text-white cursor-pointer'>Company</h3>
            <h3 className='font-pops text-base leading-[21px] text-white pt-[21px] cursor-pointer'>Home</h3>
            <h3 className='font-pops text-base leading-[21px] text-white py-[15px] cursor-pointer'>About</h3>
            <h3 className='font-pops text-base leading-[21px] text-white pb-[15px] cursor-pointer'>Services</h3>
            <h3 className='font-pops text-base leading-[21px] text-white cursor-pointer'>Gallery</h3>
          </div>

          <div className='mt-8'>
            <h3 className='font-pops font-bold text-base text-white cursor-pointer'>Others</h3>
            <h3 className='font-pops text-base leading-[21px] text-white pt-[21px] cursor-pointer'>Blog</h3>
            <h3 className='font-pops text-base leading-[21px] text-white py-[15px] cursor-pointer'>Contact</h3>
            <h3 className='font-pops text-base leading-[21px] text-white pb-[15px] cursor-pointer'>Terms & Conditions</h3>
            <h3 className='font-pops text-base leading-[21px] text-white cursor-pointer'>Privacy Policy</h3>
          </div>

          <div className='mt-8'>
            <h3 className='font-pops font-bold text-base text-white cursor-pointer'>Certificate</h3>
            <div className='flex gap-x-[5px] mt-[21px]'>
              <img className='cursor-pointer' src={cartone} alt="" />
              <img className='cursor-pointer' src={carttwo} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer