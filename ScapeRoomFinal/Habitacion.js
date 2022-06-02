import * as THREE from '../libs/three.module.js'
import {CSG} from '../libs/CSG-v2.js'

class Habitacion extends THREE.Object3D {
    constructor(gui,titleGui) {
      super();
  
      //creamos la habitacoión
      var habitacion = this.createHabitacion();
      this.add(habitacion);  
    }

    createGround () {
        // La geometría es una caja con muy poca altura
        var geometryGround = new THREE.BoxGeometry (200,0.2,200);
        
        // El material se hará con una textura de marmol
        var texture = new THREE.TextureLoader().load('../imgs/wood.jpg');
        var materialGround = new THREE.MeshPhongMaterial ({map: texture});
        
        // Ya se puede construir el Mesh
        var ground = new THREE.Mesh (geometryGround, materialGround);
        
        // Todas las figuras se crean centradas en el origen.
        // El suelo lo bajamos la mitad de su altura para que el origen del mundo se quede en su lado superior
        ground.position.y = -0.1;
        
        // lo devolvemos 
        return ground;
    }
    
    createPared () {
        // La geometría es una caja con muy poca altura
        var geometryGround = new THREE.BoxGeometry (0.2,90,200);
        
        // El material se hará con una textura de marmol
        var texture = new THREE.TextureLoader().load('../imgs/textPared.webp');
        var materialGround = new THREE.MeshPhongMaterial ({map: texture});
        
        // Ya se puede construir el Mesh
        var pared = new THREE.Mesh (geometryGround, materialGround);
        
        // Todas las figuras se crean centradas en el origen.
        // El suelo lo bajamos la mitad de su altura para que el origen del mundo se quede en su lado superior
        pared.position.y = 45;
        
        // lo devolvemos 
        return pared;
    }

    createPuerta(){
        //geometria de la puerta
        var geometryPuerta = new THREE.BoxGeometry (30,50,1);

        //material marron
        var material = new THREE.MeshPhongMaterial({color: 0x804000});
        
        // Ya se puede construir el Mesh
        var puertaMesh = new THREE.Mesh (geometryPuerta, material);
        puertaMesh.position.y=25;
        puertaMesh.position.x=-15;
        //puertaMesh.position.x=-20;

        //geometria de la puerta
        var geometryPomo = new THREE.SphereGeometry (1.2,32,16);

        //material dorado
        var materialPomo = new THREE.MeshPhongMaterial({color: 0xFFD700});

        // Ya se puede construir el Mesh
        var pomo = new THREE.Mesh (geometryPomo, materialPomo);
        pomo.position.y=24;
        pomo.position.z=0.9;
        pomo.position.x=-25;

        //geometria marco lateral
        var geometryMarcoLat = new THREE.BoxGeometry (1,44,1);

        //material marron2
        var materialMarco = new THREE.MeshPhongMaterial({color: 0x8B4513});

        // Ya se puede construir el Mesh
        var marcoLatIz = new THREE.Mesh (geometryMarcoLat, materialMarco);
        marcoLatIz.position.y=25;
        marcoLatIz.position.z=0.8;
        marcoLatIz.position.x=-27;

        var marcoLatDe = new THREE.Mesh (geometryMarcoLat, materialMarco);
        marcoLatDe.position.y=25;
        marcoLatDe.position.z=0.8;
        marcoLatDe.position.x=-3;

        //geometria marco lateral
        var geometryMarcoHoriz = new THREE.BoxGeometry (24,1,1);

        // Ya se puede construir el Mesh
        var marcoSup = new THREE.Mesh (geometryMarcoHoriz, materialMarco);
        marcoSup.position.y=3.5;
        marcoSup.position.z=0.8;
        marcoSup.position.x=-15;

        var marcoInf = new THREE.Mesh (geometryMarcoHoriz, materialMarco);
        marcoInf.position.y=46.5;
        marcoInf.position.z=0.8;
        marcoInf.position.x=-15;

        var csg = new CSG();
        csg.union([puertaMesh, pomo, marcoLatIz, marcoLatDe, marcoSup, marcoInf]);
        var puerta = csg.toMesh();

        return puerta;
    }
    
    createTecho() {
        // La geometría es una caja con muy poca altura
        var geometryGround = new THREE.BoxGeometry (200,0.2,200);
        
        // El material se hará con una textura de marmol
        var texture = new THREE.TextureLoader().load('../imgs/techo.jpg');
        var materialGround = new THREE.MeshPhongMaterial ({map: texture});
        
        // Ya se puede construir el Mesh
        var ground = new THREE.Mesh (geometryGround, materialGround);
        
        // Todas las figuras se crean centradas en el origen.
        // El suelo lo bajamos la mitad de su altura para que el origen del mundo se quede en su lado superior
        ground.position.y = 90.1;
        
        // lo devolvemos 
        return ground;
    }

    createInterruptor(){
        var interruptor = new THREE.Object3D();
    
        var geometryBase = new THREE.BoxGeometry (5,5,1);
    
        //material beige
        var materialBase = new THREE.MeshPhongMaterial({color: 0xf5f5dc});
        
        // Ya se puede construir el Mesh
        var BaseMesh = new THREE.Mesh (geometryBase, materialBase);
        BaseMesh.castShadow = true;
        BaseMesh.receiveShadow = true;
        //BaseMesh.position.y=25;
    
        //geometria de la puerta
        var geometryInterruptor = new THREE.BoxGeometry (1,1,4);
    
        //material rojo
        var material = new THREE.MeshPhongMaterial({color: 0xff0000});
        
        // Ya se puede construir el Mesh
        var interruptorMesh = new THREE.Mesh (geometryInterruptor, material);
        interruptorMesh.castShadow = true;
        interruptorMesh.receiveShadow = true;

        interruptorMesh.userData.name = "INTERRUPTOR";
        interruptorMesh.userData.lightOn = false;
        interruptorMesh.userData.draggable = true;
    
        interruptor.add(interruptorMesh);
        interruptor.add( BaseMesh);
        
        return interruptor;
      }
    
    createHabitacion(){
        var hab = new THREE.Object3D();

        var suelo = this.createGround();
        suelo.receiveShadow = true;

        suelo.userData.ground = true;
        suelo.userData.name = "SUELO";

        hab.add(suelo);

        var pared1 = this.createPared();
        pared1.receiveShadow = true;
        //pared1.castShadow = true;
        pared1.position.x=100;
        pared1.userData.name = "PARED1";

        hab.add(pared1);

        var pared2 = this.createPared();
        pared2.receiveShadow = true;
        //pared2.castShadow = true;
        pared2.position.x=-100;
        pared2.userData.name = "PARED2";

        this.puerta = this.createPuerta();
        this.puerta.receiveShadow = true;
        //this.puerta.castShadow = true;
        this.puerta.position.x=-100;
        this.puerta.position.z = 55;
        this.puerta.rotation.y = 1.5708;

        this.puerta.userData.draggable = true;
        this.puerta.userData.name = "PUERTA";
        this.puerta.userData.opened = false;
        this.puerta.userData.locked = true;

        var csg = new CSG();
        csg.subtract([pared2, this.puerta]);
        var pared2Puerta = csg.toMesh();
        pared2Puerta.receiveShadow = true;
        //pared2Puerta.castShadow = true;

        hab.add(pared2Puerta);

        //hab.add(pared2);
        hab.add(this.puerta);

        var pared3 = this.createPared();
        pared3.receiveShadow = true;
        //pared3.castShadow = true;
        pared3.rotation.y=Math.PI/2;
        pared3.position.z=100;
        pared3.userData.name = "PARED3";

        hab.add(pared3);

        var pared4 = this.createPared();
        pared4.receiveShadow = true;
        //pared4.castShadow = true;
        pared4.rotation.y=Math.PI/2;
        pared4.position.z=-100;
        pared4.userData.name = "PARED4";

        hab.add(pared4);

        var techo = this.createTecho();
        techo.receiveShadow = true;
        //techo.castShadow = true;
        techo.userData.name = "TECHO";

        hab.add(techo);

        var interruptor = this.createInterruptor();
        interruptor.position.y=30;
        interruptor.position.x=-99.5;
        interruptor.position.z = 90;
        interruptor.rotation.y=1.57079633;


        hab.add(interruptor);

        hab.userData.name = "HABITACION";

        return hab;
    }

    unlockPuerta(){
        this.puerta.userData.locked = false;
    }

    abrirPuerta(object){
        if (object.userData.locked){
            this.setMessage("La puerta parace estar bloqueada, pero una llave solucionaría el problema");
        }else{
            object.rotation.y = 3.31612558;
            object.userData.opened = true;
        }
    }

    cerrarPuerta(object){
        object.rotation.y = 1.57079633;
        object.userData.opened = false;
    }

    apagarLuz(object){
        object.userData.lightOn = false;
        object.rotation.x = 2.35619449;
    }

    encenderLuz(object){
        object.userData.lightOn = true;
        object.rotation.x = 0.78539816;
    }

    update(){
    
    }

    setMessage (str) {
        document.getElementById ("Messages").innerHTML = "<h2>"+str+"</h2>";
    }
}

export { Habitacion };
