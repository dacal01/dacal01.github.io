import * as THREE from '../libs/three.module.js'
import {CSG} from '../libs/CSG-v2.js'

class Alfil extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
        
      // Se crea la parte de la interfaz que corresponde a la esfera
      // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
      this.createGUI(gui,titleGui);

      this.alfil = this.createPeon();
        
      // Al nodo  this, la esfera, se le cuelgan como hijos la base
      this.add (this.alfil);
  }

  createPeon(){

    var texture = new THREE.TextureLoader().load('../imgs/marmol-blanco.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});

    this.points = [];

    this.points.push(new THREE.Vector3(0.001, 0, 0)); // 1
    this.points.push(new THREE.Vector3(1, 0, 0)); // 2
    this.points.push(new THREE.Vector3(1, 0.3, 0)); // 3
    this.points.push(new THREE.Vector3(0.85, 0.3, 0)); // 4
    this.points.push(new THREE.Vector3(0.9, 0.4, 0));
    this.points.push(new THREE.Vector3(0.85, 0.5, 0)); // 5
    this.points.push(new THREE.Vector3(0.75, 0.5, 0)) // 6
    this.points.push(new THREE.Vector3(0.75, 0.65, 0)); // 7
    this.points.push(new THREE.Vector3(0.63, 0.8, 0));
    this.points.push(new THREE.Vector3(0.58, 0.925, 0));
    this.points.push(new THREE.Vector3(0.55, 1, 0));
    this.points.push(new THREE.Vector3(0.5, 1.25, 0)); // 8
    this.points.push(new THREE.Vector3(0.5, 2, 0)); // 9
    this.points.push(new THREE.Vector3(0.9, 2, 0)); // 10
    this.points.push(new THREE.Vector3(0.95, 2.15, 0));
    this.points.push(new THREE.Vector3(0.9, 2.3, 0)); // 11
    this.points.push(new THREE.Vector3(0.6, 2.3, 0)); // 12
    this.points.push(new THREE.Vector3(0.001, 2.3, 0)); // 13

    //this.position.push(new THREE.Vector3());
    
    var geometriaEsfera1 = new THREE.SphereGeometry(0.3, 20, 20);
    geometriaEsfera1.scale(2.2, 2.5, 2.2);
    geometriaEsfera1.translate(0, 2.8, 0);
    var esfera1 = new THREE.Mesh(geometriaEsfera1, material);


    var geometria = new THREE.LatheGeometry(this.points, 100);
    const alfil = new THREE.Mesh( geometria, material);

    var geometriaBoca = new THREE.BoxGeometry(1,1,1);
    geometriaBoca.rotateZ(0.26);
    geometriaBoca.scale(1, 0.2, 1.5);
    geometriaBoca.translate(0.9, 2.9, 0);
    const boca = new THREE.Mesh(geometriaBoca, material);

    var geometriaEsfera2 = new THREE.SphereGeometry(1, 20, 20);
    geometriaEsfera2.scale(0.3, 0.3, 0.3);
    geometriaEsfera2.translate(0, 3.8, 0);
    var esfera2 = new THREE.Mesh(geometriaEsfera2, material);

    var csg = new CSG;
    csg.union([alfil, esfera1, esfera2]);
    csg.subtract([boca]);

    var resultado = csg.toMesh();

    resultado.position.x = 85;
    resultado.position.y = 31;
    resultado.position.z = 85;
    resultado.castShadow = true;

    return resultado;
  }

  createGUI (gui,titleGui) {
  }

  update () {
  }
}

export { Alfil };