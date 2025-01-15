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

export default function initializeRenderer(object3D) {
  const { canvas } = object3D;
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    object3D.parentContainer.clientWidth,
    object3D.parentContainer.clientHeight
  );
  return renderer;
}
