
function Array2() {
    var valores = [true, 5, false, "hola", "adios",2,"gjdjdflk"];
    var aux = [];
    var posicion = 0;
    var valor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof(valores[i]) == "string") {
            aux.push(valores[i]);
        }
    }


    for (let i = 0; i < aux.length -1; i++) {
        if (aux[i].length > aux[i+1].length && i+1 < aux.length) {
            posicion = i;
            valor = aux[i];
        }else {
            posicion = i +1;
            valor = aux[i + 1];
        }
        
    }

    console.log("el mayor es "+valor);


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
