
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


const GLBModelLoader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modelLoaded = useRef(false); // Track if the model is already loaded

  useEffect(() => {
    if (!containerRef.current || modelLoaded.current) return;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    const width = window.innerWidth * 0.9;
    const height = window.innerHeight * 0.8;
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    camera.position.set(-4, 5, 4);
    camera.lookAt(0, 0, 0);

    containerRef.current.appendChild(renderer.domElement);
    
    const loader = new GLTFLoader();
    loader.load(
      './assets/Room.glb',
      (gltf) => {
        modelLoaded.current = true; // Set the flag before adding the model
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the GLB model:', error);
      }
    );

    // Add lighting
    scene.add(new THREE.AmbientLight(0xFFFFFF, 1));

    const pointLight = new THREE.PointLight(0xFFFFFF, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xFFFFFF, 1);
    spotLight.position.set(0, 5, 5);
    spotLight.angle = Math.PI / 6;
    scene.add(spotLight);

    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.enableZoom = false;


    // Animate
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    // Cleanup
    return () => {
      controls.dispose();
      renderer.dispose();
      if (
        containerRef.current &&
        renderer.domElement.parentNode === containerRef.current
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '70%',
        height: '60vh',
        margin: 'auto',
      }}
    />
  );
};

export default GLBModelLoader;
