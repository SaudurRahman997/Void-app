import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { motion } from "framer-motion";

const EarthScene = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();

        const loader = new THREE.TextureLoader();
        const earthTexture = loader.load('/textures/earthh.jpg');
        const sunTexture = loader.load('/textures/moon.jpg');
        scene.background = new THREE.Color(0x000000); // black

        const geometry = new THREE.SphereGeometry(3, 64, 64);
        const geometry1 = new THREE.SphereGeometry(3, 64, 64);

        const material1 = new THREE.MeshStandardMaterial({ map: sunTexture });
        const sun = new THREE.Mesh(geometry1, material1);
        sun.position.set(-5, 3, 2);
        sun.scale.set(0.2, 0.2, 0.2);
        scene.add(sun);

        const material = new THREE.MeshStandardMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(geometry, material);
        earth.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees

        earth.position.set(0, -50, -20);

        // 🌐 Responsive Earth scale
        let earthScale = 2;
        if (window.innerWidth < 768) {
            earthScale = 1.2; // Smaller for mobile
        }
        earth.scale.set(earthScale, earthScale, earthScale);

        scene.add(earth);

        // ✅ Animate into place using GSAP
        gsap.to(earth.position, {
            duration: 1,
            x: 6,
            y: -2,
            z: 0,
            ease: "power4.out",
            delay: 0.5
        });

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
            const { x, y, z } = randomSpherePoint(100, 300);
            starPositions[index] = x;
            starPositions[index + 1] = y;
            starPositions[index + 2] = z;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

        const starMaterial = new THREE.PointsMaterial({
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

        // ☀️ Lighting
        const sunlight = new THREE.DirectionalLight(0xfff5c0, 2);
        sunlight.position.set(10, 10, 5);
        scene.add(sunlight);

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
        controls.autoRotateSpeed = 4;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            // 📱 Adjust earth scale on resize
            if (window.innerWidth < 768) {
                earth.scale.set(1.2, 1.2, 1.2);
            } else {
                earth.scale.set(2, 2, 2);
            }
        };

        window.addEventListener('resize', handleResize);

        const animate = () => {
            controls.update();
            sun.rotation.y += 0.05;
            earth.rotation.y += 0.010;
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
            <div className="overflow-y-scroll scrollbar-hide h-screen">
                <div
                    ref={containerRef}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 0
                    }}
                />
                <div className="absolute top-[60%] left-10 transform -translate-y-1/2 z-10 ">
                    <div className="text-white text-8xl font-glitch">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                            className="p-3"
                        >
                            Enter
                        </motion.h1>
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 3 }}
                            className="p-3"
                        >
                            The void
                        </motion.h1>
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 4 }}
                            className="p-3"
                        >
                            of infinity
                        </motion.h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EarthScene;
