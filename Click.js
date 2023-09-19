document.querySelector("#searchButton").addEventListener("click", buscarPeliculas);

async function buscarPeliculas() {
  const searchTerm = document.querySelector("#buscar").value;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f029c42c6c90fc64160358f3599ce822&query=${searchTerm}`
    );
    const data = await response.json();
    console.log(data.results);
    
    const peliculasContainer = document.querySelector("#pelicula");
    peliculasContainer.innerHTML = ""; // Limpiar resultados anteriores

    if (data.results.length === 0) {

      const divs = document.createElement("div");
      const mensaje = document.createElement("p");
      mensaje.textContent = "No se encontraron películas con ese término de búsqueda.";
      peliculasContainer.appendChild(mensaje);
      peliculasContainer.appendChild(divs);
      mensaje.classList.add("text-white","bg-red-500","w-full","mt-10")
      divs.classList.add("text-white","bg-blue-500","w-full","mt-10")
    } else {
      data.results.forEach((pelicula) => {
        if (pelicula.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          const peliculaDiv = document.createElement("div");
          peliculaDiv.classList.add("pelicula-item");

          const titulo = document.createElement("h3");
          titulo.textContent = pelicula.title;
          
          peliculaDiv.classList.add("bg-black","rounded-xl")
          titulo.classList.add("w-full", "h-auto","text-white","text-center","text-xl");

          const imagen = document.createElement("img");
          imagen.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;

          peliculaDiv.appendChild(titulo);
          peliculaDiv.appendChild(imagen);
          peliculasContainer.appendChild(peliculaDiv);
        }
      });
    }
  } catch (error) {
    console.log("Ha ocurrido un error:", error);
  }
}
