class Celular {
 constructor(color, peso, rdp, rdc,ram){
           this.color = color;
           this.peso = peso;
           this.resolucionDePantalla = rdp;
           this.resolucionDeCamara = rdc;
           this.memoriaRam = ram;
           this.encendido = false;
 } 
 presionarBotonEncendido() {
           if (this.encendido == false){
                     alert("celular prendido");
                     this.encendido = true;
           } else {
                     alert("celular apagado")
                     this.encendido = false;
           }
 }
 reiniciar(){
           if (this.encendido == true) {
                     alert("reiniciando celular");
           } else {
                     alert("el celular esta apagado")
           }
 }
 tomarFoto(){
           alert('foto tomada en una rsolucion de: ${this.resolucionDeCamara})
 }
 grabarVideo(){
           alert('grabando video en ${this.resolucionDeCamara}')
 }
}

celular1 = new celulares("rojo", "150g", "5", "full hd", "2GB");

celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();
class Celular {
 constructor(color, peso, rdp, rdc,ram){
           this.color = color;
           this.peso = peso;
           this.resolucionDePantalla = rdp;
           this.resolucionDeCamara = rdc;
           this.memoriaRam = ram;
           this.encendido = false;
 } 
 presionarBotonEncendido() {
           if (this.encendido == false){
                     alert("celular prendido");
                     this.encendido = true;
           } else {
                     alert("celular apagado")
                     this.encendido = false;
           }
 }
 reiniciar(){
           if (this.encendido == true) {
                     alert("reiniciando celular");
           } else {
                     alert("el celular esta apagado")
           }
 }
 tomarFoto(){
           alert('foto tomada en una rsolucion de: ${this.resolucionDeCamara})
 }
 grabarVideo(){
           alert('grabando video en ${this.resolucionDeCamara}')
 }
}

celular1 = new celulares("rojo", "150g", "5", "full hd", "2GB");

celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();