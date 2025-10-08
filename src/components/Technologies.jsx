import { FaReact, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiFlask, SiPandas, SiNumpy, SiPytorch, SiJupyter, SiKubernetes, SiFirebase, SiDart, SiOpencv, SiSpotify } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const Technologies = () => {
  // Create an array of all technologies for the infinite scroll
  const technologies = [
    { icon: FaJava, color: "text-orange-500", name: "Java" },
    { icon: FaPython, color: "text-blue-500", name: "Python" },
    { icon: FaJs, color: "text-yellow-500", name: "JavaScript" },
    { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
    { icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
    { icon: FaCss3Alt, color: "text-blue-400", name: "CSS3" },
    { icon: SiDart, color: "text-blue-400", name: "Dart" },
    { icon: FaReact, color: "text-cyan-400", name: "React" },
    { icon: TbBrandNextjs, color: "text-white", name: "Next.js" },
    { icon: SiFlask, color: "text-gray-600", name: "Flask" },
    { icon: SiPandas, color: "text-blue-700", name: "Pandas" },
    { icon: SiNumpy, color: "text-blue-800", name: "NumPy" },
    { icon: SiPytorch, color: "text-red-500", name: "PyTorch" },
    { icon: SiFirebase, color: "text-yellow-500", name: "Firebase" },
    { icon: FaGitAlt, color: "text-orange-600", name: "Git" },
    { icon: SiJupyter, color: "text-orange-500", name: "Jupyter" },
    { icon: FaDocker, color: "text-blue-500", name: "Docker" },
    { icon: SiKubernetes, color: "text-blue-600", name: "Kubernetes" },
    { icon: FaAws, color: "text-orange-500", name: "AWS" },
    { icon: SiOpencv, color: "text-green-600", name: "OpenCV" },
    { icon: SiSpotify, color: "text-green-500", name: "Spotify API" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies];

  // Motion values and controls
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate the width of one complete set of technologies
  const itemWidth = 120; // min-w-[120px] + gap-8 (32px) = ~152px per item
  const totalWidth = technologies.length * itemWidth;

  // Auto-scroll animation
  useEffect(() => {
    if (!isDragging && !isPaused) {
      controls.start({
        x: [0, -totalWidth],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls, totalWidth, isDragging, isPaused]);

  // Handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  // Handle drag end
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    
    // Resume auto-scroll after a short delay
    setTimeout(() => {
      if (!isPaused) {
        controls.start({
          x: [x.get(), x.get() - totalWidth],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      }
    }, 1000);
  };

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="pb-24">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h2>
        
        {/* Instructions */}
        <p className="text-center text-stone-400 mb-8 text-sm">
            Drag to scroll • Hover to pause
        </p>
        
        {/* Draggable Infinite Scrolling Container */}
        <div 
            className="relative overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="flex items-center gap-8"
                drag="x"
                dragConstraints={{ left: -totalWidth, right: 0 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                animate={controls}
                style={{ x }}
                whileDrag={{ 
                    scale: 1.02,
                    transition: { duration: 0.1 }
                }}
            >
                {duplicatedTechnologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-2 p-4 min-w-[120px] select-none"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <IconComponent className={`text-6xl ${tech.color}`} />
                            <span className="text-sm text-stone-400 font-medium">
                                {tech.name}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies