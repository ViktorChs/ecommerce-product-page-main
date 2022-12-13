// DOM elements

const shoppingCartItems = document.querySelector('#shoppingCartItemsContainer');
const sumButton = document.getElementById('btn2');
const substractButton = document.getElementById('btn1');
const toggleAble = document.querySelector('.left-fragment-top-bar-buttons');
const valor = document.querySelector('#txt')
const shoppingCartItemsContainer = document.querySelector('.shopping-cart');
const cartContainerToggle = document.querySelector('#cart-container-toggle');

console.log(shoppingCartItems);

// Initial values for the cart

let cart = {
  // *TODOS*
  // Usa este array para almacenar los productos que el usuario añada (o quite) al carrito
  // Usa una función para leer actualizar este objeto cada vez que haya un cambio en el carrito

  // Cambio grande: ahora que el carrito es un objeto que tiene un array de productos, lee de este array para mostrar los productos.
  // Calcula el total de los productos y si el array es mayor a 0, haz un loop para mostrar los productos. De resto, muestra el mensaje de carrito vacío.
  // Lee: manipulación de arrays, manipulación de objetos, manipulación de DOM
  items: [],
  total: 0,
};

// Cart initialization

function cartInitialization() { 
   if (cart.total === 0) {
    shoppingCartItems.innerHTML = 'funciona';
  }
}

// Cart functions

/* function readCartState() {

} 

function updateCartState() {

}  */


// Event handlers

function handleCartContainerToggle() {
  shoppingCartItemsContainer.classList.toggle('active');
}

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCardButton) => {
  addToCardButton.addEventListener('click', addToCartClicked);  
});


function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  const qt = button.closest('.bts-add-buy');
  const amountItem = qt.querySelector('.quat').value;

  let priceCartItem = itemPrice.slice(1);
    const pricePerQuantity = priceCartItem * amountItem + '.00';
    
  addItemToShoppingCart(
    itemTitle,
    itemPrice,
    itemImage,
    amountItem,
    pricePerQuantity,
  );
}


// Todo: lee los comentarios de arriba y reescribe esta función para que funcione con el nuevo objeto cart. Y reusa las funciones de
// operaciones del carrito.

/* function addItemToShoppingCart(
  itemTitle,
  itemPrice,
  itemImage,
  amountItem,
  pricePerQuantity,
) {
  if (cart.items.length === 0) {
    cart.total++;
   }
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle',
  );
  
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let e = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity',
        );
      e.textContent++;
      return;
    }
  }
  const shoppingCartRow = document.createElement('div');
  const shoppingCarContent = `<div class="shoppingCartItem">
      <div class="col-6">
          <div class="shopping-cart-item ">
              <img src=${itemImage} class="shopping-cart-image">
              
          </div>

      </div>
      <div class="col-2">
          <div class="shopping-cart-price ">
              <a class="shopping-cart-item-title shoppingCartItemTitle ">${itemTitle}</a>
              <div class="priceElement">
              <p class="item-price shoppingCartItemPrice">${itemPrice}</p>
              <p class="item-quat shoppingCartItemquat shoppingCartItemQuantity">${amountItem}</p>
              <p class="item-quat shoppingCartItemPricePerQuantity ">${
                '$' + pricePerQuantity
              }</p>
              </div>
          </div>
      </div>
      <div class="col-4">
          <div
              class="shopping-cart-quantity ">
              <button class="btn-danger buttonDelete" type="button"><img src="./images/icon-delete.svg"></button>
          </div>
      </div>
  </div>`;
  shoppingCartRow.innerHTML = shoppingCarContent;
  shoppingCartItems.innerHTML(shoppingCartRow);
  
   shoppingCartRow
   .querySelector('.buttonDelete')
   .addEventListener('click', removeShoppingCartItem);
} */

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
}


// Event listeners

sumButton.addEventListener('click', () => valor.value < 100 ? valor.value++ : '');

substractButton.addEventListener('click', () => valor.value > 1 ? valor.value-- : "");

cartContainerToggle.addEventListener('click', () => {
  handleCartContainerToggle();
});



cartInitialization();