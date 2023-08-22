 // funciones para Elipse
 function obtenerArea(){
    var areaResultado = document.getElementById("areaResultado");
    var S = parseInt(document.getElementById("S").value);
    var s = parseInt(document.getElementById("s").value);
    const PI = 3.1416;     
    
    var area = PI *S * s;
 
    areaResultado.innerHTML = "" + area;
}