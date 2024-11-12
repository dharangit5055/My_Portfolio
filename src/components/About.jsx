import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          distinctio dolores adipisci necessitatibus eius neque maiores
          doloribus amet eligendi, laboriosam velit, quibusdam voluptates,
          numquam ullam. Hic, repellendus incidunt odit cum cupiditate culpa
          alias corrupti aperiam nemo blanditiis fugit eius commodi voluptates
          atque dolor sapiente deleniti officiis explicabo. Similique, excepturi
          pariatur?
        </p>
        <br />
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni non
          aliquid dolore blanditiis voluptate commodi architecto rem reiciendis
          nostrum libero perspiciatis veniam, porro tempora iusto maxime
          cupiditate sint earum vitae sunt sit, quibusdam, quo hic velit. Eius,
          blanditiis illo! Ex ad molestiae dolores quaerat exercitationem
          obcaecati quod, soluta dolorem illum?
        </p>
      </div>
    </div>
  );
};

export default About;
