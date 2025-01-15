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

function interactive_3d_blocks_loader(){
    $three_js_blocks =[    
        ['block_name' => 'demo-3d']
    ];

    foreach($three_js_blocks as $three_js_block){
        register_block_type(
            THREE_JS_BASE_FOLDER . 'build/blocks/' . $three_js_block['block_name'], []
        );
    }
}

// Dequeue script module in the editor
function demo_3d_deregister_editor_script() {
    wp_dequeue_script_module( 'three-js-block-demo-3d-view-script-module' ); 
}
add_action( 'enqueue_block_editor_assets', 'demo_3d_deregister_editor_script' );

