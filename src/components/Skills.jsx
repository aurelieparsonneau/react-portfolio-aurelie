import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import PHP from "../assets/PHP.png";
import Symfony from "../assets/symfony.svg";
import Bootstrap from "../assets/bootstrap.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-20 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
            Compétences
          </p>
          <p className="py-4">
            Technologies que j'ai étudié lors de ma formation
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TailWind</p>
          </div>
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto h-[80px]" src={PHP} alt="HTML icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-ad shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Symfony} alt="HTML icon" />
            <p className="my-4">Symfony</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
