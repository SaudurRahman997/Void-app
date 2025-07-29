import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { motion } from "framer-motion";
const Acrossbackground = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();



        // ✨ Star Field
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 10000;
        const starPositions = new Float32Array(starCount * 3);

        function randomSpherePoint(radiusMin = 100, radiusMax = 300) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = radiusMin + Math.random() * (radiusMax - radiusMin);

            const sinPhi = Math.sin(phi);
            const x = r * sinPhi * Math.cos(theta);
            const y = r * sinPhi * Math.sin(theta);
            const z = r * Math.cos(phi);

            return { x, y, z };
        }

        for (let i = 0; i < starCount; i++) {
            const index = i * 3;
            const { x, y, z } = randomSpherePoint(100, 300); // distance range from center
            starPositions[index] = x;
            starPositions[index + 1] = y;
            starPositions[index + 2] = z;
        }



        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

        const starMaterial = new THREE.PointsMaterial({
            color: '#87CEEB',
            size: 0.5,
            sizeAttenuation: true,
            transparent: true,
            alphaTest: 0.01,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: 0xffffff
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

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
            window.removeEventListener('resize', handleResize);
            controls.dispose();
            if (rendererRef.current) {
                rendererRef.current.dispose();
                if (rendererRef.current.domElement && container.contains(rendererRef.current.domElement)) {
                    container.removeChild(rendererRef.current.domElement);
                }
            }
        };
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', zIndex: 0 }}

            />

        </>
    );
};

export default Acrossbackground;
