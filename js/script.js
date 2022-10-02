"use strict";

// FETCHING ELEMENTS
const smallShoeImg = document.querySelectorAll(
  ".container__images-desktop__img-box-item"
);

const container = document.querySelector(".container");

const bigShoeImg = document.querySelector(".container__images-desktop-item");

let quantity = document.querySelector(".container__main-quantity");

const minus = document.querySelector(".minus");

const plus = document.querySelector(".plus");

const addToCartBtn = document.querySelector(".container__main-btn");

const mobileCart = document.querySelector(
  ".container__header__nav-right-side__cart"
);

const desktopCart = document.querySelector(
  ".container__header-desktop-right-side__cart"
);

const cartModal = document.querySelector(".container__images-cart");

const emptyCart = document.querySelector(".container__images-cart__box-empty");

const emptyCartDesktop = document.querySelector(
  ".container__desktop-cart__box-empty"
);

const fullCart = document.querySelector(".container__images-cart__box");

let cartQuantity = document.querySelector(
  ".container__images-cart__box-text__quantity"
);

let cartResult = document.querySelector(
  ".container__images-cart__box-text__result"
);

const menu = document.querySelector(".container__menu");

const burger = document.querySelector(".container__header__nav-burger");

const closeMenuBtn = document.querySelector(".container__menu-close");

const menuLinks = document.querySelectorAll(".container__menu-list__item");

const checkoutBtn = document.querySelector(".container__images-cart-btn");

const clearCart = document.querySelector(".container__images-cart__box-delete");

const clearCartDesktop = document.querySelector(
  ".container__desktop-cart__box-delete "
);

const desktopModal = document.querySelector(".container__desktop-cart");

let desktopQuantity = document.querySelector(
  ".container__desktop-cart__box-text__quantity"
);

const desktopResult = document.querySelector(
  ".container__desktop-cart__box-text__result"
);

const desktopCartBtn = document.querySelector(".container__desktop-cart-btn");

const shopingDesktop = document.querySelector(".container__desktop-cart__box");

const shopingRate = document.querySelector(
  ".container__header__nav-right-side__rate"
);

const shopingRateDesktop = document.querySelector(
  ".container__header__desktop-right-side__rate"
);

// FUNCTION WHICH ADD SHADOW TO SMALL SHOES IMG
const changeImgShadow = (e) => {
  smallShoeImg.forEach((item) => item.classList.remove("img-active"));

  e.target.classList.add("img-active");

  if (
    e.target.classList.contains("img-active") &&
    e.target.dataset.shoe == "1"
  ) {
    bigShoeImg.setAttribute(`src`, `./images/image-product-1.jpg`);
  } else if (
    e.target.classList.contains("img-active") &&
    e.target.dataset.shoe == "2"
  ) {
    bigShoeImg.setAttribute(`src`, `./images/image-product-2.jpg`);
  } else if (
    e.target.classList.contains("img-active") &&
    e.target.dataset.shoe == "3"
  ) {
    bigShoeImg.setAttribute(`src`, `./images/image-product-3.jpg`);
  } else if (
    e.target.classList.contains("img-active") &&
    e.target.dataset.shoe == "4"
  ) {
    bigShoeImg.setAttribute(`src`, `./images/image-product-4.jpg`);
  }
};

// FUNCTION WHICH SUBTRACT QUANTITY FROM CART
const subtract = () => {
  if (Number(quantity.textContent) > 0) return Number(quantity.textContent--);
};

// FUNCTION WHICH ADD QUANTITY TO CART
const add = () => {
  if (Number(quantity.textContent) < 0) {
    return "error";
  } else {
    return Number(quantity.textContent++);
  }
};

// FUNCTION WHICH SHOW MENU ON MOBILE
const showMenu = () => {
  menu.classList.toggle("show-menu");
  menuLinks.forEach((item) => item.addEventListener("click", showMenu));
  const div = document.querySelector(".container > div");
  div.classList.toggle("container__shadow");
};

// FUNCTION WHICH SHOW YOUR CART ON MOBILE
const showCartMobile = () => {
  cartModal.classList.toggle("container__images-cart-animation");
  cartModal.classList.toggle("container__images-cart-active");
};

// FUNCTION WHICH ADDING OR REMOVING OUR CART
const shoping = () => {
  if (Number(quantity.textContent) === 0) {
    emptyCart.classList.remove("shoping");
  } else {
    emptyCart.classList.add("shoping");
    fullCart.classList.remove("shoping");
    cartQuantity.textContent = Number(quantity.textContent);
    cartResult.textContent = `$${125 * cartQuantity.textContent}.00`;
    shopingRate.classList.remove("shoping");
    shopingRate.textContent = Number(quantity.textContent);
  }
};

console.log(Number(quantity.textContent));

// FUNCTION WHICH CLEAR CART
const clear = () => {
  emptyCart.classList.remove("shoping");
  fullCart.classList.add("shoping");
  shopingRate.classList.add("shoping");
};

const clearDesktopCart = () => {
  emptyCartDesktop.classList.remove("shoping");
  shopingDesktop.classList.add("shoping");
  shopingRateDesktop.style.display = "none";
};

// FUNCTION WHICH SHOW CART ON DESKTOP
const showCartDesktop = () => {
  desktopModal.classList.toggle("container__images-cart-animation");
  desktopModal.classList.toggle("container__images-cart-active");
};

// FUNCTION WHICH CLOSE DESKTOP CART (Checkout)
const showDesktopProduct = () => {
  if (Number(quantity.textContent === 0)) {
    return emptyCartDesktop.classList.remove("shoping");
  } else if (Number(quantity.textContent > 0)) {
    emptyCartDesktop.classList.add("shoping");
    shopingDesktop.classList.remove("shoping");
    desktopQuantity.textContent = Number(quantity.textContent);
    desktopResult.textContent = `$${125 * desktopQuantity.textContent}.00`;
    shopingRateDesktop.style.display = "flex";
    shopingRateDesktop.textContent = Number(quantity.textContent);
  }
};

console.log(Number(desktopQuantity.textContent));

// LISTENERS
smallShoeImg.forEach((item) => item.addEventListener("click", changeImgShadow));
minus.addEventListener("click", subtract);
plus.addEventListener("click", add);
mobileCart.addEventListener("click", showCartMobile);
burger.addEventListener("click", showMenu);
closeMenuBtn.addEventListener("click", showMenu);
checkoutBtn.addEventListener("click", showCartMobile);
clearCart.addEventListener("click", clear);
addToCartBtn.addEventListener("click", shoping);
desktopCart.addEventListener("click", showCartDesktop);
addToCartBtn.addEventListener("click", showDesktopProduct);
desktopCartBtn.addEventListener("click", showCartDesktop);
clearCartDesktop.addEventListener("click", clearDesktopCart);
