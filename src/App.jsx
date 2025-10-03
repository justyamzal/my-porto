import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
    return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
