//Array de productos
const productos = [
  {
    precio: 125.0,
    id: 1,
    title: "Fall Limited Edition Sneakers",
    thumbnailUrl: "images/image-product-1-thumbnail.jpg",
  },
];

// DOM elements

const shoppingCartItems = document.querySelector("#shoppingCartItemsContainer");
const sumButton = document.getElementById("btn2");
const substractButton = document.getElementById("btn1");
const valor = document.querySelector("#txt");
const toggleAble = document.querySelector(".left-fragment-top-bar-buttons");
const shoppingCartItemsContainer = document.querySelector(".shopping-cart");
const cartContainerToggle = document.querySelector("#cart-container-toggle");
const buttonAddToCart = document.querySelector(".addToCart");
const notbutton = document.querySelector(".text-cart-noitem");
const prueba = document.querySelector(".prueba");
// Initial values for the cart

const producto = productos.find((producto) => producto.id == 1);

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
/* function readCartState() {
  
} 

function updateCartState() {
  
}  */
// Event handlers

function handleCartContainerToggle() {
  shoppingCartItemsContainer.classList.toggle("active");
};

const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
addToShoppingCartButtons.forEach((addToCardButton) => {
  addToCardButton.addEventListener("click", addToCartClicked)
});




// Todo: lee los comentarios de arriba y reescribe esta función para que funcione con el nuevo objeto cart. Y reusa las funciones de
// operaciones del carrito.


// Event listeners

sumButton.addEventListener("click", () =>
  valor.value < 100 ? valor.value++ : ""
);

substractButton.addEventListener("click", () =>
  valor.value > 1 ? valor.value-- : ""
);

cartContainerToggle.addEventListener("click", () => {
  handleCartContainerToggle();
});


// Cart functions

function cartInitialization() {
  if (cart.total <= 0) {
    notbutton.style.display = "flex";
  } else if (cart.total = 1) {
    notbutton.style.display = "none";
  }
};

// Cart initialization

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
};
 function addItemToShoppingCart(
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
};


//