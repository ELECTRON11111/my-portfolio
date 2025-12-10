export default function Skills() {
    return (
        <div id="skills_section" className="text-white bg-neutral-900 p-8 py-16 sm:grid sm:grid-cols-2 lg:px-20">
            <h2 className="text-xl font-extrabold py-4 sm:col-span-2 sm:justify-self-center sm:text-center">Skills.</h2>
            <p className="sm:col-span-2 sm:text-center">Over the years, I&apos;ve developed core programming skills for problem solving that has further improved the 
            quality and efficiency of my web applications and scripts. Also understanding the web, its nature and optimizations that can be made to improve SEO results have been a great
            addition to my skill set. My focus and some of the technologies I&apos;ve worked with are shown below :</p>

            <div id="focus" className="py-4 flex flex-col gap-2 justify-between sm:p-6">
                <h3 className="px-6 py-2 my-2 border-b-2 inline-block">MY FOCUS</h3>

                <h3>Solving Business Problems</h3>
                <h3>User Experience (UX) Optimization</h3>
                <h3>Search Engine Optimization</h3>
                <h3>Web Accessibility</h3>
                <h3>Responsive Design</h3>
            </div>

            <div id="known_technologies" className="py-4 flex flex-col sm:p-6">
                <div id="technology" className="w-full h-10 bg-neutral-900 flex items-center">
                    <span className="block p-4 w-[6.5rem] pr-14">HTML</span>
                    <div className="bg-white basis-3/4 flex">
                        <div className="bg-yellow-500 basis-[95%] text-yellow-500">.</div>
                    </div>
                </div>
                
                <div id="technology" className="w-full h-10 bg-neutral-900 flex items-center">
                    <span className="block p-4 w-[6.5rem] pr-14">CSS</span>
                    <div className="bg-white basis-3/4 flex">
                        <div className="bg-yellow-500 basis-[80%] text-yellow-500">.</div>
                    </div>
                </div>
                
                <div id="technology" className="w-full h-10 bg-neutral-900 flex items-center">
                    <span className="block p-4 w-[6.5rem]">JavaScript</span>
                    <div className="bg-white basis-3/4 flex">
                        <div className="bg-yellow-500 basis-[80%] text-yellow-500">.</div>
                    </div>
                </div>
                
                <div id="technology" className="w-full h-10 bg-neutral-900 flex items-center">
                    <span className="block p-4 w-[6.5rem]">Typescript</span>
                    <div className="bg-white basis-3/4 flex">
                        <div className="bg-yellow-500 basis-[80%] text-yellow-500">.</div>
                    </div>
                </div>
                
                <div id="technology" className="w-full h-10 bg-neutral-900 flex items-center">
                    <span className="block p-4 w-[6.5rem] pr-14">React</span>
                    <div className="bg-white basis-3/4 flex">
                        <div className="bg-yellow-500 basis-[85%] text-yellow-500">.</div>
                    </div>
                </div>
                
                <div id="technology" className="w-full h-10 bg-neutral-900 flex items-center">
                    <span className="block p-4 w-[6.5rem] pr-14">Tailwind</span>
                    <div className="bg-white basis-3/4 flex">
                        <div className="bg-yellow-500 basis-[95%] text-yellow-500">.</div>
                    </div>
                </div>

                <div id="technology" className="w-full h-10 bg-neutral-900 flex items-center">
                    <span className="block p-4 w-[6.5rem] pr-14">NextJs</span>
                    <div className="bg-white basis-3/4 flex">
                        <div className="bg-yellow-500 basis-3/4 text-yellow-500">.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}