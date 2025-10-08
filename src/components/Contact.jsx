import { CONTACT } from "../constants";
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <motion.p
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: -100}}
                        transition={{duration: 1}}
                        className="text-stone-400">{CONTACT.address}
                    </motion.p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <motion.a 
                        href={`tel:${CONTACT.phoneNo}`}
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: -100}}
                        transition={{duration: 1}}
                        className="text-stone-400 hover:text-white transition-colors duration-300"
                    >
                        {CONTACT.phoneNo}
                    </motion.a>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <motion.a 
                        href={`mailto:${CONTACT.email}`}
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: -100}}
                        transition={{duration: 1}}
                        className="text-stone-400 hover:text-white transition-colors duration-300 border-b border-stone-600 hover:border-white"
                    >
                        {CONTACT.email}
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Contact