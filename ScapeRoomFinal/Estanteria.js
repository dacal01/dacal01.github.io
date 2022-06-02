import * as THREE from '../libs/three.module.js'

class Estanteria extends THREE.Object3D {
    constructor(gui,titleGui) {
      super();

      //creamos la estanteria
      var estanteria = this.createEstanteria();

      estanteria.position.x = 79;
      estanteria.position.z = 90;

      this.add(estanteria);
    }

    createEstanteria(){
        var estanteria = new THREE.Object3D();

        //geometrias de los laterales que seran iguales
        var geometryLaterales = new THREE.BoxGeometry (1,50,20);

        //en principio todos los materiales de la estanteria son iguales
        var material = new THREE.MeshPhongMaterial({color: 0x804000});
        
        // Ya se puede construir el Mesh
        var lateralIz = new THREE.Mesh (geometryLaterales, material);
        lateralIz.castShadow = true;
        lateralIz.position.y=25;
        lateralIz.position.x=-20;

        var centro = new THREE.Mesh (geometryLaterales, material);
        centro.castShadow = true;
        centro.position.y=25;
        centro.position.x=0;

        var lateralDe = new THREE.Mesh (geometryLaterales, material);
        lateralDe.castShadow = true;
        lateralDe.position.y=25;
        lateralDe.position.x=20;

        //base
        var geometryBase = new THREE.BoxGeometry (40,3,20);
        
        // Ya se puede construir el Mesh
        var base = new THREE.Mesh (geometryBase, material);
        base.castShadow = true;
        base.position.y=1.5;

        //techo
        var geometryTecho = new THREE.BoxGeometry (41,1,20);

        // Ya se puede construir el Mesh
        var techo = new THREE.Mesh (geometryTecho, material);
        techo.castShadow = true;
        techo.position.y=50.5;


        //valdas
        var geometryValda = new THREE.BoxGeometry (20,1,20);

        // Ya se puede construir el Mesh
        var valda1 = new THREE.Mesh (geometryValda, material);
        valda1.castShadow = true;
        valda1.position.y=10;
        valda1.position.x=10;

        var valda2 = new THREE.Mesh (geometryValda, material);
        valda2.castShadow = true;
        valda2.position.y=20;
        valda2.position.x=10;

        var valda3 = new THREE.Mesh (geometryValda, material);
        valda3.castShadow = true;
        valda3.position.y=30;
        valda3.position.x=10;

        var valda4 = new THREE.Mesh (geometryValda, material);
        valda4.castShadow = true;
        valda4.position.y=40;
        valda4.position.x=10;

        var valda5 = new THREE.Mesh (geometryValda, material);
        valda5.castShadow = true;
        valda5.position.y=15;
        valda5.position.x=-10;

        var valda6 = new THREE.Mesh (geometryValda, material);
        valda6.castShadow = true;
        valda6.position.y=35;
        valda6.position.x=-10;


        estanteria.add(lateralIz);
        estanteria.add(centro);
        estanteria.add(lateralDe);
        estanteria.add(base);
        estanteria.add(techo);
        estanteria.add(valda1);
        estanteria.add(valda2);
        estanteria.add(valda3);
        estanteria.add(valda4);
        estanteria.add(valda5);
        estanteria.add(valda6);

        estanteria.userData.draggable = true;
        estanteria.userData.name = "ESTANTERIA";

        return estanteria;
    }

    createGUI (gui,titleGui) {
    }

    update(){
    
    }
}
export { Estanteria };