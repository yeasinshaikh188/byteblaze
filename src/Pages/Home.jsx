import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'

const Home = () => {
    return (
       <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-110px)]">
        <Hero></Hero>

        
        <img src={wave} alt="" className="w-full absolute bottom-0" />
        
       </div>
    );
};

export default Home;