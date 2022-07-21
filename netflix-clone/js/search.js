const frmBuscar = document.querySelector("#search");
const content = document.querySelector("#content");

const renderResults = (results) => {
  content.innerHTML = "";

  let block = document.createElement("div");
  block.classList.add("row", "col-12", "m-0");
  block.setAttribute("id", "categories-group");

  content.appendChild(block);

  //results.forEach(function(movie){
  results.forEach((movie) => {
    console.log(movie);
    block.insertAdjacentHTML(
      "beforeend",
      `
    <div class="col-3 my-3">
      <img src="${IMG_PREFIX}${movie.poster_path}" width="100%" />
    </div>
    `
    );
  });



};

frmBuscar.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#categories").value="";

  const { movieName } = event.target;

  fetch(`${URL}/search/multi?api_key=${API_KEY}&query=${movieName.value}`)
    .then((response) => response.json())
    .then((data) => {
      movies_array = data.results;
      renderMovies(movies_array);
    });
});

// let peticion = ['100 años de soledad', 'Spiderman', 'Thor', 'Mi villano favorito', 'Dr. Strange']
// let result = peticion.filter(name=> name.toLocaleLowerCase().includes(movieName.value.toLocaleLowerCase()))
// console.log(result)
