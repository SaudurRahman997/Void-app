import { useState, useEffect } from "react";
import CustomButtonplanet from "../accessories/articlebuttonplanet";
import Button from "../accessories/delete";


export default function LeftPlanetFacts({ galaxy }) {
    const [facts, setFacts] = useState([]);
    const [newFact, setNewFact] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const planetLinks = {
        mercury: "https://en.wikipedia.org/wiki/Mercury_(planet)",
        venus: "https://en.wikipedia.org/wiki/Venus",
        earth: "https://en.wikipedia.org/wiki/Earth",
        mars: "https://en.wikipedia.org/wiki/Mars",
        jupiter: "https://en.wikipedia.org/wiki/Jupiter",
        saturn: "https://en.wikipedia.org/wiki/Saturn",
        uranus: "https://en.wikipedia.org/wiki/Uranus",
        neptune: "https://en.wikipedia.org/wiki/Neptune"
    };


    const planetImages = {
        mercury: [
            "./textures/mercury1.jpeg",
            "./textures/mercury2.jpeg",
            "./textures/mercury3.jpeg",
            "./textures/mercury4.jpeg",
        ],
        venus: [
            "./textures/venus1.jpeg",
            "./textures/venus2.jpeg",
            "./textures/venus3.jpeg",
            "./textures/venus4.jpeg",
        ],
        earth: [
            "./textures/earth1.jpeg",
            "./textures/earth2.jpeg",
            "./textures/earth3.jpeg",
            "./textures/earth4.jpeg",
        ],
        mars: [
            "./textures/mars1.jpeg",
            "./textures/mars2.jpeg",
            "./textures/mars3.jpeg",
            "./textures/mars4.jpeg",
        ],
        jupiter: [
            "./textures/jupiter1.jpeg",
            "./textures/jupiter2.jpeg",
            "./textures/jupiter3.jpeg",
            "./textures/jupiter4.jpeg",
        ],
        saturn: [
            "./textures/saturn1.jpeg",
            "./textures/saturn2.jpeg",
            "./textures/saturn3.jpeg",
            "./textures/saturn4.jpeg",
        ],
        uranus: [
            "./textures/uranus1.jpeg",
            "./textures/uranus2.jpeg",
            "./textures/uranus3.jpeg",
            "./textures/uranus4.jpeg",
        ],
        neptune: [
            "./textures/neptune1.jpeg",
            "./textures/neptune2.jpeg",
            "./textures/neptune3.jpeg",
            "./textures/neptune4.jpeg",
        ],

    };


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
        if (!galaxy) return;
        const key = galaxy.toLowerCase(); // make sure keys match your object
        setImages(planetImages[key] || []);
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
                <div className="w-full p-6 rounded-lg border-2 border-purple-400 shadow-[0_0_20px_5px_rgba(255,255,0,0.6)]">
                    <h2 className="text-2xl font-orbitron mb-4 text-purple-300">{galaxy} Facts</h2>
                    <ul className="space-y-2 mb-6 max-h-[60vh] overflow-y-auto pr-2 font-futura text-5xl  scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
                        {facts.map((fact, idx) => (
                            <li
                                key={fact._id || idx}
                                className="text-base break-words flex justify-between items-center"
                            >
                                <span>{idx + 1}. {fact.text || fact}</span>
                                {!fact.isDefault && (
                                    <button
                                        onClick={() => handleDelete(fact._id)}
                                        className="text-red-500 hover:text-red-700"
                                        aria-label="Delete fact"
                                    >
                                        <Button />
                                    </button>
                                )}
                            </li>

                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <input
                            type="text"
                            placeholder="Add your own fact..."
                            value={newFact}
                            onChange={(e) => setNewFact(e.target.value)}
                            className="flex-1 w-full sm:flex-auto p-2 rounded bg-white/20 backdrop-blur-md placeholder-white text-white min-w-0"
                            disabled={facts.length >= 15}
                        />
                        <button
                            onClick={handleAdd}
                            disabled={facts.length >= 15}
                            className={`px-4 py-2 rounded text-white flex-shrink-0 ${facts.length >= 15
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-purple-500 hover:bg-purple-700"
                                }`}
                        >
                            +
                        </button>
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <div className="mt-6">
                    <CustomButtonplanet href={planetLinks[galaxy?.toLowerCase()] || "https://en.wikipedia.org/wiki/Planet"}>
                        Article
                    </CustomButtonplanet>
                </div>
            </div>

            {/* Gallery */}
            <div className="w-full lg:w-1/2 p-4 bg-white/10 backdrop-blur-md rounded-xl max-h-[470px] overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-800">
                <h2 className="text-xl font-semibold mb-4 font-orbitron text-purple-400">{galaxy} Gallery</h2>
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
