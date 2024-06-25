const divFav = document.getElementById("divFav");
const usuarioEnSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || null;

divFav.innerHTML = usuarioEnSessionStorage.favoritos
  .map((producto) =>
    producto
      ? `
<div class="card mx-3 my-3" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$ ${producto.precio}</p>
    <p class="card-text">${producto.descripcion}</p>
    <a href="#" class="btn btn-danger" id='idBotonEliminar' onclick='borrarProductoFavoritos(${producto.id})'>Eliminar</a>
  </div>
</div>
`
      : `<h1 class='text-center my-5'>No hay productos en Favoritos</h1>`
  )
  .join("");

//const botonElminarFavorito = document.getElementById("idBotonEliminar");

const borrarProductoFavoritos = (idProducto) => {
  const confirmarBorradoFavoritos = confirm(
    "¿Estas seguro de que quieres eliminar a este producto de Favoritos?"
  );

  if (confirmarBorradoFavoritos) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const produdtos = usuarioEnSessionStorage.favoritos.filter(
      (producto) => producto.id !== idProducto
    );

    const posicionUsuario = usuarios.findIndex(
      (usuario) => usuario.id === usuarioEnSessionStorage.id
    );

    usuarioEnSessionStorage.favoritos = produdtos;
    usuarios[posicionUsuario].favoritos = produdtos;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    sessionStorage.setItem("usuario", JSON.stringify(usuarioEnSessionStorage));

    alert("Producto borrado con exito");
    location.reload();
  }
};

//botonElminarFavorito.addEventListener("click", borrarProductoFavoritos);
