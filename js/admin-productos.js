const tBody = document.getElementById("idtBody");

const inputNombre = document.getElementById("idInputNombre");
const inputPrecio = document.getElementById("idInputPrecio");
const inputDescripcion = document.getElementById("idInputDescripcion");
const inputImagen = document.getElementById("idInputImagen");
const botonGuardarCambios = document.getElementById("idBotonGuardarCambios");

const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];

tBody.innerHTML = productosLocalStorage
  .map(
    (producto) =>
      `
 <tr>
   <th scope="row">${producto.id}</th>
   <td>${producto.nombre}</td>
   <td>$${producto.precio}</td>
   <td>${producto.bloqueado ? "Bloqueado" : "Activo"}</td>
   <td>
     <button class="btn btn-warning" onclick='editarProducto(${
       producto.id
     })'>Editar</button>
      <button class="btn btn-danger" onclick='eliminarUsuario(${
        producto.id
      })'>Eliminar</button>
      <button class="btn ${
        producto.bloqueado ? "btn-success" : "btn-warning"
      }" onclick='${
        producto.bloqueado
          ? `habilitarUsuario(${producto.id})`
          : `desHabilitarUsuario(${producto.id})`
      }'>${producto.bloqueado ? "Habilitar" : "Deshabilitar"}</button>
      <button class="btn btn-warning" onclick='destacarProducto(${
        producto.id
      })'>Destacar</button>
    </td>

          </tr>
`
  )
  .join("");

const editarProducto = (idProducto) => {
  const producto = productosLocalStorage.find((prod) => prod.id === idProducto);
  inputNombre.value = producto.nombre;
  inputPrecio.value = producto.precio;
  inputDescripcion.value = producto.descripcion;
  inputImagen.value = producto.imagen;

  sessionStorage.setItem("idProductoAeditar", idProducto);
};

const enviarCambios = () => {
  const idProducto =
    JSON.parse(sessionStorage.getItem("idProductoAeditar")) || "";
  const posicionProductoEnElArray = productosLocalStorage.findIndex(
    (prod) => prod.id === idProducto
  );

  if (idProducto) {
    const productoEditado = {
      id: idProducto,
      nombre: inputNombre.value,
      precio: inputPrecio.value,
      descripcion: inputDescripcion.value,
      imagen: inputImagen.value,
    };

    productosLocalStorage[posicionProductoEnElArray] = productoEditado;

    localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
    sessionStorage.removeItem("idProductoAeditar");
  }
};

const destacarProducto = (idProducto) => {
  const confirmarDestacado = confirm(
    "¿Estas seguro de que quieres destacar este producto?"
  );

  if (confirmarDestacado) {
    const posicionProductoEnElArray = productosLocalStorage.findIndex(
      (prod) => prod.id === idProducto
    );

    productosLocalStorage[posicionProductoEnElArray].destacado = true;

    localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
    localStorage.setItem(
      "imagenDestacada",
      JSON.stringify(productosLocalStorage[posicionProductoEnElArray].imagen)
    );
  }
};

botonGuardarCambios.addEventListener("click", enviarCambios);
