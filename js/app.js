//fetch => función nativa de js, que nos permite realizar peticiones HTTP de forma asincrónica

//promesas
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    //de JSON a dato manipulable (objeto o array)
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-personajes");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
    // Comienza evaluación del contenido para traducir //
        if (personajes[i].gender == "Male") {
          personajes[i].gender = "Masculino";
        } else {
          personajes[i].gender = "Femenino";
        };
        if (personajes[i].species == "Human") {
          personajes[i].species = "Humano";
        } else {
          personajes[i].species = "Extraterrestre";
        };
        if (personajes[i].status == "Alive") {
          personajes[i].status = "Vivo";
        } else if (personajes[i].status == "Dead") {
          personajes[i].status = "Finado";
        } else {
          personajes[i].status = "Desconocido";
        }
        
  
      $contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${personajes[i].image}">
        <span class="titulo-item">Nombre: </span>
        <span class="dato-item">${personajes[i].name}</span><br>
        <span class="titulo-item">Género: </span>
        <span class="dato-item">${personajes[i].gender}</span><br>
        <span class="titulo-item">Especie:  </span>
        <span class="dato-item">${personajes[i].species}</span><br>
        <span class="titulo-item">Estado: </span>
        <span class="dato-item">${personajes[i].status}</span><br>
        
        <br>
      </div>
      `;
    }
  });