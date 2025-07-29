// Navbar.jsx
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

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
                    <NavLink
                        to="/galaxies"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-300 transition font-glitch ${isActive ? "text-blue-300" : "bg-gray-800"
                            }`
                        }
                    >
                        Galaxies
                    </NavLink>

                    <NavLink
                        to="/stars"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-300 transition font-glitch ${isActive ? "text-blue-300" : "bg-gray-800"
                            }`
                        }
                    >
                        Stars
                    </NavLink>

                    <NavLink
                        to="/planets"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-300 transition font-glitch ${isActive ? "text-blue-300" : "bg-gray-800"
                            }`
                        }
                    >
                        Planets
                    </NavLink>

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

        </>
    );
}

export default Navbar;
