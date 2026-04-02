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

{marca:"Lattafa", nombre:"Qaed Al Fursan Black", genero:"Masculino", precio:"$50.000", img:"img/qaed_al_fursan_black.jpg"},
{marca:"Lattafa", nombre:"Qaed Al Fursan White", genero:"Masculino", precio:"$50.000", img:"img/qaed_al_fursan_white.jpg"},
{marca:"Lattafa", nombre:"Hawas Malibu", genero:"Unisex", precio:"$96.000", img:"img/hawas_malibu.jpg"},
{marca:"French Avenue", nombre:"Liquid Brun", genero:"Masculino", precio:"$85.000", img:"img/liquid_brun.jpg"},
{marca:"Al Haramain", nombre:"Amber Oud Ruby", genero:"Masculino", precio:"$150.000", img:"img/amber_oud_rubi.jpg"},
{marca:"Versace", nombre:"Eros Flame", genero:"Masculino", precio:"$165.000", img:"img/versace_eros.jpg"},

{marca:"Lattafa", nombre:"Badee Al Oud Amethyst", genero:"Unisex", precio:"$60.000", img:"img/badee_amethysy.jpg"},
{marca:"Lattafa", nombre:"Maahir Legacy", genero:"Masculino", precio:"$55.000", img:"img/maahir_legacy.jpg"},
{marca:"Lattafa", nombre:"Badee Al Oud For Glory", genero:"Masculino", precio:"$60.000", img:"img/baeed_al_oud_for_glory.jpg"},

{marca:"Lattafa", nombre:"Yara Rosa", genero:"Femenino", precio:"$45.000", img:"img/yara_rosa.jpg"},
{marca:"Lattafa", nombre:"Yara Tous", genero:"Unisex", precio:"$40.000", img:"img/yara_tous.jpg"},
{marca:"Lattafa", nombre:"Yara Candy", genero:"Femenino", precio:"$55.000", img:"img/yara_candy.jpg"},

{marca:"Armaf", nombre:"Odyssey Aqua", genero:"Masculino", precio:"$75.000", img:"img/odyssey_aqua.jpg"},
{marca:"Armaf", nombre:"Odyssey Homme", genero:"Masculino", precio:"$120.000", img:"img/odyssey_home.jpg"},

{marca:"Lattafa", nombre:"The Kingdom", genero:"Masculino", precio:"$60.000", img:"img/the_kingdom_.jpg"},
{marca:"Lattafa", nombre:"Fakhar Pride Gold", genero:"Unisex", precio:"$55.000", img:"img/fakhar_pride_gold.jpg"},
{marca:"Lattafa", nombre:"Fakhar Rose Gold", genero:"Femenino", precio:"$65.000", img:"img/fakahr_rose_gold.jpg"},
{marca:"Lattafa", nombre:"Fakhar Black", genero:"Masculino", precio:"$65.000", img:"img/fakhat_black.jpg"},

{marca:"Lattafa", nombre:"Asad Bourbon", genero:"Masculino", precio:"$60.000", img:"img/asad_bourbon.jpg"},
{marca:"Lattafa", nombre:"Asad Zanzibar", genero:"Masculino", precio:"$45.000", img:"img/asad_zanzibar.jpg"},

{marca:"Afnan", nombre:"9PM Rebel", genero:"Unisex", precio:"$75.000", img:"img/9pm_rebel.jpg"},
{marca:"Afnan", nombre:"9PM", genero:"Masculino", precio:"$85.000", img:"img/9_pm.jpg"},

{marca:"Lattafa", nombre:"Khamrah Qahwa", genero:"Unisex", precio:"$60.000", img:"img/kamrah_qahwa.jpg"},
{marca:"Lattafa", nombre:"Khamrah Dukhan", genero:"Masculino", precio:"$53.000", img:"img/kamrah_dukhan.jpg"},
{marca:"Lattafa", nombre:"Khamrah", genero:"Unisex", precio:"$50.000", img:"img/kamrah_.jpg"},

{marca:"Armaf", nombre:"Club de Nuit Intense", genero:"Masculino", precio:"$65.000", img:"img/club_de_nuit_intense.jpg"},
{marca:"Armaf", nombre:"Club de Nuit Urban Elixir", genero:"Masculino", precio:"$85.000", img:"img/club_de_nuit_urban_elixir.jpg"},
{marca:"Armaf", nombre:"Club de Nuit Intense Woman", genero:"Femenino", precio:"$65.000", img:"img/club_de_nuit_intense_woman.jpg"},
{marca:"Armaf", nombre:"Club de Nuit Woman", genero:"Femenino", precio:"$65.000", img:"img/club_de_nuit_woman.jpg"},
{marca:"Armaf", nombre:"Club de Nuit Untold", genero:"Unisex", precio:"$85.000", img:"img/club_de_nuit_untold.jpg"},

{marca:"Rasasi", nombre:"Hawas Black", genero:"Masculino", precio:"$65.000", img:"img/hawas_black.jpg"},
{marca:"Rasasi", nombre:"Hawas Ice", genero:"Masculino", precio:"$80.000", img:"img/hawas_ice.jpg"},
{marca:"Rasasi", nombre:"Hawas For Him", genero:"Masculino", precio:"$57.000", img:"img/hawas_for_him.jpg"},

{marca:"Bharara", nombre:"King", genero:"Masculino", precio:"$140.000", img:"img/bahrara_king.jpg"},

{marca:"Al Haramain", nombre:"Amber Oud Dubai Night", genero:"Unisex", precio:"$100.000", img:"img/amber_oud_dubai_night.jpg"},
{marca:"Al Haramain", nombre:"Amber Oud Gold", genero:"Unisex", precio:"$100.000", img:"img/amber_oud_gold.jpg"},

{marca:"Lattafa", nombre:"Eclaire", genero:"Femenino", precio:"$55.000", img:"img/eclaire.jpg"},
{marca:"Lattafa", nombre:"Badee Sublime", genero:"Unisex", precio:"$60.000", img:"img/badee_sublime.jpg"},
{marca:"Lattafa", nombre:"Haya Pink", genero:"Femenino", precio:"$55.000", img:"img/haya_pink.jpg"},
{marca:"Lattafa", nombre:"Badee Noble Blush", genero:"Femenino", precio:"$55.000", img:"img/badee_noble_blush.jpg"},

{marca:"Lattafa", nombre:"Maahir Black", genero:"Unisex", precio:"$60.000", img:"img/maahir_black.jpg"},

{marca:"Lattafa", nombre:"His Confession", genero:"Masculino", precio:"$65.000", img:"img/his_confession.jpg"},
{marca:"Lattafa", nombre:"Her Confession", genero:"Femenino", precio:"$65.000", img:"img/her_confession.jpg"},

{marca:"Lattafa", nombre:"Yara Moi", genero:"Femenino", precio:"$45.000", img:"img/yara_moi.jpg"},

{marca:"Armaf", nombre:"Odyssey Candee", genero:"Femenino", precio:"$45.000", img:"img/odyssey_candee.jpg"},
{marca:"Armaf", nombre:"Odyssey Mandarin Sky", genero:"Masculino", precio:"$60.000", img:"img/mandarin_sky.jpg"},
{marca:"Armaf", nombre:"Odyssey Limoni", genero:"Unisex", precio:"$50.000", img:"img/odyssey_limoni.jpg"},

{marca:"Armaf", nombre:"9AM Dive", genero:"Masculino", precio:"$80.000", img:"img/9_am_dive.jpg"},
{marca:"Armaf", nombre:"9PM Pour Femme", genero:"Femenino", precio:"$80.000", img:"img/9pm_pour_femme.jpg"},

{marca:"Lattafa", nombre:"Asad Zanzibar Limited Edition", genero:"Masculino", precio:"$55.000", img:"img/asad_zanzibar_limited_edition.jpg"},
{marca:"Lattafa", nombre:"Asad Black", genero:"Masculino", precio:"$65.000", img:"img/asad_black.jpg"}

];

const grid = document.getElementById("catalogo-grid");
const buscador = document.getElementById("buscador");
const ordenPrecio = document.getElementById("ordenPrecio");

function convertirPrecio(precio){
return parseInt(precio.replace(/\$|\./g, ""));
}

function renderPerfumes(lista){

grid.innerHTML = "";

lista.forEach(p => {

grid.innerHTML += `

<div class="card">

<div class="perfume-icon">
<img src="${encodeURI(p.img)}" class="perfume-img">
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

function filtrarYOrdenar(){

const texto = buscador.value.toLowerCase();

let resultados = perfumes.filter(p =>
p.nombre.toLowerCase().includes(texto) ||
p.marca.toLowerCase().includes(texto) ||
p.genero.toLowerCase().includes(texto)
);

const tipoOrden = ordenPrecio.value;

if(tipoOrden === "menor"){
resultados.sort((a,b) => convertirPrecio(a.precio) - convertirPrecio(b.precio));
}

if(tipoOrden === "mayor"){
resultados.sort((a,b) => convertirPrecio(b.precio) - convertirPrecio(a.precio));
}

renderPerfumes(resultados);

}

buscador.addEventListener("input", filtrarYOrdenar);
ordenPrecio.addEventListener("change", filtrarYOrdenar);

renderPerfumes(perfumes);