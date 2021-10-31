// función para reestablecer a 0 el <p> que muestra el total a pagar al presionar el botón Borrar
function restTotal() {
    document.getElementById('aPagar').innerHTML = 'Total a pagar:  $ ';  
  }

// calcuclo del precio total de acuerdo a la categoría seleccionada  
function precioTotal() {
    let dcto; //en realidad es el valor total menos el descuento correspondiente, más sencillo a los fines del cálculo
    let total;
    let cantidad = document.getElementById("qty").value;
    let categ = document.getElementById("categoria").value;
    const TICKET = 200;

    if (categ == "1") {
        dcto = 1;
    } else if (categ =="2") {
        dcto = 0.2;
    } else if (categ == "3") {
        dcto = 0.5;
    } else if (categ == "4") {
        dcto = 0.85;
    } else {
        alert("Debe seleccionar una categoria.");
    }
      
    if (cantidad !="0" && categ != "0")  {
         total = TICKET * cantidad * dcto;
         document.getElementById('aPagar').innerHTML = "Total a pagar:  $ "+total;
     }
 }
    
