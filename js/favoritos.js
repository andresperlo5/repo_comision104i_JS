const divFav = document.getElementById("divFav");
const usuarioEnSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || null;

divFav.innerHTML = usuarioEnSessionStorage.favoritos
  .map((producto) =>
    producto
      ? `
<div class="card" style="width: 18rem;">
  <img src="${producto.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">$ ${producto.price}</p>
    <p class="card-text">${producto.description}</p>
    <a href="#" class="btn btn-danger">Eliminar</a>
  </div>
</div>
`
      : `<h1 class='text-center my-5'>No hay productos en Favoritos</h1>`
  )
  .join("");
