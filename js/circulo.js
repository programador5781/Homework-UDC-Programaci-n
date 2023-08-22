function obtenerArea(){
    var areaResultado = document.getElementById("areaResultado");
    var P = parseInt(document.getElementById("radio").value);
    const PI = 3.1416;     
    var area = PI *(P**2);
 
    areaResultado.innerHTML = "" + area;
   }
 
   function obtenerPerimetro(){
    var perimetroResultado = document.getElementById("perimetroResultado");
    var diametro = parseInt(document.getElementById("d").value);
    const PI = 3.1416;
      
    var perimetro = diametro * PI;
 
    perimetroResultado.innerHTML = "" + perimetro;
   }

   