// Navbar.jsx
import { motion } from "framer-motion";

function Navbar() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-10 flex justify-center mt-3">
                <motion.ul
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <h3 className="text-white font-glitch text-4xl absolute left-4 mt-3">Void</h3>
                </motion.ul>
                <motion.ul
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="flex gap-12 w-[700px] bg-gray-800 text-white px-10 py-4 rounded-xl shadow-lg justify-between"
                >
                    <li className="cursor-pointer hover:text-blue-300 transition font-glitch">Galaxies</li>
                    <li className="cursor-pointer  hover:text-blue-300 transition font-glitch">PLANETS</li>
                    <li className="cursor-pointer  hover:text-blue-300 transition font-glitch">Stars</li>
                </motion.ul>

                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="absolute top-3 right-6 z-10"
                >
                    <h3 className="text-white font-glitch text-4xl cursor-pointer">Creator</h3>
                </motion.div>


            </nav>
            <div className="absolute top-[60%] left-10 transform -translate-y-1/2 z-10">
                <div className="text-white text-8xl font-glitch">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="p-3"
                    >
                        Enter
                    </motion.h1>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                        className="p-3"
                    >
                        The void
                    </motion.h1>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                        className="p-3"
                    >
                        of infinity
                    </motion.h1>
                </div>

            </div>
        </>
    );
}

export default Navbar;
