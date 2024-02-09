'use strict';

function AppState() {
  this.allProducts = [];

}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

};

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  localStorage.setItem('products',JSON.stringify(this.allProducts));
  // console.log(localStorage);
};

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  const storedProducts = localStorage.getItem('products');

  if (storedProducts){
    // if stored data parse it and assign it to allProducts
    this.allProducts = JSON.parse(storedProducts);
  }else{
    // if there is no stored data ins. products
    this.instantiateProducts();
  }
  /// shows in console
  console.log(this.allProducts)
};


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
