"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARTICLE_COUNT = 150;
const MAX_DISTANCE = 2.5;

export default function Model3D() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const isMobile = viewport.width < 5;
  const radius = isMobile ? 4 : 7; // Spread of the network

  // Initialize particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * radius * 2;
      const y = (Math.random() - 0.5) * radius * 2;
      const z = (Math.random() - 0.5) * radius * 2;
      
      const vx = (Math.random() - 0.5) * 0.02;
      const vy = (Math.random() - 0.5) * 0.02;
      const vz = (Math.random() - 0.5) * 0.02;
      
      temp.push({ pos: new THREE.Vector3(x, y, z), vel: new THREE.Vector3(vx, vy, vz) });
    }
    return temp;
  }, [radius]);

  // Pre-allocate buffers for lines
  // Max possible lines is (N * (N - 1)) / 2, but we'll cap it
  const maxLines = PARTICLE_COUNT * 5;
  const positions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const colors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const pointPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useMemo(() => {
    // Initial point positions
    particles.forEach((p, i) => {
      pointPositions[i * 3] = p.pos.x;
      pointPositions[i * 3 + 1] = p.pos.y;
      pointPositions[i * 3 + 2] = p.pos.z;
    });
  }, [particles, pointPositions]);

  // Setup GSAP Scroll animation
  useMemo(() => {
    if (typeof window !== "undefined") {
      // Small delay to ensure refs are attached
      setTimeout(() => {
        if (!groupRef.current) return;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        tl.to(groupRef.current.rotation, {
          y: Math.PI * 2,
          x: Math.PI * 0.5,
          ease: "none",
        });

        return () => {
          tl.kill();
        };
      }, 100);
    }
  }, []);

  useFrame(() => {
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];
      p.pos.add(p.vel);

      // Bounce off walls (sphere boundary)
      if (p.pos.length() > radius) {
        p.vel.multiplyScalar(-1);
      }

      pointPositions[i * 3] = p.pos.x;
      pointPositions[i * 3 + 1] = p.pos.y;
      pointPositions[i * 3 + 2] = p.pos.z;
    }

    // Connect lines
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dist = p1.pos.distanceTo(p2.pos);

        if (dist < MAX_DISTANCE && numConnected < maxLines) {
          // Line opacity based on distance
          const alpha = 1.0 - dist / MAX_DISTANCE;
          
          positions[vertexpos++] = p1.pos.x;
          positions[vertexpos++] = p1.pos.y;
          positions[vertexpos++] = p1.pos.z;
          
          positions[vertexpos++] = p2.pos.x;
          positions[vertexpos++] = p2.pos.y;
          positions[vertexpos++] = p2.pos.z;

          // Color #2D5A4E (Secondary accent - deep teal) mapping to RGB
          // Red: 0.176, Green: 0.353, Blue: 0.306
          colors[colorpos++] = 0.176; colors[colorpos++] = 0.353; colors[colorpos++] = 0.306;
          colors[colorpos++] = 0.176; colors[colorpos++] = 0.353; colors[colorpos++] = 0.306;

          numConnected++;
        }
      }
    }

    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, numConnected * 2);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
    
    // Slow ambient rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#C8A96E"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
