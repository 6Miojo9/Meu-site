import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {PointerLockControls} from 'three/addons/controls/PointerLockControls.js';
import {ThreeMFLoader} from 'three/examples/jsm/Addons.js';

var scene = new THREE.Scene(); //Cena
var camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 1000); //Camemra
var renderer = new THREE.WebGLRenderer({antialias: true}); 

scene.background = new THREE.Color(0xfafafa); //Cor do fundo

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.y = 0;

var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
var directionalLight = new THREE.DirectionalLight({color: 0xFFFFFF, intensity: 100});
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;

scene.add(ambientLight);//Implementação da luz ambiental na cena.
scene.add(directionalLight);//Implementação da luz direcional na cena.

//Objeto
let bGeo1 = new THREE.BoxGeometry(500, 50, 1);//tamanho do objeto.
let bGeo2 = new THREE.BoxGeometry(500, 50, 1);
let bGeo3 = new THREE.BoxGeometry(1, 50, 500);
let bGeo4 = new THREE.BoxGeometry(1, 50, 500);
let bGeo5 = new THREE.BoxGeometry(500, 1, 500);
let bMat = new THREE.MeshStandardMaterial({color: 0xc8c8c8, wireframe: false});//Estilo do objeto.
let bMat2 = new THREE.MeshStandardMaterial({color: 0xc8c8c8, wireframe: false});//Estilo do objeto.
let bMat3 = new THREE.MeshStandardMaterial({color: 0x000000, wireframe: false});//Estilo do objeto.

let cube1 = new THREE.Mesh(bGeo1, bMat);//Incorporação do tamanho e estilo no objeto.
let cube2 = new THREE.Mesh(bGeo2, bMat);
let cube3 = new THREE.Mesh(bGeo3, bMat2);
let cube4 = new THREE.Mesh(bGeo4, bMat2);
let cube5 = new THREE.Mesh(bGeo5, bMat3);
scene.add(cube1);//Implementação o objeto na cena.
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);
scene.add(cube5);

cube1.position.set(0, 0, 250);
cube2.position.set(0, 0, -250);
cube3.position.set(250, 0, 0);
cube4.position.set(-250, 0, 0);
cube5.position.set(0, -25, 0);

let controls = new PointerLockControls(camera, renderer.domElement);
let clock = new THREE.Clock();

//Botão de interação
let botao = document.querySelector("#interacao");


//Rotação da camera.
botao.addEventListener('click', ()=>{
    controls.lock();
})


controls.addEventListener('lock', function(){
    botao.style.display = 'none';
})
controls.addEventListener('unlock', function(){
    botao.style.display = '';
})

let keyboard = [];
addEventListener('keydown', (e)=>{
    keyboard[e.key] = true;
})
addEventListener('keyup', (e)=>{
    keyboard[e.key] = false;
})

function processKeyboard() {
    let speed = 1;
    if (keyboard['w']) {
        controls.moveForward(speed);
    }
    if (keyboard['s']) {
        controls.moveForward(-speed);
    }
    if (keyboard['a']) {
        controls.moveRight(-speed);
    }
    if (keyboard['d']) {
        controls.moveRight(speed);
    }
}

function drawScene() {
    renderer.render(scene, camera);
    processKeyboard();
    requestAnimationFrame(drawScene);
}

drawScene();