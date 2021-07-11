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
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
   
      <main>
        <p>{capitalizeFirstLetter(currentCategory)}</p>
        {currentCategory==='about' ? (
          <> 
            <About></About>
          </> 
        ) : currentCategory==='portfolio' ? (
          <Portfolio></Portfolio>
        ) : currentCategory==='resume'? (
          <div>RESUMAYYYY</div>
        ) : (
          <Contact></Contact>
        )}
         
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
