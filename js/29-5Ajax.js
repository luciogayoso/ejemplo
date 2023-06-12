function Ejercicio1() {
    var meses = ["Enero","Febrero","Marzo","Abrir","Mayo","junio","julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
}




function Ejercicio2() {
    var valores = [true, 5, false, "hola", "adios",2,"gjdjdflk"];
    var valor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof(valores[i]) == "string") {
            if (valores[i].length > valor.length) {
            valor = valores[i];
        }
    }
}

    console.log("el mayor es "+valor);

    //comparacion directa
if (valores[3].length > valores[4].length) {
    console.log("hola en mayor");
}else{
    console.log("adios en mayor")
}
}


function Ejercicio3() {

    var numero1 = 5;
    var numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
console.log("numero1 es negativo o distinto de cero");
}
numero1 = numero1 + 1;
if(numero2 > numero1) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
}



function Ejercicio4(params) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

var dni = document.querySelector("#dni").value;
var letraUsuario = document.querySelector("#letra").value;
var letraUsuarioMayuscula = letraUsuario.toUpperCase();

if (dni > 0 && dni < 99999999) {
    var posicion = dni % 23;
    if (letras[posicion] == letraUsuarioMayuscula) {
        console.log("El número DNI y la letra son correctos");
    }else {
        console.log("La letra que ha indicado no es correcta");
    }
}else {
    console.log("El número proporcionado no es válido");
}

}


function Ejercicio5() {
    var entero = document.querySelector("#entero").value;
    var aux = 1;
    for (let i = entero; i > 0; i--) {
        aux = aux * i;
    }
    console.log(aux);
}


function Ejercicio6(params) {
    var num = document.querySelector("#parOImpar").value;
    if (num % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}


function Ejercicio7() {
    var cadena = document.querySelector("#Cadena").value;
    let minuscula = 0;
    let mayuscula = 0;
   
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charCodeAt(i) > 64 && cadena.charCodeAt(i) < 91) {
            mayuscula++;
        } else if (cadena.charCodeAt(i) > 96 && cadena.charCodeAt(i) < 122){
            minuscula++;
        }
    }

    if (mayuscula > 0 && minuscula > 0) {
        console.log("Es una mezcla de ambas.")
    }else if (mayuscula == 0 && minuscula > 0) {
        console.log("Formado sólo por minúsculas.")
    }else if (mayuscula > 0 && minuscula == 0) {
        console.log("Formado sólo por mayusculas.")
    }
}

function Ejercicio8(params) {
    let cadena = document.querySelector("#palindromo").value;
    let sinEspacio = cadena.split(" ").join("").toUpperCase();
    let cadenaReversa = sinEspacio.split("").reverse().join("").toUpperCase();

    if (sinEspacio == cadenaReversa) {
        console.log("Es un palindromo");
    }else {
        console.log("No es un palindromo");
    }
}

//ejercicio 9
function Persona(nombre,edad,genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function () {
    console.log("Mi nombre es "+this.nombre +" y tengo "+this.edad + " año de edad y mi genero es "+ this.genero);
}

function Estudiante(nombre,edad,genero,curso, grupo) {
    Persona.call(this,nombre,edad,genero)
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona);

Estudiante.prototype.registrar = function () {
    console.log("El alumno "+this.nombre +" de "+this.edad + " año de edad y genero "+ this.genero+", a sido resgistrado en el curso "+ this.curso +" y en el grupo "+this.grupo);
}

function Profesor(nombre,edad,genero,asignatura, nivel) {
    Persona.call(this,nombre,edad,genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona);

Profesor.prototype.asignar = function () {
    console.log("El Profesor "+this.nombre +" de "+this.edad + " de edad y genero "+ this.genero+" a sido asignado a la asignatura "+ this.asignatura +" y en el nivel "+this.nivel);
}

function EstudianteInstancia() {
    let nombre = document.querySelector("#Nombre").value;
    let edad = document.querySelector("#Edad").value;
    let genero = document.querySelector("#Genero").value;
    let curso = document.querySelector("#Curso").value;
    let grupo = document.querySelector("#Grupo").value;

    let estudiante = new Estudiante(nombre,edad,genero,curso,grupo);

    console.log(estudiante.registrar());
}

function ProfesorInstancias() {
    let nombre = document.querySelector("#NombreP").value;
    let edad = document.querySelector("#EdadP").value;
    let genero = document.querySelector("#GeneroP").value;
    let asignatura = document.querySelector("#Asignatura").value;
    let Nivel = document.querySelector("#Nivel").value;

    let profesor = new Profesor(nombre,edad,genero,asignatura,Nivel);

    console.log(profesor.asignar());
}


function Ejercicio10() {
    let valores = [0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i = 1; i < 36000; i++) {
        let dado1 = Math.round(Math.random() * (6-1)+1);
        let dado2 = Math.round(Math.random() * (6-1)+1);

        let numeroObtenido = dado1 + dado2;

        valores[numeroObtenido]++;
    }

    for (let i = 2; i < valores.length; i++) {
        console.log("El numero "+ i + " aparecio "+ valores[i] + " veces.");
    }
}


function solicitudAJAX() {

    var id = document.querySelector("#entrada").value;
    var url = "https://pokeapi.co/api/v2/pokemon/"+id;

    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function() {
    if(objXMLHttpRequest.readyState === 4) {
        if(objXMLHttpRequest.status === 200) {
          console.log(objXMLHttpRequest.responseText);
        }else {
          alert('Error Code: ' +  objXMLHttpRequest.status);
          alert('Error Message: ' + objXMLHttpRequest.statusText);
        }
    }
}
objXMLHttpRequest.open('GET', url);
objXMLHttpRequest.send();
}

