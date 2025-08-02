// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const Planet = ({ textureUrl, position }) => {
//     const containerRef = useRef(null);
//     const rendererRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;

//         // Set up scene, camera, and renderer
//         const width = window.innerWidth;
//         const height = window.innerHeight;
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
//         camera.position.set(0, 0, 15);

//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setPixelRatio(window.devicePixelRatio);
//         renderer.setSize(width, height);
//         container.appendChild(renderer.domElement);
//         rendererRef.current = renderer;

//         // Create planet
//         const loader = new THREE.TextureLoader();
//         const texture = loader.load(textureUrl);
//         const geometry = new THREE.SphereGeometry(3, 64, 64);
//         const material = new THREE.MeshStandardMaterial({ map: texture });
//         const planet = new THREE.Mesh(geometry, material);

//         // Set initial rotation, position, and scale
//         planet.rotation.y = Math.PI * 2 / 3; // Initial 90-degree rotation
//         planet.position.set(position[0], position[1], position[2]);
//         planet.scale.set(0.4, 0.4, 0.4); // Hardcoded scale from original code
//         scene.add(planet);

//         // Add lighting
//         const sunlight = new THREE.DirectionalLight(0xfff5c0, 2);
//         sunlight.position.set(10, 10, 5);
//         scene.add(sunlight);
//         const ambient = new THREE.AmbientLight(0xffffff, 0.1);
//         scene.add(ambient);

//         // Handle window resize
//         const handleResize = () => {
//             const newWidth = window.innerWidth;
//             const newHeight = window.innerHeight;
//             camera.aspect = newWidth / newHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(newWidth, newHeight);
//         };
//         window.addEventListener('resize', handleResize);

//         // Animation loop with rotation
//         const animate = () => {
//             planet.rotation.y += 0.005; // Hardcoded rotation speed from original code
//             renderer.render(scene, camera);
//             requestAnimationFrame(animate);
//         };
//         animate();

//         // Cleanup
//         return () => {
//             window.removeEventListener('resize', handleResize);
//             if (rendererRef.current) {
//                 rendererRef.current.dispose();
//                 if (container.contains(rendererRef.current.domElement)) {
//                     container.removeChild(rendererRef.current.domElement);
//                 }
//             }
//         };
//     }, [textureUrl, position]);

//     return (
//         <div
//             ref={containerRef}
//             style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', zIndex: 0 }}
//         />
//     );
// };

// export default Planet;



import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Planet = ({ textureUrl, position }) => {
    const containerRef = useRef(null);
    const rendererRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();



        //scene.background = new THREE.Color(0x000000); // black
        // Planets
        const loader = new THREE.TextureLoader();
        const mercuryTexture = loader.load(textureUrl);





        //const sunTexture = loader.load('/textures/moon.jpg');


        const geometry = new THREE.SphereGeometry(3, 64, 64);



        const material = new THREE.MeshStandardMaterial({ map: mercuryTexture });
        const mercury = new THREE.Mesh(geometry, material);
        mercury.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        mercury.position.set(position[0], position[1], position[2]);
        mercury.scale.set(0.4, 0.4, 0.4);


        scene.add(mercury);













        // ☀️ Simulated Sunlight
        const sunlight = new THREE.DirectionalLight(0xfff5c0, 2);
        sunlight.position.set(10, 10, 5); // Upper-left direction
        scene.add(sunlight);

        // Optional ambient fill light
        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambient);

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, 15);
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({ antialias: true });


        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;


        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        const animate = () => {
            // controls.update();



            mercury.rotation.y += 0.005;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();



        return () => {
            window.removeEventListener("resize", handleResize);

            if (rendererRef.current) {
                rendererRef.current.dispose();
                if (rendererRef.current.domElement && container.contains(rendererRef.current.domElement)) {
                    container.removeChild(rendererRef.current.domElement);
                }
            }
        };
    }, []);

    return (

        <div
            ref={containerRef}
            style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', zIndex: 0 }}
        />

    );
};

export default Planet;
