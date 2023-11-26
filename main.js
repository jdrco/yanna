import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';

import { OBJLoader } from 'https://unpkg.com/three@0.158.0/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.158.0/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;

let object;

init();
animate();

function animate() {
  requestAnimationFrame(animate);

  if (object) {
    object.rotation.y += 0.01;
  }

  render();
}

function init() {

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
  camera.position.set(0, 0.5, 0.85);

  // scene

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight( 0xffffff );
  scene.add( ambientLight );

  const pointLight = new THREE.PointLight( 0xffffff, 15 );
  camera.add( pointLight );
  scene.add( camera );

  // manager

  function loadModel() {

    object.traverse( function ( child ) {

      if ( child.isMesh ) {
        child.material.map = textureGrass;
        if (child.name === "pCube3") child.material.map = textureGrass;
        if (child.name === "pCylinder1") child.material.map = texturePattern;
        if (child.name === "Mesh") child.material.map = textureRose;
        if (child.name === "pCube1") child.material.map = textureGrass;
        if (child.name === "pCube2") child.material.map = textureGrass;
      }

    } );

    object.position.y = - 0.95;
    object.scale.setScalar( 0.01 );
    scene.add( object );

    render();

  }

  const manager = new THREE.LoadingManager( loadModel );

  // texture

  const textureLoader = new THREE.TextureLoader( manager );
  const textureGrass = textureLoader.load('grass_texture225.jpg', render);
  const texturePattern = textureLoader.load('texture-green-paper-pattern-scratch-background-photo-hd-wallpaper.jpg', render);
  const textureRose = textureLoader.load('wildtextures-leather-Campo-rose.jpg', render);
  textureGrass.colorSpace = THREE.SRGBColorSpace;
  texturePattern.colorSpace = THREE.SRGBColorSpace;
  textureRose.colorSpace = THREE.SRGBColorSpace;

  // model

  function onProgress( xhr ) {

    if ( xhr.lengthComputable ) {

      const percentComplete = xhr.loaded / xhr.total * 100;
      console.log( 'model ' + percentComplete.toFixed( 2 ) + '% downloaded' );

    }

  }

  function onError() {}

  const loader = new OBJLoader( manager );
  loader.load( 'rose.obj', function ( obj ) {

    object = obj;

  }, onProgress, onError );

  //

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  //

  const controls = new  OrbitControls( camera, renderer.domElement );
  controls.minDistance = 1;
  controls.maxDistance = 3;
  controls.addEventListener( 'change', render );

  //

  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function render() {

  renderer.render( scene, camera );

}
