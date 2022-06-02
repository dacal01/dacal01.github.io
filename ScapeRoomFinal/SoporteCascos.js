import * as THREE from '../libs/three.module.js'
import {CSG} from '../libs/CSG-v2.js'

class SoporteCascos extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
        
      // Se crea la parte de la interfaz que corresponde a la esfera
      // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
      this.createGUI(gui,titleGui);

      var soporte = this.createVertical();

      soporte.position.x = -90;
      soporte.position.y = 30;
      soporte.position.z = -55;
      soporte.castShadow = true;
      soporte.userData.name = "AURICULARES";

      this.add(soporte);
  }

  createVertical(){
    var geometria = new THREE.CylinderGeometry(0.3, 0.3, 6, 20);
    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var paloV = new THREE.Mesh(geometria, material);

    var geometria2 = new THREE.CylinderGeometry(0.1, 0.1, 1, 20);
    var paloH = new THREE.Mesh(geometria2, material);

    paloH.rotation.z = 1.5708;
    paloH.position.y = 2.9;

    var csg = new CSG();
    csg.subtract([paloV, paloH]);
    var soporte = csg.toMesh();
    soporte.castShadow = true;

    return soporte;
  }

  createGUI (gui,titleGui) {
  }

  update () {
  }
}

export { SoporteCascos };