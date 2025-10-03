import React from "react";

const Hero = () => {
      return (
    <section id="about" className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello World !</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">I’m Yadri amzal</h2>
          <p className="text-gray-300 leading-relaxed max-w-xl">
            I'm a Software Engineer which is currently focus on Web Development. 
            I'm currently interested in coding or developer world because I'm interest to challenge my self to solve any problem either in bussiness or life through coding perspective. 
            I also interested in learning new things and push my self into next level.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gray-700 flex items-center justify-center border-4 border-indigo-500">
            <i className="fas fa-user text-6xl text-white"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;