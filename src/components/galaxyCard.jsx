export default function GalaxyCard({ image, title }) {
    return (
        <div className="relative w-64 rounded-2xl overflow-hidden shadow-lg">
            {/* Blurry Glass Background */}
            <div className="absolute bottom-0 w-full h-24 bg-white/10 backdrop-blur-md z-0" />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                    <h2 className="text-white font-glitch text-xl">{title}</h2>
                </div>
            </div>
        </div>
    );
}
