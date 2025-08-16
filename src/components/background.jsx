import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebGLErrorMessage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
            ⚠️ Performance Warning
        </h1>
        <p className="max-w-lg text-gray-300">
            Your device’s graphics processor is having trouble running this 3D scene.
            <br /><br />
            For the best experience, please try opening this on a laptop or desktop with a stronger GPU.
        </p>
        <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition"
        >
            Try Reloading
        </button>
    </div>
);

const Background = ({ trigger }) => {
    const containerRef = useRef(null);
    const rendererRef = useRef();
    const [webGLError, setWebGLError] = useState(false);

    useEffect(() => {
        try {
            const container = containerRef.current;
            if (!container) return;

            // Test WebGL support early
            const testCanvas = document.createElement("canvas");
            const testGL = testCanvas.getContext("webgl");
            if (!testGL) throw new Error("WebGL not supported");

            let width = window.innerWidth;
            let height = window.innerHeight;

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);

            // 🌌 Star Field
            const starGeometry = new THREE.BufferGeometry();
            const starCount = 10000;
            const starPositions = new Float32Array(starCount * 3);

            function randomSpherePoint(radiusMin = 100, radiusMax = 300) {
                const u = Math.random();
                const v = Math.random();
                const theta = 2 * Math.PI * u;
                const phi = Math.acos(2 * v - 1);
                const r = radiusMin + Math.random() * (radiusMax - radiusMin);
                return {
                    x: r * Math.sin(phi) * Math.cos(theta),
                    y: r * Math.sin(phi) * Math.sin(theta),
                    z: r * Math.cos(phi)
                };
            }

            for (let i = 0; i < starCount; i++) {
                const index = i * 3;
                const { x, y, z } = randomSpherePoint(100, 300);
                starPositions[index] = x;
                starPositions[index + 1] = y;
                starPositions[index + 2] = z;
            }

            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
            const starMaterial = new THREE.PointsMaterial({
                size: 0.5,               // bigger than 0.5
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.5,            // semi-transparent to give "soft blur"
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                color: 0xffffff
            });

            const stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

            // ☀️ Lights
            scene.add(new THREE.DirectionalLight(0xfff5c0, 2).position.set(10, 10, 5));
            scene.add(new THREE.AmbientLight(0xffffff, 0.1));

            // 📷 Camera
            const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
            camera.position.set(0, 0, 15);
            scene.add(camera);

            // 🖥 Renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            // 🎮 Controls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.enableZoom = false;
            controls.enablePan = false;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5;

            const handleResize = () => {
                width = window.innerWidth;
                height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            };
            window.addEventListener('resize', handleResize);

            const animate = () => {
                controls.update();
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();

            return () => {
                window.removeEventListener("resize", handleResize);
                controls.dispose();
                if (rendererRef.current) {
                    rendererRef.current.dispose();
                    if (rendererRef.current.domElement && container.contains(rendererRef.current.domElement)) {
                        container.removeChild(rendererRef.current.domElement);
                    }
                }
            };
        } catch (err) {
            console.error("WebGL Error:", err);
            setWebGLError(true);
        }
    }, []);

    if (webGLError) {
        return <WebGLErrorMessage />;
    }

    return (
        <div
            ref={containerRef}
            style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'fixed', zIndex: 0 }}
        />
    );
};

export default Background;
