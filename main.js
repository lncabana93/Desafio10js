import './style.css';
console.warn('Ejercicio 1');

const urlChistes = 'https://icanhazdadjoke.com/slack';
async function getallChistes(urlChistes) {
  try {
    const respuesta = await fetch(urlChistes);
    if (!respuesta.ok) {
      throw new Error('No llego la info');
    }
    const dataChiste = await respuesta.json();
    const chisteFinal = dataChiste.attachments[0].text;
    console.log(chisteFinal);
    const chis = document.querySelector('#chiste');
    chiste.innerText = chisteFinal;
  } catch (error) {
    console.log('error');
  }
}

getallChistes(urlChistes);

console.warn('ejercicio 2');

function getallPost() {
  const xhr = new XMLHttpRequest();

  const url = 'https://jsonplaceholder.typicode.com/posts/';
  xhr.open('GET', url);

  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const obJS = JSON.parse(xhr.response);
      console.log(obJS[0].body);
      console.log(obJS[1].body);
      console.log(obJS[2].body);
      const p = document.createElement('post1', 'post2', 'post3');
      post1.innerText = `${obJS[0].body}`;
      post2.innerText = `${obJS[1].body}`;
      post3.innerText = `${obJS[2].body}`;
    } else {
      console.log('Error no se pudo ejecutar');
    }
  });
}
getallPost();

console.warn('Ejercicio 3');

const urlPeliculas = 'https://www.omdbapi.com/';
const armarUrlPeliculas = urlPeliculas + `?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY2}`
async function getAllPeliculas(armarUrlPeliculas) {
  try {
    const respuestaPelicula = await fetch(armarUrlPeliculas);
    if (!respuestaPelicula.ok) {
      throw new error('No llego la info');
    }
    const dataPelicuta = await respuestaPelicula.json();
    console.log(dataPelicuta)

  } catch (error) {
    console.log('Algo salio mal');
  }
}
getAllPeliculas(armarUrlPeliculas);

console.warn('Ejercicio 4')

let url = 'https://api.unsplash.com/search/photos/'

// ?query=dog&client_id=

async function pedirFotos(busqueda) {

   try {
    const armarUrl = url + `?query=${valorBuscado}&client_id=${import.meta.env.VITE_API_KEY}`
    //console.log(armarUrl)
    const respuesta = await fetch(armarUrl)

    if ( !respuesta.ok ) {
        throw new Error('No se puedo hacer la peticion', respuesta.status)
    }

    const data = await respuesta.json()
    
    console.log(data.results[0].urls.thumb)
    console.log(data.results[1].urls.thumb)
    console.log(data.results[2].urls.thumb)
   } catch (error) {
    console.error('[pedirFotos]', error)
   }

}
 
const btn = document.querySelector("button")
btn.addEventListener('submit', function(e){
  e.preventDefault()
  const valorBuscado  = document.getElementById('inputBusqueda')
  pedirFotos(valorBuscado)  
})


