import * as THREE from '../libs/three.module.js'
import { Lampara } from './Lampara.js'
 
class Bombilla extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
    
    this.createGUI(gui,titleGui);

    this.lampara = new Lampara(this.gui, "");
    this.add(this.lampara);

    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});

    var barra = new THREE.BoxGeometry(0.5,0.5,5);

    var barraMesh = new THREE.Mesh(barra,material);
    barraMesh.castShadow = true;
    barraMesh.position.y=10;

    var barra2 = new THREE.BoxGeometry(5,0.5,0.5);

    var barraMesh2 = new THREE.Mesh(barra2,material);
    barraMesh2.castShadow = true;
    barraMesh2.position.y=10;

    var cable = new THREE.BoxGeometry(0.5,7,0.5);

    var cableMesh = new THREE.Mesh(cable,material);
    cableMesh.castShadow = true;
    cableMesh.position.y=13;

    this.add(barraMesh);
    this.add(barraMesh2);
    this.add(cableMesh);

    var cabeza = new THREE.CylinderGeometry(0.5,1,2,30);

    var cabezaMesh = new THREE.Mesh(cabeza,material);
    cabezaMesh.castShadow = true;
    cabezaMesh.position.y=9;

    this.add(cabezaMesh);

    var luz = new THREE.SphereGeometry(1,32,16);
    var textureLuz = new THREE.TextureLoader().load('../imgs/luz.webp');
    var materialLuz = new THREE.MeshPhongMaterial ({map: textureLuz});

    var luzMesh = new THREE.Mesh(luz,materialLuz);
    luzMesh.position.y=7;

    this.add(luzMesh);
    this.castShadow = true;

    this.position.y=70;
  }
  
  createGUI (gui,titleGui) {
    
  }
  
  update () {
   
  }
}

export { Bombilla };