import * as THREE from '../libs/three.module.js'
import { CSG } from '../libs/CSG-v2.js'
 
class PortaRetrato extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
    
    // Se crea la parte de la interfaz que corresponde a la caja
    // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
    this.createGUI(gui,titleGui);
    
    var marcoGeom = new THREE.BoxGeometry(6,8,0.5);
    var texture = new THREE.TextureLoader().load('../imgs/madera2.jpeg');
    var material = new THREE.MeshPhongMaterial ({map: texture});

    var marcoMesh = new THREE.Mesh (marcoGeom, material);
    marcoMesh.castShadow = true;

    var restarGeom = new THREE.BoxGeometry(4,6,1);
    var restarMesh = new THREE.Mesh (restarGeom, material);
    restarMesh.castShadow = true;

    var retratoGeom = new THREE.BoxGeometry(4,6,0.3);
    var textureRetrato = new THREE.TextureLoader().load('../imgs/retrato.jpg');
    var materialRetrato = new THREE.MeshPhongMaterial ({map: textureRetrato});

    this.retratoMesh = new THREE.Mesh (retratoGeom, materialRetrato);
    this.retratoMesh.castShadow = true;
    this.retratoMesh.userData.draggable = true;
    this.retratoMesh.userData.name = "RETRATO";

    var retratoGeom2 = new THREE.BoxGeometry(4,6,0.3);
    var textureRetrato2 = new THREE.TextureLoader().load('../imgs/contraseña.jpg');
    var materialRetrato2 = new THREE.MeshPhongMaterial ({map: textureRetrato2});

    this.retratoMesh2 = new THREE.Mesh (retratoGeom2, materialRetrato2);
    this.retratoMesh2.castShadow = true;
    this.retratoMesh2.visible = false;
    this.retratoMesh2.userData.draggable = true;
    this.retratoMesh2.userData.name = "RETRATO";

    var soporteGeom = new THREE.BoxGeometry(1.5,4,0.5);
    var soporteMesh = new THREE.Mesh (soporteGeom, material);
    soporteMesh.castShadow = true;

    soporteMesh.position.y=-2;
    soporteMesh.rotation.x=0.785398164;
    soporteMesh.position.z=-1.5;

    var fondoGeom = new THREE.BoxGeometry(4,6,0.3);

    var fondoMesh = new THREE.Mesh (fondoGeom, material);
    fondoMesh.castShadow = true;
    fondoMesh.position.z=-0.3;

    
    //se crea el objeto CSG y se opera con el
    var csg = new CSG();
    csg.subtract([marcoMesh,restarMesh]);


    var resultadoMesh = csg.toMesh();
    resultadoMesh.castShadow = true;

    this.add(resultadoMesh);
    this.add(this.retratoMesh);
    this.add(this.retratoMesh2);
    this.add(soporteMesh);
    this.add(fondoMesh);
    this.castShadow = true;

    this.position.y=4;
    this.rotation.x=0.261799388;


    this.rotation.y=3.14159265;
    this.position.x=68;
    this.position.z=83;
    this.position.y=40;
  }

  cogerRetrato(object){
    if (this.retratoMesh.visible != false){
      this.setMessage("Examina la foto del retrato y descubre un doble fondo con una contraseña que abre algo y no es la puerta");
      this.retratoMesh.visible = false;
      this.retratoMesh2.visible = true;
    }
  }
  
  createGUI (gui,titleGui) {
   
  }
  
  update () {
   
  }

  setMessage (str) {
    document.getElementById ("Messages").innerHTML = "<h2>"+str+"</h2>";
  }
}

export { PortaRetrato };