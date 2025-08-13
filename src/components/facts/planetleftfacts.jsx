import { useState, useEffect } from "react";
import CustomButton from "../accessories/articlebutton";

export default function LeftPlanetFacts({ galaxy }) {
    const [facts, setFacts] = useState([]);
    const [newFact, setNewFact] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const maxUserFacts = 5;

    // Fetch facts from backend
    useEffect(() => {
        if (!galaxy) return;
        fetch(`https://void-backend.vercel.app/api/planets/${galaxy}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched facts from backend:", data);
                const factsArray = Array.isArray(data) ? data : data.facts || [];
                setFacts(factsArray);
            })
            .catch(err => console.error("Error fetching facts:", err));
    }, [galaxy]);

    // Fetch NASA images
    useEffect(() => {
        if (!galaxy || galaxy.trim().length < 3) return;
        fetch(`https://images-api.nasa.gov/search?q=${galaxy}&media_type=image`)
            .then((res) => res.json())
            .then((data) => {
                const items = data.collection?.items?.slice(0, 10) || [];
                const imageUrls = items
                    .map((item) => item.links?.[0]?.href)
                    .filter(Boolean);
                setImages(imageUrls);
            })
            .catch((err) => console.error("NASA API error:", err));
    }, [galaxy]);

    // ✅ Updated handleAdd
    const handleAdd = async () => {
        if (newFact.trim() === "") return;

        const userAddedFacts = facts.length - 10; // beyond defaults
        if (userAddedFacts >= maxUserFacts) {
            setError(`You can only add up to ${maxUserFacts} facts.`);
            return;
        }

        try {
            const res = await fetch("https://void-backend.vercel.app/api/planets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ galaxy, text: newFact }) // stays in req.body
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

    // Add this function inside your component
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`https://void-backend.vercel.app/api/planets/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Failed to delete fact");
            }

            // Remove deleted fact from local state
            setFacts((prevFacts) => prevFacts.filter(fact => fact._id !== id));
            setError("");
        } catch (err) {
            console.error("Error deleting fact:", err);
            setError(err.message || "An error occurred while deleting the fact.");
        }
    };


    return (
        <div className="flex flex-col lg:flex-row w-full h-auto min-h-[600px] text-white p-4 lg:p-14 space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Facts Box */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <div className="w-full p-6 rounded-lg border-2 border-yellow-400 shadow-[0_0_20px_5px_rgba(255,255,0,0.6)]">
                    <h2 className="text-2xl font-orbitron mb-4 text-yellow-300">{galaxy} Facts</h2>
                    <ul className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto pr-2 font-futura text-5xl">
                        {facts.map((fact, idx) => (
                            <li
                                key={fact._id || idx}
                                className="text-sm break-words flex justify-between items-center"
                            >
                                <span>{idx + 1}. {fact.text || fact}</span>
                                {!fact.isDefault && (
                                    <button
                                        onClick={() => handleDelete(fact._id)}
                                        className="text-red-500 hover:text-red-700"
                                        aria-label="Delete fact"
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
                <div className="mt-6">
                    <CustomButton href="https://example.com">Article</CustomButton>
                </div>
            </div>

            {/* Gallery */}
            <div className="w-full lg:w-1/2 p-4 bg-white/10 backdrop-blur-md rounded-xl max-h-[470px] overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-gray-800">
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
