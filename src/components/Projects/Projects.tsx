// "use client"
// import { useRef } from "react"
// import Link from "next/link";
// import { CardContainer } from "../ui/3d-card";
// import { CardBody } from "../ui/3d-card";
// import { CardItem } from "../ui/3d-card";

// export default function Projects() {
//     const moreContentRef1 = useRef<HTMLDivElement>(null);
//     const moreContentRef2 = useRef<HTMLDivElement>(null);
//     const moreContentRef3 = useRef<HTMLDivElement>(null);

//     const showMoreContent = (show = true, refNo = 1) => {
//         const moreContentElement = refNo == 1? moreContentRef1.current: refNo == 2? moreContentRef2.current: refNo == 3? moreContentRef3.current: moreContentRef1.current;

//         if (moreContentElement !==  null &&  show) {
//             moreContentElement.classList.remove("hidden")
//         } else {
//             moreContentElement !== null? moreContentElement.classList.add("hidden"): "";
//         }
//     }

//     return (
//         <div id="Projects" className="p-6 py-12 pb-16 flex flex-col justify-center sm:items-center">
//             <h2 className="text-xl font-extrabold my-4 px-3">Portfolio.</h2>

//             <div id="projects" className="flex flex-wrap gap-7 justify-center sm:mx-4">
//                 <div id="project-1" className="flex flex-col w-64">
//                     <div className="project bg-[url('../../public/assets/musica.png')]" onMouseOver={() => showMoreContent(true,1)} onMouseLeave={() => showMoreContent(false, 1)}>
//                         <div 
//                             className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
//                             id="more-content" 
//                             ref={moreContentRef1}
//                         >
//                             <div id="code_btn" className="project-btn">
//                                 {/* Since its an external Link we don't need to use "Link" */}
//                                 <a href={"https://github.com/ELECTRON11111/musica"} rel="noopener noreferrer"  target="_blank">Check Code</a> 
//                             </div>
//                             <div id="live_btn" className="project-btn">
//                                 <a href="https://zoomplay.netlify.app/" rel="noopener noreferrer"  target="_blank">View Project</a> 
//                             </div>
//                         </div>
//                     </div>
//                     <h3 className="font-bold py-3">Musica</h3>
//                     <p>Description - Musica is a music streaming web app inspired From a design challenge, it consumes an API for the music itself and couples that with beautiful a User Interface (UI). Building Musica further solidified my understanding of routing in webpages. This project was built using <b> React, Typescript and CSS modules.</b></p>
//                 </div>


//                 <div id="project-2" className="flex flex-col w-64">
//                     <div className="project bg-[url('../../public/assets/getLinked.png')]" onMouseOver={() => showMoreContent(true, 2)} onMouseLeave={() => showMoreContent(false, 2)}>
//                         <div 
//                             className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
//                             id="more-content" 
//                             ref={moreContentRef2}
//                         >
//                             <div id="code_btn" className="project-btn">
//                                 {/* Since its an external Link we don't need to use "Link" */}
//                                 <a href={"https://github.com/ELECTRON11111/getLinked"} rel="noopener noreferrer"  target="_blank">Check Code</a> 
//                             </div>
//                             <div id="live_btn" className="project-btn">
//                                 <a href="https://get-linked-gules.vercel.app/" rel="noopener noreferrer"  target="_blank">View Project</a> 
//                             </div>
//                         </div>
//                     </div>
//                     <h3 className="font-bold py-3">Get Linked</h3>
//                     <p>Description - GetLinked is a landing page built for a HR Management company, GetLinked AI. 
//                     Translated figma design to React code with responsiveness and optimal User Experience. Here I worked with form data, its manipulation, validation of inputs and sending POST requests to a backend server. The project was built using <b>React JS.</b></p>
//                 </div>


//                 <div id="project-3" className="flex flex-col w-64">
//                     <div className="project bg-[url('../../public/assets/smith.png')]" onMouseOver={() => showMoreContent(true, 3)} onMouseLeave={() => showMoreContent(false, 3)}>
//                         <div 
//                             className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
//                             id="more-content" 
//                             ref={moreContentRef3}
//                         >
//                             <div id="code_btn" className="project-btn">
//                                 {/* Since its an external Link we don't need to use "Link" */}
//                                 <a href={"https://github.com/ELECTRON11111/Smith-theshoppingbot"} rel="noopener noreferrer"  target="_blank">Check Code</a> 
//                             </div>
//                             <div id="live_btn" className="project-btn">
//                                 <a href="https://smith-theshoppingbot.vercel.app/" rel="noopener noreferrer"  target="_blank">View Project</a> 
//                             </div>
//                         </div>
//                     </div>
//                     <h3 className="font-bold py-3">SMITH - shopping bot</h3>
//                     <p>Description - Going to supermarkets growing up I always thought about how the Desktop applications 
//                     on the computer could manage the stores&apos; Inventory. Since I started Web development, I thought why not 
//                     implement something similar for the web. Well, I did it, with the web&apos;s fundamental technologies: <b>HTML, CSS and JS.</b></p>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/assets/img-5.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
