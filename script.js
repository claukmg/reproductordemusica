/*


const canciones = {
    _id: '66bc10f8a356bc53b596c34a',
    title: 'Goodbyes',
    album: 'Hollywoods B',
    author: 'Post Malone',



}
const usuario = {
    nombre: 'Felipe',
    apellido: 'Mendez',
    ci: '2564545',
    edad: 21,
    direccion: {
        calle: 'comercio',
        avenida: 'anzoategui',
        postal: '2001',
        numero: '53534',
    }
}

console.log(usuario.direccion.avenida)


*/

const createSongComponent = (song) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'playlist__canciones__canciones__cancion')

    div.innerHTML = `
    <img class="playlist__canciones__canciones__cancion__foto" src="${song.image.url}" alt="">
                        <div class="playlist__canciones__canciones__cancion__tituloyautor">
                            <h2 class="playlist__canciones__canciones__cancion__tituloyautor__titulo">${song.title}</h2>
                            <p class="playlist__canciones__canciones__cancion__tituloyautor__autor">${song.author}</p>

                        </div>
    
    `
    return div
    
}

axios.get('https://api.institutoalfa.org/api/songs')
.then(function (response) {
    const songsInfo = response.data.songs
    const contenedor = document.getElementById('container-song')

    songsInfo.map((song) => {
    const songComponent = createSongComponent(song)
    contenedor.appendChild(songComponent)

    })
})