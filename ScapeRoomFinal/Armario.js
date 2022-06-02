import * as THREE from '../libs/three.module.js'
import { MTLLoader } from '../libs/MTLLoader.js'
import { OBJLoader } from '../libs/OBJLoader.js'

 
class Armario extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();

    this.createGUI(gui,titleGui);
    
    var materialLoader = new MTLLoader();
    var objectLoader = new OBJLoader()
    materialLoader.load('../models/wardrobe/Wardrobe  4 door.mtl',
      (materials)=>{
        objectLoader.setMaterials (materials);
        objectLoader.load('../models/wardrobe/Wardrobe  4 door.obj',
          (object)=>{
            this.add(object);
          },null,null);
      });

    this.scale.set(20,20,20);
    this.rotation.y =Math.PI;
    this.position.z =100;
  }
  
  createGUI (gui,titleGui) {
  
  }
  
  update () {
    
  }
}

export { Armario };