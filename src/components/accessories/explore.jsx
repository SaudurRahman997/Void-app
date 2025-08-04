import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollTextSection({ text }) {
    const textRef = useRef(null);

    useEffect(() => {
        const textEl = textRef.current;
        const duplicate = textEl.cloneNode(true); // create a second identical text
        textEl.parentElement.appendChild(duplicate);

        // Animate both text elements continuously to the left
        gsap.to([textEl, duplicate], {
            xPercent: -100,
            repeat: -1,
            ease: "linear",
            duration: 15,
        });
    }, []);

    return (
        <section className={`w-full overflow-hidden py-10`}>
            <div className="flex whitespace-nowrap text-[15vw] font-glitch uppercase text-white will-change-transform">
                <div ref={textRef} className="px-10">
                    {text}
                </div>
            </div>
        </section>
    );
}
