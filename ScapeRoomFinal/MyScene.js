import * as THREE from '../libs/three.module.js'
import { GUI } from '../libs/dat.gui.module.js'
import { PointerLockControls } from '../libs/PointerLockControls.js'


// Clases de mi proyecto

import { Mesa } from './Mesa.js'
import { Silla } from './Silla.js'
import { Cama } from './Cama.js'
import { Habitacion } from './Habitacion.js'
import { Estanteria } from './Estanteria.js'
import { Ordenador } from './Ordenador.js'
import { Ordenador2 } from './Ordenador2.js'
import { Armario } from './Armario.js'
import { Taza } from './Taza.js'
import { Pelota } from './Pelota.js'
import { Cascos } from './Cascos.js'
import { SoporteCascos } from './SoporteCascos.js'
import { Bombilla } from './Bombilla.js'
import { PortaRetrato } from './PortaRetrato.js'
import { Alfil } from './Alfil.js'

const raycaster = new THREE.Raycaster();
const clickMouse = new THREE.Vector2();
const moveMouse = new THREE.Vector2();
var draggable = new THREE.Object3D();

class MyScene extends THREE.Scene {
    // Recibe el  div  que se ha creado en el  html  que va a ser el lienzo en el que mostrar
    // la visualización de la escena
    constructor (myCanvas) { 
    super();

    this.clock = new THREE.Clock ( ) ;
    
    // Lo primero, crear el visualizador, pasándole el lienzo sobre el que realizar los renderizados.
    this.renderer = this.createRenderer(myCanvas);
    this.renderer.shadowMapEnabled = true; // Se habilita el cálculo
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    
    this.createLights ();
    
    // Tendremos una cámara con un control de movimiento con el ratón
    this.createCamera ();
    
    // Y unos ejes. Imprescindibles para orientarnos sobre dónde están las cosas
    this.axis = new THREE.AxesHelper (5);
    //this.add (this.axis);
    
    
    // Por último creamos el modelo.
    // El modelo puede incluir su parte de la interfaz gráfica de usuario. Le pasamos la referencia a 
    // la gui y el texto bajo el que se agruparán los controles de la interfaz que añada el modelo.
    this.mesa = new Mesa(this.gui, "Controles de la mesa");
    this.add(this.mesa);
    this.silla = new Silla(this.gui, "Controles de la silla");
    this.add(this.silla);
    this.cama = new Cama(this.gui, "Controles de la cama");
    this.add(this.cama);
    this.habitacion = new Habitacion(this.gui, "Controles de la habitacion");
    this.add(this.habitacion);
    this.estanteria = new Estanteria(this.gui, "Controles de la estanteria");
    this.add(this.estanteria);
    this.ordenador = new Ordenador(this.gui, "Controles del pc");
    this.add(this.ordenador);
    this.ordenador2 = new Ordenador2(this.gui, "Controles del pc");
    this.add(this.ordenador2);
    this.armario = new Armario(this.gui, "Controles del armario");
    this.add(this.armario);
    this.taza = new Taza(this.gui, "Controles de la taza");
    this.add(this.taza);
    this.pelota = new Pelota(this.gui, "Controles de la pelota");
    this.add(this.pelota);
    this.cascos = new Cascos(this.gui, "Controles de los cascos");
    this.add(this.cascos);
    this.soporte = new SoporteCascos(this.gui, "Controles soporte casco");
    this.add(this.soporte);
    this.bombilla = new Bombilla(this.gui, "COntroles de la bombilla");
    this.add(this.bombilla);
    this.portaRetrato = new PortaRetrato(this.gui, "COntroles del retratro");
    this.add(this.portaRetrato);
    this.alfil = new Alfil(this.gui, "Controles del alfil");
    this.add(this.alfil);
  }
  
  createCamera () {
    // Para crear una cámara le indicamos
    //   El ángulo del campo de visión vértical en grados sexagesimales
    //   La razón de aspecto ancho/alto
    //   Los planos de recorte cercano y lejano
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000000);
    // También se indica dónde se coloca
    this.camera.position.set (0, 40, 0); //6 3 6
    // Y hacia dónde mira
    var objetivo = new THREE.Vector3 (0,40,0);
    this.camera.lookAt(objetivo);
    this.add (this.camera);

    this.camera.castShadow = true;
    this.camera.shadowCameraVisible = true;

    this.cameraControl = new PointerLockControls(this.camera, this.renderer.domElement);
    //this.cameraControl.enableDamping = true;
    //this.cameraControl.dampingFactor = 0.05;

    //this.cameraControl.screenSpacePanning = false;

    //this.cameraControl.minDistance = 10;
    //this.cameraControl.maxDistance = 10;

    this.cameraControl.minPolarAngle = Math.PI/4;

    //this.cameraControl.target = objetivo;

    //this.cameraControl.keyPanSpeed = 150;
    //this.cameraControl.rotateSpeed = 0.25;
    //this.cameraControl.pointerSpeed = 0.25;
  }
  
  createGUI () {
    
  }
  
  createLights () {
    // Se crea una luz ambiental, evita que se vean complentamente negras las zonas donde no incide de manera directa una fuente de luz
    // La luz ambiental solo tiene un color y una intensidad
    // Se declara como   var   y va a ser una variable local a este método
    //    se hace así puesto que no va a ser accedida desde otros métodos
    var ambientLight = new THREE.AmbientLight(0xccddee, 0.35);
    // La añadimos a la escena
    this.add (ambientLight);
    
    // Se crea una luz focal que va a ser la luz principal de la escena
    // La luz focal, además tiene una posición, y un punto de mira
    // Si no se le da punto de mira, apuntará al (0,0,0) en coordenadas del mundo
    // En este caso se declara como   this.atributo   para que sea un atributo accesible desde otros métodos.
    this.luzHabitacion = new THREE.PointLight( 0xffffff, 0 );
    this.luzHabitacion.position.set( 0, 77, 0 );

    this.luzHabitacion.castShadow = true;
    this.luzHabitacion.shadowCameraVisible = true;
    this.luzHabitacion.intensity = 0;

    this.add (this.luzHabitacion);
  }
  
  setLightIntensity (valor) {
    this.luzHabitacion.intensity = valor;
  }
  
  setAxisVisible (valor) {
    this.axis.visible = valor;
  }
  
  createRenderer (myCanvas) {
    // Se recibe el lienzo sobre el que se van a hacer los renderizados. Un div definido en el html.
    
    // Se instancia un Renderer   WebGL
    var renderer = new THREE.WebGLRenderer();
    
    // Se establece un color de fondo en las imágenes que genera el render
    renderer.setClearColor(new THREE.Color(0xEEEEEE), 1.0);
    
    // Se establece el tamaño, se aprovecha la totalidad de la ventana del navegador
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // La visualización se muestra en el lienzo recibido
    $(myCanvas).append(renderer.domElement);
    
    return renderer;  
  }
  
  getCamera () {
    // En principio se devuelve la única cámara que tenemos
    // Si hubiera varias cámaras, este método decidiría qué cámara devuelve cada vez que es consultado
    return this.camera;
  }
  
  setCameraAspect (ratio) {
    // Cada vez que el usuario modifica el tamaño de la ventana desde el gestor de ventanas de
    // su sistema operativo hay que actualizar el ratio de aspecto de la cámara
    this.camera.aspect = ratio;
    // Y si se cambia ese dato hay que actualizar la matriz de proyección de la cámara
    this.camera.updateProjectionMatrix();
  }
    
  onWindowResize () {
    // Este método es llamado cada vez que el usuario modifica el tamapo de la ventana de la aplicación
    // Hay que actualizar el ratio de aspecto de la cámara
    this.setCameraAspect (window.innerWidth / window.innerHeight);
    
    // Y también el tamaño del renderizador
    this.renderer.setSize (window.innerWidth, window.innerHeight);
  }

  update () {
    // Le decimos al renderizador "visualiza la escena que te indico usando la cámara que te estoy pasando"
    this.renderer.render (this, this.getCamera());

    // Se actualiza la posición de la cámara según su controlador
    
    
    // Se actualiza el resto del modelo
    this.mesa.update();
    this.silla.update();
    this.cama.update();
    this.habitacion.update();
    this.estanteria.update();
    this.ordenador.update();
    this.ordenador2.update();
    this.armario.update();
    this.taza.update();
    this.pelota.update();
    this.cascos.update();
    this.soporte.update();
    this.bombilla.update();
    this.portaRetrato.update();
    this.alfil.update();

    // Este método debe ser llamado cada vez que queramos visualizar la escena de nuevo.
    // Literalmente le decimos al navegador: "La próxima vez que haya que refrescar la pantalla, llama al método que te indico".
    // Si no existiera esta línea,  update()  se ejecutaría solo la primera vez.
    requestAnimationFrame(() => this.update())
  }

  accionPuerta(object){
    if (object.userData.opened){
      this.habitacion.cerrarPuerta(object);
    }else{
      this.habitacion.abrirPuerta(object);
    }
  }

  accionCajon(object){
    if (object.userData.opened){
      this.mesa.cerrarCajon(object);
    }else{
      this.mesa.abrirCajon(object);
    }
  }

  accionLuz(object){
    if (object.userData.lightOn){
      this.habitacion.apagarLuz(object);
      this.apagarLuz(object);
      setMessage("Deberías volver a encender la luz, no se ve nada");
    }else{
      this.habitacion.encenderLuz(object);
      this.encenderLuz(object);
      setMessage("Por fin se puede ver, es hora de buscar como salir de aquí");
    }
  }

  encenderLuz(object){
    this.setLightIntensity(0.5);
  }

  apagarLuz(object){
    this.setLightIntensity(0);
  }

  obtenerLlave(object){
    this.mesa.cogerLlave(object);
    this.habitacion.unlockPuerta();
  }

  obtenerPapel(object){
    this.cama.cogerPapel(object);
  }

  obtenerRetrato(object){
    this.portaRetrato.cogerRetrato(object);
    this.mesa.unlockCajon1();
  }
}

function setMessage (str) {
  document.getElementById ("Messages").innerHTML = "<h2>"+str+"</h2>";
}

/// La función   main
$(function () {
  var luzEncendida = false;
  
  // Se instancia la escena pasándole el  div  que se ha creado en el html para visualizar
  var scene = new MyScene("#WebGL-output");

  // Se añaden los listener de la aplicación. En este caso, el que va a comprobar cuándo se modifica el tamaño de la ventana de la aplicación.
  window.addEventListener ("resize", () => scene.onWindowResize());

  // clickear un objeto -> raycaster
  window.addEventListener("mousedown", (event) => {
    clickMouse.x = (event.clientX / window.innerWidth)*2-1;
    clickMouse.y = -(event.clientY / window.innerHeight)*2+1;

    raycaster.setFromCamera(clickMouse, scene.getCamera());
    const found = raycaster.intersectObjects(scene.children);

    if (found.length > 0 && found[0].object.userData.draggable){
      draggable = found[0].object;

      if (!luzEncendida){
        setMessage("Está tan oscuro que es imposible realizar ninguna acción");
      }
      if (draggable.userData.name == "INTERRUPTOR"){
        luzEncendida = true;
        scene.accionLuz(draggable);
      }
      if (luzEncendida){
        switch (draggable.userData.name){
          case "PUERTA":
            scene.accionPuerta(draggable);
            break;
          case "CAJON1":
            scene.accionCajon(draggable);
            break;
          case "LLAVE":
            scene.obtenerLlave(draggable);
            break;
          case "PAPEL":
            scene.obtenerPapel(draggable);
            break;
          case "RETRATO":
            scene.obtenerRetrato(draggable);
            break;
          default:
            break;
        }
º      }
      
      draggable = found[0].object;
      console.log("found object " + draggable.userData.name);
    }

    if(draggable){
      console.log("dropping draggable " + draggable.userData.name);
      draggable = null;
      return;
    }
  } )

  function detectCollision(valor){
    scene.cameraControl.unlockAllDirection();

    var rotationMatrix;
    var cameraDirection = scene.cameraControl.getDirection(new THREE.Vector3(0,0,0)).clone();

    if (valor === 0){ // scene.cameraControl.moveForward()
      // Nothing to do!
    }else{
      if (valor === 1){ // scene.cameraControl.moveBackward()
        rotationMatrix = new THREE.Matrix4();
        rotationMatrix.makeRotationY(180 * Math.PI / 180);
      }else{
        if (valor === 2){ // scene.cameraControl.moveLeft()
          rotationMatrix = new THREE.Matrix4();
          rotationMatrix.makeRotationY(90 * Math.PI / 180);
        }else{
          if (valor === 3){ // scene.cameraControl.moveRight()
            rotationMatrix = new THREE.Matrix4();
            rotationMatrix.makeRotationY((360-90) * Math.PI / 180);
          }else{
            return;
          }
        }
      }
    }

    if (rotationMatrix !== undefined){
      cameraDirection.applyMatrix4(rotationMatrix);
    }
    var raycaster2 = new THREE.Raycaster(scene.cameraControl.getObject().position, cameraDirection);
    var intersects = raycaster2.intersectObjects(scene.children);

    if ((intersects.length > 0 && intersects[0].distance < 25)){
      console.log("Colision con el objeto " + intersects[0].object.userData.name);
      scene.cameraControl.lockDirection(valor);
      
    }
  }

  let mouseDown = false;
  window.addEventListener('mousedown',()=>{
    mouseDown = true
    scene.cameraControl.lock();
  })
  document.addEventListener('mouseup',()=>{
    if(mouseDown){
        mouseDown = false
        scene.cameraControl.unlock()
    }
  })

  window.addEventListener("keydown", (event) => {
    console.log("llega");
    switch(event.code){
      case "KeyW":
        scene.cameraControl.moveForward(.99);
        detectCollision(0);
        break;
      case "KeyS":
        scene.cameraControl.moveForward(-.99);
        detectCollision(1);
        break;
      case "KeyA":
        scene.cameraControl.moveRight(-.99);
        detectCollision(2);
        break;
      case "KeyD":
        scene.cameraControl.moveRight(.99);
        detectCollision(3);
        break;
      default:
        break;
    }
  })

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Que no se nos olvide, la primera visualización.
  scene.update();
});