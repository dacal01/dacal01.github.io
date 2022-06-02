import * as THREE from '../libs/three.module.js'
import {CSG} from '../libs/CSG-v2.js'

class Mesa extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
    
    var pataDer, pataIzq, tabla1, tabla2, pataCilindro, espacioCajones, cajon2, cajon3, llave;

    pataDer = this.createPata();
    pataDer.castShadow = true;

    pataIzq = this.createPata();
    pataIzq.castShadow = true;

    pataCilindro = this.createPataCilindro();
    pataCilindro.castShadow = true;

    tabla1 = this.createTabla();
    tabla1.receiveShadow = true;
    tabla1.castShadow = true;

    tabla2 = this.createTabla();
    tabla2.receiveShadow = true;
    tabla2.castShadow = true;

    espacioCajones = this.createEspacioCajones();
    espacioCajones.castShadow = true;

    this.cajon1 = this.createCajon();
    this.cajon1.castShadow = true;

    this.cajon1.userData.draggable = true;
    this.cajon1.userData.name = "CAJON1";
    this.cajon1.userData.opened = false;
    this.cajon1.userData.locked = true;

    var cajon2 = this.createCajon();
    cajon2.castShadow = true;

    cajon3 = this.createCajon();
    cajon3.castShadow = true;

    this.llave = this.createLlave();
    this.llave.castShadow = true;
    this.llave.userData.draggable = true;
    this.llave.userData.name = "LLAVE";

    this.llave.position.x = 10;
    this.llave.position.y = 17;
    this.llave.position.z = -10;

    this.cajon1.scale.x = 16;
    this.cajon1.scale.y = 6;
    this.cajon1.scale.z = 18;
    this.cajon1.position.x = 11.5;
    this.cajon1.position.y = 19;
    this.cajon1.position.z = -10.5;

    cajon2.scale.x = 16;
    cajon2.scale.y = 6;
    cajon2.scale.z = 18;
    cajon2.position.x = 11.5;
    cajon2.position.y = 13;
    cajon2.position.z = -10.5;

    cajon3.scale.x = 16;
    cajon3.scale.y = 6;
    cajon3.scale.z = 18;
    cajon3.position.x = 11.5;
    cajon3.position.y = 7;
    cajon3.position.z = -10.5;

    espacioCajones.scale.x = 17;
    espacioCajones.scale.y = 9.5;
    espacioCajones.scale.z = 20;
    espacioCajones.position.x = 11;
    espacioCajones.position.y = 13;
    espacioCajones.position.z = -10.5;

    pataDer.scale.x = 15;
    pataDer.scale.y = 25;
    pataDer.scale.z = 0.5;
    pataDer.position.x = 10;
    pataDer.position.y = 12.5;

    pataIzq.scale.x = 15;
    pataIzq.scale.y = 25;
    pataIzq.scale.z = 0.5;
    pataIzq.rotation.y = 1.6;
    pataIzq.position.x = 55;
    pataIzq.position.y = 12.5;
    pataIzq.position.z = -105;

    pataCilindro.scale.x = 7;
    pataCilindro.scale.y = 25;
    pataCilindro.scale.z = 7;
    pataCilindro.position.x = 10;
    pataCilindro.position.y = 12.5;
    pataCilindro.position.z = -105;

    tabla1.scale.x = 20;
    tabla1.scale.y = 5;
    tabla1.scale.z = 100;
    tabla1.position.x = 10;
    tabla1.position.y = 25;
    tabla1.position.z = -45;

    tabla2.scale.x = 60;
    tabla2.scale.y = 5;
    tabla2.scale.z = 20;
    tabla2.position.x = 30;
    tabla2.position.y = 25;
    tabla2.position.z = -105;

    var mesaInvisibleGeom = new THREE.BoxGeometry (60,80,20);
    var material = new THREE.MeshPhongMaterial({color: 0xFF0000});

    var mesaInvisibleMesh = new THREE.Mesh (mesaInvisibleGeom, material);
    mesaInvisibleMesh.position.y=40;
    mesaInvisibleMesh.position.x=30;
    mesaInvisibleMesh.position.z=-105;

    mesaInvisibleMesh.visible=false;

    var mesaInvisibleGeom2 = new THREE.BoxGeometry (20,80,100);
    var material = new THREE.MeshPhongMaterial({color: 0xFF0000});

    var mesaInvisibleMesh2 = new THREE.Mesh (mesaInvisibleGeom2, material);
    mesaInvisibleMesh2.position.y=40;
    mesaInvisibleMesh2.position.x=4;
    mesaInvisibleMesh2.position.z=-45;

    mesaInvisibleMesh2.visible=false;

    var sillaInvisibleGeom = new THREE.BoxGeometry (22,80,20);
    var material = new THREE.MeshPhongMaterial({color: 0xFF0000});

    var sillaInvisibleMesh = new THREE.Mesh (sillaInvisibleGeom, material);
    sillaInvisibleMesh.position.y=40;
    sillaInvisibleMesh.position.x=36;
    sillaInvisibleMesh.position.z=-50;

    sillaInvisibleMesh.visible=false;

    var mesaCompleta = new THREE.Object3D();

    mesaCompleta.add(pataDer);
    mesaCompleta.add(pataIzq);
    mesaCompleta.add(pataCilindro);
    mesaCompleta.add(tabla1);
    mesaCompleta.add(tabla2);
    mesaCompleta.add(espacioCajones);
    mesaCompleta.add(this.cajon1);
    mesaCompleta.add(cajon2);
    mesaCompleta.add(cajon3);
    mesaCompleta.add(this.llave);
    mesaCompleta.add(mesaInvisibleMesh);
    mesaCompleta.add(mesaInvisibleMesh2);
    mesaCompleta.add(sillaInvisibleMesh);

    mesaCompleta.position.x = -100;
    mesaCompleta.position.z = 15;

    mesaCompleta.castShadow = true;

    mesaCompleta.userData.draggable = true;
    mesaCompleta.userData.name = "ESCRITORIO";

    this.add(mesaCompleta);
  }

  createPata(){
    var geometria = new THREE.BoxGeometry(1, 1, 1);
    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});

    var pata = new THREE.Mesh(geometria, material);

    return pata;
  }

  createPataCilindro(){
    var geometria = new THREE.CylinderGeometry(1, 1, 1, 50);
    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});

    var pata = new THREE.Mesh(geometria, material);

    return pata;
  }

  createTabla(){
    var geometria = new THREE.BoxGeometry(1, 1, 1);
    var texture = new THREE.TextureLoader().load('../imgs/wood.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});

    var tabla = new THREE.Mesh(geometria, material);

    return tabla;
  }

  createEspacioCajones(){
    var geometria = new THREE.BoxGeometry(1, 2, 1);
    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var fig1 = new THREE.Mesh(geometria, material);

    var geometria2 = new THREE.BoxGeometry(1.5, 1.9, 0.9);
    var fig2 = new THREE.Mesh(geometria2, material);
    fig2.position.x = 0.6;

    var csg = new CSG;
    csg.union([fig1]);
    csg.subtract([fig2])

    var espacioCajones = csg.toMesh();    

    return espacioCajones;
  }

  createCajon(){
    var geometria = new THREE.BoxGeometry(1, 1, 1);
    var texture = new THREE.TextureLoader().load('../imgs/wood.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var fig1 = new THREE.Mesh(geometria, material);

    var geometria2 = new THREE.BoxGeometry(0.9, 1.1, 0.9);
    var fig2 = new THREE.Mesh(geometria2, material);
    fig2.position.y = 0.1;

    var asa = this.createAsa();
    asa.position.x = 0.5;

    var csg = new CSG();
    csg.union([fig1, asa]);
    csg.subtract([fig2]);

    var cajon = csg.toMesh();

    return cajon;
  }

  createAsa(){
    var geometria = new THREE.TorusGeometry(0.1, 0.03, 20, 20);
    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var conexion = new THREE.Mesh(geometria, material);

    var geometriaPlano = new THREE.BoxGeometry(10, 10, 1);
    geometriaPlano.translate(0, -5, 0);
    var plano = new THREE.Mesh(geometriaPlano, material);

    var csg = new CSG();
    csg.union([conexion]);
    csg.subtract([plano]);

    var puente = csg.toMesh();
    
    puente.rotation.z = -1.5708;
    puente.rotation.x = 1.5708;

    return puente;
  }

  createLlave(){
    var geometria = new THREE.TorusGeometry(1, 0.3, 20, 20);
    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var asallave = new THREE.Mesh(geometria, material);
    asallave.rotation.x = 1.5708;

    var geometria2 = new THREE.CylinderGeometry(0.3, 0.3, 4);
    var cuerpoLlave = new THREE.Mesh(geometria2, material);
    cuerpoLlave.rotation.z = 1.5708;
    cuerpoLlave.position.x = 3;

    var geometria3 = new THREE.CylinderGeometry(0.3, 0.3, 1);
    var dienteP = new THREE.Mesh(geometria3, material);
    dienteP.rotation.x = 1.5708;
    dienteP.position.x = 3;
    dienteP.position.z = 0.5;

    var geometria4 = new THREE.CylinderGeometry(0.3, 0.3, 1.7);
    var dienteG = new THREE.Mesh(geometria4, material);
    dienteG.rotation.x = 1.5708;
    dienteG.position.x = 4.5;
    dienteG.position.z = 0.85;

    var csg = new CSG();
    csg.union([asallave, cuerpoLlave, dienteP, dienteG]);

    var llave = csg.toMesh();

    return llave;
  }

  unlockCajon1(){
    this.cajon1.userData.locked = false;
  }

  abrirCajon(object){
    if (object.userData.locked){
      this.setMessage("Este cajón está cerrado, necesitas algún método abrirlo");
    }else{
      object.position.x += 10;
      if (object.userData.name == "CAJON1"){
        this.llave.position.x += 10;
      }
      object.userData.opened = true;
    }
  }

  cerrarCajon(object){
    object.position.x -= 10;
    if (object.userData.name == "CAJON1"){
      this.llave.position.x -= 10;
    }
    object.userData.opened = false;
  }

  cogerLlave(object){
    this.setMessage("Ha obtenido una llave, me pregunto que cerradura abrirá");
    object.userData.name = "CAJON1";
    object.visible = false;
  }

  update () {

  }

  setMessage (str) {
    document.getElementById ("Messages").innerHTML = "<h2>"+str+"</h2>";
  }
}

export { Mesa };