import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export const Contacts = () => {
  return (
    <>
      <div className='container contacts' id='Contacts'>
        <h1>CONTACT ME</h1>
        <div className='contacts-icon'
        data-aos="zoom-in-up" 
        data-aos-duration="1000"
        >
          <a href='' target="_blank" className='items'>
            <FaInstagramSquare className='icons' />
          </a>
          <a href='' target="_blank" className='items'>
            <BsWhatsapp className='icons'/>
          </a>
          <a href='' target="_blank" className='items'>
            <FaFacebook className='icons'/>
          </a>
          <a href='' target="_blank" className='items'>
            <FaLinkedin className='icons'/>
          </a>
          <a href='' target="_blank" className='items'>
            <FaGithub className='icons'/>
          </a>
          <a href='' target="_blank" className='items'>
            <SiGmail className='icons'/>
          </a>
        </div>
      </div>
    </>
  )
}
