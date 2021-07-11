import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function About () {

    const [projects] = useState([
        {
            name: 'commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects',
            url: ''
        },
        {
            name: 'commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects',
            url: ''
        },        
        {
            name: 'commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects',
            url: ''
        },
        {
            name: 'commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects',
            url: ''
        },
        {
            name: 'commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects',
            url: ''
        }
      ]);
    return (
        <section className="my-5">
            <h1 id="about">My Portfolio</h1>
            <div className="flex-row">          
                {projects.map((project,i) => (
                    <div>
                {/* <img
                    src={require(`../../assets/small/${category}/${i}.jpg`).default}// the photos have the same name as the loop index, so we use the latter
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}// asign the toggleModal function to handle click events, pass image (current element in the photos array) and i
                    key={image.name}
                /> */}
                <div className='card my-2 mx-2 py-3 px-3'>
                    <h4>{capitalizeFirstLetter(project.name)}</h4>
                    <div className='container'>
                        ayyyyyyyyyyy
                    </div>
                </div>
                
                </div>
        ))}
      </div>
            
        </section>
      );
}

export default About;