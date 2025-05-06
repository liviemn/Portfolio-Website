// src/three/ThreeSetup.js
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

    camera.position.set(-5, 6, 5);
    camera.lookAt(0, 0, 0);

    containerRef.current.appendChild(renderer.domElement);

    // Load the GLB model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      '/Room.glb',
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
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // OrbitControls (optimized)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;  // no damping = lighter CPU
    controls.autoRotate = true;      // auto rotate the model slowly
    controls.autoRotateSpeed = 1.5;

    // Animate
    const animate = () => {
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
        height: '55vh',
        margin: 'auto',
      }}
    />
  );
};

export default GLBModelLoader;
