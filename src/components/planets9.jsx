import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import createLabel from './accessories/planetlabels';
import Background from './background';

gsap.registerPlugin(ScrollTrigger);

function isMobileScreen() {
    return window.innerWidth < 1024;
}

const Planets9 = ({ trigger }) => {
    const containerRef = useRef(null);
    const rendererRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();

        // Planets
        const loader = new THREE.TextureLoader();
        const mercuryTexture = loader.load('/textures/mercury.jpg');
        const venusTexture = loader.load('/textures/venus.jpg');
        const earthTexture = loader.load('/textures/earthh.jpg');
        const marsTexture = loader.load('/textures/mars.jpg');
        const uranusTexture = loader.load('/textures/jupiter.jpg');
        const jupiterTexture = loader.load('/textures/saturn.jpg');
        const saturnTexture = loader.load('/textures/uranus.jpg');
        const neptuneTexture = loader.load('/textures/neptune.jpg');

        const geometry = new THREE.SphereGeometry(3, 64, 64);

        const material = new THREE.MeshStandardMaterial({ map: mercuryTexture });
        const mercury = new THREE.Mesh(geometry, material);
        mercury.rotation.y = Math.PI * 2 / 3;
        mercury.scale.set(0.4, 0.4, 0.4);

        const material1 = new THREE.MeshStandardMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(geometry, material1);
        venus.rotation.y = Math.PI * 2 / 3;
        venus.scale.set(0.4, 0.4, 0.4);

        const material2 = new THREE.MeshStandardMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(geometry, material2);
        earth.rotation.y = Math.PI * 2 / 3;
        earth.scale.set(0.4, 0.4, 0.4);

        const material3 = new THREE.MeshStandardMaterial({ map: marsTexture });
        const mars = new THREE.Mesh(geometry, material3);
        mars.rotation.y = Math.PI * 2 / 3;
        mars.scale.set(0.4, 0.4, 0.4);

        const material4 = new THREE.MeshStandardMaterial({ map: jupiterTexture });
        const jupiter = new THREE.Mesh(geometry, material4);
        jupiter.rotation.y = Math.PI * 2 / 3;
        jupiter.scale.set(0.4, 0.4, 0.4);

        const material5 = new THREE.MeshStandardMaterial({ map: saturnTexture });
        const saturn = new THREE.Mesh(geometry, material5);
        saturn.rotation.y = Math.PI * 2 / 3;
        saturn.scale.set(0.4, 0.4, 0.4);

        const material8 = new THREE.MeshStandardMaterial({ map: uranusTexture });
        const uranus = new THREE.Mesh(geometry, material8);
        uranus.rotation.y = Math.PI * 2 / 3;
        uranus.scale.set(0.4, 0.4, 0.4);

        const material9 = new THREE.MeshStandardMaterial({ map: neptuneTexture });
        const neptune = new THREE.Mesh(geometry, material9);
        neptune.rotation.y = Math.PI * 2 / 3;
        neptune.scale.set(0.4, 0.4, 0.4);

        function setPlanetPositions() {
            const mobile = isMobileScreen();

            mercury.position.set(mobile ? 1 : -8, mobile ? 0 : 3, mobile ? -0.199 : 1);
            venus.position.set(mobile ? 1 : -3, mobile ? -4 : 1, mobile ? -0.199 : 1);
            earth.position.set(mobile ? 1 : 2, mobile ? -8 : 3, mobile ? -0.199 : 1);
            mars.position.set(mobile ? 1 : 7, mobile ? -12 : 1, mobile ? -0.199 : 1);
            jupiter.position.set(mobile ? 1 : -8, mobile ? -16 : -1, mobile ? -0.199 : 1);
            saturn.position.set(mobile ? 1 : -3, mobile ? -20 : -3, mobile ? -0.199 : 1);
            uranus.position.set(mobile ? 1 : 2, mobile ? -24 : -1, mobile ? -0.199 : 1);
            neptune.position.set(mobile ? 1 : 7, mobile ? -28 : -3, mobile ? -0.199 : 1);
        }

        setPlanetPositions();

        let mercuryLabel, venusLabel, earthLabel, marsLabel;
        let jupiterLabel, saturnLabel, uranusLabel, neptuneLabel;

        scene.add(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);

        function createAndAddLabels() {
            if (mercuryLabel) scene.remove(mercuryLabel);
            if (venusLabel) scene.remove(venusLabel);
            if (earthLabel) scene.remove(earthLabel);
            if (marsLabel) scene.remove(marsLabel);
            if (jupiterLabel) scene.remove(jupiterLabel);
            if (saturnLabel) scene.remove(saturnLabel);
            if (uranusLabel) scene.remove(uranusLabel);
            if (neptuneLabel) scene.remove(neptuneLabel);

            mercuryLabel = createLabel("Mercury", mercury.position, "mercury-section");
            venusLabel = createLabel("Venus", venus.position, "venus-section");
            earthLabel = createLabel("Earth", earth.position, "earth-section");
            marsLabel = createLabel("Mars", mars.position, "mars-section");
            jupiterLabel = createLabel("Jupiter", jupiter.position, "jupiter-section");
            saturnLabel = createLabel("Saturn", saturn.position, "saturn-section");
            uranusLabel = createLabel("Uranus", uranus.position, "uranus-section");
            neptuneLabel = createLabel("Neptune", neptune.position, "neptune-section");

            scene.add(mercuryLabel, venusLabel, earthLabel, marsLabel, jupiterLabel, saturnLabel, uranusLabel, neptuneLabel);
        }

        createAndAddLabels();

        gsap.fromTo(mercuryLabel.position, { y: mercuryLabel.position.y - 2 }, { y: mercuryLabel.position.y, duration: 1.5, ease: "power2.out" });
        gsap.fromTo(venusLabel.position, { z: venusLabel.position.z - 3 }, { z: venusLabel.position.z, duration: 1.5, ease: "power2.out" });
        gsap.fromTo(earthLabel.position, { y: earthLabel.position.y - 2 }, { y: earthLabel.position.y, duration: 1.5, ease: "power2.out" });
        gsap.fromTo(marsLabel.position, { z: marsLabel.position.z + 3 }, { z: marsLabel.position.z, duration: 1.5, ease: "power2.out" });
        gsap.fromTo(jupiterLabel.position, { y: jupiterLabel.position.y + 2 }, { y: jupiterLabel.position.y, duration: 1.5, ease: "power2.out" });
        gsap.fromTo(saturnLabel.position, { z: saturnLabel.position.z + 3 }, { z: saturnLabel.position.z, duration: 1.5, ease: "power2.out" });
        gsap.fromTo(uranusLabel.position, { y: uranusLabel.position.y - 2 }, { y: uranusLabel.position.y, duration: 1.5, ease: "power2.out" });
        gsap.fromTo(neptuneLabel.position, { z: neptuneLabel.position.z - 3 }, { z: neptuneLabel.position.z, duration: 1.5, ease: "power2.out" });

        const sunlight = new THREE.DirectionalLight(0xfff5c0, 2);
        sunlight.position.set(10, 10, 5);
        scene.add(sunlight);

        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambient);

        const camera = new THREE.PerspectiveCamera(
            isMobileScreen() ? 50 : 45,
            width / height,
            0.1,
            1000
        );

        if (isMobileScreen()) {
            camera.position.set(0, -12, 40); // Center on y=-11 (midpoint of 3 to -25), pull back to fit ~28 units
        } else {
            camera.position.set(0, 0, 15);
        }

        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: isMobileScreen() ? true : false });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Calculate container height for mobile to fit all planets
        const containerHeight = isMobileScreen() ? '800px' : '100vh'; // ~28 units * 100px/unit + buffer

        container.style.height = containerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            container.style.height = isMobileScreen() ? '800px' : '100vh';
            setPlanetPositions();
            createAndAddLabels();
        };
        window.addEventListener('resize', handleResize);

        const animate = () => {
            mercury.rotation.y += 0.05;
            venus.rotation.y += 0.010;
            earth.rotation.y += 0.046;
            mars.rotation.y += 0.046;
            jupiter.rotation.y += 0.050;
            saturn.rotation.y += 0.049;
            uranus.rotation.y += 0.047;
            neptune.rotation.y += 0.047;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onClick(event) {
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);

            for (let i = 0; i < intersects.length; i++) {
                const object = intersects[i].object;
                if (object.userData.sectionId) {
                    const section = document.getElementById(object.userData.sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                    break;
                }
            }
        }

        window.addEventListener('click', onClick, false);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', onClick);
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
            style={{
                width: '100vw',
                height: isMobileScreen() ? '800px' : '100vh',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1
            }}
        />
    );
};

export default Planets9;