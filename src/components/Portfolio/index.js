import React, { useState } from 'react';
import Project from '../Project';



function Portfolio () {

    const [projects] = useState([
        {
            name: "Password Generator",
            description: "Week 3 - This particular generator allows the user to select the number of characters in the password, as well as choose what type of characters are allowed to compose said password. If there is no character set selected, we can not logically generate a password with user defined parameters, so the script assumes the operator has made an error and reruns the pertinent parts.",
            git_url: "https://github.com/liaof/challenge-3",
            url: "https://liaof.github.io/challenge-3/"
        },
        {
            name: "Timed Javascript Quiz",
            description: "Week 4 - This particular project allows the user to take a time restricted quiz, the topic of which is Javascript. Features of this quiz include a timer that docks 5 seconds for every incorrect answer. The questions and answers and populated from a 2D array, allowing for easy scaling of both depth and breadth of the question-set.",
            git_url: "https://github.com/liaof/challenge-4",
            url: "https://liaof.github.io/challenge-4/"
        },
        {
            name: "Weather App",
            description: "Week 6 - This project is a a Weather Dashboard that uses OpenWeather API to take an city name and fetches it's co-ordinates, which is then used as parameters to fetch a different OpenWeather API that returns the weather forecast. This data is then displayed in the appropriate page elements.",
            git_url: "https://github.com/liaof/6-weather-app",
            url: "https://liaof.github.io/6-weather-app/"
        },
        {
            name: "Note Taker",
            description: "Week 11 - For this week's project, I have created a server-based site that takes notes. When we go to the URL, a request is made to the heroku server to serve our data to the browser, as HTML. The data served to the browser contains all of the extant notes in a JSON, which is then displayed in the browser via HTML. Afterwards, we can enter text into an input field on our screen, and a 'save' icon will automatically appear in the navbar when we do so. When we click on the 'save' icon, the browser makes a post request to the server, with the text we just typed as the body. We also save a numerical index to the request parameters; this is used to delete specific notes.",
            git_url: "https://github.com/liaof/challenge-11",
            url: "https://peaceful-hollows-59652.herokuapp.com/"
        },
        {
            name: "Tech Blog",
            description: "Week 14 - For this week's challenge, I created a full stack blog being served via Heroku. Because this challenge coincides with a group project, the scope of said challenge is understandbly smaller; much of the work required has been done in the preceeding two weeks in the module homework. That said, a revamp of the entire backend and frontend was needed to bring the functionality inline with the challenge requirements. This is a simple but very important exercise because the usage of a template for multiple tasks is a great efficancy booster, reflected in the very concept of MVC structuring",
            git_url: "https://github.com/liaof/challenge-14",
            url: "https://radiant-garden-99860.herokuapp.com/"
        },
        {
            name: "Budget Tracker - Budgie",
            description: "This weeks project entails taking an existing application and Express.js server, and adding offline persistence and functionality to it, by saving inputs via IndexedDB and saving the app itself using service-workers to cache the relevant files. Finally, the extant application is converted into a Progressive Web Application (PWA) for ease of use.",
            git_url: "https://github.com/liaof/challenge-19",
            url: "https://gorgeous-channel-islands-72248.herokuapp.com/"
        },
        {
            name: "Fullstack Project - Puppy Love",
            description: "This weeks project entails is a full-stack group project. The task we chose was to build a social media platform focused on connecting dogs and their owners to other dogs and their owners.",
            git_url: "https://github.com/MAsuamah/puppy-love/tree/main",
            url: "https://puppy-love-date.herokuapp.com/"
        }
    ]);

    return (
        <section className="my-5 content-wrap">
            <h2 className='py-1'>My Portfolio</h2>
            <div className="flex-row space-evenly">          
                {projects.map((currentProject,i) => (
                // //     <div>
                // // {/* <img
                // //     src={require(`../../assets/small/${category}/${i}.jpg`).default}// the photos have the same name as the loop index, so we use the latter
                // //     alt={image.name}
                // //     className="img-thumbnail mx-1"
                // //     onClick={() => toggleModal(image, i)}// asign the toggleModal function to handle click events, pass image (current element in the photos array) and i
                // //     key={image.name}
                // // /> */}
                // //     <div className='card my-2 center '>
                // //         <h4>{capitalizeFirstLetter(project.name)}</h4>
                // //         <div className='container'>
                // //             <p>{project.description}</p>
                // //         </div>
                // //     </div>
                
                // //     </div>
                    <Project project={currentProject}></Project>
                ))}
      </div>
            
        </section>
      );
}

export default Portfolio;