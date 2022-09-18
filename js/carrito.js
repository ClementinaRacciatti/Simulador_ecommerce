


// Agrego productos al carrito
const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const botonVaciar = document.getElementById("vaciar-carrito")
const contadorCarrito = document.getElementById("contadorCarrito")
const precioTotal = document.getElementById("precioTotal")

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    localStorage.clear('carrito')
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('cardProductos')
    div.innerHTML = 
    `
    <picture class="cardImg">
        <img id="imagen" class="cardProductos__img" src="${producto.imagen}" alt="${producto.nombre}">
    </picture>
    <div class="cardInfo">
        <p id="titulo" class="textoDescripcionProductos">${producto.nombre}</p>
    </div>
    <div class="cardInfo2">
        <p id="precio" class="textoProductoPrecio">$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="buttonProductos" href="" onclick="return false"> Agregar</button>
    </div>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
}) 

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    }
    else {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
        }
    actualizarCarrito()
    }

const eliminarlDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach ((prod) => {
        const div = document.createElement('div')
        div.classList.add('seccionCarrito')
        div.innerHTML = `
        <p class="textoTituloCarrito">${prod.nombre}</p>
        <p class="textoDescripcionCarrito">precio: $ ${prod.precio}</p>
        <p class="textoDescripcionCarrito">cantidad: ${prod.cantidad}</p>
        <a onclick = "eliminarlDelCarrito(${prod.id})" class="iconTrash" type="button"> <img src="../img/Icon-Trash.png"> </a>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}





// Uso una biblioteca de Tostadita para indicar que el buscador no está funcionando

document.getElementById("tostadita").addEventListener("click", function() {
    Toastify({
        text: "Ups, el buscador no está funcionando",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "rigth", 
        stopOnFocus: true,
        style: {
        background: "#22B573",
        },
        onClick: function(){}
    }).showToast()
})