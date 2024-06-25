const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

const inputUsuario = document.getElementById("idInputUsuario");
const inputContrasenia = document.getElementById("idInputContrasenia");

const botonIniciarSesion = document.getElementById("idBotonIniciarSesion");

const divErrorUsuario = document.getElementById("idErrorInputUsuario");
const divErrorContrasenia = document.getElementById("idErrorInputContrasenia");

divErrorUsuario.classList.add("d-none");
divErrorContrasenia.classList.add("d-none");

/* change - input */
/* required - html X */

const iniciarSesionUsuario = (evento) => {
  evento.preventDefault();
  if (!inputUsuario.value) {
    divErrorUsuario.classList.remove("d-none");
    inputUsuario.classList.add("is-invalid");
  }

  if (!inputContrasenia.value) {
    divErrorContrasenia.classList.remove("d-none");
    inputContrasenia.classList.add("is-invalid");
  }

  const usuarioExiste = usuariosLocalStorage.find(
    (usuario) => usuario.nombreDeUsuario === inputUsuario.value
  );

  if (!usuarioExiste) {
    alert("Usuario y/o contraseña no coinciden. USUARIO");
  }

  if (usuarioExiste.contraseniaDeUsuario === inputContrasenia.value) {
    const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
      (usuario) => usuario.id === usuarioExiste.id
    );

    usuariosLocalStorage[posicionDelUsuarioEnElArray].login = true;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    sessionStorage.setItem("usuario", JSON.stringify(usuarioExiste));

    if (usuarioExiste.bloqueado) {
      return alert(
        "Usuario Bloqueado. Comunicarse con el administrador de la pagina"
      );
    }

    if (usuarioExiste.role === "admin") {
      location.href = "../paginas/inicio-admin.html";
    } else if (usuarioExiste.role === "usuario") {
      location.href = "../paginas/inicio-usuario.html";
    } else {
      alert("role incorrecto");
    }
  } else {
    alert("Usuario y/o contraseña no coinciden. CONTRASEÑA");
  }
};

botonIniciarSesion.addEventListener("click", iniciarSesionUsuario);
