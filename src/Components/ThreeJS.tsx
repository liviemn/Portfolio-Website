import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const GLBModelLoader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modelLoaded = useRef(false);
  const modelRef = useRef<THREE.Group | null>(null); // Store the model for rotation

  useEffect(() => {
    if (!containerRef.current || modelLoaded.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        renderer.setPixelRatio(0.75); // reduce pixel density to improve performance
    } else {
        renderer.setPixelRatio(window.devicePixelRatio);
    }

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

    // Model loading
    const loader = new GLTFLoader();
    loader.load(
      './assets/Room.glb',
      (gltf) => {
        modelLoaded.current = true;
        const model = gltf.scene;

        const isMobile = window.innerWidth < 768;
        const scale = isMobile ? 1.3 : 2;
        model.scale.set(scale, scale, scale);

        modelRef.current = model;
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the GLB model:', error);
      }
    );

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(0, 5, 5);
    spotLight.angle = Math.PI / 6;
    scene.add(spotLight);

    // Orbit Controls (Desktop only)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.enableZoom = false;
    controls.enabled = !isMobile;

    let lastFrameTime = 0;

    // Animation loop
    const animate = (time: number) => {
      requestAnimationFrame(animate);

      const delta = time - lastFrameTime;

      if (isMobile && modelRef.current && delta > 33) {
        modelRef.current.rotation.y += 0.01;
        lastFrameTime = time;
      }
      if (!isMobile) {
        controls.update();
      }

      renderer.render(scene, camera);
    };
    requestAnimationFrame(animate);

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
        minHeight: '60vh',
        display: 'block',
        margin: 'auto',
        touchAction: 'none',
        pointerEvents: window.innerWidth < 768 ? 'none' : 'auto',
      }}
    />
  );
};

export default GLBModelLoader;
