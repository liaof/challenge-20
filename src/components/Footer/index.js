  
import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";


function Footer () {
    return (
        <footer id='footer' className='flex-row flex-center'>
            <a href='https://github.com/liaof' className='flex-row align-center px-3'>Github: <FaGithub/></a>
            <a href='https://www.linkedin.com/in/fliao/' className='flex-row align-center px-3'>LinkedIn: <FaLinkedin/></a>
            <a href='https://stackoverflow.com/' className='flex-row align-center px-3'>Stack Overflow: <FaStackOverflow/></a>
        </footer>
      );
}

export default Footer;