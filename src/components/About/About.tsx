"use client"
import {motion} from "motion/react"

export default function About() {
    // This section is now about work experiences.
    const workExperiences = [
        {
            date: "June 2024 - September 2024",
            role: "Frontend Developer",
            imgSrc: "/assets/acme-logo.png",
            company: "ACME Software Labs, Ile-Ife",
            description: [
                "Successfully converted whole UI/UX designs to functional sites for the company with optimizations that lead to about 15% increase in site speed.",
                "Collaborated with designers on the team to develop Intuitive designs that lead to over 25% improved User Experience.",
                "Translated designs using the React JS library which increases speed of development by over 50%",
                "Utilized GitHub to manage collaborations leading to elevated efficiency in Software Version Control by about 50%.",
                "Involved in the development of new company webpage for improved ease of access using agile methodology for timeliness of project delivery.",
                "Lead teams through effective communication to solve reccurring technical problems", 
                "Experience managing and collaborating with a team of engineers and a product designer to build diverse products from start to finish using HTML, CSS, JS, React, Typescript, Figma, and AdobeXD."
            ]
        },
        {
            date: "2024 - present",
            role: "Frontend Engineer Lead",
            imgSrc: "/assets/acme-logo.png",
            company: "Inventors Community",
            description: [
                "Taking weekly programming and frontend classes for 100+ students in the Bells University of Technology.",
                "Working hand in hand with other community leads: designers and backend engineers to develop community landing page and leads admin page."
            ]
        },
        {
            date: "2021 - Present",
            imgSrc: "/assets/acme-logo.png",            
            role: "Frotend Engineer",
            company: "Freelance ",
            description: [
                "Built multiple proprietary software websites for businesses and leading to over 20% increase in business exposure and brand trust",
                "Worked on web animations to improve overall user experience by 50%.",
                "Exploring the use graphql within frontend applications",
            ]
        },
        {
            date: "2020 - 2021",
            imgSrc: "/assets/acme-logo.png",
            role: "Junior Frontend Developer",
            company: "Perfcreg Solutions, Ota",
            description: [
                "Improved user interfaces by updating landing pages to be more intuitive, increasing user experience by 25%",
                "Involved in designing and coding across 2 web applications and feature enhancements.",
                "Worked with a team of 3 to build business and goal driven websites.",
            ]
        },
    ];
    return (
        <div id="about" className="p-8 py-16 flex flex-col text-center bg-neutral-900 text-white md:px-20">
            <h2 className="py-4 text-xl text-start font-extrabold sm:text-center sm:justify-self-center sm:pb-8">Work Experiences.</h2>
            
            <div className="work-experiences flex flex-col gap-6">
                {workExperiences.map((item: any, index):any => 
                    <WorkExperience
                        key={index}
                        date={item.date}
                        company={item.company}
                        role={item.role}
                        description={item.description}
                    />
                )}
            </div>
             
            <div className="mt-4 sm:col-span-2">
                <div id="buttons" className="flex gap-4 justify-center py-4 sm:gap-6 lg:mt-8">
                    <button className="flex py-2 px-4 border border-white gap-2 rounded transition duration-300 ease-out hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg>

                        <p><a href="https://drive.google.com/file/d/1N0hyg0ZRn9VzN04FGqP6NvpHS3Za6Vfc/view?usp=sharing" rel="noopener noreferrer"  target="_blank">Resume</a></p>
                    </button>

                    <button className="flex py-2 px-4 border border-white gap-2 w-[7.5rem] rounded transition duration-300 ease-out hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg>

                        <p><a href="https://drive.google.com/file/d/1N0hyg0ZRn9VzN04FGqP6NvpHS3Za6Vfc/view?usp=sharing" rel="noopener noreferrer"  target="_blank">CV</a></p>
                    </button>
                </div>
            </div>
        </div>
    )
}


const WorkExperience = (props: any):any => {
    return (
        <motion.div 
            id="work-experience"
            className="font-poppins flex flex-col items-start gap-2 lg:grid lg:grid-cols-3"
            initial={{ opacity: 0, transform: "translateX(-100%)" }}
            whileInView={{ opacity: 1, font: "4rem", transform: "translateX(0%)"}}
        >
            <div className="date text-sm text-gray-400">{props.date}</div>
            <div id="workexperience-text" className="flex flex-col items-start gap-2 text-gray-400 lg:col-span-2">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4">
                    <h1 className="text-white  text-start text-sm text-nowrap sm:text-base">{props.role}</h1>
                    <h2 className="text-yellow-500 text-sm sm:text-base">{props.company}</h2>
                </div>

                <ul className="text-start px-4 sm:text-justify">
                    {Array.from(props.description).map((description: any, index) => <li className="list-disc marker:text-yellow-500" key={index}>{description}</li>)}
                </ul>
            </div>
        </motion.div>
    )
}