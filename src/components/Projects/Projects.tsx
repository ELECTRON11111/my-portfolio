"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

const projectsList = [
  {
    name: "KNOT9ja",
    description: `
      Knot9ja is a job-matching platform designed to connect artisans with potential clients seeking their services. 
      The platform allows artisans to create profiles showcasing their skills, experience, and portfolios, while clients can post job listings and browse through artisan profiles to find the right fit for their projects. Knot9ja aims to streamline the hiring process for both artisans and clients, making it easier to find and secure work in various trades and crafts. 
      Some Key functionalities include CRUD operations with role-based authentication, real-time chat between artisans and clients via websockets, job posting and application management, pagination, reviews and ratings system, user dashboards, geolocation for finding jobs within one's region and a notification system.
    `,
    codeLink: "/#",
    projectLink: "https://www.knot9ja.com.ng/",
    thumbnail: "/assets/knot9ja.png",
    isProprietary: true,
    techStack: ["Next Js", "Tailwind CSS", "Typescript", "REST API", "WebSockets", "GCP", "Geolocation API - Google"],
  },
  {
    name: "SAFELINK - Inventors NextGenBuilders (3rd Place Project) - 2025",
    description: `
      SafeLink is a secure, escrow-driven e-commerce platform for informal vendors. It uses role-based authentication, KYC verification, and a 
      multi-stage escrow flow to ensure trusted transactions between buyers and sellers. The platform handles orders and payments through a 
      state-based system from payment hold to fulfillment and release—while integrating Supabase auth, email verification, and basic dispute logic.
    `,
    codeLink: "/#",
    projectLink: "https://team-eta-elite-frontend.vercel.app/",
    thumbnail: "/assets/safelink.png",
    isProprietary: true,
    techStack: ["React", "Tailwind CSS", "Typescript", "Paystack Payments API", "Vite", "Supabase", "Vercel", "Vercel Server Functins"],
  },
  {
    name: "The RetroFest Ticketing Platform",
    description: "SafeLink is a secure, escrow-driven e-commerce platform for informal vendors. It uses role-based authentication, KYC verification, and a multi-stage escrow flow to ensure trusted transactions between buyers and sellers. The platform handles orders and payments through a state-based system—from payment hold to fulfillment and release—while integrating Supabase auth, email verification, and basic dispute logic.",
    codeLink: "/#",
    projectLink: "https://www.theretrofest.com.ng/",
    thumbnail: "/assets/retrofest.png",
    isProprietary: true,
    techStack: ["Next Js", "Tailwind CSS", "Typescript", "Next Js App Router", "Paystack API", "Supabase", "Resend - Email Service"],
  },
  {
    name: "PO-ZAC Game Therapy",
    description: "PO-ZAC Game, also known as mind shield and bullying-proof game, has been developed to train the mind to respond positively to any form of verbal bullying. It is intended to ultimately develop children and adolescents to be emotionally resilient and mentally strong and prepared against verbal bullying. This game (pozac) is a form of bibliotherapy intervention to mitigate the negative effect of verbal bullying—specifically, the use of insulting and abusive words. PO-ZAC serves as mind shield to resist verbal bullying and proof against feelings that could cause trauma and alienation socially and emotionally.",
    codeLink: "https://github.com/ELECTRON11111/po-zac/",
    projectLink: "https://po-zac.vercel.app/",
    thumbnail: "/assets/po-zac.png",
    isProprietary: false,
    techStack: ["Next Js", "Tailwind CSS", "Typescript", "Next Js App Router", "Firebase", "Vercel"],
  },
  {
    name: "Adelsts Ventures Ltd Official Website",
    description: "Adelsts Ventures Limited is a supply chain management and business development firm specializing in the logistics and distribution of goods and services. This official website aims to provide a comprehensive overview of the company's activities, products, and services. I built this website, manage its domain and email service.",
    codeLink: "/#",
    projectLink: "https://www.adelstsventuresltd.com/",
    thumbnail: "/assets/adelsts.png",
    isProprietary: true,
    techStack: ["Next", "Tailwind CSS", "Typescript", "Vercel"],
  },
  {
    name: "AVE - the attendance app",
    description: "The cumbersome and unverifiable process of signing attendance on a piece of paper within Nigerian universities for a great number of students is a major problem. Ave utilizes geofences and unique codes to verify student attendance using their coordinates in relation to class creation coordinates",
    codeLink: "https://github.com/ELECTRON11111/ave",
    projectLink: "https://ave-main.onrender.com/",
    thumbnail: "/assets/ave.png",
    isProprietary: false,
    techStack: ["Next Js", "Tailwind CSS", "Typescript", "Vercel"],
  },
  {
    name: "MUSICA",
    description: " This is a music playing app based on a complex UI design in figma requiring API consumption and integration. The application was built using React Js for its component-based nature, reusability and scalability. On this project, I worked alongside a Backend engineer and a web designer for the development.",
    codeLink: "https://github.com/ELECTRON11111/musica",
    projectLink: "http://zoomplay.netlify.app/",
    thumbnail: "/assets/musica.png",
    isProprietary: false,
    techStack: ["React Js", "CSS Modules", "Typescript", "Vercel"],
  },
]

function Project(props:any) {
  return (
    <CardContainer className="inter-var mx-8">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-justify text-sm max-w-sm mt-2 dark:text-neutral-300 sm:max-w-fit"
        >
          {props.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.thumbnail}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Technologies used */}
        <div className="py-8 flex gap-3 flex-wrap">
          {(props.techStack as Array<string>).map((tech, index) => (
            <div key={index} className="p-4 py-2 text-white border-2 my-2 border-white w-fit rounded-lg transition duration-300 ease-out hover:border-3 hover:border-yellow-500 hover:text-yellow-500">
              {tech}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <CardItem
            translateZ={20}
            as={Link}
            href={props.codeLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-yellow-500"
          >
            {props.isProprietary? "Proprietary" :"View code →"}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={props.projectLink}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-yellow-500 hover:text-white"
          >
            View project
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}


export default function Projects() {
  return (
    <div id="Projects" className="bg-neutral-900 pb-16">
      <h1 className="py-4 px-8 pt-16 text-xl font-extrabold text-white sm:justify-self-center md:py-8 lg:px-0">Projects.</h1>

      <div id="projects-list" className="flex flex-col justify-center gap-6 sm:gap-8 sm:flex-wrap xl:flex-row">
        {[...projectsList].map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            codeLink={project.codeLink}
            projectLink={project.projectLink}
            thumbnail={project.thumbnail}
            isProprietary={project.isProprietary}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  )
}