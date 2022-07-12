/*document.querySelector("#boton").addEventListener("click",function(){
    alert("Diste click en el Boton!")
})*/
let peliculas = [];

document.querySelector("#peliculas-form").addEventListener("submit",agregar)

function agregar(evt){
    evt.preventDefault(); // Esto es lo mismo que hacer: document.querySelector("peliculas-form");
    const {nombre, anio, foto} = evt.target;
    /*
    let nombre = document.querySelector("#nombre");
    let anio = document.querySelector("#anio");
    let foto = document.querySelector("#foto");
    */
    let peli = {
        titulo: nombre.value,
        fecha: anio.value,
        caratula: foto.value
    }

    peliculas.push(peli);
    evt.target.reset();
    //document.querySelector("#peliculas-form").reset()

    //("Peliculas guardadas: "+peliculas.length;
    alert(`Peliculas guardadas ${peliculas.lenght}`)

}


