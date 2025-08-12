import { useState, useEffect } from "react";
import Background from "./background";
import PinContainer from "./pincomponent";
import procyonTexture from "/textures/procyon.jpeg";
import betelTexture from "/textures/betels.jpeg";
import ZetaTexture from "/textures/Zeta.jpg";
import arcTexture from "/textures/arcturus.jpg"
import sunTexture from "/textures/sun.jpeg";
import rigelTexture from "/textures/rigel.jpeg";
import siriusTexture from "/textures/sirius.jpg";
import LeftStarFacts from "./facts/starsleftfacts";
import RightStarFacts from "./facts/starsrightfacts";
import starFacts from "./facts/starsfacts";
import ScrollTextSection from "./accessories/explore";
import useBreakpoint from "./accessories/isMobile";
export default function Stars() {
    const breakpoint = useBreakpoint();

    const mobileAnimation = { x: 0, y: 40 };
    const tabletAnimation = [
        { x: -20, y: 20 },
        { x: 20, y: 20 },
        { x: -20, y: 20 },
        { x: 20, y: 20 },
        { x: -20, y: 20 },
        { x: 20, y: 20 },
    ];
    const desktopAnimation = [
        { x: -40, y: -40 },
        { x: 0, y: -40 },
        { x: 40, y: -40 },
        { x: -40, y: 40 },
        { x: 0, y: 40 },
        { x: 40, y: 40 },
    ];

    const stars = [
        { image: arcTexture, title: "Explore Arcturus", href: "https://en.wikipedia.org/wiki/Arcturus" },
        { image: betelTexture, title: "Explore Betelgeuse", href: "https://en.wikipedia.org/wiki/Betelgeuse" },
        { image: ZetaTexture, title: "Explore Zeta", href: "https://en.wikipedia.org/wiki/Zeta" },
        { image: sunTexture, title: "Explore Sun", href: "https://en.wikipedia.org/wiki/Sun" },
        { image: siriusTexture, title: "Explore Sirius", href: "https://en.wikipedia.org/wiki/Sirius" },
        { image: rigelTexture, title: "Explore Rigel", href: "https://en.wikipedia.org/wiki/Rigel" },
    ];

    return (
        <>
            <Background />
            <div className="overflow-y-scroll scrollbar-hide h-screen" >
                <div className="min-h-screen bg-black pt-32 px-16  ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
                        {stars.map((star, index) => {
                            let animation;
                            if (breakpoint === "mobile") animation = mobileAnimation;
                            else if (breakpoint === "tablet") animation = tabletAnimation[index];
                            else animation = desktopAnimation[index];

                            return (
                                <PinContainer
                                    key={star.title}
                                    imageUrl={star.image}
                                    title={star.title}
                                    href={star.href}
                                    entryAnimation={animation}
                                />
                            );
                        })}
                    </div>
                </div>




                <div style={{ position: 'relative', zIndex: 1 }}>

                    {/* <section style={{ height: '100vh' }}>



                    </section> */}

                    <section
                        id="O-section"
                        className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                    >
                        <LeftStarFacts fact={starFacts.O_type} galaxy="O Type" />
                    </section>



                    <section
                        id="A-section"
                        className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                    >

                        <LeftStarFacts fact={starFacts.A_type} galaxy="A Type" />

                    </section>

                    <section
                        id="B-section"
                        className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                    >

                        <LeftStarFacts fact={starFacts.B_type} galaxy="B Type" />

                    </section>

                    <section
                        id="G-section"
                        className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                    >

                        <LeftStarFacts fact={starFacts.G_type} galaxy="G Type" />

                    </section>

                    <section
                        id="M-section"
                        className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                    >

                        <LeftStarFacts fact={starFacts.M_type} galaxy="M Type" />

                    </section>

                    <section
                        id="K-section"
                        className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                    >

                        <LeftStarFacts fact={starFacts.K_type} galaxy="K Type" />

                    </section>




                </div>
            </div>





        </>
    );
}
