import { Bluetooth } from "lucide-react";
import React, { useRef } from "react";

export default function FiveTextBoxes() {
    const boxRefs = useRef([]);

    const handleInput = (index) => {
        console.log(boxRefs.current[index].innerHTML); // HTML content
    };

    const commonStyle = {
        minHeight: "150px",
        border: "2px solid white",
        outline: "none",
        borderRadius: "12px",
        backgroundColor: "rgba(0,0,0,0.3)", // semi-transparent background so text pops
        color: "white",
        boxShadow: "0 0 8px white",
        fontSize: "16px",
        padding: "10px 30px",
    };

    return (
        <div
            style={{
                position: "absolute", // overlays the Three.js canvas
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // shifts it perfectly center
                zIndex: 9,
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                padding: "50px",
                maxWidth: "800px",
                width: "100%",
                alignItems: "center", // center horizontally
            }}
        >
            <div
                ref={(el) => (boxRefs.current[0] = el)}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={() => handleInput(0)}
                style={commonStyle}
            >
                Group: Mainstream science & cosmology <br />

                Core Idea: The universe began about 13.8 billion years ago from an extremely hot, dense singularity (a point of infinite density).<br />

                What Happened:<br />

                Inflation phase: The singularity expanded incredibly rapidly in less than a second.<br />

                Cooling: As it expanded, temperatures dropped, allowing matter to form.<br />

                Structure formation: Hydrogen and helium gases formed stars, galaxies, and planets over billions of years.<br />

                Evidence:<br />

                Cosmic Microwave Background Radiation — faint “afterglow” left over from the early universe.<br />

                Redshift of galaxies — galaxies are moving away from us, meaning space itself is expanding.<br />
            </div>

            <h2 style={{ color: "white" }}>Some heading or image here</h2>

            <div
                ref={(el) => (boxRefs.current[1] = el)}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={() => handleInput(1)}
                style={commonStyle}
            >
                Group: Alternative scientific theory (popular in the 1940s–1960s)<br />

                Core Idea: The universe has no beginning and no end — it is eternal and unchanging on a large scale.<br />

                How it works:<br />

                As the universe expands, new matter is continuously created so that the density remains constant.<br />

                This avoids the need for a singular “creation moment.”<br />

                Why it lost favor: Observations of the cosmic microwave background strongly support a hot, dense origin, contradicting steady state predictions.<br />
            </div>

            <div
                ref={(el) => (boxRefs.current[2] = el)}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={() => handleInput(2)}
                style={commonStyle}
            >
                Group: Modern cosmology & theoretical physics<br />

                Core Idea: The Big Bang wasn’t the absolute beginning — instead, inflation is eternal, constantly creating “bubble universes” within a larger multiverse.<br />

                How it works:<br />

                Different regions of space stop inflating at different times, creating independent universes with possibly different physics.<br />

                Our universe is just one “bubble” among countless others.<br />

                Why it’s intriguing: It could explain why the laws of physics are so “fine-tuned” — we live in a universe where the conditions happen to allow life.<br />
            </div>

            <div
                ref={(el) => (boxRefs.current[3] = el)}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={() => handleInput(3)}
                style={commonStyle}
            >
                Group: Ancient Indian cosmology, modern theoretical physics variants <br />

                <span style={{ color: "blue" }}>Core Idea</span>: The universe goes through endless cycles of birth, expansion, collapse, and rebirth.<br />

                Ancient version: Hindu cosmology describes creation and destruction cycles (Kalpas) overseen by cosmic deities.<br />

                Modern version: Physics-based models like Ekpyrotic Universe propose that brane collisions (in string theory) could trigger repeated Big Bang–like events.<br />
                Why it appeals: It avoids an absolute “first moment” by making time infinite in both directions.<br />
            </div>

            <div
                ref={(el) => (boxRefs.current[4] = el)}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={() => handleInput(4)}
                style={commonStyle}
            >
                Group: Multiverse theory<br />
                Core Idea: Our universe is one of many parallel universes.<br />
                Evidence: Mathematical cosmology, string theory possibilities.
            </div>
        </div>
    );
}
