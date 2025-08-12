import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-10 px-4 py-2">
            {/* 🖥️ Desktop Navbar */}
            <div className="hidden lg:flex fixed top-0 left-0 w-full z-10 justify-center mt-3">
                {/* Void Link */}
                <motion.ul
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <NavLink
                        to="/void"
                        className="text-white font-glitch text-4xl absolute left-4 mt-3 hover:text-gray-300 transition"
                    >
                        Void
                    </NavLink>
                </motion.ul>

                {/* Main Nav */}
                <motion.ul
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="flex gap-12 w-[700px] bg-gray-800 text-white px-10 py-4 rounded-xl shadow-lg justify-between"
                >
                    <NavLink
                        to="/galaxies"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-300 transition font-glitch ${isActive ? "text-blue-300" : ""}`
                        }
                    >
                        Galaxies
                    </NavLink>

                    <NavLink
                        to="/stars"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-300 transition font-glitch ${isActive ? "text-blue-300" : ""}`
                        }
                    >
                        Stars
                    </NavLink>

                    <NavLink
                        to="/planets"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-300 transition font-glitch ${isActive ? "text-blue-300" : ""}`
                        }
                    >
                        Planets
                    </NavLink>
                </motion.ul>

                {/* Creator Link */}
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="absolute top-3 right-6 z-10"
                >
                    <NavLink
                        to="/creator"
                        className="text-white font-glitch text-4xl hover:text-gray-300 transition"
                    >
                        Creator
                    </NavLink>
                </motion.div>
            </div>

            {/* 📱 Mobile Navbar */}
            <div className="flex lg:hidden w-full flex-col items-center gap-2 mt-3">
                {/* Main Nav */}
                <motion.ul
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between w-full bg-gray-800 text-white px-6 py-2 rounded-xl text-sm shadow-md"
                >
                    <NavLink
                        to="/galaxies"
                        className={({ isActive }) =>
                            `font-glitch transition hover:text-blue-300 ${isActive ? "text-blue-300" : ""}`
                        }
                    >
                        Galaxies
                    </NavLink>
                    <NavLink
                        to="/stars"
                        className={({ isActive }) =>
                            `font-glitch transition hover:text-blue-300 ${isActive ? "text-blue-300" : ""}`
                        }
                    >
                        Stars
                    </NavLink>
                    <NavLink
                        to="/planets"
                        className={({ isActive }) =>
                            `font-glitch transition hover:text-blue-300 ${isActive ? "text-blue-300" : ""}`
                        }
                    >
                        Planets
                    </NavLink>
                </motion.ul>

                {/* Void & Creator */}
                <div className="flex justify-between w-full px-2 mt-1">
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <NavLink
                            to="/void"
                            className={({ isActive }) =>
                                `text-white font-glitch text-xl transition  hover:text-blue-300 ${isActive ? "text-blue-300" : ""}`
                            }
                        >
                            Void
                        </NavLink>
                    </motion.div>

                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <NavLink
                            to="/creator"
                            className={({ isActive }) =>
                                `text-white font-glitch text-xl transition  hover:text-blue-300 ${isActive ? "text-blue-300" : ""}`
                            }
                        >
                            Creator
                        </NavLink>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
