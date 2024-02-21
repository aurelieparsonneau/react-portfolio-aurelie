import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import photo from '../assets/photo3.jpg';

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
        <h1 className="text-4xl sm:text-6xl font-bold text-[white] pt-16">
          Aurélie Parsonneau
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[gray]">
          Développeuse full stack
        </h2>
        <p className="text-yellow-300 py-4 max-w-[700px]">Actuellement en recherche d'emploi en tant que développeuse junior. <strong>Forte appétence pour le back-end</strong>, notamment PHP / Symfony.</p>
        </div>

        <div>
        <img src={photo} alt="" className="shadow-lg shadow-[#040c16] rounded-full flex content-photo pt-5 flex-start"/>
        </div>
        {/* <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex hover:bg-yellow-600 hover:border-yellow-600-center justify-center items-center">
            Voir les travaux <HiArrowNarrowRight className="ml-3" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
