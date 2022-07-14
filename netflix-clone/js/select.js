const renderSelect = (data) => {

  //aqui
  let select = document.querySelector("#categories");
  let { genres } = data;

  genres.forEach((gender) => {
    // Creamos el nuevo elemento <option>
    let option = document.createElement("option");
    // Agregamos el atributo "value"
    option.setAttribute("value", gender.id);
    // Agregamos el texto que corresponde
    option.innerText = gender.name;
    // Insertamos el <option> generado dentro del elemento <select>
    select.appendChild(option);
  });
};


fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => renderSelect(data));





