
(async function pelis() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=f029c42c6c90fc64160358f3599ce822"
    );
    const datas = await response.json();
    console.log(datas);

    const divContainer = document.querySelector("#pelicula");
    divContainer.classList.add("grid","grid-cols-4", "gap-4");

    datas.results.map((data) => {
      const div = document.createElement("div");
      const titulos = document.createElement("h1");
      const imagen = document.createElement("img");
      const Descripcion = document.createElement("p");

      
    div.classList.add("pt-2", "px-2", "border-4", "border-white");
      titulos.classList.add(
        "text-lg",
        "text-center",
        "rounded-b-xl",
        "text-white",
        "bg-black",
        "h-auto",
        "font-bold",
        "mb-2"
      );
      imagen.classList.add("w-full", "h-auto");
      Descripcion.classList.add("text-black","px-5","rounded","bg-white","h-auto")
      titulos.textContent = data.title;
      imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      Descripcion.textContent = data.overview;

           imagen.addEventListener("click", () => {
        const searchQuery = `${data.title} official trailer`;
        const youtubeURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(
          searchQuery
        )}`;
        window.open(youtubeURL, "_blank");
      });
      divContainer.appendChild(div);
      div.appendChild(titulos);
      div.appendChild(imagen);
      div.appendChild(Descripcion);
    });
  } catch (error) {
    "hay varios errores;", error;
  }
})();

