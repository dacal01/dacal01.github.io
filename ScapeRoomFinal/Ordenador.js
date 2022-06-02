import * as THREE from '../libs/three.module.js'
import { MTLLoader } from '../libs/MTLLoader.js'
import { OBJLoader } from '../libs/OBJLoader.js'

 
class Ordenador extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
    
    // Se crea la parte de la interfaz que corresponde a la caja
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
    this.createGUI(gui,titleGui);
    
    var materialLoader = new MTLLoader();
    var objectLoader = new OBJLoader()
    materialLoader.load('../models/server/ServerV2+console.mtl',
      (materials)=>{
        objectLoader.setMaterials (materials);
        objectLoader.load('../models/server/ServerV2+console.obj',
          (object)=>{
            this.add(object);
          },null,null);
      });

    this.scale.set(10,10,10);
    this.rotation.y =1.5*Math.PI;
    this.position.z =-90;
    this.position.x =-32;
  }
  
  createGUI (gui,titleGui) {
  
  }
  
  update () {
    
  }
}

export { Ordenador };
