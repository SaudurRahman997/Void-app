import React, { useRef, useState, useEffect } from "react";
import TopBanner from "./accessories/topbanner";

export default function FiveTextBoxes() {
    const boxRefs = useRef([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    let boxWidth;
    //const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 1024;

    const commonStyle = {
        minHeight: "150px",
        width: window.innerWidth > 1024 ? "800px" : "400px", // responsive width
        border: "2px solid white",
        outline: "none",
        borderRadius: "12px",
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "white",
        boxShadow: "0 0 40px white",
        fontSize: "16px",
        padding: "10px 30px",
        fontFamily: "'Futura Rener', sans-serif",
        textAlign: "left",

    };

    const buttonStyle = {
        marginTop: "20px",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "2px solid white",
        backgroundColor: "transparent",
        color: "white",
        fontSize: "16px",
        font: "futura",
        cursor: "pointer",
        boxShadow: "0 0 6px white",
    };

    const BoxWithButton = ({ children, index }) => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "left",
                margin: "0 auto",
            }}
        >
            <div
                ref={(el) => (boxRefs.current[index] = el)}
                style={commonStyle}
            >
                {children}
            </div>
            <button
                style={buttonStyle}
                onClick={() => alert(`Button ${index + 1} clicked!`)}
            >
                Read More
            </button>
        </div>
    );

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9,
                display: "flex",
                flexDirection: "column", // keeps vertical on all sizes
                gap: "40px",
                padding: "50px",
                alignItems: "center",
                marginTop: "1000px",
            }}
        >
            <TopBanner text="cosmology" />
            <BoxWithButton index={0} >
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Group:</span> Mainstream science & cosmology <br />
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Core Idea:</span> The universe began about 13.8 billion years ago from an extremely hot, dense singularity (a point of infinite density).<br />

                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    What Happened:</span><br />

                <span style={{
                    //color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */

                }}>
                    Inflation phase:</span> The singularity expanded incredibly rapidly in less than a second.<br />

                <span style={{
                    //color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */

                }}>
                    Cooling:</span> As it expanded, temperatures dropped, allowing matter to form.<br />
                <span style={{
                    //color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */

                }}>
                    Structure formation:</span> Hydrogen and helium gases formed stars, galaxies, and planets over billions of years.<br />

                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Evidence:</span><br />
                Cosmic Microwave Background Radiation — faint “afterglow” left over from the early universe.<br />
                Redshift of galaxies — galaxies are moving away from us, meaning space itself is expanding.<br />
            </BoxWithButton>
            <TopBanner text="Science" />
            <BoxWithButton index={1}>
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Group: </span> Alternative scientific theory (popular in the 1940s–1960s)<br />
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Core Idea:</span> The universe has no beginning and no end — it is eternal and unchanging on a large scale.<br />
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    How it works: </span><br />
                As the universe expands, new matter is continuously created so that the density remains constant.<br />
                This avoids the need for a singular “creation moment.”<br />
                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    Why it lost favor:</span> Observations of the cosmic microwave background strongly support a hot, dense origin, contradicting steady state predictions.<br />
            </BoxWithButton>

            <TopBanner text="Physics" />
            <BoxWithButton index={2}>
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Group:</span> Modern cosmology & theoretical physics<br />
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Core Idea:</span> The Big Bang wasn’t the absolute beginning — instead, inflation is eternal, constantly creating “bubble universes” within a larger multiverse.<br />
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    How it works: </span><br />
                Different regions of space stop inflating at different times, creating independent universes with possibly different physics.<br />

                Our universe is just one “bubble” among countless others.<br />
                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */

                }}>
                    Why it’s intriguing:</span> It could explain why the laws of physics are so “fine-tuned” — we live in a universe where the conditions happen to allow life.<br />
            </BoxWithButton>

            <TopBanner text="Ancient Indian" />
            <BoxWithButton index={3}>
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Group:</span> Ancient Indian cosmology, modern theoretical physics variants <br />
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>Core Idea:</span> The universe goes through endless cycles of birth, expansion, collapse, and rebirth.<br />

                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    Ancient version:</span> Hindu cosmology describes creation and destruction cycles (Kalpas) overseen by cosmic deities.<br />
                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    Modern version:</span> Physics-based models like Ekpyrotic Universe propose that brane collisions (in string theory) could trigger repeated Big Bang–like events.<br />
                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    Why it appeals:</span> It avoids an absolute “first moment” by making time infinite in both directions.<br />
            </BoxWithButton>

            <TopBanner text="Religion" />
            <BoxWithButton index={4}>
                <span style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    textDecoration: "underline", /* Underline text */
                    backgroundColor: "white"  // camelCase, no semicolon
                }}>
                    Group:</span> Muslims<br />
                The theories above reflect various human perspectives on how the universe began, yet none offer conclusive proof.<br />
                The Qur’an, revealed centuries ago, presents the most compelling account, with the following verses describing the universe’s creation.<br />

                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    Surah Al-A'raf, verse 54:</span><br />
                "Indeed, your Lord is Allah, who created the heavens and the earth in six Days, then established Himself on the Throne.<br /> He covers the night with the day, which is in hot pursuit,
                and (created) the sun, the moon, and the stars, all subjected to His command.<br /> Surely, His is the creation and the command. Blessed is Allah, the Lord of the worlds,"<br />

                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    (Al Quran 2:117)</span><br />
                "He is the Originator of the heavens and the earth, and when He decrees something, He says only, ‘Be,’ and it is."<br />

                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    (Al Quran 29:20)</span><br />
                "Travel in the earth and see how He makes the first creation, then Allah creates the latter creation; <br />surely Allah has power over all things"<br />

                <span style={{

                    fontWeight: "bold",
                    fontStyle: "italic",       /* Make text italic */
                    fontSize: "20px",          /* Change text size */
                    // camelCase, no semicolon
                }}>
                    The Creator:</span><br />

                Many believe that this vast universe was brought into existence by One — whether through science, a miracle, or both.<br />
                With our human minds, we understand that nothing comes from nothing; by definition, nothing does not exist. It follows, then, that there must be a Creator<br />
                One who fashioned everything, from the tiniest atom to galaxies that stretch across millions of light years.<br />
            </BoxWithButton>
        </div >
    );
}
