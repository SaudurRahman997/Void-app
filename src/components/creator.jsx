import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "./background";
import TypewriterText from "./typewriter";
import FiveTextBoxes from "./textcreator";

export default function Creator() {
    return (
        <>
            <Background />
            <FiveTextBoxes />

        </>
    );
}
