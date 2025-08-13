import { useState, useEffect } from "react";
import CustomButton from "../accessories/articlebutton";

export default function LeftStarFacts({ fact, galaxy }) {
    const [facts, setFacts] = useState(fact);
    const [newFact, setNewFact] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const maxUserFacts = 5;
    const userAddedFacts = facts.length - fact.length;

    const handleAdd = async () => {
        if (newFact.trim() === "") return;

        if (userAddedFacts >= maxUserFacts) {
            setError(`You can only add up to ${maxUserFacts} facts.`);
            return;
        }

        try {
            const res = await fetch("https://void-backend.vercel.app/api/facts/stars", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ galaxy, text: newFact }),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Failed to add fact");
            }

            const data = await res.json();
            setFacts([...facts, { _id: data._id, text: data.text, isDefault: false }]);

            setNewFact("");
            setError("");
        } catch (err) {
            console.error("Error adding fact:", err);
            setError(err.message || "An error occurred while adding the fact.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`https://void-backend.vercel.app/api/facts/stars/${id}`, { method: "DELETE" });
            setFacts(facts.filter(f => f._id !== id)); // remove locally
        } catch (err) {
            console.error("Error deleting fact:", err);
        }
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

    useEffect(() => {
        if (!galaxy || galaxy.trim().length < 3) return;

        fetch(`https://void-backend.vercel.app/api/facts/${galaxy}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setFacts(data);
                } else {
                    console.error("Unexpected response:", data);
                }
            })
            .catch(err => {
                console.error("Error fetching facts:", err);
                setError("Failed to load facts from server.");
            });
    }, [galaxy]);

    return (
        <div className="flex flex-col lg:flex-row w-full min-h-[600px] text-white p-4 sm:p-10 lg:p-14 gap-8">

            {/* Facts Section (top on mobile, left on desktop) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center h-full">
                <div className="w-full p-6 rounded-lg border-2 border-yellow-400 shadow-[0_0_20px_5px_rgba(255,255,0,0.6)] transition-shadow duration-300">
                    <h2 className="text-2xl font-orbitron mb-4 text-yellow-400">{galaxy} Facts</h2>
                    <ul className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto pr-2 font-futura text-5xl">
                        {facts.map((fact, idx) => (
                            <li key={fact._id || idx} className="text-sm break-words flex items-center justify-between">
                                <span>{idx + 1}. {fact.text}</span>
                                {!fact.isDefault && (
                                    <button
                                        onClick={() => handleDelete(fact._id)}
                                        className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                        🗑
                                    </button>
                                )}
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
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                {/* Article Button */}
                <div className="mt-6">
                    <CustomButton href="https://example.com">Article</CustomButton>
                </div>
            </div>

            {/* Gallery Section (bottom on mobile, right on desktop) */}
            <div className="w-full lg:w-1/2 max-h-[470px]  p-4 bg-white/10 backdrop-blur-md rounded-xl overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-800">
                <h2 className="text-xl font-semibold mb-4 font-orbitron text-yellow-400">{galaxy} Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
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
