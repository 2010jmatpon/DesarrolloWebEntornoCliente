$(function () {
  class Boton {
    //solo constructor que irá creando los botones dentro de la zona de contenido además de generar un alert al pulsar en cualquiera de esos botones
    constructor(boton:number) {
        $('#contenido').append(`<button id="${boton}">${boton}</button>`);
          $(`#${boton}`).on('click', function(){
              alert(`Hola desde ${boton}`);
          })
      }
  }

  interface Bot {
    //metodos add y rest
    add(): void;
    rest(): void;
  }

  class GrupoBot implements Bot {
      //Declaro aquí el contador además de dotar de funcionalidad a los botones de añadir y restar
    private contador: number = 0;
    constructor() {
        console.log("grupobot");
        $('#add').on('click',()=>this.add());
        $('#rest').on('click',()=>this.rest());
    }
    add(): void {
      this.contador++;
      new Boton(this.contador);
    }
    rest(): void {
        if(this.contador >= 1){
            $(`#${this.contador}`).remove();
             this.contador--;
        }
    }
  }

  new GrupoBot();
});