const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const pClass = document.querySelector('.parrafo')
const pId = document.querySelector('#parrafo')

//escuchar eventos
const form = document.querySelector('#form')
const input = document.querySelector('input')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')


form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    console.log({event})
    event.preventDefault()
    const sumaInputs = input1.value + input2.value
    pResult.innerText = "Resultado: " + sumaInputs
}

//addEventListener



console.log(h1)

console.log({
    h1,
    p,
    pClass,
    pId,
    input
})

//convierte todo a html
//h1.innerHTML = 'test'


// forma segura

h1.innerText = 'test'

//leer el valor de un atributo de una etiqueta

console.log(h1.getAttribute('pantalla'))
h1.setAttribute('pantalla', '4k')
console.log(h1.getAttribute('pantalla'))

h1.classList.add('rojo')
h1.classList.remove('azul')
console.log(document.createElement('img'))
const img = document.createElement('img')

img.setAttribute('src', 'https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg')




pId.append(img)