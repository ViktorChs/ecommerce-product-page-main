//DOM Elements
const shoppingCartItems = document.querySelector("#shoppingCartItemsContainer");
const sumButton = document.getElementById("btn2");
const substractButton = document.getElementById("btn1");
const toggleAble = document.querySelector(".left-fragment-top-bar-buttons");
const valor = document.querySelector("#txt");
const shoppingCartItemsContainer = document.querySelector(".shopping-cart");
const cartContainerToggle = document.querySelector("#cart-container-toggle");
const buttonAddToCart = document.querySelector(".addToCart");
const notbutton = document.querySelector(".text-cart-noitem");
const prueba = document.querySelector(".prueba");

const addToShoppingCartButtons = document.querySelector(".addToCart");

//
const productos = [
  {
    precio: 125.0,
    id: 1,
    title: "Fall Limited Edition Sneakers",
    thumbnailUrl: "images/image-product-1-thumbnail.jpg",
  },
];

const producto = productos.find((producto) => producto.id == 1);
//
function handleCartContainerToggle() {
    shoppingCartItemsContainer.classList.toggle("active")
};

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

//Initial values for the cart
let cart = {
    items: [],
    total: 0,
};
// read Cart State
function readCartState() {
    if (cart.total <= 0) {
      notbutton.style.display = "flex";
    } else if (cart.total >= 1) {
      notbutton.style.display = "none";
    }
  };
// update Cart State
/*function updateCartState() {
};*/
//
/*function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".item");
  
    const itemTitle = cart.items[0].title;
    const itemPrice = cart.items[0].precio;
    const itemImage = cart.items[0].thumbnailUrl;
  
    const qt = button.closest(".bts-add-buy");
    const amountItem = qt.querySelector(".quat").value;
  
    var priceCartItem = itemPrice.slice(1);
    const pricePerQuantity = priceCartItem * amountItem + ".00";
  
    addItemToShoppingCart(
      itemTitle,
      itemPrice,
      itemImage,
      amountItem,
      pricePerQuantity
    );
  };
  function addItemToShoppingCart(
    itemTitle,
    itemPrice,
    itemImage,
    amountItem,
    pricePerQuantity
  ) {
    const shoppingCartRow = document.createElement("div");
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
                  "$" + pricePerQuantity
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
    shoppingCartItemsContainer.append(shoppingCartRow);
  
    shoppingCartRow.querySelector(".buttonDelete").addEventListener("click", removeShoppingCartItem);
      
  };

  function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest(".shoppingCartItem").remove();
  };
  // Cart initialization
prueba.addEventListener("click", () => cart.items.push(producto));
prueba.addEventListener("click", () => cart.total = cart.items.length);
*/
function cartInitialization() {
  if (cart.total <= 0) {
    notbutton.style.display = "flex";
  } else if (cart.total = 1) {
    notbutton.style.display = "none";
  }
};
//