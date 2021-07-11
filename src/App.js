import logo from './logo.svg';
import './App.css';

import React from 'react';
// page components
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header></Header>
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
