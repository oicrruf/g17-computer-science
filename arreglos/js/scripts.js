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
    //alert(`Peliculas guardadas: ${peliculas.length}`)
    dibujar();
}

function dibujar(){
    document.querySelector("#resultados").innerHTML ="";
    //Voy a recorrer el array peliculas
    /*for(let i=0; i<peliculas.length; i++){

    }*/
    
    
    for(let n in peliculas){
        console.log(peliculas[n]);
        /*document.querySelector("#resultados").innerHTML += `<div class="col-4">
            <div class="card mb-4">
                <img src="${peliculas[n].caratula}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${peliculas[n].titulo}</h5>
                    <p class="card-text">${peliculas[n].fecha}</p>
                </div>
            </div>
        </div>`;*/

        let col = document.createElement("div");
        col.classList.add("col-4");

        let card =  document.createElement("div");
        card.classList.add("mb-4","card");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.setAttribute("src",peliculas[n].caratula);

        card.append(img);

        let cardbody = document.createElement("div")
        cardbody.classList.add("card-body")
        
        let title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML=peliculas[n].titulo;

        cardbody.append(title);

        let p = document.createElement("p");
        p.classList.add("card-text");
        p.innerHTML=peliculas[n].fecha;

        cardbody.append(p);

        card.append(cardbody);
        col.append(card);

        document.querySelector("#resultados").append(col);

        


    }


}



