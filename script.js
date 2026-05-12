const images = [
"assets/motos/sahara/1.jpeg",
"assets/motos/sahara/2.jpeg",
"assets/motos/sahara/3.jpeg"
];

let currentImage = 0;

/* GALERIA */

function changeImage(element){

document.getElementById("mainImage").src = element.src;

}

function nextImage(){

currentImage++;

if(currentImage >= images.length){
currentImage = 0;
}

document.getElementById("mainImage").src = images[currentImage];

}

function prevImage(){

currentImage--;

if(currentImage < 0){
currentImage = images.length - 1;
}

document.getElementById("mainImage").src = images[currentImage];

}

/* PESQUISA + FILTRO */

const searchInput = document.getElementById("searchInput");

const brandFilter = document.getElementById("brandFilter");

const cards = document.querySelectorAll(".card");

function filterMotos(){

const searchValue =
searchInput.value.toLowerCase();

const selectedBrand =
brandFilter.value;

cards.forEach(card => {

const model =
card.querySelector("h3")
.innerText
.toLowerCase();

const brand =
card.dataset.brand;

const matchSearch =
model.includes(searchValue);

const matchBrand =
selectedBrand === "all" ||
brand === selectedBrand;

if(matchSearch && matchBrand){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}

searchInput.addEventListener(
"input",
filterMotos
);

brandFilter.addEventListener(
"change",
filterMotos
);