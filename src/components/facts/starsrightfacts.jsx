import { useState, useEffect } from "react";
//import { FaTrash } from "react-icons/fa";
import CustomButton from "../accessories/articlebutton";

export default function RightStarFacts({ galaxy }) {
    const [facts, setFacts] = useState([]);
    const [newFact, setNewFact] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [loadingFacts, setLoadingFacts] = useState(true);

    const maxUserFacts = 5;

    // Fetch facts from backend (default + user facts)
    useEffect(() => {
        if (!galaxy || galaxy.trim().length < 3) return;

        const fetchFacts = async () => {
            try {
                setLoadingFacts(true);
                const res = await fetch(`http://localhost:5000/api/facts/${galaxy}`);
                const data = await res.json();
                setFacts(data); // already merged default + user facts from backend
            } catch (err) {
                console.error("Error fetching facts:", err);
            } finally {
                setLoadingFacts(false);
            }
        };

        fetchFacts();
    }, [galaxy]);

    // Fetch images from NASA API
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

    // Add new fact to backend
    const handleAdd = async () => {
        if (newFact.trim() === "") return;

        const userFactsCount = facts.filter(f => !f.isDefault).length;
        if (userFactsCount >= maxUserFacts) {
            setError(`You can only add up to ${maxUserFacts} facts.`);
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/facts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ galaxy, text: newFact }),
            });

            if (!res.ok) throw new Error("Failed to add fact");

            const savedFact = await res.json();
            setFacts([...facts, { ...savedFact, isDefault: false }]);
            setNewFact("");
            setError("");
        } catch (err) {
            console.error(err);
            setError("Failed to add fact. Try again later.");
        }
    };

    // Delete user-added fact
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/facts/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete fact");

            setFacts(facts.filter((f) => f._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-auto min-h-[600px] text-white p-4 lg:p-14 space-y-6 lg:space-y-0 lg:space-x-6">

            {/* Facts Box */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <div className="w-full p-6 rounded-lg border-2 border-yellow-400 shadow-[0_0_20px_5px_rgba(255,255,0,0.6)] transition-shadow duration-300">
                    <h2 className="text-2xl font-orbitron mb-4 text-yellow-400">{galaxy} Facts</h2>
                    {loadingFacts ? (
                        <p>Loading facts...</p>
                    ) : (
                        <ul className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto pr-2 font-futura">
                            {facts.map((fact, idx) => (
                                <li key={fact._id || idx} className="flex items-center justify-between text-sm break-words">
                                    <span>{idx + 1}. {fact.text}</span>
                                    {!fact.isDefault && (
                                        <button onClick={() => handleDelete(fact._id)} className="text-red-400 hover:text-red-600">
                                            <FaTrash size={14} />
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Add your own fact..."
                            value={newFact}
                            onChange={(e) => setNewFact(e.target.value)}
                            className="flex-1 p-2 rounded bg-white/20 backdrop-blur-md placeholder-white text-white"
                            disabled={facts.filter(f => !f.isDefault).length >= maxUserFacts}
                        />
                        <button
                            onClick={handleAdd}
                            disabled={facts.filter(f => !f.isDefault).length >= maxUserFacts}
                            className={`px-4 py-2 rounded text-white ${facts.filter(f => !f.isDefault).length >= maxUserFacts
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
                    <CustomButton href="https://example.com">
                        Article
                    </CustomButton>
                </div>
            </div>

            {/* Gallery */}
            <div className="w-full lg:w-1/2 p-4 bg-white/10 backdrop-blur-md rounded-xl max-h-[470px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-800">
                <h2 className="text-xl font-semibold mb-4 font-orbitron text-yellow-400">{galaxy} Gallery</h2>
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
