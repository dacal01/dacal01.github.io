import * as THREE from '../libs/three.module.js'
import {CSG} from '../libs/CSG-v2.js'

class Cascos extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
        
    this.createGUI(gui,titleGui);

    var puente, parteDerecha, parteIzquierda;

    puente = this.createPuente();
    puente.position.x = -90;
    puente.position.y = 32;
    puente.position.z = -55;
    puente.userData.name = "AURICULARES";

    parteDerecha = this.createParteDerecha();
    parteDerecha.position.x = -90;
    parteDerecha.position.y = 32;
    parteDerecha.position.z = -55;
    parteDerecha.userData.name = "AURICULARES";

    parteIzquierda = this.createParteIzquierda();
    parteIzquierda.position.x = -90;
    parteIzquierda.position.y = 32;
    parteIzquierda.position.z = -55;
    parteIzquierda.userData.name = "AURICULARES";

    var auriculares = new THREE.Object3D();
    auriculares.add(puente);
    auriculares.add(parteDerecha);
    auriculares.add(parteIzquierda);
    auriculares.castShadow = true;
    auriculares.userData.name = "AURICULARES";

    this.add(auriculares);
  }

  createPuente(){
    var geometria = new THREE.TorusGeometry(2, 0.1, 20, 20);
    geometria.scale(1, 0.5, 1);
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
    puente.castShadow = true;

    return puente;
  }

  createCirculo(valor){
    var geometria = new THREE.TorusGeometry(1, 0.1, 20, 20);
    var texture = new THREE.TextureLoader().load('../imgs/plasticoRojo.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});

    if (valor == "derecha"){
        geometria.rotateY(1.6);
        geometria.translate(2, -1, 0);
        geometria.scale(1, 1.3, 1);
    }else{
        if (valor == "izquierda"){
            geometria.rotateY(1.6);
            geometria.translate(-2, -1, 0);
            geometria.scale(1, 1.3, 1);
        }
    }

    var circulo = new THREE.Mesh(geometria, material);
    circulo.castShadow = true;

    return circulo;
  }

  createParteIzquierda(){    
    var texture = new THREE.TextureLoader().load('../imgs/plastico.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var circulo = this.createCirculo("izquierda");

    var geometriaEsfera = new THREE.SphereGeometry(0.9, 20, 20);
    geometriaEsfera.translate(-2, -1, 0);
    geometriaEsfera.scale(1, 1.3, 1);
    var esfera = new THREE.Mesh(geometriaEsfera, material);

    var geometriaPlano = new THREE.BoxGeometry(1, 5, 3);
    geometriaPlano.translate(-1.4, 0, 0);
    var caja = new THREE.Mesh(geometriaPlano, material);

    var csg = new CSG();
    csg.union([esfera]);
    csg.subtract([caja]);

    var casco = csg.toMesh();
    casco.add(circulo);
    casco.castShadow = true;

    return casco;
  }

  createParteDerecha(){
    var texture = new THREE.TextureLoader().load('../imgs/plastico.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var circulo = this.createCirculo("derecha");

    var geometriaEsfera = new THREE.SphereGeometry(0.9, 20, 20);
    geometriaEsfera.translate(2, -1, 0);
    geometriaEsfera.scale(1, 1.3, 1);
    var esfera = new THREE.Mesh(geometriaEsfera, material);

    var geometriaPlano = new THREE.BoxGeometry(1, 5, 3);
    geometriaPlano.translate(1.4, 0, 0);
    var caja = new THREE.Mesh(geometriaPlano, material);

    var csg = new CSG();
    csg.union([esfera]);
    csg.subtract([caja]);

    var casco = csg.toMesh();
    casco.add(circulo);
    casco.castShadow = true;

    return casco;
  }

  createGUI (gui,titleGui) {
  }

  update () {
  }
}

export { Cascos };