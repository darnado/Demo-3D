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
import initializeStore from "./modules/initialize-store";
import updateMesh from "./modules/update-mesh";
import initializeRenderer from "./modules/initialize-renderer";
import initializeCamera from "./modules/initialize-camera";
import initializeLighting from "./modules/initialize-lighting";
import handleWindowResize from "./modules/handle-window-resize";
import animateObject3D from "./modules/animate-object-3d";

// 3D object
const object3D = {
  cameraPosition: 3,
  fieldOfView: 70,
  near: 0.1,
  geometricShape: "boxGeometry",
  wireframeEnabled: true,
  element3D: null,
  wireMesh: null,
  scene: null,
  canvas: null,
  parentContainer: null,
  animationFrameId: null,
};

// Initialize interactivity API store
initializeStore(object3D, updateMesh);

// Execute app once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select loading placeholder
  const placeholder = document.querySelector(
    ".cf-demo-3d-object-container__placeholder"
  );
  if (placeholder) {
    placeholder.style.display = "none";
  }

  // Initialize canvas container
  object3D.canvas = document.querySelector(
    ".cf-demo-3d-object-container__canvas"
  );

  // Initialize canvas parent container
  object3D.parentContainer = object3D.canvas.parentElement;

  // RENDERER
  const renderer = initializeRenderer(object3D);

  // CAMERA
  const camera = initializeCamera(object3D);
  camera.position.z = object3D.cameraPosition;

  // SCENE
  object3D.scene = new THREE.Scene();

  // Add lighting to scene
  initializeLighting(object3D);

  // Initialize Mesh
  updateMesh(object3D);

  // Animation loop
  animateObject3D(object3D, camera, renderer);

  // Handle window resize
  const onResize = () => handleWindowResize(camera, renderer, object3D);
  window.addEventListener("resize", onResize);

  // Cleanup
  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(object3D.animationFrameId);
    renderer.dispose();
    window.removeEventListener("resize", onResize);
  });
});
