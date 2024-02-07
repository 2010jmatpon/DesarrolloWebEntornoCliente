"use strict";
$(function () {
    class Boton {
        //solo constructor
        constructor(boton) {
            $('#contenido').append(`<button id="${boton}">${boton}</button>`);
        }
    }
    class GrupoBot {
        constructor() {
            this.contador = 0;
            console.log("grupobot");
            $('#add').on('click', () => this.add());
        }
        add() {
            this.contador++;
            new Boton(this.contador);
        }
        rest() {
            if (this.contador >= 1) {
                $(`#boton${this.contador}`).remove();
                this.contador--;
            }
        }
    }
    new GrupoBot();
});
