const choice = document.querySelectorAll(".item");
const carsList = document.querySelector(".middle__cars-list");
const phonesList = document.querySelector(".middle__phones-list");
const buyButton = document.querySelectorAll(".middle__choose-item");
const bmw = document.querySelector(".right__bmw");
const ford = document.querySelector(".right__ford");
const iphone = document.querySelector(".right__iphone");
const nokia = document.querySelector(".right__nokia");
const buttons = document.querySelectorAll(".buy");
const confirmButton = document.getElementById("confirm");

function cars() {
  carsList.style.display = "block";
  phonesList.style.display = "none";
}

function phones() {
  carsList.style.display = "none";
  phonesList.style.display = "block";
}

let stuffName = '';

function bmwCar() {
  bmw.style.display = "block";
  ford.style.display = "none";
  iphone.style.display = "none";
  nokia.style.display = "none";
  stuffName = "BMW M8 Competition";
}

function fordCar() {
  bmw.style.display = "none";
  ford.style.display = "block";
  iphone.style.display = "none";
  nokia.style.display = "none";
  stuffName = "Ford Mustang Shelby GT500";
}

function iphoPhone() {
  bmw.style.display = "none";
  ford.style.display = "none";
  iphone.style.display = "block";
  nokia.style.display = "none";
  stuffName = "iPhone 11 Pro Max 256GB";
}

function nokiaPhone() {
  bmw.style.display = "none";
  ford.style.display = "none";
  iphone.style.display = "none";
  nokia.style.display = "block";
  stuffName = "Nokia 3310 0MB";
}

choice[0].addEventListener("click", cars);

choice[1].addEventListener("click", phones);

buyButton[0].addEventListener("click", bmwCar);

buyButton[1].addEventListener("click", fordCar);

buyButton[2].addEventListener("click", iphoPhone);

buyButton[3].addEventListener("click", nokiaPhone);

function showForm() {
  let buyForm = document.querySelector(".buy_form");
  buyForm.style.display = "block";
}

for (let button of buttons) {
  button.addEventListener("click", (event) => {
    // if (event.target.dataset.buy !== undefined) {
    //     window.message = alert(`You bought ${name}!`)
    //     location.reload()
    // }

    showForm();
  });
}

