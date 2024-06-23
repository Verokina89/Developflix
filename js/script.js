//Los generos serán Acción (28), thriller(53), Aventura(12). 
//Puedes ver sus ids en `genre_ids` dentro del objeto. 
//Verás que cada pelicula comparte ids por tanto es probable que veas que la misma película puede salir en 2 o los 3 generos.

//Haz que en cada sección aparezcan con la imagen (poster) y el título de la pelicula(title) filtrado por el genero. (poster_pah)
//La base de las imagenes es esta URL `https://image.tmdb.org/t/p/w500` donde añadiremos la ruta relativa que nos ofrece cada una de las películas. Debería quedar algo similar a esto: `https://image.tmdb.org/t/p/w200/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg`
//Viene con un diseño sencillo de base. Puedes hacerlo a tu gusto y darle más funcionalidades.

import peliculas from './peliculas.js'



const verPelis = (generoId, peliFilter) => {
  const container = document.getElementById(generoId)
  const optionsMovies = peliculas.filter(peli => peli.genre_ids.includes(peliFilter))
  for (let peli of optionsMovies) {
    const elementDiv = document.createElement("div")
    const elementImg = document.createElement("img")
    const elementP = document.createElement("p")

    elementDiv.className = "peliculas"
    elementImg.src = `https://image.tmdb.org/t/p/w200${peli.poster_path}`
    elementImg.alt = peli.original_language.title
    elementP.innerHTML = peli.original_title
    elementDiv.appendChild(elementImg)
    elementDiv.appendChild(elementP)

    container.appendChild(elementDiv)
  }

}

verPelis("genero-28", 28)
verPelis("gen-53", 54)
verPelis("gen-12", 12)



/*filter
const peliculasAccion = peliculas.filter(peli => peli.genre_ids.includes(28))
const peliculasThriller = peliculas.filter(peli => peli.genre_ids.includes(53))
const peliculasAventura = peliculas.filter(peli => peli.genre_ids.includes(53))

//container
const genAccion = document.getElementById("genero-28")
const genThriller = document.getElementById("genero-53")
const genAventura = document.getElementById("genero-12")
*/