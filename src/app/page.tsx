import TopBanner from "@/components/TopBanner/TopBanner";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="">       
        <div id="home" className=" bg-gray-100 bg-cover sm:bg-[url('../../public/assets/img-7.png')]">
          <TopBanner />
          
          <div id="home-content" className="py-28 grid grid-rows-4 gap-2 px-2 sm:grid sm:grid-cols-3">
            <h1 className="text-black font-extrabold bg-transparent row-span-2 self-end text-center text-4xl sm:text-white sm:self-start sm:col-span-2 sm:row-span-1 sm:drop-shadow-2xl md:text-6xl">Omoniyi Opemipo</h1>
            <h2 className="text-black bg-transparent text-center sm:text-white sm:text-start sm:col-span-2 sm:justify-self-center shadow-black sm:drop-shadow-2xl">Web Developer & Designer</h2>

            <button className="button">Contact Me</button>
          </div>
        </div>

        <About />
    </main>
  );
}
