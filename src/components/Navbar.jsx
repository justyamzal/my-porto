import React from "react";

const Navbar = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-center space-x-8">
        <button onClick={() => scrollToSection('about')} className="hover:text-indigo-400 transition">About</button>
        <button onClick={() => scrollToSection('education')} className="hover:text-indigo-400 transition">Education</button>
        <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-400 transition">Skills</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-400 transition">Project</button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-400 transition">Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;