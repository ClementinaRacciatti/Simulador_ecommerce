//Declaraciones


//Array de prodcutos
let allProductos = []

//Selectores
const listaProductos = document.querySelector('#listaProductos')


//Funciones
const renderizarListaProductos = () => {
    allProductos.forEach((producto) => {
        const productoDiv = document.createElement('div')
        productoDiv.classList.add('cardProductos')
        productoDiv.innerHTML = `
        <picture class="cardImg">
            <img id="imagen" class="cardProductos__img" src="${producto.imagen}" alt="${producto.nombre}">
        </picture>
        <div class="cardInfo">
            <p id="titulo" class="textoDescripcionProductos">${producto.nombre}</p>
        </div>
        <div class="cardInfo2">
            <p id="precio" class="textoProductoPrecio">${producto.precio}</p>
            <a class="buttonProductos" href="./pages/productos.html" id=btnIndex> Agregar</a>
        </div>
        `
    listaProductos.append(productoDiv)
    })
}

const getAllProductos = async () => {
    const response = await fetch ('../json/productos.json')
    const data = await response.json()
    allProductos = data
    renderizarListaProductos (allProductos)
}


//Ejecuciones
getAllProductos ()



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




/* Agrego productos al carrito
const agregarProductos = document.querySelectorAll('.seccionProductos')
agregarProductos.forEach((agregarProducto) => {
    agregarProducto.addEventListener('click', agregarAlClickear)
})

function agregarAlClickear(event) {
    event.preventDefault()
    const button = event.target
    const item = button.closest('.buttonProductos')

    const itemTitulo = item.querySelector('#titulo')
    const itemPrecio = item.querySelector('#precio')
    const itemImagen = item.querySelector('#imagen')

    agregarAlCarrito(itemTitulo, itemPrecio, itemImagen)
}

function agregarAlCarrito(itemTitulo, itemPrecio, itemImagen) {
    const elementoCarrito = document.querySelectorAll('.tituloItem')

    for (let i = 0; i < elementoCarrito.length; i++) {
        if (elementoCarrito[i].innerText === itemTitulo) {
            let cantidadElemento = elementoCarrito[i].parentElement.parentElement.parentElement.querySelector('#cantidad')
            cantidadElemento.value++
                actualizarTotalCarrito()
            return
        }

    }

    const filaCarrito = document.createElement('div')
    const contenidoCarrito = `
    <div class="borrar">
    <ul class="carrito" class="list-group mb-3">
        <div class="articulo">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div class="col-sm-4">
                <h6 class="my-0 tituloItem">${itemTitulo}</h6>
                <div class="d-flex align-items-center h-100">
                    <figure>
                        <img src="${itemImagen}" alt="${itemTitulo}" width="50px" height="50px">
                    </figure>
                </div>
            </div>
            <div>
            <input class="col-sm-4" type="number" value="1" id="cantidad">
            <button class="btn btn-danger botonBorrar" type="button">X</button>
        </div>
        <span class="text-muted" id="precio">${itemPrecio}</span>
        </li>
        </div>
    </ul>
    </div>`

    filaCarrito.innerHTML = contenidoCarrito
    miCarrito.append(filaCarrito)

    console.log("Funciona")
}*/
