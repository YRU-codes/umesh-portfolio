import { socialMedia } from "../data/socialMedia";
import NetworkParticles from "../Components/Animation/NetworkParticle";
const HomePage = () => {

    return (
        <div className="pt-[18vh] pl-[13%] flex items-center">
            <div className="w-[60%]">
                 <h2 className="my-8 text-4xl font-bold text-gray-100">Hi I'm <span className="text-green-400 ">Umesh</span></h2>
            <h3 className="text-3xl font-semibold text-gray-300 opacity-80">Frontend Developer</h3>
            <p className="my-4 text-gray-300 opacity-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate nam voluptates voluptatem porro incidunt.</p>
            <div className="my-8">
            <a href="#" className=" px-7 rounded-sm py-4 bg-green-400 text-white  transition-all duration-400 hover:shadow-md hover:shadow-green-500/70">Download CV</a>
            </div>
            <div className="mt-12 flex flex-start  gap-20">
                {
                    socialMedia.map((item) => {
                        return (
                            <a className="text-blue-600 hover:text-green-400 transition-all duration-300" key={item.id} href={item.link}>
                                <i  className={`${item.icon} text-2xl`}></i>
                            </a>
                        )
                    })
                }
            </div>
            </div>
            <div>
                <NetworkParticles />
            </div>
           
        </div>
    )
}

export default HomePage;
