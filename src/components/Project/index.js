import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import { FaPlay,FaGithubAlt } from "react-icons/fa";
function Project ({project}) {


    return(
        <div className=' card my-2 center' >
            <h4>{capitalizeFirstLetter(project.name)}</h4>
            <a href ={project.git_url}><FaPlay/></a>
            <a href ={project.url}><FaGithubAlt/></a>
            <div className='container'>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default Project;