import React from "react";

function HomeHero() {
  return (
    <div className="bg-center bg-cover bg-fixed bg-no-repeat md:w-full h-3/4 bg-[url('/profile.jfif')]">
      <h1
        className="flex text-2xl md:text-2xl h-full m-auto md:ml-auto md:mt-auto w-4/5 md:w-1/2 
           text-white font-display justify-center items-center mt-10"
      >
        Hi, I'm Bamidele...An aspiring Full Stack Web Developer. I believe it
        becomes much easier to work in a field where work never feels like work,
        being developer gives me that feeling, as i'm always motivated to
        improve and sharpen my problem solving ability. I'll love to work with a
        team of passionate and goal oriented individuals, solving real life
        problems, making the world livable to a reasonable degree.
      </h1>
    </div>
  );
}

export default HomeHero;
