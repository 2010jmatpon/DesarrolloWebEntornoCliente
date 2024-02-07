$(function () {
  class Boton {
    //solo constructor
    constructor(boton:number) {
        $('#contenido').append(`<button id="${boton}">${boton}</button>`);
    }
  }

  interface Bot {
    //metodos add y rest
    add(): void;
    rest(): void;
  }

  class GrupoBot implements Bot {
    private contador: number = 0;
    constructor() {
        console.log("grupobot");
        $('#add').on('click',()=>this.add());
    }
    add(): void {
      this.contador++;
      new Boton(this.contador);
    }
    rest(): void {
        if(this.contador >= 1){
            $(`#boton${this.contador}`).remove();
             this.contador--;
        }
    }
  }

  new GrupoBot();
});
