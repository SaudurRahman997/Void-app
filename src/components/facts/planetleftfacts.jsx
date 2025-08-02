import { useState, useEffect } from "react";
import CustomButton from "../accessories/articlebutton";
import Planet from "../accessories/oneplanet";

export default function LeftPlanetFacts({ fact, galaxy }) {
    const [facts, setFacts] = useState(fact);
    const [newFact, setNewFact] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const maxUserFacts = 5;
    const userAddedFacts = facts.length - fact.length;

    const handleAdd = () => {
        if (newFact.trim() === "") return;

        if (userAddedFacts >= maxUserFacts) {
            setError(`You can only add up to ${maxUserFacts} facts.`);
            return;
        }

        setFacts([...facts, newFact]);
        setNewFact("");
        setError("");
    };

    useEffect(() => {
        if (!galaxy || galaxy.trim().length < 3) return;

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
    }, [galaxy]);

    return (
        <div className="flex w-full h-[600px] text-white p-14">
            {/* Facts Box (Now on the Left) */}
            <div className="w-1/2 flex flex-col items-center">
                <div className="w-full p-6 rounded-lg border-2 border-yellow-400 shadow-[0_0_20px_5px_rgba(255,255,0,0.6)] transition-shadow duration-300">
                    <h2 className="text-2xl font-orbitron mb-4 text-yellow-300">{galaxy} Facts</h2>
                    <ul className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto pr-2 font-futura text-5xl">
                        {facts.map((fact, idx) => (
                            <li key={idx} className="text-sm break-words">
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
                            disabled={facts.length >= 15}
                        />
                        <button
                            onClick={handleAdd}
                            disabled={facts.length >= 15}
                            className={`px-4 py-2 rounded text-white ${facts.length >= 15
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Centered Button BELOW facts box */}
                <div className="mt-6">
                    <CustomButton href="https://example.com">
                        Article
                    </CustomButton>
                </div>
            </div>

            {/* Gallery (Now on the Right) */}
            <div className="w-1/2 p-4 m-4 bg-white/10 backdrop-blur-md rounded-xl overflow-y-auto max-h-[650px]">
                <h2 className="text-xl font-semibold mb-4 font-orbitron">{galaxy} Gallery</h2>
                <div className="grid grid-cols-2 gap-2 w-full">
                    {images.length > 0 ? (
                        images.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Galaxy ${index}`}
                                className="w-full h-[200px] object-cover rounded shadow"
                            />
                        ))
                    ) : (
                        <p className="text-sm">Loading images...</p>
                    )}
                </div>
            </div>
        </div>

    );
}
