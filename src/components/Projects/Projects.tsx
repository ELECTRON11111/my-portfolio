"use client"
import { useRef } from "react"
import Link from "next/link";

export default function Projects() {
    const moreContentRef1 = useRef<HTMLDivElement>(null);
    const moreContentRef2 = useRef<HTMLDivElement>(null);
    const moreContentRef3 = useRef<HTMLDivElement>(null);

    const showMoreContent = (show = true, refNo = 1) => {
        const moreContentElement = refNo == 1? moreContentRef1.current: refNo == 2? moreContentRef2.current: refNo == 3? moreContentRef3.current: moreContentRef1.current;

        if (moreContentElement !==  null &&  show) {
            moreContentElement.classList.remove("hidden")
        } else {
            moreContentElement !== null? moreContentElement.classList.add("hidden"): "";
        }
    }

    return (
        <div id="Projects" className="p-6 py-12 pb-16 flex flex-col justify-center sm:items-center">
            <h2 className="text-xl font-extrabold my-4 px-3">Portfolio.</h2>

            <div id="projects" className="flex flex-wrap gap-7 justify-center sm:mx-4">
                <div id="project-1" className="flex flex-col w-64">
                    <div className="project bg-[url('../../public/assets/musica.png')]" onMouseOver={() => showMoreContent(true,1)} onMouseLeave={() => showMoreContent(false, 1)}>
                        <div 
                            className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
                            id="more-content" 
                            ref={moreContentRef1}
                        >
                            <div id="code_btn" className="project-btn">
                                {/* Since its an external Link we don't need to use "Link" */}
                                <a href={"https://github.com/ELECTRON11111/musica"} rel="noopener noreferrer"  target="_blank">Check Code</a> 
                            </div>
                            <div id="live_btn" className="project-btn">
                                <a href="https://zoomplay.netlify.app/" rel="noopener noreferrer"  target="_blank">View Project</a> 
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold py-3">Musica</h3>
                    <p>Description - Musica is a music streaming web app inspired From a design challenge, it consumes an API for the music itself and couples that with beautiful a User Interface (UI). Building Musica further solidified my understanding of routing in webpages. This project was built using <b> React, Typescript and CSS modules.</b></p>
                </div>


                <div id="project-2" className="flex flex-col w-64">
                    <div className="project bg-[url('../../public/assets/getLinked.png')]" onMouseOver={() => showMoreContent(true, 2)} onMouseLeave={() => showMoreContent(false, 2)}>
                        <div 
                            className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
                            id="more-content" 
                            ref={moreContentRef2}
                        >
                            <div id="code_btn" className="project-btn">
                                {/* Since its an external Link we don't need to use "Link" */}
                                <a href={"https://github.com/ELECTRON11111/getLinked"} rel="noopener noreferrer"  target="_blank">Check Code</a> 
                            </div>
                            <div id="live_btn" className="project-btn">
                                <a href="https://get-linked-gules.vercel.app/" rel="noopener noreferrer"  target="_blank">View Project</a> 
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold py-3">Get Linked</h3>
                    <p>Description - GetLinked is a landing page built for a HR Management company, GetLinked AI. 
                    Translated figma design to React code with responsiveness and optimal User Experience. Here I worked with form data, its manipulation, validation of inputs and sending POST requests to a backend server. The project was built using <b>React JS.</b></p>
                </div>


                <div id="project-3" className="flex flex-col w-64">
                    <div className="project bg-[url('../../public/assets/smith.png')]" onMouseOver={() => showMoreContent(true, 3)} onMouseLeave={() => showMoreContent(false, 3)}>
                        <div 
                            className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
                            id="more-content" 
                            ref={moreContentRef3}
                        >
                            <div id="code_btn" className="project-btn">
                                {/* Since its an external Link we don't need to use "Link" */}
                                <a href={"https://github.com/ELECTRON11111/Smith-theshoppingbot"} rel="noopener noreferrer"  target="_blank">Check Code</a> 
                            </div>
                            <div id="live_btn" className="project-btn">
                                <a href="https://smith-theshoppingbot.vercel.app/" rel="noopener noreferrer"  target="_blank">View Project</a> 
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold py-3">SMITH - shopping bot</h3>
                    <p>Description - Going to supermarkets growing up I always thought about how the Desktop applications 
                    on the computer could manage the stores' Inventory. Since I started Web development, I thought why not 
                    implement something similar for the web. Well, I did it, with the web's fundamental technologies: <b>HTML, CSS and JS.</b></p>
                </div>
            </div>
        </div>
    )
}