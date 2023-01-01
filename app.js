let pro = [
  {
    id: 1,
    precio: 125.0,
    title: "Fall Limited Edition Sneakers",
    thumbnailUrl: "images/image-product-1-thumbnail.jpg",
  },
];

// DOM elements
const notbutton = document.querySelector(".text-cart-noitem");
const shoppingCartItems = document.querySelector("#shoppingCartItemsContainer");
const sumButton = document.getElementById("btn2");
const substractButton = document.getElementById("btn1");
const toggleAble = document.querySelector(".left-fragment-top-bar-buttons");
const blackbackgr = document.querySelector(".blackBlock")
const valor = document.querySelector("#txt");
const shoppingCartItemsContainer = document.querySelector(".shopping-cart");
const cartContainerToggle = document.querySelector("#cart-container-toggle");
const ButtonCheckout = document.querySelector(".ButtonCheckout");

const cantidad = document.getElementById("txt").value;
const prod = pro.find((prodId) => prodId.id == 1);
const send = document.querySelector(".addToCart");

// Initial values for the cart

let cart = {
  items: [],
  total: 0,
};

// Cart initialization

// Cart functions

function cartInitialization() {
  if (cart.total <= 0) {
    notbutton.style.display = "flex";
    ButtonCheckout.style.display = "none";
  } else if ((cart.total = 1)) {
    notbutton.style.display = "none";
    ButtonCheckout.style.display = "flex";
  }
}

const agregarAlcarrito = (prodId) => {
  const existe = cart.items.some((prod) => prod.id == 1);
  console.log(existe);
  if (existe) {
    const prod = cart.items.map((prod) => {
      if (prod.id == prodId) {
        value++;
      }
    });
  } else {
    cart.items.push(prod);
  }
  cart.total = cart.items.length;

  readCartState();
};

const deleteItem = (prodId) => {
  const item = cart.items.find((prod) => prod.id === prodId);
  const index = cart.items.indexOf(item);
  cart.items.splice(index, 1);
  cart.total = cart.items.length;
  readCartState();
};

const readCartState = () => {
  shoppingCartItems.innerHTML = "";

  cart.items.forEach((prod) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="shoppingCartItem">
      <div class="col-6"> 
          <div class="shopping-cart-item ">
              <img src=${prod.thumbnailUrl} class="shopping-cart-image">
              
          </div>
      </div>
      <div class="col-2">
          <div class="shopping-cart-price ">
              <a class="shopping-cart-item-title shoppingCartItemTitle ">${
                prod.title
              }</a>
              <div class="priceElement">
              <p class="item-price shoppingCartItemPrice">$ ${
                prod.precio
              }.00 </p>
              <p class="item-quat shoppingCartItemquat shoppingCartItemQuantity">${value}</p>
              <p class="item-quat shoppingCartItemPricePerQuantity ">${
                "$" + prod.precio * value + ".00"
              }</p>
              </div>
          </div>
      </div>
      <div class="col-4">
          <div
              class="shopping-cart-quantity ">
              <button onclick="deleteItem(${
                prod.id
              })" class="btn-danger buttonDelete" type="button"><img src="./images/icon-delete.svg"></button>
          </div>
      </div>
  </div>`;

    shoppingCartItems.appendChild(div);
  });
  const deletebutton = document.querySelector(".buttonDelete");
  deletebutton.addEventListener("click", () => {
    cartInitialization();
  });
};

// Event handlers

function handleCartContainerToggle() {
  shoppingCartItemsContainer.classList.toggle("active");
}

const buttonmenu = document.querySelector(".button-menu-device");
buttonmenu.addEventListener("click", () => {
  menuContainerToggle();
});

function menuContainerToggle() {
  toggleAble.classList.toggle("active");
  blackbackgr.classList.toggle("active");
}

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
const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
addToShoppingCartButtons.forEach((addToCardButton) => {
  addToCardButton.addEventListener("click", () => {
    agregarAlcarrito(), cartInitialization();
  });
});
send.addEventListener("click", function (e) {
  e.preventDefault();
  const cant = document.getElementById("txt");
  value = cant.value;
  console.log(value);
});
