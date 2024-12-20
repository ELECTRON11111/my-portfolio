import Image from "next/image";
import TopBanner from "@/components/TopBanner/TopBanner";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="">       
        <div id="home" className=" relaive bg-gray-100 bg-cover sm:bg-[url('../../public/assets/img-7.png')]">
          <TopBanner />

          <div id="home-content" className="flex flex-col justify-between gap-6 pt-24 items-center p-10 px-0 bg-black md:gap-10 md:pt-36 lg:pt-[11.6rem] lg:py-[4.1rem] lg:flex-row lg:gap-0 md:px-16">
            <div className="text-content flex flex-col gap-4 text-white px-8 leading-6">
              <h1 className="text-4xl font-bold md:text-6xl">Hello, there 👋</h1>
              <h2 className="text-xl font-poppins md:text-3xl">I'm <span className="text-yellow-500 text-bold">Opemipo Omoniyi (ELECTRON)</span></h2>
              <p className="font-poppins leading-[32px] sm:text-justify">
                Frontend Developer with 3 years of experience in developing web applications from ideation to designs and to 
                live applications using technologies like React Js, Typescript, Javascript, HTML, CSS and so on. Skilled at writing 
                clear, concise code that is easy to maintain and troubleshoot to solve problems. Experienced in working in teams across 
                multiple projects. Able to work independently from remote locations or in office environments as needed.
              </p>
            </div>

            <Image src="/assets/github-profile-2.jpg" alt="My picture" className="md:mx-4 cursor-pointer rounded-2xl transform transition-all 
            ease-out duration-300 md:rotate-6 md:w-[450px] md:h-[450px] lg:w-[500px] hover:rotate-[-6deg]" width={340} height={400} />
          </div>
        </div>

        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
  );
}
