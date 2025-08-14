// src/pages/Galaxies.jsx
import Background from "./background";
import CardSlider from "./galaxyGallery";
import Typewriter from "./typewriter";
import galaxyFacts from "./facts/galaxyfacts";
import TopBanner from "./accessories/topbanner";
import LeftFacts from "./facts/leftfacts";
import RightFacts from "./facts/rightfacts";
import ScrollTextSection from "./accessories/explore";

export default function Galaxies() {
    return (
        <div className="overflow-x-hidden bg-black">
            <Background />



            <div className="overflow-y-scroll scrollbar-hide h-screen" style={{ position: "relative", zIndex: 1 }}>
                <div className="flex justify-center items-center">
                    <Typewriter />
                </div>
                <section style={{ height: "100vh" }}>
                    <CardSlider />
                </section>

                <ScrollTextSection text="Galaxies" />

                <section id="a-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Milky Way" />
                    <LeftFacts fact={galaxyFacts.milkyWay} galaxy="milkyway" />
                </section>

                <section id="b-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Sombrero" />
                    <LeftFacts fact={galaxyFacts.sombrero} galaxy="sombrero" />
                </section>

                <section id="c-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="UGC 87" />
                    <LeftFacts fact={galaxyFacts.ugc} galaxy="ugc" />
                </section>

                <section id="d-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Triangulum" />
                    <LeftFacts fact={galaxyFacts.triangulum} galaxy="triangulum" />
                </section>

                <section id="e-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Andromeda" />
                    <LeftFacts fact={galaxyFacts.andromeda} galaxy="andromeda" />
                </section>

                <section id="f-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Centaurus A" />
                    <LeftFacts fact={galaxyFacts.centaurus} galaxy="centaurus" />
                </section>

                <section id="g-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Messier" />
                    <LeftFacts fact={galaxyFacts.messier} galaxy="messier" />
                </section>

                <section id="h-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Pinwheel" />
                    <LeftFacts fact={galaxyFacts.pinwheel} galaxy="pinwheel" />
                </section>

                <section id="i-section" className="min-h-screen px-8 pt-24">
                    <TopBanner text="Whirlpool" />
                    <LeftFacts fact={galaxyFacts.whirlpool} galaxy="whirlpool" />
                </section>
            </div>
        </div>
    );
}
