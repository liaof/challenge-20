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
    
    function test(name){
        console.log(name);
    }


    
    return (
        <section className='flex-row space-between my-3 center' id='header'>
            <h1 className='mx-3'><a href='/' id='header-title'>Fanxi Liao - Web Dev</a></h1>
            
            {/* <nav className='mx-3 center '>
                <a className='mx-1' href ='#about' onClick={() => {setCurrentCategory('about')}}>About</a>
                <a href ='#portfolio' onClick={() => {test('portfolio')}}>Porfolio</a>
                <a className='mx-1' href ='#resume' onClick={() => {test('resume')}}>Resume</a>
                <a href ='#contact' onClick={() => {test('contact')}}>Contact Me</a>  
            </nav> */}
            <nav className='mx-3 flex-row' id='navbar'>
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