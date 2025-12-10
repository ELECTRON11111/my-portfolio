"use client"
import {motion} from "motion/react"

export default function About() {
    const workExperiences = [
        {
            date: "Feb 2025 – Present",
            role: "Lead Frontend Engineer",
            imgSrc: "/assets/knot9ja-logo.png",
            company: "Knot9ja (Remote - Contract)",
            description: [
            "Leading a team of 3 (frontend devs & designer) to build intuitive user interfaces and experiences.",
            "Converted 20+ Figma design pages into clean and responsive Next.js code within 2 weeks of project commencement.",
            "Developed Knot9ja’s job matching platform dashboard with React TS & Tailwind CSS, reducing development time by 20%.",
            "Implemented unit and integration tests with 80% code coverage, reducing risks of production bugs.",
            "Reviewed pull requests to ensure timely and effective issue resolution.",
            "Collaborated with backend engineers to design REST API contracts for seamless data exchange."
            ]
        },
        {
            date: "Jun 2024 – Sept 2024",
            role: "Frontend Engineer",
            imgSrc: "/assets/acme-logo.png",
            company: "ACME Software Labs (Remote)",
            description: [
            "Converted full UI/UX designs into functional, optimized React applications with a 15% boost in site speed.",
            "Collaborated with designers to build intuitive interfaces that improved user experience by 25%.",
            "Utilized GitHub for team collaboration, improving version control efficiency by 50%.",
            "Contributed to the development of a new company webpage using Agile methodologies for timely delivery.",
            "Wrote unit and integration tests with Jest and React Testing Library to boost code quality and catch bugs early.",
            "Worked with engineers and a product designer to build multiple products using HTML, CSS, JS, React, TypeScript, and Figma."
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
            date: "Jan 2020 – Sept 2021",
            role: "Junior Frontend Engineer",
            imgSrc: "/assets/perfcreg-logo.png",
            company: "Perfcreg Solutions (Ogun State, Nigeria)",
            description: [
            "Reproduced UI designs using plain HTML and CSS.",
            "Improved landing page interfaces with refined CSS, increasing user experience by 25%.",
            "Worked with a team of 3 to build websites for contract clients.",
            "Implemented web animations to enhance user experience by 50%."
            ]
        }
    ];

    const volunteerExperiences = [
        {
            date: "Sept 2025 – Present",
            role: "Community Lead",
            imgSrc: "/assets/inventors-logo.png",
            company: "The Inventors Community (Hybrid - Nigeria)",
            description: [
            "Mentoring 200+ students at Bells University of Technology.",
            "Leading a team of 11 leads to foster member growth and development within the community.",
            "Managing talents and skills to achieve community goals."
            ]
        },

        {
            date: "Jun 2024 – Sept 2025",
            role: "Frontend Lead",
            imgSrc: "/assets/inventors-logo.png",
            company: "The Inventors Community (Hybrid)",
            description: [
            "Led a frontend team of 5+ to build new community landing pages and the admin portal.",
            "Delivered 20+ functional UI components based on design specifications.",
            "Mentored junior developers and coordinated integration across frontend, backend, and design teams."
            ]
        }
    ];

    return (
        <div id="about" className="p-8 py-16 pb-8 flex flex-col text-center bg-neutral-900 text-white md:px-20">
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
            
            <h2 className="py-4 text-xl text-start font-extrabold sm:text-center sm:justify-self-center sm:pb-8">Volunteer Experiences.</h2>
            
            <div className="work-experiences flex flex-col gap-6">
                {volunteerExperiences.map((item: any, index):any => 
                    <WorkExperience
                        key={index}
                        date={item.date}
                        company={item.company}
                        role={item.role}
                        description={item.description}
                    />
                )}
            </div>
             
            <div className="my-12 mb-0 mx-auto">
                <button className="flex py-2 px-4 border border-white gap-2 rounded transition duration-300 ease-out hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                    </svg>

                    <p>
                        <a href="https://docs.google.com/document/d/1qSW2hCmfVx97yW1-f3Mp7_1_sG0dhy_pq-p_tg_1XFw/edit?usp=sharing" rel="noopener noreferrer"  target="_blank">Download Resume</a>
                    </p>
                </button>
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