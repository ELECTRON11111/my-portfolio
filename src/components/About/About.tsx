export default function About() {
    return (
        <div id="about" className="p-5 py-16 sm:grid sm:grid-cols-3">
            <h2 className="py-4 text-xl font-extrabold sm:justify-self-center">About Me.</h2>
            <div className="sm:col-span-2">
                <p className="my-2">Hey there! My name's Opemipo, a Frontend Engineer and Tech enthusiast with 2+ years of Experience
                building web applications following development techniques to meet business needs. As an intro, I'd say I've always been
                into tech from childhood, it facinated me growing up and is the reason I study Computer Engineering today. I work on the Client 
                side of web applications building pexel perfect designs, fetching and posting data to servers, ensuring Search Engine Optimization
                (SEO) and page responsiveness. My goal is to use my skills to solve real world problems and challenges by going Full Stack.
                Diving into Backend (Server-side) development soon. Check out my resume and CV.</p>

                <div id="buttons" className="flex justify-evenly py-4 sm:justify-start sm:gap-6">
                    <button className="flex py-2 px-4 border border-black gap-2 rounded transition duration-300 ease-out hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg>

                        <p>Resume</p>
                    </button>

                    <button className="flex py-2 px-4 border border-black gap-2 w-[7.5rem] rounded transition duration-300 ease-out hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg>

                        <p>CV</p>
                    </button>
                </div>
            </div>
        </div>
    )
}