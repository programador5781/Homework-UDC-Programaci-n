// funciones para Trapecio

function obtenerArea(){
    var areaResultado = document.getElementById("areaResultado");
    var B = parseInt(document.getElementById("Base").value);
    var b = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
    
    var area = h * (B + b)/ 2;
 
    areaResultado.innerHTML = "" + area;
}
 
function obtenerPerimetro(){
    var perimetroResultado = document.getElementById("perimetroResultado");
    var lado1 = parseInt(document.getElementById("l").value);
    var lado2 = parseInt(document.getElementById("m").value);
    var lado3 = parseInt(document.getElementById("n").value);
    var lado4 = parseInt(document.getElementById("o").value);
    
    var perimetro = lado1 + lado2 + lado3 + lado4;
 
    perimetroResultado.innerHTML = "" + perimetro;
}