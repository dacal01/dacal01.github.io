import * as THREE from '../libs/three.module.js'
import {CSG} from '../libs/CSG-v2.js'
 
class Taza extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
        
        // Se crea la parte de la interfaz que corresponde a la esfera
        // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
        this.createGUI(gui,titleGui);

        var taza = this.createTaza();

        taza.position.x = -90;
        taza.position.y = 29;
        taza.position.z = -10;
        taza.castShadow = true;

        this.add(taza);
  }

  createTaza(){
    var cilindroExterior = this.createCilindroExterior();
    var cilindroInterior = this.createCilindroInterior();
    var asa = this.createToro();

    var csg = new CSG();
    csg.union([cilindroExterior, asa]);
    csg.subtract([cilindroInterior]);

    var taza = csg.toMesh();
    taza.castShadow = true;

    return taza;
  }

  createCilindroExterior(){
    // radius top, radius bottom, height
    var geometria = new THREE.CylinderGeometry(1, 1, 3, 50);
    var texture = new THREE.TextureLoader().load('../imgs/porcelana.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    const cilindro = new THREE.Mesh( geometria, material);
    cilindro.castShadow = true;

    return cilindro;
  }

  createCilindroInterior(){
    // radius top, radius bottom, height
    var geometria = new THREE.CylinderGeometry(0.8, 0.8, 3, 50);
    var texture = new THREE.TextureLoader().load('../imgs/porcelana.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    const cilindro = new THREE.Mesh( geometria, material);

    cilindro.position.y = 0.2;
    cilindro.castShadow = true;

    return cilindro;
  }

  createToro(){
    // radius : Float, tube : Float, radialSegments : Integer, tubularSegments : Integer, arc : Float
    var geometria = new THREE.TorusGeometry(0.8, 0.15, 6, 30);
    var texture = new THREE.TextureLoader().load('../imgs/porcelana.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    const toro = new THREE.Mesh( geometria, material);
    
    toro.position.x = 0.7;
    toro.castShadow = true;

    return toro;
  }
  
  createGUI (gui,titleGui) {
  }

  update () {}
}

export { Taza };