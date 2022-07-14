let busqueda = document.querySelector("search").value;

movies_array.filter((movie)=>{
    let titulo = movie.title.toLowerCase();
    let b = busqueda.toLowerCase();
    return titulo.includes(b);
})