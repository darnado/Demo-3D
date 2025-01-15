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

export default function animateObject3D(object3D, camera, renderer) {
  // Animation loop
  const animate = () => {
    object3D.animationFrameId = requestAnimationFrame(animate);

    object3D.element3D.position.x = 0;
    object3D.element3D.position.y = 0;

    object3D.element3D.rotation.y += 0.01;
    object3D.element3D.rotation.x += 0.01;

    camera.fov = object3D.fieldOfView;
    camera.near = object3D.near;
    camera.position.z = object3D.cameraPosition;
    camera.updateProjectionMatrix();

    try {
      renderer.render(object3D.scene, camera);
    } catch (error) {
      console.error("Error during rendering:", error);
    }
  };

  animate();
}
