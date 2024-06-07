/* const idProducto = Number(location.search.split("=")[1]); */

const params = new URLSearchParams(location.search);
const idProducto = Number(params.get("id"));
const productos = JSON.parse(localStorage.getItem("productos")) || [];

const divDetalleProducto = document.getElementById("idDetalleDelProducto");
const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];

const productoFiltrado = productosLocalStorage.find(
  (producto) => producto.id === idProducto
);

divDetalleProducto.innerHTML = `
  <div>
    <div class='w-25 justify-content-end'>
      <img src="${productoFiltrado.imagen}" alt="" class='w-100'/>
    </div>
    <p>$${productoFiltrado.precio}</p>
    <p>${productoFiltrado.descripcion}</p>
  </div>
  <div>
    <button class="btn btn-warning" id='idBotonFavoritos'>Añadir a Favoritos</button>
    <button class="btn btn-success" id='idBotonCarrito'>Añadir al Carrito</button>
  </div>
`;

const botonFavoritos = document.querySelector("#idBotonFavoritos");
const botonCarrito = document.querySelector("#idBotonCarrito");

const agregarProductoAFavoritos = () => {
  const producto = productos.find((prod) => prod.id === idProducto);
  const favoritosLocalStorage =
    JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritosLocalStorage.length) {
    const productoFiltrado = favoritosLocalStorage.find(
      (prod) => prod.id === producto.id
    );

    if (productoFiltrado) {
      return alert("producto ya existe en favoritos");
    }

    favoritosLocalStorage.push(producto);
    localStorage.setItem("favoritos", JSON.stringify(favoritosLocalStorage));
    alert("Producto Cargado en Favoritos");
  } else {
    favoritosLocalStorage.push(producto);
    localStorage.setItem("favoritos", JSON.stringify(favoritosLocalStorage));
    alert("Producto Cargado en Favoritos");
  }
};

const agregarProductoACarrito = () => {
  const producto = productos.find((prod) => prod.id === idProducto);
  const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carritoLocalStorage.length) {
    const productoFiltrado = carritoLocalStorage.find(
      (prod) => prod.id === producto.id
    );

    if (productoFiltrado) {
      return alert("producto ya existe en el Carrito");
    }

    carritoLocalStorage.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carritoLocalStorage));
    alert("Producto Cargado en el Carrito");
  } else {
    carritoLocalStorage.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carritoLocalStorage));
    alert("Producto Cargado en el Carrito");
  }
};

botonFavoritos.addEventListener("click", agregarProductoAFavoritos);
botonCarrito.addEventListener("click", agregarProductoACarrito);
