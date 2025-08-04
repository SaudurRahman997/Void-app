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
export default function Stars() {


    return (
        <>
            <Background />
            <div className="overflow-y-scroll scrollbar-hide h-screen" >
                <div className="min-h-screen bg-black pt-32 px-16  ">
                    <div className="grid grid-cols-3 gap-x-16 gap-y-24 justify-items-center">
                        <PinContainer
                            imageUrl={arcTexture}
                            title="Explore Arcturus"
                            href="https://en.wikipedia.org/wiki/Arcturus"
                            entryAnimation={{ x: -40, y: -40 }}
                        />
                        <PinContainer
                            imageUrl={betelTexture}
                            title="Explore Betelgeuse"
                            href="https://en.wikipedia.org/wiki/Betelgeuse"
                            entryAnimation={{ x: 0, y: -40 }}
                        />
                        <PinContainer
                            imageUrl={ZetaTexture}
                            title="Explore Zeta"
                            href="https://en.wikipedia.org/wiki/Zeta"
                            entryAnimation={{ x: 40, y: -40 }}
                        />
                        <PinContainer
                            imageUrl={sunTexture}
                            title="Explore Sun"
                            href="https://en.wikipedia.org/wiki/Sun"
                            entryAnimation={{ x: -40, y: 40 }}
                        />
                        <PinContainer
                            imageUrl={siriusTexture}
                            title="Explore Sirius"
                            href="https://en.wikipedia.org/wiki/Sirius"
                            entryAnimation={{ x: 0, y: 40 }}
                        />
                        <PinContainer
                            imageUrl={rigelTexture}
                            title="Explore Rigel"
                            href="https://en.wikipedia.org/wiki/Rigel"
                            entryAnimation={{ x: 40, y: 40 }}
                        />

                    </div>
                </div>




                <div style={{ position: 'relative', zIndex: 1 }}>

                    <section style={{ height: '100vh' }}>



                    </section>

                    <section style={{ height: '100vh' }}>

                        <LeftStarFacts fact={starFacts.O_type} galaxy="O Type" />

                    </section>

                    <section style={{ height: '100vh' }}>

                        <RightStarFacts fact={starFacts.A_type} galaxy="A Type" />

                    </section>

                    <section style={{ height: '100vh' }}>

                        <LeftStarFacts fact={starFacts.B_type} galaxy="B Type" />

                    </section>

                    <section style={{ height: '100vh' }}>

                        <RightStarFacts fact={starFacts.G_type} galaxy="G Type" />

                    </section>

                    <section style={{ height: '100vh' }}>

                        <LeftStarFacts fact={starFacts.M_type} galaxy="M Type" />

                    </section>

                    <section style={{ height: '100vh' }}>

                        <RightStarFacts fact={starFacts.K_type} galaxy="K Type" />

                    </section>




                </div>
            </div>





        </>
    );
}
