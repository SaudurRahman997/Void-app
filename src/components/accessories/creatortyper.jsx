import { useState, useEffect } from "react";

export default function WhoCreated() {
    const fullText =
        "Who Created all this???";
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
        <h1 className="absolute top-[18%] lg:top-[18%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-9 text-white font-neuropol leading-relaxed text-lg lg:text-2xl px-4 text-center">
            {displayedText}
        </h1>

    );
}
