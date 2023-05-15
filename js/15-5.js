let num = 545
function ejemplo(params) {
    let inp = document.querySelector("#entrada");
    let p = document.querySelector("#salida");
    let divImg = document.querySelector("#img");
    divImg.innerHTML = '<img src="../img/ojo.jfif" alt="error"/>';
    let valor = inp.value;
    p.innerText = valor;
    console.log(p.value);
    console.log(valor);
    console.dir(inp);
    console.log(num);
    let r = num - "45";
    console.log(r);
}


