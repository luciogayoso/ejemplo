function Ejerccio1() {
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

