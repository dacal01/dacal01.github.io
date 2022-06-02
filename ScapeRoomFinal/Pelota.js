import * as THREE from '../libs/three.module.js'
 
class Pelota extends THREE.Object3D {
  constructor(gui,titleGui) {
    super();
        
        // Se crea la parte de la interfaz que corresponde a la esfera
        // Se crea primero porque otros métodos usan las variables que se definen para la interfaz
        this.createGUI(gui,titleGui);

        var pelota = this.createPelota();

        pelota.position.x = 70;
        pelota.position.y = 20;
        pelota.position.z = 90;
        pelota.castShadow = true;

        this.add(pelota);
    }

    createPelota(){
        var geometria = new THREE.SphereGeometry(5,30,30);
        var texture = new THREE.TextureLoader().load('../imgs/futbol.webp');
        var material = new THREE.MeshPhongMaterial ({map: texture});
        const pelota = new THREE.Mesh( geometria, material);
        pelota.castShadow = true;

        return pelota;
    }

    createGUI (gui,titleGui) {
    }

    update () {}
    }

export { Pelota };