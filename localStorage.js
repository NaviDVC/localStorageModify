// const form = document.getElementById("ordering");
// const userName = form.elements["name"];
// const city = form.elements["city"];
// const payment = form.elements["payment"];
// const post = form.elements["post"];
// const count = form.elements["number"];
// const comment = form.elements["comment"];

function newOrder(name, city, post, payment, count, comment) {
    this.name = name;
    this.city = city;
    this.post = post;
    this.payment = payment;
    this.count = count;
    this.comment = comment;

    console.log(name, city, payment)

    let orderLS = {
        name: name,
        city: city,
        post: post,
        payment: payment,
        count: count,
        comment: comment
    }

    console.log(orderLS)

    window.localStorage.setItem('order', JSON.stringify(orderLS));
  }



form.addEventListener("submit", (event) => {

    event.preventDefault();
  
    
  
    const isNameValid = validateName(userName, NAME_ERROR);
  
    const isCityChecked = validateCity(city, CITY__ERROR);
    
    const isPostChecked = validatePost(post, POST_ERROR);

    const isCountValid = validateCount(count, COUNT_ERROR);
  
    const isPaymentChecked = validateRadio(payment, RADIO_ERROR);


    const nameValue = userName.value;
    const cityValue = city.value;
    const postValue = post.value;
    const countValue = count.value;
    const commentValue = comment.value;
    const paymentValue = payment.value;
    

    if (isNameValid && isCityChecked && isPaymentChecked && isPostChecked && isCountValid && commentValue !== ''){
        if(confirm(`Hello, ${nameValue}!\n
          Please, check your order information:\n
          City: ${cityValue}!\n
          Payment method: ${paymentValue}\n
          Post office number: ${postValue}!\n
          Quantity: ${countValue}!\n
          Comment: ${commentValue}`)){
            location.reload();
          }
    } else if (isNameValid && isCityChecked && isPaymentChecked && isPostChecked && isCountValid) {

      if (confirm(`Hello, ${nameValue}!\n
      Please, check your order information:\n
      You want to buy ${window.name}\n
      City: ${cityValue}!\n
      Payment method: ${paymentValue}\n
      Post office number: ${postValue}!\n
      Quantity: ${countValue}!`)) {
        location.reload();
      }
   
      
  }
  });