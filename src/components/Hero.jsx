import profilePic from "../assets/profile-picture.webp";
import { HERO_CONTENT } from "../constants";
import {motion} from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants = {
    hidden : {opacity: 0, x : -100},
    visible :{
        opacity: 1,
        x:0,
        transition: {
            duration: .5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden : {opacity: 0, x: -100},
    visible : {
        opacity: 1,
        x:0,
        transition: {
            duration: .5,
        }
    }
}

const TypewriterText = ({ texts, className }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = texts[currentTextIndex];
            
            if (!isDeleting) {
                // Typing
                if (charIndex < fullText.length) {
                    setCurrentText(fullText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Finished typing, wait then start deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (charIndex > 0) {
                    setCurrentText(fullText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setCurrentTextIndex((currentTextIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100); // Faster when deleting

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentTextIndex, texts]);

    return (
        <span className={className}>
            I am a <span className="text-white font-semibold">{currentText}</span>
            <span className="animate-pulse">|</span>
        </span>
    );
};

const Hero = () => {
    const developerRoles = [
        "Software Engineer",
        "Full Stack Developer", 
        "Machine Learning Developer",
        "Backend Developer"
    ];

    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start lg:pl-60 lg:pt-12">
                        <motion.img 
                          src={profilePic} 
                          alt="Kevin Dinh" 
                          className="w-80 h-96 rounded-lg object-cover object-center grayscale shadow-2xl" 
                          initial={{x:100, opacity:0}}
                          animate={{x:0, opacity:1}}
                          transition={{duration: 1, delay: 1.5}}
                          variants={childVariants}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div 
                    initial= "hidden"
                    animate= "visible"
                    variants= {containerVariants}
                    className = "flex flex-col items-center lg:items-start mt-10">
                        <motion.h2 
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-lighter lg:text-8xl">Kevin Dinh
                        </motion.h2>
                        <motion.div 
                        variants={childVariants}
                        className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent min-h-[3rem] flex items-center">
                            <TypewriterText 
                                texts={developerRoles} 
                                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent"
                            />
                        </motion.div>
                        <motion.p 
                        variants={childVariants}
                        className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a 
                        variants={childVariants}
                        href="/Kevin_Dinh.pdf"
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero