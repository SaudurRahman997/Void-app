// src/pages/Galaxies.jsx
import Background from "./background";
import { useRef } from "react";
import Acrossbackground from "./acrossbackground";
export default function Planets() {
    const mercuryTriggerRef = useRef(null);
    return (
        <>
            <Background trigger={mercuryTriggerRef} />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <section style={{ height: '100vh', padding: '2rem' }} ref={mercuryTriggerRef}>
                    <Acrossbackground />
                    <h1 style={{ color: 'white' }}>Welcome to the Solar System</h1>
                </section>

                {/* <section style={{ height: '100vh', padding: '2rem' }}>
                    <p style={{ color: 'white' }}>
                        Scroll down to learn about planets. You can add more content here.
                    </p>
                </section>

                <section style={{ height: '100vh', padding: '2rem' }}>
                    <h2 style={{ color: 'white' }}>Explore More</h2>
                </section> */}
            </div>
        </>
    );
}


