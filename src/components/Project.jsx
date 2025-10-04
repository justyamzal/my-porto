import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = {
    chill: {
      title: "Chill",
      subtitle: "Web Streaming Platform",
      period: "Jul 2025 - Present",
      images: [
        "/images/chill-1.PNG",
        "/images/login-1.PNG",
        "/images/manage-1.png",
      ],
      responsibilities: [
        "Developing Video Streaming Platform Website.",
        "Creating UI/UX for seamless user experience."
      ],
      techStack: [
        { name: "React", icon: "fab fa-react" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
        { name: "Node.js", icon: "fab fa-node-js" }
      ],
      links: [
        { label: "View Code on GitHub", url: "https://github.com/justyamzal/chill", icon: "fab fa-github" },
        { label: "View Live Demo", url: "https://chill-demo.vercel.app", icon: "fas fa-globe" }
      ]
    },
    todo: {
      title: "To-Do-List",
      subtitle: "Task Management App",
      period: "May 2025 - Jun 2025",
      images: [
        "/images/todolist-2.PNG",
        "https://via.placeholder.com/800x450/4CAF50/FFFFFF?text=Todo+Screenshot+2"
      ],
      responsibilities: [
        "Building responsive task management interface.",
        "Implementing local storage for persistent data."
      ],
      techStack: [
        { name: "React", icon: "fab fa-react" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
        { name: "Node.js", icon: "fab fa-node-js" }
      ],
      links: [
        { label: "View Code on GitHub", url: "https://github.com/justyamzal/todo-list", icon: "fab fa-github" },
        { label: "View Live Demo", url: "https://todo-demo.vercel.app", icon: "fas fa-globe" }
      ]
    },
    eduford: {
      title: "Eduford",
      subtitle: "University Landing Page",
      period: "Apr 2025 - May 2025",
      images: [
        "/images/eduford-3.PNG",
        "https://via.placeholder.com/800x450/2196F3/FFFFFF?text=Eduford+Screenshot+2",
        "https://via.placeholder.com/800x450/2196F3/FFFFFF?text=Eduford+Screenshot+3",
        "https://via.placeholder.com/800x450/2196F3/FFFFFF?text=Eduford+Screenshot+4"
      ],
      responsibilities: [
        "Designing responsive landing page for university.",
        "Optimizing performance and accessibility."
      ],
      techStack: [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3" },
        { name: "JavaScript", icon: "fab fa-js" }
      ],
      links: [
        { label: "View Code on GitHub", url: "https://github.com/justyamzal/eduford", icon: "fab fa-github" },
        { label: "View Live Demo", url: "https://eduford-demo.vercel.app", icon: "fas fa-globe" }
      ]
    }
  };

  const openModal = (projectId) => {
    setCurrentProject(projects[projectId]);
    setShowModal(true);
  };

  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition group cursor-pointer relative" onClick={() => openModal('chill')}>
          <img src="/images/chill-1.PNG" alt="Chill" className="w-full h-60 object-cover group-hover:scale-105 transition" />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">Chill</h3>
            <p className="text-gray-400 mb-4">Chill is web streaming platform</p>
            {/* Badge langsung muncul, tanpa hover */}
            <div className="tech-badges flex flex-wrap">
              <span className="tech-badge"><i className="fab fa-react"></i> React</span>
              <span className="tech-badge"><i className="fab fa-css3-alt"></i> Tailwind</span>
              <span className="tech-badge"><i className="fab fa-node-js"></i> Node.js</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition group cursor-pointer relative" onClick={() => openModal('todo')}>
          <img src="/images/todolist-2.PNG" alt="To-Do-List" className="w-full h-60 object-cover group-hover:scale-105 transition" />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">To-Do-List</h3>
            <p className="text-gray-400 mb-4">App for listing activity that you wanna do</p>
            {/* Badge langsung muncul, tanpa hover */}
            <div className="tech-badges flex flex-wrap">
              <span className="tech-badge"><i className="fab fa-react"></i> React</span>
              <span className="tech-badge"><i className="fab fa-css3-alt"></i> Tailwind</span>
              <span className="tech-badge"><i className="fab fa-node-js"></i> Node.js</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition group cursor-pointer relative" onClick={() => openModal('eduford')}>
          <img src="/images/eduford-3.PNG" alt="Eduford" className="w-full h-60 object-cover group-hover:scale-105 transition" />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">Eduford</h3>
            <p className="text-gray-400 mb-4">Landing web profile for university</p>
            {/* Badge langsung muncul, tanpa hover */}
            <div className="tech-badges flex flex-wrap">
              <span className="tech-badge"><i className="fab fa-html5"></i> HTML</span>
              <span className="tech-badge"><i className="fab fa-css3"></i> CSS</span>
              <span className="tech-badge"><i className="fab fa-js"></i> JS</span>
            </div>
          </div>
        </div>
      </div>

      {showModal && <ProjectModal project={currentProject} onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Project;