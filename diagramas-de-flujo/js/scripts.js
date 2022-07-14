const COSTOBOLETO=87;

document.querySelector("#calcular-boton").addEventListener("click",darPrecio)

function darPrecio(){
    let costoTotal = precioTotal();
    //document.querySelector("#total").innerHTML=costoTotal;
    document.querySelector("#total").innerHTML='<div class="mt-5 is-size-3 notification is-success is-light">El costo de tus boletos es <b>$'+costoTotal+'</b><div>'
}

function precioTotal(){
    let personas = parseInt(document.querySelector("#personas").value);
    let dia =document.querySelector("#dia").value;
    let total = 0;

    if(dia == "Martes"){
        total = COSTOBOLETO * personas /2;
    }else{
        total = COSTOBOLETO * personas;
    }

    return total;
}
