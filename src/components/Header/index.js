import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header (props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory} = props;

    useEffect(()=>{
        document.title=capitalizeFirstLetter(currentCategory);
    },[currentCategory]);
    
    return (
        <section className=' py-5 px-5' id='header'>
            <h1 className='my-2 '><a href='/' id='header-title'>Fanxi Liao - Web Dev</a></h1>
            
            {/* <nav className='mx-3 center '>
                <a className='mx-1' href ='#about' onClick={() => {setCurrentCategory('about')}}>About</a>
                <a href ='#portfolio' onClick={() => {test('portfolio')}}>Porfolio</a>
                <a className='mx-1' href ='#resume' onClick={() => {test('resume')}}>Resume</a>
                <a href ='#contact' onClick={() => {test('contact')}}>Contact Me</a>  
            </nav> */}
            <nav className='py-1 flex-row space-evenly' id='navbar'>
                {categories.map((category) => (
                    <li className={`mx-1 ${
                        currentCategory === category && 'navActive'
                    }`} key={category}>
                    <span onClick={() => {setCurrentCategory(category); console.log(currentCategory,category)}}>
                        {capitalizeFirstLetter(category)}
                    </span>
                    </li>
                ))}
            </nav>
            {/* <img src={coverImage} className='my-3' style={{width:'100%'}} alt='Cover'/> */}
        </section>
        
      );
};

export default Header;