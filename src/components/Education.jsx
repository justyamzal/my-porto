import React from "react";

const Education = () => {
      return (
    <section id="education" className="pt-35 pb-35 px-6 md:px-12 lg:px-24 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Education & Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <p><strong>Polytechnic State of Jember</strong></p>
          <p className="text-gray-400">Bachelor of Informatics engineering</p>
          <p className="font-semibold mt-2">GPA : 3.69/4.00</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition duration-300">
          <h3 className="text-2xl font-bold mb-4">Courses</h3>
          <div className="mb-6">
            <p><strong>FGA Digitalent Kominfo Scholarship Bootcamp - Data Science</strong></p>
            <p className="text-gray-400">Binar Academy - Remotely, Indonesia</p>
            <p className="text-sm text-gray-500">Mar 2023 - Apr 2023</p>
          </div>
          <div>
            <p><strong>Bootcamp Full-Stack Web Developer</strong></p>
            <p className="text-gray-400">Harisenin.com - Remotely, Indonesia</p>
            <p className="text-sm text-gray-500">June, 2025 - Presently</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;