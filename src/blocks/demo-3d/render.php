<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
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

// BUFFERING
// Start ouput buffering
ob_start(); 
?>     
  <div class="cf-demo-3d-controls" data-wp-interactive="cf-demo-3d-store" data-wp-context='{"cameraPosition": 3, "fieldOfView": 70, "near": 0.1, "geometricShape": "boxGeometry", "showWireFrame": true }'>
    <label class="cf-demo-3d-controls__label"><span> Adjust camera position (<span data-wp-text="context.cameraPosition"></span>):</span> <input type="range" min="1" max="10" step="0.5" data-wp-bind--value="context.cameraPosition" data-wp-on--input="actions.changeCameraPosition" /></label>
    <label class="cf-demo-3d-controls__label"><span> Adjust field of view (<span data-wp-text="context.fieldOfView"></span>):</span> <input type="range" min="10" max="100" step="10" data-wp-bind--value="context.fieldOfView" data-wp-on--input="actions.changeFieldOfView" /></label>
    <label class="cf-demo-3d-controls__label"><span> Adjust near value (<span data-wp-text="context.near"></span>):</span> <input type="range" min="0.1" max="5" step="0.1" data-wp-bind--value="context.near" data-wp-on--input="actions.changeNear" /></label>
    <label class="cf-demo-3d-controls__label">Change geometric shape:    
        <select class="cf-demo-3d-controls__select" name="cf-demo-3d-controls__select" data-wp-on--input="actions.changeGeometricShape">
        <option value="boxGeometry">Box Geometry</option>
        <option value="circleGeometry">Circle Geometry</option>
        <option value="coneGeometry">Cone Geometry</option>
        <option value="cylinderGeometry">Cylinder Geometry</option>
        <option value="dodecahedronGeometry">Dodecahedron Geometry</option>
        <option value="icosahedronGeometry">Icosahedron Geometry</option>
        <option value="planeGeometry">Plane Geometry</option>
        <option value="ringGeometry">Ring Geometry</option>
        <option value="sphereGeometry">Sphere Geometry</option>
        <option value="tetrahedronGeometry">Tetrahedron Geometry</option>
        <option value="torusGeometry">Torus Geometry</option>
      </select>
    </label>  
    <label class="cf-demo-3d-controls__label cf-demo-3d-controls__label--has-checkbox">Show wireframe: <input type="checkbox" name="cf-demo-3d-checkbox" data-wp-on--input="actions.showObjectWireframe" data-wp-bind--checked="context.showWireFrame"></label>           
  </div>
  <div class="cf-demo-3d-object-container">
    <div class="cf-demo-3d-object-container__placeholder">Loading...</div>
    <canvas class="cf-demo-3d-object-container__canvas"></canvas>      
  </div>   
<?php 

// Fetch the content of the ouput buffer
$output = ob_get_contents();
// Stop output buffering
ob_end_clean();
// Ouput the stored content
echo $output;
