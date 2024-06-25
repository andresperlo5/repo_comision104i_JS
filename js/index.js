const divCards = document.getElementById("idDivCards");
const divImagenDestacada = document.getElementById("idImagenDestacada");
const imagenDestacada = JSON.parse(localStorage.getItem("imagenDestacada"));
//const divCards = document.getElementsByClassName("classCards");
//const divCards = document.getElementsByTagName("div");

//const divCards = document.querySelector(".classCards");
//const divCards = document.querySelectorAll("#idDivCards");
/* console.log(divCards); */

const productos = [
  {
    id: 1,
    nombre: "Café Premium",
    precio: 12.99,
    descripcion:
      "Café de alta calidad, cultivado en las mejores fincas de Colombia.",
    imagen:
      "https://jumbo.vtexassets.com/arquivos/ids/680978/Cafe-Premier-clasico-frasco-170-g.jpg?v=638227939534700000",
    destacado: false,
  },
  {
    id: 2,
    nombre: "Té Verde Orgánico",
    precio: 8.5,
    descripcion:
      "Té verde 100% orgánico, rico en antioxidantes y sin aditivos.",
    imagen: "te_verde_organico.jpg",
    destacado: false,
  },
  {
    id: 3,
    nombre: "Chocolate Negro 70%",
    precio: 5.75,
    descripcion:
      "Chocolate negro con 70% de cacao, ideal para los amantes del cacao puro.",
    imagen: "chocolate_negro_70.jpg",
    destacado: false,
  },
  {
    id: 4,
    nombre: "Mermelada de Fresas",
    precio: 4.2,
    descripcion:
      "Mermelada artesanal hecha con fresas frescas y sin conservantes.",
    imagen: "mermelada_fresas.jpg",
    destacado: false,
  },
  {
    id: 5,
    nombre: "Aceite de Oliva Extra Virgen",
    precio: 15.3,
    descripcion:
      "Aceite de oliva extra virgen, prensado en frío para conservar sus propiedades.",
    imagen: "aceite_oliva.jpg",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Queso Gouda",
    precio: 7.9,
    descripcion: "Queso Gouda madurado, con un sabor suave y cremoso.",
    imagen: "queso_gouda.jpg",
    destacado: false,
  },
  {
    id: 7,
    nombre: "Pan Integral",
    precio: 3.5,
    descripcion:
      "Pan integral hecho con harina de trigo integral y sin azúcares añadidos.",
    imagen: "pan_integral.jpg",
    destacado: false,
  },
  {
    id: 8,
    nombre: "Miel de Abeja Pura",
    precio: 9.99,
    descripcion: "Miel de abeja 100% pura, recolectada de colmenas naturales.",
    imagen: "miel_abeja.jpg",
    destacado: false,
  },
  {
    id: 9,
    nombre: "Cereal de Avena",
    precio: 4.6,
    descripcion: "Cereal de avena integral, ideal para un desayuno saludable.",
    imagen: "cereal_avena.jpg",
    destacado: false,
  },
  {
    id: 10,
    nombre: "Jugo de Naranja Natural",
    precio: 3.99,
    descripcion: "Jugo de naranja 100% natural, sin azúcares ni conservantes.",
    imagen: "jugo_naranja.jpg",
    destacado: false,
  },
];

localStorage.setItem("productos", JSON.stringify(productos));
console.log(imagenDestacada);
divImagenDestacada.innerHTML = imagenDestacada
  ? ` <img src="${imagenDestacada}" class="card-img-top" alt="..." />`
  : "";

divCards.innerHTML = productos
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
          <a href="../paginas/detalleDelProducto.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
        </div>
      </div>
    </div>
    `
  )
  .join("");

/* productos.forEach((producto) => {
  const colDiv = document.createElement("div");
  colDiv.className = "col-12 col-md-6 col-lg-4 my-3";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const img = document.createElement("img");
  img.src = producto.imagen;
  img.className = "card-img-top";
  img.alt = producto.nombre;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = producto.nombre;

  const cardPrice = document.createElement("p");
  cardPrice.className = "card-text";
  cardPrice.textContent = `Precio: $${producto.precio}`;

  const cardDesc = document.createElement("p");
  cardDesc.className = "card-text";
  cardDesc.textContent = producto.descripcion;

  const cardLink = document.createElement("a");
  cardLink.href = "#";
  cardLink.className = "btn btn-primary";
  cardLink.textContent = "Ver Más";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardDesc);
  cardBody.appendChild(cardLink);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  divCards.appendChild(colDiv);
});
 */
