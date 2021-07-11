import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// page components
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';


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
         {/* <Switch>
         <Route exact path="/" component={Home} />
         </Switch> */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
