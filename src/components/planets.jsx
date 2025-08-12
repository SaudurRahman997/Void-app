// src/pages/Galaxies.jsx
import Background from "./background";
import { useRef } from "react";
import Planets9 from "./planets9";
import planetFacts from './facts/planetfacts';
import RightPlanetFacts from './facts/planetrightfacts';
import LeftPlanetFacts from './facts/planetleftfacts';
export default function Planets() {
    const mercuryTriggerRef = useRef(null);

    const sectionHeight = window.innerWidth < 1024 ? '350vh' : '100vh';

    return (
        <>
            <Background />

            <div className="overflow-y-scroll scrollbar-hide h-screen" style={{ position: 'relative', zIndex: 1 }}>

                <section style={{ height: sectionHeight }}>
                    <Planets9 />
                </section>
                <section
                    id="mercury-section"
                    className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                >
                    <LeftPlanetFacts galaxy="Mercury" />
                </section>

                <section
                    id="venus-section"
                    className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                >
                    <LeftPlanetFacts galaxy="Venus" />
                </section>
                <section id="earth-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <LeftPlanetFacts galaxy="Earth" />
                </section>

                <section id="mars-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <LeftPlanetFacts galaxy="Mars" />
                </section>

                <section id="jupiter-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <LeftPlanetFacts galaxy="Jupiter" />
                </section>

                <section id="saturn-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <LeftPlanetFacts galaxy="Saturn" />
                </section>

                <section id="uranus-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <LeftPlanetFacts galaxy="Uranus" />
                </section>

                <section id="neptune-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <LeftPlanetFacts galaxy="Neptune" />
                </section>





            </div>

        </>
    );
}


