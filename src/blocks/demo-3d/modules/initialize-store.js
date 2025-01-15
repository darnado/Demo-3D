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

import { store, getContext } from "@wordpress/interactivity";

export default function initializeStore(object3D, updateMesh) {
  store("cf-demo-3d-store", {
    actions: {
      changeCameraPosition: (e) => {
        const context = getContext();
        context.cameraPosition = e.target.value;
        object3D.cameraPosition = Number(context.cameraPosition);
      },
      changeFieldOfView: (e) => {
        const context = getContext();
        context.fieldOfView = e.target.value;
        object3D.fieldOfView = Number(context.fieldOfView);
      },
      changeNear: (e) => {
        const context = getContext();
        context.near = e.target.value;
        object3D.near = Number(context.near);
      },
      changeGeometricShape: (e) => {
        const context = getContext();
        context.geometricShape = e.target.value;
        object3D.geometricShape = context.geometricShape;
        updateMesh(object3D);
      },
      showObjectWireframe: (e) => {
        const context = getContext();
        context.showWireFrame = !context.showWireFrame;
        object3D.wireframeEnabled = context.showWireFrame;
        updateMesh(object3D);
      },
    },
  });
}
