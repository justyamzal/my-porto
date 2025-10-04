import React from "react";

const Skills = () => {
      return (
    <section id="skills" className="pt-35 pb-35 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition">
          <h3 className="text-2xl font-bold mb-4">Frontend</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>HTML, CSS, JavaScript, ReactJS, TailwindCSS, Bootstrap</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
          <h3 className="text-2xl font-bold mb-4">Backend & Database</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>NodeJS & Express, MySQL, MongoDB, Python, JavaScript, PHP</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition">
          <h3 className="text-2xl font-bold mb-4">Others</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>GIT, Figma, Docker, Postman, Jest</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Skills;