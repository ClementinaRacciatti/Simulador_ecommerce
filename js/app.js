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
            <a class="buttonProductos" href="./pages/productos.html" id=btnIndex> Ver mas</a>
        </div>
        `
    listaProductos.append(productoDiv)
    })
}

const getAllProductos = async () => {
    const response = await fetch ('https://clementinaracciatti.github.io/Simulador_ecommerce/json/productos.json')
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





