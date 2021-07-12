import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import Project from '../Project';



function Portfolio () {

    const [projects] = useState([
        {
            name: "Intro to web design",
            description: "Week 1 - Given starter code, the goal of this project is to combine HTML and CSS to design a basic webpage",
            url: "https://github.com/liaof/challenge-1"
        },
        {
            name: "Beginner Portfolio",
            description: "Week 2 - a basic porfolio website made using basic CSS and js",
            url: ""
        },        
        {
            name: "Password Generator",
            description: "Week 3 - This particular generator allows the user to select the number of characters in the password, as well as choose what type of characters are allowed to compose said password. If there is no character set selected, we can not logically generate a password with user defined parameters, so the script assumes the operator has made an error and reruns the pertinent parts.",
            url: "https://github.com/liaof/challenge-3"
        },
        {
            name: "Timed Javascript Quiz",
            description: "Week 4 - This particular project allows the user to take a time restricted quiz, the topic of which is Javascript. Features of this quiz include a timer that docks 5 seconds for every incorrect answer. The questions and answers and populated from a 2D array, allowing for easy scaling of both depth and breadth of the question-set.",
            url: "https://github.com/liaof/challenge-4"
        },
        {
            name: "Workday Scheduler",
            description: "Week 5 - This project is a daily planner. The timeblocks in the scheduler are programmed in such a way that they will change color depending on whether said time block is in the past, present, or future",
            url: "https://github.com/liaof/challenge-5"
        }, 
        {
            name: "Weather App",
            description: "Week 6 - This project is a a Weather Dashboard that uses OpenWeather API to take an city name and fetches it's co-ordinates, which is then used as parameters to fetch a different OpenWeather API that returns the weather forecast. This data is then displayed in the appropriate page elements.",
            url: "https://github.com/liaof/6-weather-app"
        },
        {
            name: "README Generator",
            description: "Week 9 - This project entailed creating a script utlising Node.js that automatically generates a markdown README upon answering the script's queries. In the readme, necessary documentation such as installation instructions, usage guides, and more are generated based on user input. These components are then neatly indexed by a table of contents that links to each section. This table of contents can vary in size, based on whether the user has indicated the usage of any licenses. If yes, a link is created in the table of contents, as well as a corresponding text section and badges.",
            url: "https://github.com/liaof/challenge-9"
        },
        {
            name: "Team Roster App",
            description: "Week 10 - In this project, I have created a script for node.js that takes a list of employees and creates a webpage displaying all of their information and contact links. There are 3 different types of positions at the company, each with different pertinent information to be displayed. We can dictate how many engineer and intern positions to fill, but because leaders are by definition singular, the program assumes you have a single manager and does not leave the option to enter more currently.",
            url: "https://github.com/liaof/challenge-10"
        },
        {
            name: "Note Taker",
            description: "Week 11 - For this week's project, I have created a server-based site that takes notes. When we go to the URL, a request is made to the heroku server to serve our data to the browser, as HTML. The data served to the browser contains all of the extant notes in a JSON, which is then displayed in the browser via HTML. Afterwards, we can enter text into an input field on our screen, and a 'save' icon will automatically appear in the navbar when we do so. When we click on the 'save' icon, the browser makes a post request to the server, with the text we just typed as the body. We also save a numerical index to the request parameters; this is used to delete specific notes.",
            url: "https://github.com/liaof/challenge-11"
        },
        {
            name: "MySQL E-commerce Back End",
            description: "Week 13 - This weeks challenge has us take some prewritten back end code, and initiate the objects, sync the server, finish up the routes, and create associations; all according to exacting specifications because this project simulates the finishing up of someone else's code, an activity that forms the basis of collaborative work.",
            url: "https://github.com/liaof/challenge-13"
        },
        {
            name: "Tech Blog",
            description: "Week 14 - For this week's challenge, I created a full stack blog being served via Heroku. Because this challenge coincides with a group project, the scope of said challenge is understandbly smaller; much of the work required has been done in the preceeding two weeks in the module homework. That said, a revamp of the entire backend and frontend was needed to bring the functionality inline with the challenge requirements. This is a simple but very important exercise because the usage of a template for multiple tasks is a great efficancy booster, reflected in the very concept of MVC structuring",
            url: "https://github.com/liaof/challenge-14"
        },
        {
            name: "Regex Tutorial - Email Validation",
            description: "Week 17 - This week's challenge is a gist based regex tutorial. As part of the challenge, we were given a selection of 5 different expressions to break down and explain, organized in a predetermined format given as part of the starter code.",
            url: "https://gist.github.com/liaof/df0e119588ad9adc0e2471665a98ef81"
        },
        {
            name: "Monggoose/MongoDB Forum Back End",
            description: "This week we had to make a Mongoose based database which forms the backbone of what appears to be a very simple forum. There are routes for account creation, as well as thread and comment creation. It even has a friends list system. But not only are there post routes to create these things, we also include the ability to delete and edit the things.",
            url: "https://github.com/liaof/Challenge-18"
        },
        {
            name: "Budget Tracker - Budgie",
            description: "This weeks project entails taking an existing application and Express.js server, and adding offline persistence and functionality to it, by saving inputs via IndexedDB and saving the app itself using service-workers to cache the relevant files. Finally, the extant application is converted into a Progressive Web Application (PWA) for ease of use.",
            url: "https://github.com/liaof/challenge-19"
        },
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