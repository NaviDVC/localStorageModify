const commentValue = comment.value;
const orderBtn = document.getElementById("my-orders");
const hiddenOrder = document.getElementById("order-hidden");
const hiddenBtn = document.getElementById("backBtn");
const orders = JSON.parse(localStorage.getItem("orders"));
const noOrders = document.getElementById('no-orders');
noOrders.classList.add('hidden')

function displayOrder() {
  const ordersList = document.getElementById("orders-list");

  ordersList.innerHTML = "";
  
  if (orders) {
    orders.forEach((order, index) => {
      const deleteBtn = document.createElement("button");

      deleteBtn.classList.add("delete-order");
      deleteBtn.textContent = "Delete";

      const listItem = document.createElement("li");

      listItem.classList.add("order-list");

      listItem.innerHTML = JSON.parse(
        JSON.stringify(
          `Order ${index + 1}: ${order.item}. Name : ${order.name} - City : ${
            order.city
          } - Post office : ${order.post} - Payment method : ${order.payment} - Quantity : ${order.count} - \nComment : ${order.comment}`
        )
      );

      ordersList.appendChild(listItem);
      listItem.appendChild(deleteBtn);
    });
  } 

  const deleteOrder = document.querySelectorAll(".delete-order");

  deleteOrder.forEach((order, index) => {
    order.addEventListener("click", (event) => {
      const target = event.target;

      ordersList.removeChild(target.parentNode);
      orders.splice(index, 1);
      localStorage.setItem("orders", JSON.stringify(orders));
      location.reload();
    }); 
  });

  hiddenOrder.classList.remove("hidden");
  hiddenBtn.classList.remove("hidden");

  if (!ordersList.innerHTML == "") {
    noOrders.classList.add('hidden');
  } else if (ordersList.innerHTML == "") {
    noOrders.classList.remove('hidden');
  }
}

function addOrder(order) {
  let orders = JSON.parse(localStorage.getItem("orders"));

  if (!orders) {
    orders = [];
  } else {
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

  }
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
