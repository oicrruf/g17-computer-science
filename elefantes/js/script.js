let resultados=[];

fetch("/js/elephants.json",{
})
.then((response)=>response.json())
.then((data)=>{
    resultados = data;
    dibujar(resultados);
})

const buscar = (evt) =>{
    let nombre = evt.currentTarget.value;
    let filtrados = resultados.filter(function(resultado){
        return resultado.name.toLowerCase().includes(nombre.toLowerCase());
    });
    dibujar(filtrados);
}

const todos = () =>{
    dibujar(resultados);
}

function hembras(){
    let elefantes_hembras = resultados.filter(function(elefante){
        if(elefante.sex == "Female"){
            return true;
        }else{
            return false;
        }
        //return elefante.sex == "Female";
    });
    dibujar(elefantes_hembras);
}


const machos = () => {
    let elefantes_machos = resultados.filter((elefante) => {
        return elefante.sex == "Male";
    });
    dibujar(elefantes_machos);
}


const reales =() =>{
    let elefantes_reales =resultados.filter((elefante) => {
        return elefante.fictional=="false";
    })
    dibujar(elefantes_reales);
}

const ficcion =() =>{
    let elefantes_ficcion =resultados.filter((elefante) => {
        return elefante.fictional!=="false";
    })
    dibujar(elefantes_ficcion);
}

//function dibujar() {
const dibujar = (elefantes) => {
  
   document.querySelector("#resultado").innerHTML="";
   
   elefantes.forEach((elefante) => {
    /*Cada elefante*/
    let div =document.createElement("div");
    div.classList.add("column", "is-3");
    div.innerHTML +=`<div class="card" data-id="${elefante._id}">
            <div class="card-image">
                <figure class="image is-square">
                    <img src="${elefante.image}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <p><b>${elefante.name}</b></p>
                <p>🐘 ${elefante.sex}</p>
            </div>
        </div>`;
     
     div.setAttribute("data-affiliation",elefante.affiliation);
     div.dataset["name"]=elefante.name;
     div.dataset.sex=elefante.sex;
     div.dataset.image=elefante.image;
     div.dataset.note=elefante.note;
     div.dataset.dob=elefante.dob;
     div.dataset.dod=elefante.dod;
     div.dataset.wikilink=elefante.wikilink;

     div.addEventListener("click",function(evt){
        //alert(evt.currentTarget.dataset.affiliation);
        document.querySelector(".modal").classList.add("is-active");
        document.querySelector("#ficha-nombre").innerHTML = evt.currentTarget.dataset.name;
        document.querySelector("#ficha-img").src=evt.currentTarget.dataset.image;
        document.querySelector("#ficha-affiliation").innerHTML=evt.currentTarget.dataset.affiliation;
        document.querySelector("#ficha-note").innerHTML=evt.currentTarget.dataset.note;
        document.querySelector("#ficha-sex").innerHTML=evt.currentTarget.dataset.sex;
        document.querySelector("#dob").innerHTML=evt.currentTarget.dataset.dob;
        document.querySelector("#dod").innerHTML=evt.currentTarget.dataset.dod;
        document.querySelector("#ficha-button").setAttribute("href",evt.currentTarget.dataset.wikilink)
     });


     document.querySelector("#resultado").append(div);
   });
} 

document.querySelector("#busqueda").addEventListener("keyup", buscar);
document.querySelector("#opcion-todos").addEventListener("click", todos);
document.querySelector("#opcion-hembras").addEventListener("click", hembras);
document.querySelector("#opcion-machos").addEventListener("click", machos);
document.querySelector("#opcion-reales").addEventListener("click", reales);
document.querySelector("#opcion-ficcion").addEventListener("click", ficcion);

document.querySelector(".delete").addEventListener("click",function(){
    document.querySelector(".modal").classList.remove("is-active");
})
