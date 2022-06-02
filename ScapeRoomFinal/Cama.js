import * as THREE from '../libs/three.module.js'

class Cama extends THREE.Object3D {
    constructor(gui,titleGui) {
      super();
      
      var camaF = this.createCama();

      camaF.rotation.y = 1.5708;
      camaF.position.x = 85;
      camaF.position.z = -65;

      this.papel = this.createPapel();
      this.papel.position.x = 70;
      this.papel.position.y = 1;
      this.papel.position.z = -65;
      this.papel.userData.draggable = true;
      this.papel.userData.name="PAPEL";
      this.add(this.papel);

      this.add(camaF);
    }

    createColchon(){
  
        var geometryColchon = new THREE.BoxGeometry (69,6,30);
        var materialColchon = new THREE.MeshPhongMaterial({color: 0xFF0000});
        
        // Ya se puede construir el Mesh
        var ColchonMesh = new THREE.Mesh (geometryColchon, materialColchon);
        
        ColchonMesh.position.y = 10;
        
        // lo devolvemos 
        return ColchonMesh;
      }
    
      createMaderasCama(){
        var geometryMadera = new THREE.BoxGeometry (70,3,30);
        var materialMadera = new THREE.MeshPhongMaterial({color: 0x804000});
        
        // Ya se puede construir el Mesh
        var MaderaMesh = new THREE.Mesh (geometryMadera, materialMadera);
        
        MaderaMesh.position.y = 5.5;
        
        // lo devolvemos 
        return MaderaMesh;
      }
    
      createPataCama(){
        var geometryPata = new THREE.BoxGeometry (4,4,4);
        var materialPata = new THREE.MeshPhongMaterial({color: 0x804000});
        
        // Ya se puede construir el Mesh
        var PataMesh = new THREE.Mesh (geometryPata, materialPata);
        
        PataMesh.position.y = 2;
        
        // lo devolvemos 
        return PataMesh;
      }
    
      createCabecera(){
        var geometryCabecera = new THREE.BoxGeometry (0.5,20,30);
        var materialCabecera = new THREE.MeshPhongMaterial({color: 0x804000});
        
        // Ya se puede construir el Mesh
        var CabeceraMesh = new THREE.Mesh (geometryCabecera, materialCabecera);
        
        CabeceraMesh.position.y = 14;
        CabeceraMesh.position.x = 34.75;
        
        // lo devolvemos 
        return CabeceraMesh;
      }
    
      createPieCama(){
        var geometryPieCama = new THREE.BoxGeometry (0.5,12,30);
        var materialPieCama = new THREE.MeshPhongMaterial({color: 0x804000});
        
        // Ya se puede construir el Mesh
        var PieCamaMesh = new THREE.Mesh (geometryPieCama, materialPieCama);
        
        PieCamaMesh.position.y = 10;
        PieCamaMesh.position.x = -34.75;
        
        // lo devolvemos 
        return PieCamaMesh;
      }
    
      createAlmohada(){
      
        var geometryAlmohada = new THREE.CylinderGeometry (5,5,20,32);
        var materialAlmohada = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
        
        // Ya se puede construir el Mesh
        var AlmohadaMesh = new THREE.Mesh (geometryAlmohada, materialAlmohada);
    
        AlmohadaMesh.scale.set(1,1,0.3);
        AlmohadaMesh.rotation.x=1.5708;
        
        AlmohadaMesh.position.y = 14.5;
        AlmohadaMesh.position.x = 29.5;
        
        // lo devolvemos 
        return AlmohadaMesh;
      }
    
      createLateralAlmohada(){
      
        var geometryLateralAlmohada = new THREE.SphereGeometry (5,32,16);
        var materialLateralAlmohada = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
        
        // Ya se puede construir el Mesh
        var AlmohadaLateralMesh = new THREE.Mesh (geometryLateralAlmohada, materialLateralAlmohada);
    
        AlmohadaLateralMesh.scale.set(1,1,0.3);
        AlmohadaLateralMesh.rotation.x=1.5708;
        
        AlmohadaLateralMesh.position.y = 14.5;
        AlmohadaLateralMesh.position.x = 29.5;
        AlmohadaLateralMesh.position.z = 10;
        
        // lo devolvemos 
        return AlmohadaLateralMesh;
      }

      createPapel(){
        var geometria = new THREE.BoxGeometry(5, 0.3, 5);
        var texture = new THREE.TextureLoader().load('../imgs/papel.jpg');
        var material = new THREE.MeshPhongMaterial ({map: texture});

        var papel = new THREE.Mesh(geometria, material);

        return papel;
      }
    
      createCama(){
        var cama = new THREE.Object3D();

        var camaInvisibleGeom = new THREE.BoxGeometry (69,80,30);
        var material = new THREE.MeshPhongMaterial({color: 0xFF0000});

        var camaInvisibleMesh = new THREE.Mesh (camaInvisibleGeom, material);
        camaInvisibleMesh.position.y=40;
        camaInvisibleMesh.position.z = 4;

        camaInvisibleMesh.visible=false;

        cama.add(camaInvisibleMesh);
    
        var colchon = this.createColchon();
        colchon.castShadow = true;
    
        cama.add(colchon);
    
        var maderaCama = this.createMaderasCama();
        maderaCama.castShadow = true;
    
        cama.add(maderaCama);
    
        var pata1 = this.createPataCama();
        pata1.castShadow = true;
        pata1.position.x=-33;
        pata1.position.z=-13;
    
        cama.add(pata1);
    
        var pata2 = this.createPataCama();
        pata2.castShadow = true;
        pata2.position.x=-33;
        pata2.position.z=13;
    
        cama.add(pata2);
    
        var pata3 = this.createPataCama();
        pata3.castShadow = true;
        pata3.position.x=33;
        pata3.position.z=-13;
    
        cama.add(pata3);
    
        var pata4 = this.createPataCama();
        pata4.castShadow = true;
        pata4.position.x=33;
        pata4.position.z=13;
    
        cama.add(pata4);
    
        var cabecera = this.createCabecera();
        cabecera.castShadow = true;
    
        cama.add(cabecera);
    
        var pieCama = this.createPieCama();
        pieCama.castShadow = true;
    
        cama.add(pieCama);
    
        var almohada = this.createAlmohada();
        almohada.castShadow = true;

        almohada.userData.draggable = true;
        almohada.userData.name = "ALMOHADA";
    
        cama.add(almohada);
    
        var lateralAlmohada1 = this.createLateralAlmohada();
        lateralAlmohada1.castShadow = true;
    
        cama.add(lateralAlmohada1);
    
        var lateralAlmohada2 = this.createLateralAlmohada();
        lateralAlmohada2.castShadow = true;
        lateralAlmohada2.position.z=-10;
    
        cama.add(lateralAlmohada2);

        cama.userData.draggable = true;
        cama.userData.name = "CAMA";
    
        return cama;
      }

      cogerPapel(object){
        this.setMessage("Ha obtenido un papel, parece que te advierte sobre un retrato sospechoso.");
        object.userData.name = "SUELO";
        object.visible = false;
      }

    update(){
    
    }

    setMessage (str) {
      document.getElementById ("Messages").innerHTML = "<h2>"+str+"</h2>";
    }
}

export { Cama };