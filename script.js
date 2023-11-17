

let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion=document.querySelector("#msj_correccion");
let operacion=document.querySelector("#operacion");
let operacion_actual;

let n1,n2; /* en n1 y n2 se guardan los numeros de cada operacion*/

//funcion suma

function btnSumar(){
    //limpio el div de las correcciones
    msj_correccion.innerHTML =""; /* no me toma el igual*/
    //agrego la clase activa del boton suma
    activarBoton("suma");
    operacion_actual = "+"

    /*asignamos la operacion de sumar a la etiqueta*/
    operacion.innerHTML = " + ";

    //generamos los numeros aleatorios de la suma

    nuevaSuma();

}

function nuevaSuma(){
    // dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random()*10)
    n2 = parseInt(Math.random()*10)
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;

    respuesta_usuario.focus();
}

//Funcion Producto
function btnProducto(){
    //limpio el div de las correcciones
    msj_correccion.innerHTML ="";
    //agrego la clase activa del boton producto
    activarBoton("producto");
    operacion_actual = "*"

    /*asignamos la operacion de sumar a la etiqueta*/
    operacion.innerHTML = " x ";

    //generamos los numeros aleatorios de la suma

    nuevaProducto();

}

function nuevaProducto(){
    // dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random()*10)
    n2 = parseInt(Math.random()*10)
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;

    respuesta_usuario.focus();
}

//funcion Resta
function btnRestar() {
    //limpio el div de las correcciones
    msj_correccion.innerHTML = "";
    //agrego la clase activa del boton resta
    activarBoton("resta");
    operacion_actual = "-";

    /*asignamos la operacion de restar a la etiqueta*/
    operacion.innerHTML = " - ";

    //generamos los numeros aleatorios de la resta
    nuevaResta();
}

function nuevaResta() {
    // un número aleatorio entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    // un número aleatorio entre 0 y n1 para asegurar que n1 >= n2
    n2 = parseInt(Math.random() * (n1 + 1));
    // asignamos los números a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;

    respuesta_usuario.focus();
}

//funcion division
function btnDivision() {
    //limpio el div de las correcciones
    msj_correccion.innerHTML = "";
    //agrego la clase activa del boton resta
    activarBoton("division");
    operacion_actual = "/";

    /*asignamos la operacion de restar a la etiqueta*/
    operacion.innerHTML = " / ";

    //generamos los numeros aleatorios de la division
    nuevaDivision();
}

function nuevaDivision(){
    // aca guardamos los divisores
    let divisores = [];
    //numero aleatorio entre 1 y 10
    n1 = parseInt(Math.random() * 9 + 1);

    //generamos los divisores
    for (var i = 1; i <= n1; i++) {
        if (n1 % i == 0) { //si es divisor lo agrego a la lista
            divisores.push(i);
        }
    }

    let pos = parseInt(Math.random() * (divisores.length));

    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}



// funcion para controlar la respuesta
function corregir() {
    // si no hay respuesta paro
    if (respuesta_usuario.value === "") {
        return;
    }

    let solucion;
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);

    var i = document.createElement("i");

    if (parseFloat(respuesta_usuario.value) === solucion) {
        i.className = "fa-solid fa-check";
    } else {
        i.className = "fa-solid fa-x";
    }

    msj_correccion.appendChild(i);

    // controlo qué tipo de operación estoy para generar una nueva operación
    if (operacion_actual === "+") {
        nuevaSuma();
    } else if (operacion_actual === "-") {
        nuevaResta();   
    } else if (operacion_actual === "*") {
        nuevoProducto();
    } else if (operacion_actual === "/") {
        nuevaDivision();
    }

    // limpio el input
    respuesta_usuario.value = "";
}






//queda para despues
function activarBoton(idboton) {
    // Desactivar la clase activado en todos los botones
    var botones = document.querySelectorAll('.container-operadores button');
    botones.forEach(function(boton) {
        boton.classList.remove('activado');
    });

    // Activar la clase activado en el botón clicado
    var botonClicado = document.getElementById(idboton);
    botonClicado.classList.add('activado');
}
