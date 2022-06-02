import * as THREE from '../libs/three.module.js'
import { CSG } from '../libs/CSG-v2.js'
 
class Lampara extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
    
    this.createGUI(gui,titleGui);

    var texture = new THREE.TextureLoader().load('../imgs/tela.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture, side:THREE.DoubleSide});

    var cono = new THREE.ConeGeometry(5,10,30);
    var conoInterior = new THREE.CylinderGeometry(0.001,5,12,30);

    var conoMesh = new THREE.Mesh(cono,material);
    var conoInteriorMesh = new THREE.Mesh(conoInterior,material);

    var csg = new CSG();

    csg.union([conoMesh,conoInteriorMesh]);

    var resultadoMesh = csg.toMesh();

    resultadoMesh.position.y=10;

    this.add(resultadoMesh);

  }
  
  createGUI (gui,titleGui) {
    
  }
  
  update () {
   
  }
}

export { Lampara };