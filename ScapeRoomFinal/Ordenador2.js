import * as THREE from '../libs/three.module.js'
import { MTLLoader } from '../libs/MTLLoader.js'
import { OBJLoader } from '../libs/OBJLoader.js'

 
class Ordenador2 extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
    
    // Se crea la parte de la interfaz que corresponde a la caja
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
    this.createGUI(gui,titleGui);
    
    var materialLoader = new MTLLoader();
    var objectLoader = new OBJLoader()
    materialLoader.load('../models/HP_Laptop_High_Poly/Laptop_High-Polay_HP_BI_2_obj.mtl',
      (materials)=>{
        objectLoader.setMaterials (materials);
        objectLoader.load('../models/HP_Laptop_High_Poly/Laptop_High-Polay_HP_BI_2_obj.obj',
          (object)=>{
            this.add(object);
          },null,null);
      });

    this.scale.set(3,3,3);
    this.rotation.y =Math.PI/2;
    this.position.y =27;
    this.position.x =-90;
    this.position.z =-35;
  }
  
  createGUI (gui,titleGui) {
  
  }
  
  update () {
    
  }
}

export { Ordenador2 };