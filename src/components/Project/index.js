import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Project ({project}) {


    return(
        <a href ={project.url} className=' card my-2 center' >
            <h4>{capitalizeFirstLetter(project.name)}</h4>
            <div className='container'>
                <p>{project.description}</p>
            </div>
        </a>
    )
}

export default Project;