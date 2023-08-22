// funciones para Pentagono
function obtenerArea(){
    var areaResultado = document.getElementById("areaResultado");
    var P = parseInt(document.getElementById("perimetro").value);
    var a = parseInt(document.getElementById("apotema").value);
      
    var area = (P *a)/2;
 
    areaResultado.innerHTML = "" + area;
}
 
   function obtenerPerimetro(){
    var perimetroResultado = document.getElementById("perimetroResultado");
    var lado = parseInt(document.getElementById("l").value);
      
    var perimetro = lado * 5;
 
    perimetroResultado.innerHTML = "" + perimetro;
}