// src/pages/Galaxies.jsx
import Background from "./background";
import { useRef } from "react";
import Planets9 from "./planets9";

export default function Planets() {
    const mercuryTriggerRef = useRef(null);
    return (
        <>
            <Background />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <section style={{ height: '100vh' }} ref={mercuryTriggerRef}>


                    <Planets9 trigger={mercuryTriggerRef} />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >

                </section>

                <section style={{ height: '100vh', padding: '2rem' }}>

                </section>
            </div>

        </>
    );
}


