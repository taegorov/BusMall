'use strict'

// Global variables
const productImageSectionTag = document.getElementById('product-pics');

const imageOneTag = document.getElementById('product-one-img');
const imageTwoTag = document.getElementById('product-two-img');
const imageOneTag = document.getElementById('product-three-img');

const leftGoatHeaderTag = document.getElementById('left-goat-h2');
const rightGoatHeaderTag = document.getElementById('right-goat-h2');


let imageOne = null;
let imageTwo = null;
let imageThree = null;

const Product = function (productName, imageSrc) {
    this.productName = productName;
    this.clicks = 0;
    this.timesShown = 0;
    this.url = imageSrc;

    Product.all.push(this);
}


function pickNewProduct() {
    shuffle(Product.all);
    imageOne = Product.all[0];
    imageTwo = Product.all[1];
    imageThree = Product.all[2];
  
    renderNewProduct();
  }

const renderNewProduct = function () {

    leftGoatImageTag.src = leftGoatOnThePage.url;
    leftGoatImageTag.alt = leftGoatOnThePage.title;
    leftGoatHeaderTag.textContent = leftGoatOnThePage.title;
  
    rightGoatImageTag.src = rightGoatOnThePage.url;
    rightGoatImageTag.alt = rightGoatOnThePage.title;
    rightGoatHeaderTag.textContent = rightGoatOnThePage.title;
  };
  
  const handleClickOnGoat = function (event) {
  



/* fisher yates  shuffle
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
*/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i-=1) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }






// Instantiates Product Objects
new Product('Bag', './img/bag.jpg');
new Product('Banana', './img/banana.jpg');
new Product('Bathroom', './img/bathroom.jpg');
new Product('Boots', './img/boots.jpg');
new Product('Breakfast', './img/breakfast.jpg');
new Product('Bubblegum', './img/bubblegum.jpg');
new Product('Chair', './img/chair.jpg');
new Product('Cthulhu', './img/cthulhu.jpg');
new Product('Dog-Duck', './img/dog-duck.jpg');
new Product('Dragon', './img/dragon.jpg');
new Product('Pen', './img/pen.jpg');
new Product('Pet Sweeper', './img/pet-sweep.jpg');
new Product('Pizza Scissors', './img/scissors.jpg');
new Product('Shark', './img/shark.jpg');
new Product('Baby Sweeper', './img/sweep.png');
new Product('Tauntaun', './img/tauntaun.jpg');
new Product('USB Tentacle', './img/usb.gif');
new Product('Watering Can', './img/water-can.jpg');
new Product('Wine Glass', './img/wine-glass.jpg');

