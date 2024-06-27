const cerrarSesionUsuario = document.getElementById("idCerrarSesionUsuario");
const usuarioSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || "";
const bodyHtml = document.getElementById("idBody");

bodyHtml.classList.remove("d-none");

const cerrarSesion = () => {
  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === usuarioSessionStorage.id
  );

  usuariosLocalStorage[posicionDelUsuarioEnElArray].login = false;
  sessionStorage.removeItem("usuario");
  localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));

  setTimeout(() => {
    location.href = "../index.html";
  }, 1000);
};

cerrarSesionUsuario.addEventListener("click", cerrarSesion);
