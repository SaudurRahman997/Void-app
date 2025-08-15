import React from "react";

export default function WebGLErrorMessage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center">
            <h1 className="text-2xl font-bold text-red-500 mb-4">
                ⚠️ Performance Warning
            </h1>
            <p className="max-w-lg text-gray-300">
                It looks like your device is having trouble rendering the 3D scene due to
                high GPU usage.
                <br /><br />
                For the best experience, please try viewing this on a laptop or desktop
                with a stronger graphics processor.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition"
            >
                Try Reloading
            </button>
        </div>
    );
}
