let topBtn = document.querySelector("#top");

topBtn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    document.querySelector("#categories").value="";
    movies_array.sort((a,b)=>{
        return a.vote_average > b.vote_average ? -1 : 1;
    });
    renderMovies(movies_array);
});