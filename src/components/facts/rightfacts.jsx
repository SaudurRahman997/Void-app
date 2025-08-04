import { useState, useEffect } from "react";
//import galaxyFacts from "./galaxyfacts";

export default function RightFacts({ fact, galaxy }) {

    const [facts, setFacts] = useState(fact);
    const [newFact, setNewFact] = useState("");
    const [images, setImages] = useState([]);

    const handleAdd = () => {
        if (newFact.trim() === "") return;
        setFacts([...facts, newFact]);
        setNewFact("");
    };


    useEffect(() => {
        if (!galaxy || galaxy.trim().length < 3) return;

        console.log("Fetching images for:", galaxy);

        fetch(`https://images-api.nasa.gov/search?q=${galaxy}&media_type=image`)
            .then((res) => res.json())
            .then((data) => {
                const items = data.collection.items.slice(0, 10);
                const imageUrls = items
                    .map((item) => item.links?.[0]?.href)
                    .filter((url) => url);
                setImages(imageUrls);
            })
            .catch((err) => console.error("NASA API error:", err));
    }, [galaxy]); // <-- DEPENDENCY FIX
    return (
        <div className="flex w-full h-[600px] text-white p-14">
            {/* 🖼️ Images First - now on the LEFT */}
            <div className="w-1/2 p-4 m-4 bg-white/10 backdrop-blur-md rounded-xl max-h-[650px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-800">
                <h2 className="text-xl font-semibold mb-4 font-orbitron text-blue-400">{galaxy} Gallery</h2>
                <div className="grid grid-cols-2 gap-0 w-full h-[400px] ">
                    {images.length > 0 ? (
                        images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Galaxy ${index}`}
                                className="w-full h-[400px] object-cover rounded shadow"
                            />
                        ))
                    ) : (
                        <p className="text-sm">Loading images...</p>
                    )}
                </div>
            </div>

            {/* 📘 Facts - now on the RIGHT */}
            <div className="w-1/2 p-6 border-3 border-white animate-glow">
                <h2 className="text-2xl font-orbitron mb-4 text-blue-400">Galaxy Facts</h2>
                <ul className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto pr-2 font-futura">
                    {facts.map((fact, idx) => (
                        <li key={idx} className="text-sm">
                            {idx + 1}. {fact}
                        </li>
                    ))}
                </ul>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Add your own fact..."
                        value={newFact}
                        onChange={(e) => setNewFact(e.target.value)}
                        className="flex-1 p-2 rounded bg-white/20 backdrop-blur-md placeholder-white text-white"
                    />
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>

    );
}

