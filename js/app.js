'use strict'

// Global variables
const productSectionTag = document.getElementById('product-pics');

const productOneImageTag = document.getElementById('product-one-img');
const productTwoImageTag = document.getElementById('product-two-img');
const productThreeImageTag = document.getElementById('product-three-img');

const productOneHeaderTag = document.getElementById('product-one-header');
const productTwoHeaderTag = document.getElementById('product-two-header');
const productThreeHeaderTag = document.getElementById('product-three-header');


// Establishes MAX NUMBER of products to click, starts total clicks at 0
const maxClicks = 25;
let totalClicks = 0;


let productOne = null;
let productTwo = null;
let productThree = null;

// Constructor function
const Product = function (productName, imageSrc) {
    this.productName = productName;
    this.clicks = 0;
    this.timesShown = 0;
    this.url = imageSrc;

    Product.all.push(this);
}


Product.all = [];

function pickNewProduct() {

    // previous product images
    const previousProductOne = productOne;
    const previousProductTwo = productTwo;
    const previousProductThree = productThree;

    shuffle(Product.all);
    // productOne = Product.all[0];
    // productTwo = Product.all[1];
    // productThree = Product.all[2];

    // ensures next product shown is not the same as previous product shown
    for (let product of Product.all) {
        if (product !== previousProductOne && product !== previousProductTwo && product !== previousProductThree) {
            productOne = product;
        }
    }

    // ensures next product shown is not the same as previous product, or same as productOne
    for (let product of Product.all) {
        if (product !== previousProductOne && product !== previousProductTwo && product !== previousProductThree && product !== productOne) {
            productTwo = product;
        }
    }

    // ensures next product shown is not the same as previous product, or same as productOne or productTwo
    for (let product of Product.all) {
        if (product !== previousProductOne && product !== previousProductTwo && product !== previousProductThree && product !== productOne && product !== productTwo) {
            productThree = product;
        }
    }

    renderNewProduct();
}


const renderNewProduct = function () {

    productOneImageTag.src = productOne.url;
    productOneImageTag.alt = productOne.productName;
    productOneHeaderTag.textContent = productOne.productName;

    productTwoImageTag.src = productTwo.url;
    productTwoImageTag.alt = productTwo.productName;
    productTwoHeaderTag.textContent = productTwo.productName;

    productThreeImageTag.src = productThree.url;
    productThreeImageTag.alt = productThree.productName;
    productThreeHeaderTag.textContent = productThree.productName;
};

const handleClickOnProduct = function (event) {
    if (totalClicks < maxClicks) {
        const itemClickedOn = event.target;
        const id = itemClickedOn.id;

        if (id === 'product-one-img' || id === 'product-two-img' || id === 'product-three-img') {

            if (id === 'product-one-img') {
                productOne.clicks += 1;
            } else if (id === 'product-two-img') {
                productTwo.clicks += 1;
            } else if (id === 'product-three-img')
                productThree.clicks += 1;
        }

        // adds +1 to total times the image/product is shown
        productOne.timesShown += 1;
        productTwo.timesShown += 1;
        productThree.timesShown += 1;
        // +1 to number of totalClicks
        totalClicks += 1;
        pickNewProduct();
    }

    // remove click function when maxClicks is reached
    if (totalClicks === maxClicks) {
        productSectionTag.removeEventListener('click', handleClickOnProduct);
        alert('25 products liked, thanks for participating!');

        //display likes to page after hitting maxClicks
        renderLikes();
        createChart();

    }
}

function renderLikes() {
    const likesListElem = document.getElementById('product-clicks');
    likesListElem.innerHTML = '';
    for (let i = 0; i < Product.all.length; i += 1) {
        const productPicture = Product.all[i];
        const productItemElem = document.createElement('li');
        likesListElem.appendChild(productItemElem);

        // X had Y votes, and was seen Z times.
        productItemElem.textContent = productPicture.productName + ' had ' + productPicture.clicks + ' votes, and was seen ' + productPicture.timesShown + ' times.';
    }
}


// Fisher yates  shuffle https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

// Event Listener
productSectionTag.addEventListener('click', handleClickOnProduct);



// Instantiates Product Objects
new Product('R2D2 Luggage', 'img/bag.jpg');
new Product('Banana Slicer', 'img/banana.jpg');
new Product('Bathroom Tablet Stand', 'img/bathroom.jpg');
new Product('Boot Sandles', 'img/boots.jpg');
new Product('Breakfast Machine', 'img/breakfast.jpg');
new Product('Meatball Gum', 'img/bubblegum.jpg');
new Product('Terrible Chair', 'img/chair.jpg');
new Product('Cthulhu Figure', 'img/cthulhu.jpg');
new Product('Dog Duckface', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('Pen Utensils', 'img/pen.jpg');
new Product('Pet Sweeper', 'img/pet-sweep.jpg');
new Product('Pizza Scissors', 'img/scissors.jpg');
new Product('Shark Sleeping Bag', 'img/shark.jpg');
new Product('Baby Sweeper', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('USB Tentacle', 'img/usb.gif');
new Product('Useless Watering Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');

pickNewProduct();

console.log('total clicks are: ', totalClicks);

// View results button learned from W3Schools.com
function viewResults() {
    let x = document.getElementById("product-clicks");
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

/////////////////////////////
///// ChartJS goes here /////
////////////////////////////

// Chart created with the assistance of Code Fellows instructor JB Tellez

function createChart(){

const productNamesArray = [];
const productLikesArray = [];


// build arrays
for (let i = 0; i < Product.all.length; i+=1) {
    const singleProductName = Product.all[i].productName;
    productNamesArray.push(singleProductName);
}

for (let i = 0; i < Product.all.length; i+=1) {
    const singleProductLikes = Product.all[i].clicks;
    productLikesArray.push(singleProductLikes);
}


const ctx = document.getElementById('productChart').getContext('2d');
const productChart = new Chart(ctx, {
    // Chart types here:
    type: 'bar',
    data: {
        labels: productNamesArray,
        datasets: [{
          label: 'Nubmer of Likes per Product',
          backgroundColor: 'rgb(0, 102, 255)',
          borderColor: 'rgb(51, 153, 102)',
          data: productLikesArray
        }]
      },

      // Options here
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
}