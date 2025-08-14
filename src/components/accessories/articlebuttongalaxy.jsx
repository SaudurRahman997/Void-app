export default function CustomButtongalaxy({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-2 font-futura text-white rounded-md group transition-all duration-300 overflow-hidden border border-blue-100 hover:text-black"
        >
            <span className="absolute inset-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 ease-in-out">
                {children}
            </span>
        </a>
    );
}
