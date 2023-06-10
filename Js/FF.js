// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navBar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter1(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start;
    increment = end > start ? 1 : -1;
    console.log(increment);
    step = Math.abs(Math.floor(duration / range));
    console.log(step);
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current >= end) {
        clearInterval(timer);
      }
    }, step);
    return counter1;
  }
  function counter2(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1;
    console.log(increment);
    step = Math.abs(Math.floor(duration / range));
    console.log(step);
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current >= end) {
        clearInterval(timer);
      }
    }, step);
    return;
  }
  // counter1("count1", 0, 750, 3000);
  // counter2("count2", 0, 750, 3000);
  // counter("count3", 0, 750, 3000);
  // counter("count4", 0, 750, 3000);
});



const foods = [
  {
    image: "Img/mike-PxJ9zkM2wdA-unsplash.jpg",
    name: "Beef Hamburger and French Fries",
    time: "10 - 15 Minutes",
    price: 12.54,
    id: 1,
  },
  {
    image: "Img/360_F_309853648_yJJrVCYncv1D4raXzSH39WUlrRMLEwv3.jpg",
    name: "Chicken Sharwarma and Vegetables",
    time: "10 - 15 Minutes",
    price: 12.39,
    id: 2,
  },
  {
    image: "Img/pizza-delivery-meat-feast-390574.webp",
    name: "Meat Feast Pizza",
    time: "10 - 15 Minutes",
    price: 15.99,
    id: 3,
  },
  {
    image: "Img/rae-goldman-cKJ8ZxQ2bC8-unsplash.jpg",
    name: "Chocolate and Milk Cupcakes",
    time: "5 - 10 Minutes",
    price: 40.50,
    id: 4,
  },
  {
    image: "Img/alexandra-kusper-88sNfcLB_KM-unsplash.jpg",
    name: "Strawberry Tarts",
    time: "10 - 15 Minutes",
    price: 20.00,
    id: 5,
  },
  {
    image: "Img/devi-puspita-amartha-yahya--0gIAQywEJc-unsplash.jpg",
    name: "Brownies",
    time: "10 - 15 Minutes",
    price: "9.50",
    id: 6,
  },
  {
    image: "Img/wes-hicks-r0DusB-OgRM-unsplash.jpg",
    name: "Coated Biscuits",
    time: "10 - 15 Minutes",
    price: 12.39,
    id: 7,
  },
  {
    image: "Img/sebastian-coman-photography-g65SMAYRZJQ-unsplash.jpg",
    name: "Ice-cream",
    time: "10 - 15 Minutes",
    price: 12.39,
    id: 8,
  },
  {
    image: "Img/pixzolo-photography-BiWb1Y8wpZk-unsplash.jpg",
    name: "Sandwich-tzatziki Mayo Ketchup",
    time: "10 - 15 Minutes",
    price: 12.39,
    id: 9,
  },
];

function generateFoodItem(food) {
  return `
    <div class="col-lg-4 col-md-lg-0 mb-5" >
      <div class="card">
        <img src="${food.image}" alt="">
        <div class="pt-3">
          <h4>${food.name}</h4>
          <p>Time: ${food.time} | Serves: 1</p>
          <span>$${food.price} <del>$13.20</del></span>
          <button class="mt-4 main-btn" data-food-id="${food.id}">Order Now</button>
        </div>
      </div>
    </div> 
  `;
}

const foodContainer = document.getElementById("food-container");

foods.forEach((food) => {
  const foodItemHTML = generateFoodItem(food);
  foodContainer.insertAdjacentHTML("beforeend", foodItemHTML);
});

// Add event listener to "Order Now" buttons
const orderButtons = document.querySelectorAll(".main-btn");
orderButtons.forEach((button) => {
  button.addEventListener("click", handleOrderButtonClick);
});

function handleOrderButtonClick(event) {
  const foodId = event.target.getAttribute("data-food-id");
  // Redirect to the new page with more information
  window.location.href = `order-page.html?foodId=${foodId}`;
}


// // Get the foodId from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const foodId = urlParams.get("foodId");
const selectedFood = foods.find((food) => food.id.toString() === foodId);


// Retrieve the food details based on the foodId
// const selectedFood = foods.find((food) => food.id === foodId);
// console.log(selectedFood);


// Display the food details on the order page
// Example: update the innerHTML of a div with id "food-details"
const foodDetailsContainer = document.getElementById("food-details");
// foodDetailsContainer.innerHTML = `
//   <img src=${selectedFood.image} alt="">
//   <h2>${selectedFood.name}</h2>
//   <p>Time: ${selectedFood.time}</p>
//   <p>Price: $${selectedFood.price}</p>
//   <!-- Add more details and ordering instructions as needed -->
// `;

if (selectedFood) {
  foodDetailsContainer.innerHTML = `
    <img src=${selectedFood.image} alt="">
    <h2>${selectedFood.name}</h2>
    <p>Time: ${selectedFood.time}</p>
    <p>Price: $${selectedFood.price}</p>
    <!-- Add more details and ordering instructions as needed -->
  `;
} else {
  console.log('Undefined');
}
