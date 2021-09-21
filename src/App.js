import './App.css';
import React, { useState } from 'react';
// page components
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [categories] = useState(['about','portfolio','resume','contact']);
  //const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const pageNum = 1;
  const myPdf = (
    <Document
              file='/portfolio/Resume.pdf'
            >
              <Page pageNumber={pageNum} style={{display:'flex'}}></Page>
            </Document>
  );
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
            
            <Document
              file='/portfolio/Resume.pdf'
            >
              <Page pageNumber={pageNum} style={{display:'flex'}}></Page>
            </Document>

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
