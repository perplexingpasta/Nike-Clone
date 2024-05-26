/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 shoe2.gltf 
Author: 3DScanX (https://sketchfab.com/3dscanx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-shoe-01-low-definition-quality-3593098780f14700ab85c4969205b0ed
Title: Nike Shoe 01 - Low Definition Quality
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/shoe2.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.NikeShoe_01_MS_Cleaned_Positioned_Final_2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.054}
      />
    </group>
  );
}

useGLTF.preload("/shoe2.gltf");