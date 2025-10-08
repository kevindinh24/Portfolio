import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pb-24">
        <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl"
        >
            Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={index} 
                    className="mb-16 flex flex-wrap lg:justify-center"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 50}}
                    transition={{duration: 0.6, delay: index * 0.2}}
                >
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -50}}
                        transition={{duration: 0.6, delay: index * 0.2 + 0.1}}
                        className="w-full lg:w-1/4"
                    >
                        {project.isVideo ? (
                            project.title === "WellMate" ? (
                                <div className="mb-6 ml-12">
                                    <div className="relative transform scale-150" style={{ width: '140px', height: '280px' }}>
                                        {/* iPhone Frame */}
                                        <div className="absolute inset-0 bg-black rounded-[25px] p-2 shadow-2xl">
                                            <div className="w-full h-full bg-black rounded-[20px] overflow-hidden relative">
                                                {/* Notch */}
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-black rounded-b-2xl z-10"></div>
                                                
                                                {/* Video Content */}
                                                <video 
                                                    autoPlay 
                                                    loop 
                                                    muted 
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                    style={{ 
                                                        borderRadius: '16px'
                                                    }}
                                                >
                                                    <source src={project.image} type="video/mp4" />
                                                    <source src={project.image} type="video/quicktime" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                
                                                {/* Home Indicator */}
                                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-full opacity-60"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-6 flex justify-start">
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline
                                        className="rounded w-full h-auto object-cover"
                                        style={{ 
                                            maxWidth: '400px', 
                                            height: 'auto',
                                            backgroundColor: '#000000',
                                            transform: 'translateX(-80px)'
                                        }}
                                    >
                                        <source src={project.image} type="video/mp4" />
                                        <source src={project.image} type="video/quicktime" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )
                        ) : (
                            <div className="mb-6 flex justify-start">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded w-full h-auto object-cover"
                                    style={{ 
                                        maxWidth: '400px', 
                                        height: 'auto',
                                        transform: 'translateX(-80px)'
                                    }}
                                />
                            </div>
                        )}
                    </motion.div>
                    <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 50}}
                        transition={{duration: 0.6, delay: index * 0.2 + 0.2}}
                        className="w-full max-w-lg lg:w-3/4"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-2xl">{project.title}</h3>
                            {project.githubUrl && (
                                <motion.a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-stone-400 hover:text-white transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <FaGithub className="text-2xl" />
                                </motion.a>
                            )}
                        </div>
                        <p className="mb-4 text-stone-400">{project.description}</p>
                        <motion.div 
                            className="flex flex-wrap"
                            whileInView={{opacity: 1}}
                            initial={{opacity: 0}}
                            transition={{duration: 0.4, delay: index * 0.2 + 0.4}}
                        >
                            {project.technologies.map((tech, techIndex) => (
                                <motion.span 
                                    className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" 
                                    key={techIndex}
                                    whileInView={{opacity: 1, scale: 1}}
                                    initial={{opacity: 0, scale: 0.8}}
                                    transition={{duration: 0.3, delay: index * 0.2 + 0.5 + techIndex * 0.1}}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects