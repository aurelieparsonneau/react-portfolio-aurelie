import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import photo from '../assets/photo3.jpg';
import photo2 from '../assets/photo_profile.jpg';

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] sm:max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
        <h1 className="text-4xl sm:text-6xl font-bold text-[white] pt-16">
          Aurélie Parsonneau
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[gray]">
          Développeuse back-end PHP / Symfony
        </h2>
        <p className="text-yellow-300 py-4 max-w-[700px]">Actuellement en recherche d'emploi en tant que développeuse junior back-end PHP / Symfony.</p>
        </div>

        <div>
        <img src={photo2} alt="" className="max-w-[200px] shadow-lg shadow-[#040c16] rounded-full flex content-photo pt-5 flex-start"/>
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
