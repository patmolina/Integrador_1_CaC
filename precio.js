function restTotal() {
    document.getElementById('aPagar').innerHTML = 'Total a pagar:  $ ';  
  }

function precioTotal() {
    let dcto;
    let total;
    let cantidad = document.getElementById("qty").value;
    let categ = document.getElementById("categoria").value;
    const TICKET = 200;

    console.log ("Categoría" + " " + categ);
    console.log ("Cantidad" + " " + cantidad);
    

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
    

    // console.log ("Descuento después del if" + " " + dcto);
    
    if (cantidad !="0" && categ != "0")  {
         total = TICKET * cantidad * dcto;
         document.getElementById('aPagar').innerHTML = "Total a pagar:  $ "+total;
     } //else {
    //      alert("Debe completar todos los campos.");
    //     }
    }
