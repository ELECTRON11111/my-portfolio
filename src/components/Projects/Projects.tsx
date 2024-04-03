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
        <div id="Projects" className="p-6 py-12 flex flex-col justify-center sm:items-center">
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
                    <h3 className="font-bold py-3">Musica.</h3>
                    <p>Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus numquam quasi nam suscipit hic neque magnam cum ipsam modi eligendi esse, quaerat vero dignissimos ipsum assumenda molestias aliquam? Officia</p>
                </div>


                <div id="project-2" className="flex flex-col w-64">
                    <div className="project bg-[url('../../public/assets/musica.png')]" onMouseOver={() => showMoreContent(true, 2)} onMouseLeave={() => showMoreContent(false, 2)}>
                        <div 
                            className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
                            id="more-content" 
                            ref={moreContentRef2}
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
                    <h3 className="font-bold py-3">Project Name</h3>
                    <p>Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus numquam quasi nam suscipit hic neque magnam cum ipsam modi eligendi esse, quaerat vero dignissimos ipsum assumenda molestias aliquam? Officia</p>
                </div>


                <div id="project-3" className="flex flex-col w-64">
                    <div className="project bg-[url('../../public/assets/musica.png')]" onMouseOver={() => showMoreContent(true, 3)} onMouseLeave={() => showMoreContent(false, 3)}>
                        <div 
                            className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gray-500 bg-opacity-90 hidden" 
                            id="more-content" 
                            ref={moreContentRef3}
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
                    <h3 className="font-bold py-3">Project Name</h3>
                    <p>Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus numquam quasi nam suscipit hic neque magnam cum ipsam modi eligendi esse, quaerat vero dignissimos ipsum assumenda molestias aliquam? Officia</p>
                </div>
            </div>
        </div>
    )
}