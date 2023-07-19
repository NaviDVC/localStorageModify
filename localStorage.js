const nameValue = "";
const cityValue = city.value;
const postValue = post.value;
const countValue = count.value;
const commentValue = comment.value;
const paymentValue = payment.value;
const buyBtn = document.querySelector("#confirm");
const orderBtn = document.getElementById("my-orders");
const hiddenOrder = document.getElementById("order-hidden");
const hiddenBtn = document.getElementById("backBtn");

function displayOrder(order) {
  const orders = JSON.parse(localStorage.getItem("orders"));
  const ordersList = document.getElementById("orders-list");

  ordersList.innerHTML = "";

  if (orders) {
    orders.forEach((order, index) => {
      const delBtn = document.createElement("button");
      delBtn.classList.add("delete-order");
      delBtn.textContent = "Delete";
      const listItem = document.createElement("li");
      listItem.classList.add("order-list");
      listItem.innerHTML = JSON.parse(
        JSON.stringify(
          `Order ${index + 1}: ${order.item} - City : ${
            order.city
          } - Post office : ${order.post}`
        )
      );
      ordersList.appendChild(listItem);
      listItem.appendChild(delBtn);

      const deleteOrder = document.querySelectorAll(".delete-order");
      deleteOrder.forEach((order) => {
        order.setAttribute("data-delete", "");
        order.addEventListener("click", (event) => {
          console.log(
            (event.target.dataset.delete = +event.target.dataset.delete + 1) // !!!!! а здесь считает по 5 элеметов?
          );
        });
      });
    });
  }

  const orderListElement = document.querySelectorAll(".order-list");
  orderListElement.forEach((elem) => {
    elem.setAttribute("data-order", "");
    elem.addEventListener("click", (event) => {
      console.log(
        (event.target.dataset.order = +event.target.dataset.order + 1) // !!!!! почему здесь считает по одному
      );
    });
  });

  hiddenOrder.classList.remove("hidden");
  hiddenBtn.classList.remove("hidden");
}

function addOrder(order) {
  let orders = JSON.parse(localStorage.getItem("orders"));

  if (!orders) {
    orders = [];
  }

  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));
}

function hideOrders() {
  hiddenOrder.classList.add("hidden");
  hiddenBtn.classList.add("hidden");
}

orderBtn.addEventListener("click", (e) => {
  displayOrder();
});

hiddenBtn.addEventListener("click", (e) => {
  hideOrders();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNameValid = validateName(userName, NAME_ERROR);

  const isCityChecked = validateCity(city, CITY__ERROR);

  const isPostChecked = validatePost(post, POST_ERROR);

  const isCountValid = validateCount(count, COUNT_ERROR);

  const isPaymentChecked = validateRadio(payment, RADIO_ERROR);

  if (
    isNameValid &&
    isCityChecked &&
    isPaymentChecked &&
    isPostChecked &&
    isCountValid &&
    commentValue !== ""
  ) {
    if (
      confirm(`Hello, ${userName.value}!\n
          Please, check your order information:\n
          You want to buy ${stuffName}\n
          City: ${city.value}!\n
          Payment method: ${payment.value}\n
          Post office number: ${post.value}!\n
          Quantity: ${count.value}!\n
          Comment: ${comment.value}`)
    ) {
      let orderInfo = {
        item: "",
        name: "",
        city: "",
        post: "",
        payment: "",
        count: "",
        comment: "",
      };

      orderInfo.item = stuffName;
      orderInfo.name = userName.value;
      orderInfo.city = city.value;
      orderInfo.post = post.value;
      orderInfo.payment = payment.value;
      orderInfo.count = count.value;
      orderInfo.comment = comment.value;

      addOrder(orderInfo);

      location.reload();
    }
  } else if (
    isNameValid &&
    isCityChecked &&
    isPaymentChecked &&
    isPostChecked &&
    isCountValid
  ) {
    if (
      confirm(`Hello, ${userName.value}!\n
      Please, check your order information:\n
      You want to buy ${stuffName}\n
      City: ${city.value}!\n
      Payment method: ${payment.value}\n
      Post office number: ${post.value}!\n
      Quantity: ${count.value}!`)
    ) {
      let orderInfo = {
        item: "",
        name: "",
        city: "",
        post: "",
        payment: "",
        count: "",
      };

      orderInfo.item = stuffName;
      orderInfo.name = userName.value;
      orderInfo.city = city.value;
      orderInfo.post = post.value;
      orderInfo.payment = payment.value;
      orderInfo.count = count.value;
      orderInfo.comment = comment.value;

      addOrder(orderInfo);

      location.reload();
    }
  }
});
