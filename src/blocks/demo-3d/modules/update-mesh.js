/*
 * Demo 3D - A Gutenberg block that uses Three JS.
 * Copyright (C) 2025  David Arnado
 * 
 * This file is part of Demo 3D.
 * 
 * Demo 3D is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.

 * Demo 3D is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License along
 * with Demo 3D; if not, see <https://www.gnu.org/licenses/>.
 */

import * as THREE from "three";

// Function to update the mesh of the Three js component
export default function updateMesh(object3D) {
  // Remove existing element3D and wireMesh from the scene
  if (object3D.element3D) {
    object3D.scene.remove(object3D.element3D);
    object3D.element3D = null;
    object3D.wireMesh = null;
  }

  // Switch structure to assign the appropriate geometry object to meshShape
  let meshShape;
  switch (object3D.geometricShape) {
    case "boxGeometry":
      meshShape = new THREE.BoxGeometry(1, 1, 1);
      break;
    case "circleGeometry":
      meshShape = new THREE.CircleGeometry(1, 32);
      break;
    case "coneGeometry":
      meshShape = new THREE.ConeGeometry(1, 2, 32);
      break;
    case "cylinderGeometry":
      meshShape = new THREE.CylinderGeometry(1, 1, 2, 32);
      break;
    case "dodecahedronGeometry":
      meshShape = new THREE.DodecahedronGeometry(1, 0);
      break;
    case "icosahedronGeometry":
      meshShape = new THREE.IcosahedronGeometry(1, 2);
      break;
    case "planeGeometry":
      meshShape = new THREE.PlaneGeometry(2, 2);
      break;
    case "ringGeometry":
      meshShape = new THREE.RingGeometry(0.5, 1, 32);
      break;
    case "sphereGeometry":
      meshShape = new THREE.SphereGeometry(1, 32, 16);
      break;
    case "tetrahedronGeometry":
      meshShape = new THREE.TetrahedronGeometry(1, 0);
      break;
    case "torusGeometry":
      meshShape = new THREE.TorusGeometry(1, 0.4, 16, 100);
      break;
    default:
      console.error("Invalid geometric shape selected!");
      return;
  }

  // Create the new mesh
  const material = new THREE.MeshStandardMaterial({
    color: 0x0affed,
    flatShading: true,
  });

  object3D.element3D = new THREE.Mesh(meshShape, material);

  // Create and add the wireframe
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  object3D.wireMesh = new THREE.Mesh(meshShape, wireMaterial);

  if (object3D.wireframeEnabled) {
    object3D.element3D.add(object3D.wireMesh);
  }

  // Add the new element to the scene
  object3D.scene.add(object3D.element3D);
}
