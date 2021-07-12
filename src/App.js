import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// page components
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { capitalizeFirstLetter } from './utils/helpers';


function App() {

  const [categories] = useState(['about','portfolio','resume','contact']);
  //const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (

    <div className ='px-3'>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
   
      <main>
        {currentCategory==='about' ? (
          <> 
            <About></About>
          </> 
        ) : currentCategory==='portfolio' ? (
          <Portfolio></Portfolio>
        ) : currentCategory==='resume'? (
          <section className="my-5 content-wrap">
            <h2 className='py-1'>Resume</h2>
            <a href = 'https://www.google.com/search?q=resume&sxsrf=ALeKk03XFcsAaGbiQzlOhJVXibU-f1hjFw%3A1626057954330&source=hp&ei=4qzrYN3bEZS4tQb82pDgBA&iflsig=AINFCbYAAAAAYOu68tloyreR2Q5_xh8c42FMhq0g1l3U&oq=resume&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBwgAELEDEEMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBQgAELEDOgcIIxDqAhAnOgQIIxAnOgYIABAKEEM6BwguELEDEEM6AggAUN4MWPERYMsSaAFwAHgAgAFyiAHCBJIBAzMuM5gBAKABAaoBB2d3cy13aXqwAQo&sclient=gws-wiz&ved=0ahUKEwjd1P_1wdzxAhUUXM0KHXwtBEwQ4dUDCAk&uact=5'>And here I would insert the link to my resume, If I had a proper one at this current time</a>
          </section>
        ) : (
          <Contact></Contact>
        )}
         
        
      </main>
      <Footer className = 'my-5 mx-5'></Footer>
    </div>

  );
}

export default App;
