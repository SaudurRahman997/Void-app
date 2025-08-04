import { useState, useEffect } from "react";

export default function TypewriterText() {
    const fullText = "There  are  over  2  trillion  galaxies  in  the  observable  universe  each  filled  with  stars,  planets,  and  mysteries  yet  to  be  uncovered.";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);
    return (
        <h1 className="absolute top-[20%] left-10 right-10 transform -translate-y-1/2 z-9 text-white font-neuropol leading-loose text-2xl">
            {displayedText}

        </h1>
    );
}
