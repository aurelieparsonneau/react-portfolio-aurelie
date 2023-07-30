import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              A propos de moi
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
            Qui suis-je ?
            </p>
          </div>
          <div>
            <p>
            Après 15 ans passés au sein d'un cabinet d'avocats, me voici en reconversion professionnelle. Aimant le monde du numérique, c'est tout naturellement que je me suis dirigée vers le développement Web. <br/>
            Je suis actuellement en formation "développeuse web, web mobile, full stack", au sein de l'école Web Force 3 et encadrée par l'association Social Builder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
