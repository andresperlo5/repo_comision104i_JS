const divMensajeBienvenida = document.getElementById("idBienvenidaAlUsuario");
const usuarioSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || "";
const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];
const divCards = document.getElementById("idDivCards");
const cerrarSesionUsuario = document.getElementById("idCerrarSesionUsuario");

divCards.innerHTML = productosLocalStorage
  .map(
    (producto) =>
      `
 <div class="col-12 col-md-6 col-lg-4 my-3">
      <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <p class="card-text">${producto.descripcion}</p>
          <a href="../paginas/detalleDelProducto-usuario.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
        </div>
      </div>
    </div>

`
  )
  .join("");

/* setTimeout(() => {
  divMensajeBienvenida.innerHTML = `<h1>Bienvenido ${usuarioSessionStorage.nombreDeUsuario}</h1>`;
}, 1000); */
const cerrarSesion = () => {
  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === usuarioSessionStorage.id
  );

  usuariosLocalStorage[posicionDelUsuarioEnElArray].login = false;
  /*  sessionStorage.removeItem("usuario"); */
  localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));

  setTimeout(() => {
    location.href = "../index.html";
  }, 1000);
};
cerrarSesionUsuario.addEventListener("click", cerrarSesion);
