let movies_array=[];

const renderMovies = (data) => {
    let movies = data.results;
    movies.forEach((movie) => {
      let poster = `${IMG_PREFIX}${movie.poster_path}`;
      //let img_html= `<img src="${poster}" alt="${movie.title}">`

      let div = document.createElement("div");
      div.classList.add("col-3","mb-4");

      let img = document.createElement("img");
      //img.src=poster;
      img.classList.add("img-fluid");
      img.setAttribute("src",poster);
      img.setAttribute("alt",movie.title)

      div.append(img)

      document.querySelector("#popular").append(div);
      //console.log(movie);
    })
  
  }
//fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
fetch(`${URL}/movie/popular?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data)=>{
    movies_array = data.results;
    renderMovies(data);
});