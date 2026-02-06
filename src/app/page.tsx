import Image from "next/image";
import TopBanner from "@/components/TopBanner/TopBanner";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="">       
        <div id="home" className=" relaive bg-gray-100 bg-cover">
          <TopBanner />

          <div id="home" className="flex flex-col justify-between gap-6 pt-24 items-center p-10 px-0 bg-neutral-900 md:gap-10 md:pt-36 lg:pt-[11.6rem] lg:py-[4.1rem] lg:flex-row lg:gap-0 md:px-16">
            <div className="text-content flex flex-col gap-4 text-white px-8 leading-6">
              <h1 className="text-4xl font-bold md:text-6xl">Hello, there 👋</h1>
              <h2 className="text-xl font-poppins md:text-3xl">I&apos;m <span className="text-yellow-500 text-bold">Opemipo Omoniyi (ELECTRON)</span></h2>
              <p className="font-poppins leading-[32px] sm:text-justify">
                Frontend Software Engineer with 3+ years of experience building performant, accessible, and scalable production applications using Next.js, React, 
                and TypeScript. I take ownership of features from design implementation to delivery, translating complex requirements into maintainable UI systems
                backed by testing and best practices. With a strong product mindset, I focus on usability, performance, and real business impact—beyond just writing 
                code. Comfortable leading initiatives, collaborating with cross-functional teams, or working independently in both remote and on-site environments.
              </p>
            </div>

            <Image src="/assets/profile-y.jpg" alt="My picture" className="md:mx-4 cursor-pointer rounded-2xl transform transition-all 
            ease-out duration-300 md:rotate-6 md:w-[450px] md:h-[450px] lg:w-[500px] hover:rotate-[-6deg]" width={340} height={400} />
          </div>
        </div>

        <Projects />
        <About />
        <Skills />
        <Contact />
    </main>
  );
}
