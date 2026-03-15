function contactar(perfume){

let numero = "5491169304416"

let mensaje = `Hola!
Vengo desde la página web de *Perfumes Malu*.

Quería consultar por el siguiente perfume:

Marca: ${perfume.marca}
Perfume: ${perfume.nombre}
Tipo: ${perfume.genero}

¿Está disponible actualmente?

Muchas gracias.`

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

window.open(url, "_blank")

}

const perfumes = [

{marca:"Lattafa", nombre:"Qaed Al Fursan Black", genero:"Masculino", precio:"$50.000"},
{marca:"Lattafa", nombre:"Qaed Al Fursan White", genero:"Masculino", precio:"$50.000"},
{marca:"Lattafa", nombre:"Hawas Malibu", genero:"Unisex", precio:"$96.000"},
{marca:"French Avenue", nombre:"Liquid Brun", genero:"Masculino", precio:"$85.000"},
{marca:"Al Haramain", nombre:"Amber Oud Ruby", genero:"Masculino", precio:"$150.000"},
{marca:"Versace", nombre:"Eros Flame", genero:"Masculino", precio:"$165.000"},

{marca:"Lattafa", nombre:"Badee Al Oud Amethyst", genero:"Unisex", precio:"$60.000"},
{marca:"Lattafa", nombre:"Maahir Legacy", genero:"Masculino", precio:"$55.000"},
{marca:"Lattafa", nombre:"Badee Al Oud For Glory", genero:"Masculino", precio:"$60.000"},

{marca:"Lattafa", nombre:"Yara Rosa", genero:"Femenino", precio:"$45.000"},
{marca:"Lattafa", nombre:"Yara Tous", genero:"Unisex", precio:"$40.000"},
{marca:"Lattafa", nombre:"Yara Candy", genero:"Femenino", precio:"$55.000"},

{marca:"Armaf", nombre:"Odyssey Aqua", genero:"Masculino", precio:"$75.000"},
{marca:"Armaf", nombre:"Odyssey Homme", genero:"Masculino", precio:"$120.000"},

{marca:"Lattafa", nombre:"The Kingdom", genero:"Masculino", precio:"$60.000"},
{marca:"Lattafa", nombre:"Fakhar Pride Gold", genero:"Unisex", precio:"$55.000"},
{marca:"Lattafa", nombre:"Fakhar Rose Gold", genero:"Femenino", precio:"$65.000"},
{marca:"Lattafa", nombre:"Fakhar Black", genero:"Masculino", precio:"$65.000"},

{marca:"Lattafa", nombre:"Asad Bourbon", genero:"Masculino", precio:"$60.000"},
{marca:"Lattafa", nombre:"Asad Zanzibar", genero:"Masculino", precio:"$45.000"},

{marca:"Afnan", nombre:"9PM Rebel", genero:"Unisex", precio:"$75.000"},
{marca:"Afnan", nombre:"9PM", genero:"Masculino", precio:"$85.000"},

{marca:"Lattafa", nombre:"Khamrah Qahwa", genero:"Unisex", precio:"$60.000"},
{marca:"Lattafa", nombre:"Khamrah Dukhan", genero:"Masculino", precio:"$53.000"},
{marca:"Lattafa", nombre:"Khamrah", genero:"Unisex", precio:"$50.000"},

{marca:"Armaf", nombre:"Club de Nuit Intense", genero:"Masculino", precio:"$65.000"},
{marca:"Armaf", nombre:"Club de Nuit Urban Elixir", genero:"Masculino", precio:"$85.000"},
{marca:"Armaf", nombre:"Club de Nuit Intense Woman", genero:"Femenino", precio:"$65.000"},
{marca:"Armaf", nombre:"Club de Nuit Woman", genero:"Femenino", precio:"$65.000"},
{marca:"Armaf", nombre:"Club de Nuit Untold", genero:"Unisex", precio:"$85.000"},

{marca:"Rasasi", nombre:"Hawas Black", genero:"Masculino", precio:"$65.000"},
{marca:"Rasasi", nombre:"Hawas Ice", genero:"Masculino", precio:"$80.000"},
{marca:"Rasasi", nombre:"Hawas For Him", genero:"Masculino", precio:"$57.000"},

{marca:"Bharara", nombre:"King", genero:"Masculino", precio:"$140.000"},

{marca:"Al Haramain", nombre:"Amber Oud Dubai Night", genero:"Unisex", precio:"$100.000"},
{marca:"Al Haramain", nombre:"Amber Oud Gold", genero:"Unisex", precio:"$100.000"},

{marca:"Lattafa", nombre:"Eclaire", genero:"Femenino", precio:"$55.000"},
{marca:"Lattafa", nombre:"Badee Sublime", genero:"Unisex", precio:"$60.000"},
{marca:"Lattafa", nombre:"Haya Pink", genero:"Femenino", precio:"$55.000"},
{marca:"Lattafa", nombre:"Badee Noble Blush", genero:"Femenino", precio:"$55.000"},

{marca:"Lattafa", nombre:"Maahir Black", genero:"Unisex", precio:"$60.000"},

{marca:"Lattafa", nombre:"His Confession", genero:"Masculino", precio:"$65.000"},
{marca:"Lattafa", nombre:"Her Confession", genero:"Femenino", precio:"$65.000"},

{marca:"Lattafa", nombre:"Yara Moi", genero:"Femenino", precio:"$45.000"},

{marca:"Armaf", nombre:"Odyssey Candee", genero:"Femenino", precio:"$45.000"},
{marca:"Armaf", nombre:"Odyssey Mandarin Sky", genero:"Masculino", precio:"$60.000"},
{marca:"Armaf", nombre:"Odyssey Limoni", genero:"Unisex", precio:"$50.000"},

{marca:"Armaf", nombre:"9AM Dive", genero:"Masculino", precio:"$80.000"},
{marca:"Armaf", nombre:"9PM Pour Femme", genero:"Femenino", precio:"$80.000"},

{marca:"Lattafa", nombre:"Asad Zanzibar Limited Edition", genero:"Masculino", precio:"$55.000"},
{marca:"Lattafa", nombre:"Asad Black", genero:"Masculino", precio:"$65.000"}

];

const grid = document.getElementById("catalogo-grid");

function renderPerfumes(lista){

grid.innerHTML = "";

lista.forEach(p => {

grid.innerHTML += `

<div class="card">

<div class="perfume-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="70" height="70" fill="none" stroke="#8b5e34" stroke-width="1.5">
<rect x="7" y="8" width="10" height="12" rx="2"/>
<line x1="9" y1="8" x2="9" y2="5"/>
<line x1="15" y1="8" x2="15" y2="5"/>
<rect x="10" y="3" width="4" height="2" rx="1" fill="#8b5e34"/>
</svg>
</div>

<h3>${p.marca}</h3>

<p>${p.nombre} · ${p.genero}</p>

<div class="price">${p.precio}</div>

<button onclick='contactar(${JSON.stringify(p)})' class="btn">

Consultar

</button>

</div>

`;

});

}

renderPerfumes(perfumes);

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", () => {

const texto = buscador.value.toLowerCase();

const resultados = perfumes.filter(p =>

p.nombre.toLowerCase().includes(texto) ||
p.marca.toLowerCase().includes(texto) ||
p.genero.toLowerCase().includes(texto)

);

renderPerfumes(resultados);

});