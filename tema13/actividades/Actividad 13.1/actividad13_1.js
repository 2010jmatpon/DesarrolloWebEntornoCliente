"use strict";
$(function () {
    class Boton {
        //solo constructor que irá creando los botones dentro de la zona de contenido además de generar un alert al pulsar en cualquiera de esos botones
        constructor(boton) {
            $('#contenido').append(`<button id="${boton}">${boton}</button>`);
            $(`#${boton}`).on('click', function () {
                alert(`Hola desde ${boton}`);
            });
        }
    }
    class GrupoBot {
        constructor() {
            //Declaro aquí el contador además de dotar de funcionalidad a los botones de añadir y restar
            this.contador = 0;
            console.log("grupobot");
            $('#add').on('click', () => this.add());
            $('#rest').on('click', () => this.rest());
        }
        add() {
            this.contador++;
            new Boton(this.contador);
        }
        rest() {
            if (this.contador >= 1) {
                $(`#${this.contador}`).remove();
                this.contador--;
            }
        }
    }
    new GrupoBot();
});
