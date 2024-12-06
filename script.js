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

/*primer paso
const createSongComponent = (song) => {
    const component = document.createElement('div')
    component.setAttribute('class', 'playlist__canciones__canciones__cancion')

    component.innerHTML = `
    <img class="playlist__canciones__canciones__cancion__foto" src="${song.image.url}" alt="">
    <div class="playlist__canciones__canciones__cancion__tituloyautor">
        <h2 class="playlist__canciones__canciones__cancion__tituloyautor__titulo">${song.title}</h2>
        <p class="playlist__canciones__canciones__cancion__tituloyautor__autor">${song.author}</p>

    </div>*/
const createSongComponent = (song) => {
    const component = document.createElement('div')
    component.setAttribute('class', 'playlist__canciones__canciones__cancion')

    component.innerHTML = `
    <img class="playlist__canciones__canciones__cancion__foto" src="${song.image.url}" alt="">
    <div class="playlist__canciones__canciones__cancion__tituloyautor">
        <h2 class="playlist__canciones__canciones__cancion__tituloyautor__titulo">${song.title}</h2>
        <p class="playlist__canciones__canciones__cancion__tituloyautor__autor">${song.author}</p>

    </div>
    
    `
/*quinto paso
setInteractiveComponent(component, song)
    return component*/

    setInteractiveComponent(component, song)
    return component
    
}

/*cuarto paso
const setInteractiveComponent = (component, song) => {
    component.addEventListener('click', () => {
        document.getElementById('audio').setAttribute('src', song.audio.url)
        document.getElementById('imagen').setAttribute('src', song.image.url)
        document.getElementById('title-song').innerHTML = song.title
        document.getElementById('author-song').innerHTML = song.author*/
const setInteractiveComponent = (component, song) => {
    component.addEventListener('click', () => {
        document.getElementById('audio').setAttribute('src', song.audio.url)
        document.getElementById('imagen').setAttribute('src', song.image.url)
        document.getElementById('title-song').innerHTML = song.title
        document.getElementById('author-song').innerHTML = song.author
    })
}
/*segundo paso 
axios.get('https://api.institutoalfa.org/api/songs')
.then(function (response) {
    const songsInfo = response.data.songs
    const contenedor = document.getElementById('container-song')

    songsInfo.map((song) => {
    const songComponent = createSongComponent(song)
    contenedor.appendChild(songComponent)*/
axios.get('https://api.institutoalfa.org/api/songs')
.then(function (response) {
    const songsInfo = response.data.songs
    const contenedor = document.getElementById('container-song')

    songsInfo.map((song) => {
    const songComponent = createSongComponent(song)
    contenedor.appendChild(songComponent)

    
    })
})
document.getElementById('play').addEventListener('click', () => {
    const audio = document.getElementById('audio')

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
})