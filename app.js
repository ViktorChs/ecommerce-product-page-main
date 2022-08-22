let sumar = document.getElementById("btn2");
let restar = document.getElementById("btn1");

sumar.onclick = function() {
valor = document.getElementById("txt");
    if (valor.value < 100)valor.value ++;

  };

  restar.onclick = function() {
    valor = document.getElementById("txt")
    if (valor.value > 01)valor.value --;

  };
function result() {
  let toggleAble = document.querySelector(".cart-Container-Toggle");
  toggleAble.classList.toggle("active");
}

const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
addToShoppingCartButtons.forEach((addToCardButton) => {
  addToCardButton.addEventListener("click", addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector(
  ".shoppingCartItemsContainer"
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest(".item");

  const itemTitle = item.querySelector(".item-title").textContent;
  const itemPrice = item.querySelector(".item-price").textContent;
  const itemImage = item.querySelector(".item-image").src;

  const qt = button.closest(".bts-add-buy");
  const amountItem = qt.querySelector(".quat").value;

  let priceCartItem = itemPrice.slice(1);
    const pricePerQuantity = priceCartItem * amountItem + '.00';

  addItemToShoppingCart(itemTitle, itemPrice, itemImage, amountItem, pricePerQuantity);
}



function addItemToShoppingCart(itemTitle, itemPrice, itemImage,amountItem,pricePerQuantity) {

  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
 let e = (elementsTitle[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          '.shoppingCartItemQuantity'
          )
        );
      e.textContent++;
      return;
    }
  }
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
              <p class="item-quat shoppingCartItemPricePerQuantity ">${'$' + pricePerQuantity}</p>
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

   shoppingCartRow
   .querySelector('.buttonDelete')
   .addEventListener('click', removeShoppingCartItem);
}

function removeShoppingCartItem(event){
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
}