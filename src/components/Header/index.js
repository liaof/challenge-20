import React from 'react';
import coverImage from '../../assets/cover/1.jpg';

function Header () {
    return (
        
        <section className='flex-row space-between my-3 align-center'>
            
            <h1 className='mx-3'><a href='/' id='header'>Fanxi Liao - Web Dev</a></h1>
            
            <nav className='mx-3 center '>
                <a className='mx-1' href ='#about'>About</a>
                <a href ='#portfolio'>Porfolio</a>
                <a className='mx-1' href ='#resume'>Resume</a>
                <a href ='#contact'>Contact Me</a>  
            </nav>
            {/* <img src={coverImage} className='my-3' style={{width:'100%'}} alt='Cover'/> */}
        </section>
        
      );
}

export default Header;