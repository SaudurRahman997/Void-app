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



        //scene.background = new THREE.Color(0x000000); // black
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




        //const sunTexture = loader.load('/textures/moon.jpg');


        const geometry = new THREE.SphereGeometry(3, 64, 64);



        const material = new THREE.MeshStandardMaterial({ map: mercuryTexture });
        const mercury = new THREE.Mesh(geometry, material);
        mercury.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees



        // mercury.position.set(-8, 3, 1);

        mercury.scale.set(0.4, 0.4, 0.4);


        const material1 = new THREE.MeshStandardMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(geometry, material1);
        venus.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        // venus.position.set(-3, 1, 1);
        venus.scale.set(0.4, 0.4, 0.4);


        const material2 = new THREE.MeshStandardMaterial({ map: earthTexture });
        const earth = new THREE.Mesh(geometry, material2);
        earth.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        // earth.position.set(2, 3, 1);
        earth.scale.set(0.4, 0.4, 0.4);


        const material3 = new THREE.MeshStandardMaterial({ map: marsTexture });
        const mars = new THREE.Mesh(geometry, material3);
        mars.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        // mars.position.set(7, 1, 1);
        mars.scale.set(0.4, 0.4, 0.4);


        const material4 = new THREE.MeshStandardMaterial({ map: jupiterTexture });
        const jupiter = new THREE.Mesh(geometry, material4);
        jupiter.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        // jupiter.position.set(-8, -1, 1);
        jupiter.scale.set(0.4, 0.4, 0.4);


        const material5 = new THREE.MeshStandardMaterial({ map: saturnTexture });
        const saturn = new THREE.Mesh(geometry, material5);
        saturn.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        //saturn.position.set(-3, -3, 1);
        saturn.scale.set(0.4, 0.4, 0.4);

        const material8 = new THREE.MeshStandardMaterial({ map: uranusTexture });
        const uranus = new THREE.Mesh(geometry, material8);
        uranus.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        //uranus.position.set(2, -1, 1);
        uranus.scale.set(0.4, 0.4, 0.4);


        const material9 = new THREE.MeshStandardMaterial({ map: neptuneTexture });
        const neptune = new THREE.Mesh(geometry, material9);
        neptune.rotation.y = Math.PI * 2 / 3; // rotate 90 degrees
        // neptune.position.set(7, -3, 1);
        neptune.scale.set(0.4, 0.4, 0.4);



        // Animate position using GSAP
        // Animate each label from behind (along z or y axis) into its actual position



        function setPlanetPositions() {
            const mobile = isMobileScreen();

            // Mercury
            mercury.position.set(
                mobile ? 1 : -8,
                mobile ? 3 : 3,
                mobile ? -0.199 : 1
            );

            // Venus
            venus.position.set(
                mobile ? 1 : -3,
                mobile ? -1 : 1,
                mobile ? -0.199 : 1
            );

            // Earth
            earth.position.set(
                mobile ? 1 : 2,
                mobile ? -5 : 3,
                mobile ? -0.199 : 1
            );

            // Mars
            mars.position.set(
                mobile ? 1 : 7,
                mobile ? -9 : 1,
                mobile ? -0.199 : 1
            );

            // Jupiter
            jupiter.position.set(
                mobile ? 1 : -8,
                mobile ? -13 : -1,
                mobile ? -0.199 : 1
            );

            // Saturn
            saturn.position.set(
                mobile ? 1 : -3,
                mobile ? -17 : -3,
                mobile ? -0.199 : 1
            );

            // Uranus
            uranus.position.set(
                mobile ? 1 : 2,
                mobile ? -21 : -1,
                mobile ? -0.199 : 1
            );

            // Neptune
            neptune.position.set(
                mobile ? 1 : 7,
                mobile ? -25 : -3,
                mobile ? -0.199 : 1
            );
        }


        setPlanetPositions();

        let mercuryLabel, venusLabel, earthLabel, marsLabel;
        let jupiterLabel, saturnLabel, uranusLabel, neptuneLabel;

        scene.add(mercury);
        scene.add(venus);
        scene.add(earth);
        scene.add(mars);
        scene.add(jupiter);
        scene.add(saturn);
        scene.add(uranus);
        scene.add(neptune);

        // call this after all planets are added


        function createAndAddLabels() {

            if (mercuryLabel) scene.remove(mercuryLabel);
            if (venusLabel) scene.remove(venusLabel);
            if (earthLabel) scene.remove(earthLabel);
            if (marsLabel) scene.remove(marsLabel);
            if (jupiterLabel) scene.remove(jupiterLabel);
            if (saturnLabel) scene.remove(saturnLabel);
            if (uranusLabel) scene.remove(uranusLabel);
            if (neptuneLabel) scene.remove(neptuneLabel);

            // Create new labels with current positions
            mercuryLabel = createLabel("Mercury", mercury.position, "mercury-section");
            venusLabel = createLabel("Venus", venus.position, "venus-section");
            earthLabel = createLabel("Earth", earth.position, "earth-section");
            marsLabel = createLabel("Mars", mars.position, "mars-section");
            jupiterLabel = createLabel("Jupiter", jupiter.position, "jupiter-section");
            saturnLabel = createLabel("Saturn", saturn.position, "saturn-section");
            uranusLabel = createLabel("Uranus", uranus.position, "uranus-section");
            neptuneLabel = createLabel("Neptune", neptune.position, "neptune-section");

            // Add them to the scene
            scene.add(mercuryLabel);
            scene.add(venusLabel);
            scene.add(earthLabel);
            scene.add(marsLabel);
            scene.add(jupiterLabel);
            scene.add(saturnLabel);
            scene.add(uranusLabel);
            scene.add(neptuneLabel);
        }

        createAndAddLabels();




        gsap.fromTo(mercuryLabel.position,
            { y: mercuryLabel.position.y - 2 },
            {
                y: mercuryLabel.position.y,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(venusLabel.position,
            { z: venusLabel.position.z - 3 },
            {
                z: venusLabel.position.z,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(earthLabel.position,
            { y: earthLabel.position.y - 2 },
            {
                y: earthLabel.position.y,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(marsLabel.position,
            { z: marsLabel.position.z + 3 },
            {
                z: marsLabel.position.z,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(jupiterLabel.position,
            { y: jupiterLabel.position.y + 2 },
            {
                y: jupiterLabel.position.y,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(saturnLabel.position,
            { z: saturnLabel.position.z + 3 },
            {
                z: saturnLabel.position.z,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(uranusLabel.position,
            { y: uranusLabel.position.y - 2 },
            {
                y: uranusLabel.position.y,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        gsap.fromTo(neptuneLabel.position,
            { z: neptuneLabel.position.z - 3 },
            {
                z: neptuneLabel.position.z,
                duration: 1.5,
                ease: "power2.out",
            }
        );

        // Existing Three.js setup...

        // Animate mercury position on scroll



        // // ✨ Star Field
        // const starGeometry = new THREE.BufferGeometry();
        // const starCount = 10000;
        // const starPositions = new Float32Array(starCount * 3);

        // function randomSpherePoint(radiusMin = 100, radiusMax = 300) {
        //     const u = Math.random();
        //     const v = Math.random();
        //     const theta = 2 * Math.PI * u;
        //     const phi = Math.acos(2 * v - 1);
        //     const r = radiusMin + Math.random() * (radiusMax - radiusMin);

        //     const sinPhi = Math.sin(phi);
        //     const x = r * sinPhi * Math.cos(theta);
        //     const y = r * sinPhi * Math.sin(theta);
        //     const z = r * Math.cos(phi);

        //     return { x, y, z };
        // }

        // for (let i = 0; i < starCount; i++) {
        //     const index = i * 3;
        //     const { x, y, z } = randomSpherePoint(100, 300); // distance range from center
        //     starPositions[index] = x;
        //     starPositions[index + 1] = y;
        //     starPositions[index + 2] = z;
        // }



        // starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

        // const starMaterial = new THREE.PointsMaterial({
        //     color: '#87CEEB',
        //     size: 0.5,
        //     sizeAttenuation: true,
        //     transparent: true,
        //     alphaTest: 0.01,
        //     depthWrite: false,
        //     blending: THREE.AdditiveBlending,
        //     color: 0xffffff
        // });

        // const stars = new THREE.Points(starGeometry, starMaterial);
        // scene.add(stars);

        // ☀️ Simulated Sunlight
        const sunlight = new THREE.DirectionalLight(0xfff5c0, 2);
        sunlight.position.set(10, 10, 5); // Upper-left direction
        scene.add(sunlight);

        // Optional ambient fill light
        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambient);

        const camera = new THREE.PerspectiveCamera(
            isMobileScreen() ? 60 : 45,  // wider FOV on mobile
            width / height,
            0.1,
            1000
        );

        camera.position.set(0, 0, 15);
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: isMobileScreen() ? true : false });




        // function getCenterWorldCoordinates(camera) {
        //     // NDC center (normalized device coordinates) is always (0, 0)
        //     const centerNDC = new THREE.Vector3(0, 0, 0); // z=0 means on the near plane
        //     centerNDC.unproject(camera); // Convert from NDC to world space
        //     return centerNDC;
        // }


        // if (isMobileScreen) {
        //     const centerWorld = getCenterWorldCoordinates(camera);
        //     console.log("Center World Position on Mobile:", centerWorld);
        //     // You can now use centerWorld.x, centerWorld.y, centerWorld.z
        //     // e.g., place a planet at the center
        // }

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
            setPlanetPositions();
            createAndAddLabels();
            //addPlanetsAndLabels(scene);

        };
        window.addEventListener('resize', handleResize);

        const animate = () => {
            // controls.update();

            // Rotate only the stars, not the planet

            mercury.rotation.y += 0.05;    // Mercury: Fixed (fastest)
            venus.rotation.y += 0.010;     // Venus: Fixed (slowest)
            earth.rotation.y += 0.046;     // Earth: Scaled to ~0.997 days
            mars.rotation.y += 0.046;      // Mars: Scaled to ~1.026 days
            jupiter.rotation.y += 0.050;   // Jupiter: Scaled to ~0.4135 days (very close to Mercury)
            saturn.rotation.y += 0.049;    // Saturn: Scaled to ~0.444 days
            uranus.rotation.y += 0.047;    // Uranus: Scaled to ~0.718 days
            neptune.rotation.y += 0.047;   // Neptune: Scaled to ~0.671 days
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onClick(event) {
            // Adjust for canvas offset
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

        const handleScroll = () => {
            const scrollY = window.scrollY;
            camera.position.y = -scrollY * 0.1; // You can tweak this multiplier
        };

        window.addEventListener("scroll", handleScroll);




        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            //controls.dispose();
            //  ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // 🔥 kill all triggers
            //mercuryTween.kill(); // ✅ kill the tween itself
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

export default Planets9;
