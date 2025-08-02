// src/pages/Galaxies.jsx
import Background from "./background";
import { useRef } from "react";
import Planets9 from "./planets9";
import planetFacts from './facts/planetfacts';
import RightPlanetFacts from './facts/planetrightfacts';
import LeftPlanetFacts from './facts/planetleftfacts';
export default function Planets() {
    const mercuryTriggerRef = useRef(null);
    return (
        <>
            <Background />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <section style={{ height: '100vh' }} >


                    <Planets9 />
                </section>

                <section id="mercury-section" style={{ height: '100vh', padding: '2rem' }} >
                    <LeftPlanetFacts fact={planetFacts.Mercury} galaxy="Mercury" />
                </section>

                <section id="venus-section" style={{ height: '100vh', padding: '2rem' }} >
                    <RightPlanetFacts fact={planetFacts.Venus} galaxy="Venus" />
                </section>

                <section id="earth-section" style={{ height: '100vh', padding: '2rem' }} >
                    <LeftPlanetFacts fact={planetFacts.Earth} galaxy="Earth" />
                </section>

                <section id="mars-section" style={{ height: '100vh', padding: '2rem' }} >
                    <RightPlanetFacts fact={planetFacts.Mars} galaxy="Mars" />
                </section>

                <section id="jupiter-section" style={{ height: '100vh', padding: '2rem' }} >
                    <LeftPlanetFacts fact={planetFacts.Jupiter} galaxy="Jupiter" />
                </section>

                <section id="saturn-section" style={{ height: '100vh', padding: '2rem' }} >
                    <RightPlanetFacts fact={planetFacts.Saturn} galaxy="Saturn" />
                </section>

                <section id="uranus-section" style={{ height: '100vh', padding: '2rem' }} >
                    <LeftPlanetFacts fact={planetFacts.Uranus} galaxy="Uranus" />
                </section>

                <section id="neptune-section" style={{ height: '100vh', padding: '2rem' }} >
                    <RightPlanetFacts fact={planetFacts.Neptune} galaxy="Neptune" />
                </section>







            </div>

        </>
    );
}


