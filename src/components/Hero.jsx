import React from "react";
// import { motion } from "framer-motion";

const Hero = () => {
  return (
      <section id="about" className="pt-[204px] pb-35 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h1 id="hero-greeting" className="text-4xl md:text-5xl font-bold mb-4">
               Hello World !
            </h1>
            <h2 id="hero-name" className="text-3xl md:text-4xl font-bold mb-6">I’m Yadri amzal</h2>
            <p id="hero-description" className="text-gray-300 leading-relaxed max-w-xl">
              I'm a Software Engineer which is currently focus on Web Development. 
              I'm currently interested in coding or developer world because I'm interest to challenge my self to solve any problem either in bussiness or life through coding perspective. 
              I also interested in learning new things and push my self into next level.
            </p>
            <div id="hero-button" className="mt-8">
          <a href="https://drive.google.com/uc?export=download&id=1Zspx7yhjcTAhcrkIxXPUK1r-GLo0W-Dl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Download CV
          </a>
        </div>

          </div>
          <div id="hero-avatar" className="md:w-1/3 flex justify-center group cursor-pointer">
              <img src="/images/mypicture2.png" className="w-68 h-68 rounded-full bg-gray-700 flex items-center justify-center border-4 border-indigo-500 object-cover object-center scale-150" alt="" />
          </div>
        </div>
      </section>
  );
};

export default Hero;