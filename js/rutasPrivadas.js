const ususarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
const body = document.getElementById("idBody");

body.classList.add("d-none");

if (!ususarioLogueado) {
  location.href = "../index.html";
} else {
  if (
    ususarioLogueado.role === "usuario" &&
    location.pathname === "/paginas/inicio-admin.html"
  ) {
    location.href = "../paginas/inicio-usuario.html";
  }
}
