import * as THREE from '../libs/three.module.js'

class Silla extends THREE.Object3D {
  constructor(gui,titleGui) {
      super();
      
    var soporte =  this.createSoportePatasSilla();
    soporte.castShadow = true;
    soporte.position.x = 35;
    soporte.position.z = -50;

    var silla = this.createSilla();
    silla.castShadow = true;

    var sillaCompleta = new THREE.Object3D();

    sillaCompleta.add(soporte);
    sillaCompleta.add(silla);

    sillaCompleta.position.x = -100;
    sillaCompleta.position.y = 0.5;
    sillaCompleta.position.z = 15;

    sillaCompleta.castShadow = true;
    sillaCompleta.receiveShadow = true;

    sillaCompleta.traverseVisible((soporte) => {
      soporte.castShadow = true;
      soporte.receiveShadow = true;
    });

    sillaCompleta.traverseVisible((silla) => {
      silla.castShadow = true;
      silla.receiveShadow = true;
    });

    sillaCompleta.userData.draggable = true;
    sillaCompleta.userData.name = "SILLA";

    this.add(sillaCompleta);
  }

  createSoportePatasSilla(){
    var cilindro = new THREE.CylinderGeometry(3.5,3.5,12);
    var texture = new THREE.TextureLoader().load('../imgs/metal.jpg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var fig1 = new THREE.Mesh(cilindro, material);

    var pata1 = new THREE.BoxGeometry(8, 1, 1);
    var pata2 = new THREE.BoxGeometry(8, 1, 1);
    var pata3 = new THREE.BoxGeometry(8, 1, 1);
    var pata4 = new THREE.BoxGeometry(8, 1, 1);
    var fig2 = new THREE.Mesh(pata1, material);
    var fig3 = new THREE.Mesh(pata2, material);
    var fig4 = new THREE.Mesh(pata3, material);
    var fig5 = new THREE.Mesh(pata4, material);

    var rueda1 = new THREE.SphereGeometry(1, 20, 20);
    var rueda2 = new THREE.SphereGeometry(1, 20, 20);
    var rueda3 = new THREE.SphereGeometry(1, 20, 20);
    var rueda4 = new THREE.SphereGeometry(1, 20, 20);
    var fig6 = new THREE.Mesh(rueda1, material);
    var fig7 = new THREE.Mesh(rueda2, material);
    var fig8 = new THREE.Mesh(rueda3, material);
    var fig9 = new THREE.Mesh(rueda4, material);

    fig1.position.y = 7;
    fig2.position.x = 7;
    fig2.position.y = 2;
    fig3.rotation.y = 1.5708;
    fig3.position.z = -7;
    fig3.position.y = 2;
    fig4.position.x = -7;
    fig4.position.y = 2;
    fig5.rotation.y = 1.5708;
    fig5.position.z = 7;
    fig5.position.y = 2;

    fig2.rotation.z = -0.261799;
    fig4.rotation.z = 0.261799;
    fig3.rotation.x = -0.261799;
    fig5.rotation.x = 0.261799;

    fig6.position.x = 11;
    fig6.position.y = 0.5;
    fig7.position.x = -11;
    fig7.position.y = 0.5;
    fig8.position.z = -11;
    fig8.position.y = 0.5;
    fig9.position.z = 11;
    fig9.position.y = 0.5;

    var soporte = new THREE.Object3D();
    
    soporte.add(fig1);
    soporte.add(fig2);
    soporte.add(fig3);
    soporte.add(fig4);
    soporte.add(fig5);
    soporte.add(fig6);
    soporte.add(fig7);
    soporte.add(fig8);
    soporte.add(fig9);

    return soporte;
  }

  createSilla(){
    var texture = new THREE.TextureLoader().load('../imgs/cueroNegro.jpeg');
    var material = new THREE.MeshPhongMaterial ({map: texture});
    var g1 = new THREE.BoxGeometry(20, 3, 20);
    var g2 = new THREE.BoxGeometry(3, 25, 20);

    var base = new THREE.Mesh(g1, material);
    var respaldo = new THREE.Mesh(g2, material);

    base.position.x = 35;
    base.position.y = 14.5;
    base.position.z = -50;
    respaldo.position.x = 45;
    respaldo.position.y = 25.5;
    respaldo.position.z = -50;

    var silla = new THREE.Object3D();

    silla.add(base);
    silla.add(respaldo);

    return silla;
  }

  update () {

  }
}

export { Silla };