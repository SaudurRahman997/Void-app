// src/pages/Galaxies.jsx
import Background from "./background";
import { useRef } from "react";
import Planets9 from "./planets9";
import planetFacts from './facts/planetfacts';
import RightPlanetFacts from './facts/planetrightfacts';
import LeftPlanetFacts from './facts/planetleftfacts';
import ScrollTextSection from "./accessories/explore";
import TopBannerplanet from "./accessories/topbannerplanets";
export default function Planets() {
    const mercuryTriggerRef = useRef(null);

    //const sectionHeight = window.innerWidth < 1024 ? '100vh' : '100vh';

    return (
        <>
            <Background />

            <div className="overflow-y-scroll scrollbar-hide h-screen" style={{ position: 'relative', zIndex: 1 }}>

                <section style={{ height: '100vh' }}>
                    <Planets9 />
                </section>

                <ScrollTextSection text="Planets" />
                <section
                    id="mercury-section"
                    className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                >
                    <TopBannerplanet text="Mercury" />
                    <LeftPlanetFacts galaxy="Mercury" />
                </section>

                <section
                    id="venus-section"
                    className="min-h-screen px-4 py-8 sm:py-12 lg:py-16"
                >
                    <TopBannerplanet text="Venus" />
                    <LeftPlanetFacts galaxy="Venus" />
                </section>
                <section id="earth-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <TopBannerplanet text="Earth" />
                    <LeftPlanetFacts galaxy="Earth" />
                </section>

                <section id="mars-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <TopBannerplanet text="Mars" />
                    <LeftPlanetFacts galaxy="Mars" />
                </section>

                <section id="jupiter-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <TopBannerplanet text="Jupiter" />
                    <LeftPlanetFacts galaxy="Jupiter" />
                </section>

                <section id="saturn-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <TopBannerplanet text="Saturn" />
                    <LeftPlanetFacts galaxy="Saturn" />
                </section>

                <section id="uranus-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <TopBannerplanet text="Uranus" />
                    <LeftPlanetFacts galaxy="Uranus" />
                </section>

                <section id="neptune-section" className="min-h-screen px-4 py-8 sm:py-12 lg:py-16">
                    <TopBannerplanet text="Neptune" />
                    <LeftPlanetFacts galaxy="Neptune" />
                </section>





            </div>

        </>
    );
}


