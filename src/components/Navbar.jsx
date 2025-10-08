import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <nav className="flex items-center justify-center py-6 relative">
      {/* Navigation Menu - Centered */}
      <div className="hidden md:flex gap-8">
        <motion.button 
          onClick={() => scrollToSection('technologies')}
          className="text-stone-300 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Technologies
        </motion.button>
        <motion.button 
          onClick={() => scrollToSection('projects')}
          className="text-stone-300 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </motion.button>
        <motion.button 
          onClick={() => scrollToSection('experience')}
          className="text-stone-300 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience
        </motion.button>
        <motion.button 
          onClick={() => scrollToSection('contact')}
          className="text-stone-300 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </div>

      {/* Social Links - Positioned absolutely to the right */}
      <div className="absolute right-0 flex items-center gap-4">
        <motion.a 
          href="https://www.linkedin.com/in/kevinkdinh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition-colors duration-300"/>
        </motion.a>
        <motion.a 
          href="https://www.github.com/kevindinh24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub className="text-white text-2xl hover:text-gray-400 transition-colors duration-300"/>
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar