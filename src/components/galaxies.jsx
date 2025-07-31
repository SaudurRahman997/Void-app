// src/pages/Galaxies.jsx
import Background from "./background";
import CardSlider from "./galaxyGallery";
import Typewriter from "./typewriter";
//import MilkywayFacts from "./facts/milkyway";
import galaxyFacts from "./facts/galaxyfacts";
import TopBanner from "./accessories/topbanner";
import LeftFacts from "./facts/leftfacts";
import RightFacts from "./facts/rightfacts";
export default function Galaxies() {

    return (
        <>
            <Background />
            <div className="flex justify-center items-center bg-black ">
                <Typewriter />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <section style={{ height: '100vh' }}>

                    <CardSlider />

                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Milky Way" />
                    <LeftFacts fact={galaxyFacts.milkyWay} galaxy="milkyway" />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Sombrero" />
                    <RightFacts fact={galaxyFacts.sombrero} galaxy="sombrero" />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="UGC 87" />
                    <LeftFacts fact={galaxyFacts.ugc} galaxy="UGC" />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Triangulum" />
                    <RightFacts fact={galaxyFacts.triangulum} galaxy="triangulum" />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Andromeda" />
                    <LeftFacts fact={galaxyFacts.andromeda} galaxy="andromeda" />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Centaurus A" />
                    <RightFacts fact={galaxyFacts.centaurus} galaxy="centaurus A" />
                </section>


                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Messier" />
                    <LeftFacts fact={galaxyFacts.messier} galaxy="messier" />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Pinwheel" />
                    <RightFacts fact={galaxyFacts.pinwheel} galaxy="pinwheel" />
                </section>

                <section style={{ height: '100vh', padding: '2rem' }} >
                    <TopBanner text="Whirlpool" />
                    <LeftFacts fact={galaxyFacts.whirlpool} galaxy="whirlpool" />
                </section>

            </div>

        </>
    );
}


