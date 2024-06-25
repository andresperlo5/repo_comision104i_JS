const tBody = document.getElementById("tBody");
const botonPagar = document.getElementById("botonPagar");
const usuarioEnSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || "";

tBody.innerHTML = usuarioEnSessionStorage.carrito
  .map(
    (producto) => `
    <tr>
      <th scope="row">${producto.id}</th>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>
        <input type='number'>
      </td>
        <td>
          <p>Total</p>
      </td>
        </td>
        <td>
          <button  class="btn btn-danger" onclick='borrarProductoCarrito(${producto.id})'>Eliminar</button>
      </td>
    </tr>

`
  )
  .join("");

const borrarProductoCarrito = (idProducto) => {
  const confirmarBorradoDeProducto = confirm(
    "¿Estas Seguro de que quieres eliminar a este producto del carrito?"
  );

  if (confirmarBorradoDeProducto) {
    const productos = usuarioEnSessionStorage.carrito.filter(
      (producto) => producto.id !== idProducto
    );

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const posicionUsuario = usuarios.findIndex(
      (usuario) => usuario.id === usuarioEnSessionStorage.id
    );

    usuarios[posicionUsuario].carrito = productos;
    usuarioEnSessionStorage.carrito = productos;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    sessionStorage.setItem("usuario", JSON.stringify(usuarioEnSessionStorage));

    alert("Producto eliminado con exito");
    location.reload();
  }
};

const pagarProducto = () => {
  alert("Gracias por tu compra");
  enviarMail();
};

const enviarMail = () => {
  Email.send({
    SecureToken: "92f40e33-a1b2-4325-82e9-d4e93daa6a59",
    Host: "smtp.elasticemail.com",
    Username: "andresperlo5@gmail.com",
    Password: "46A9489E0810CD5D6CA565A93D2762847965",
    To: "andresperlo5@gmail.com",
    From: "andresperlo5@gmail.com",
    Subject: "gracias por tu compra",
    Body: "And this is the body",
  }).then((message) => alert(message));
};

botonPagar.addEventListener("click", pagarProducto);
