const tBody = document.getElementById("idtBody");
let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || "";

tBody.innerHTML = usuariosLocalStorage
  .map((usuario) =>
    usuario.id !== usuarioSessionStorage.id
      ? `
          <tr>
            <th scope="row">${usuario.id}</th>
            <td>${usuario.nombreDeUsuario}</td>
            <td>${usuario.role}</td>
            <td>${usuario.bloqueado ? "Bloqueado" : "Activo"}</td>
            <td>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal-${
                usuario.id
              }">
                Editar
              </button>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal-${
                usuario.id
              }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                     <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Usuario</label>
                          <input type="text" class="form-control" id="idUsuario" value='${
                            usuario.nombreDeUsuario
                          }' aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Rol</label>
                          <input type="text" class="form-control" id="idRole" value='${
                            usuario.role
                          }'>
                        </div>
                        
                        <button type="button" class="btn btn-primary" onclick='editarUsuario(${
                          usuario.id
                        })'>Guardar Cambios</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-danger" onclick='eliminarUsuario(${
                usuario.id
              })'>Eliminar</button>
              <button class="btn ${
                usuario.bloqueado ? "btn-success" : "btn-warning"
              }" onclick='${
          usuario.bloqueado
            ? `habilitarUsuario(${usuario.id})`
            : `desHabilitarUsuario(${usuario.id})`
        }'>${usuario.bloqueado ? "Habilitar" : "Deshabilitar"}</button>
            </td>
          </tr>

`
      : ""
  )
  .join("");

const inputUsuario = document.getElementById("idUsuario");
const inputRole = document.getElementById("idRole");

const editarUsuario = (idUsuario) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((usuario) => usuario.id === idUsuario);

  /* const usuarioEditado = {
    id: usuario.id,
    nombreDeUsuario: inputUsuario.value,
    contraseniaDeUsuario: usuario.contraseniaDeUsuario,
    login: usuario.login,
    role: inputRole.value,
    bloqueado: usuario.bloqueado,
    carrito: usuario.carrito,
    favoritos: usuario.favoritos,
  }; */

  /* spread operator ... */

  if (inputRole.value !== "admin" && inputRole.value !== "usuario") {
    return alert("Rol Incorrecto. Rol Permitido: usuario o admin");
  }

  const usuarioEditado = {
    ...usuario,
    nombreDeUsuario: inputUsuario.value,
    role: inputRole.value,
  };

  console.log(usuarioEditado);

  const posicionUsuario = usuarios.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  usuarios[posicionUsuario] = usuarioEditado;

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuario Editado con exito");
  location.reload();
};

/* Baja Fisica */

const eliminarUsuario = (idUsuario) => {
  const confirmarEliminarUsuario = confirm(
    "¿Estas seguro de que quieres eliminar a este usuario?"
  );

  if (confirmarEliminarUsuario) {
    const usuarios = usuariosLocalStorage.filter(
      (usuario) => usuario.id !== idUsuario
    );

    console.log(usuarios);

    usuariosLocalStorage = usuarios;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    location.reload();
  }
};

/* const deshabilitarUsuario = (idUsuario) => {
  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  const confirmarDeshabilitarUsuario = confirm(
    `¿Estas seguro de que quieres ${
      usuariosLocalStorage[posicionDelUsuarioEnElArray].bloqueado
        ? "habilitar"
        : "deshabilitar"
    } a este usuario?`
  );

  if (confirmarDeshabilitarUsuario) {
    usuariosLocalStorage[posicionDelUsuarioEnElArray].bloqueado =
      !usuariosLocalStorage[posicionDelUsuarioEnElArray].bloqueado;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
  }
}; */

const desHabilitarUsuario = (idUsuario) => {
  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  const confirmarDeshabilitarUsuario = confirm(
    `¿Estas seguro de que quieres deshabilitar a este usuario?`
  );

  if (confirmarDeshabilitarUsuario) {
    usuariosLocalStorage[posicionDelUsuarioEnElArray].bloqueado = true;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    location.reload();
  }
};

const habilitarUsuario = (idUsuario) => {
  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  const confirmarDeshabilitarUsuario = confirm(
    `¿Estas seguro de que quieres habilitar a este usuario?`
  );

  if (confirmarDeshabilitarUsuario) {
    usuariosLocalStorage[posicionDelUsuarioEnElArray].bloqueado = false;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    location.reload();
  }
};
