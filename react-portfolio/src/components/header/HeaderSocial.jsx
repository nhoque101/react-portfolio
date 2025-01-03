import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";




const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
            <FaGithub />
        </a>
        <a href="https://discord.com" target="_blank">
            <FaDiscord />
        </a>
    </div>
  )
}

export default HeaderSocial