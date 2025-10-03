import React, { useState } from 'react';
import '../styles/modal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-400 mb-4">{project.subtitle}</p>
        <p className="text-sm text-gray-500 mb-6"><i className="far fa-calendar-alt mr-1"></i> {project.period}</p>

        <div className="carousel-container">
          <div className="carousel-images" id="carouselImages">
            <img src={project.images[currentIndex]} className="carousel-image" alt={project.title} />
          </div>
          <div className="carousel-nav">
            <button className="carousel-btn" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
            <button className="carousel-btn" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
          </div>
          <div className="carousel-dots">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              ></div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center"><i className="far fa-list-alt mr-2"></i> Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-1">
              {project.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center"><i className="fas fa-cogs mr-2"></i> Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <span key={i} className="tech-badge"><i className={t.icon}></i> {t.name}</span>
              ))}
            </div>
            <h3 className="text-xl font-bold mt-6 mb-3 flex items-center"><i className="fas fa-link mr-2"></i> Links</h3>
            <div className="space-y-2">
              {project.links.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
                  <i className={l.icon}></i> {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;