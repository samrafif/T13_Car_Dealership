const inputModel = document.getElementById("killhim-model-input");
const inputPrice = document.getElementById("killhim-price-input");
const inputYear = document.getElementById("killhim-year-input");

const burriedAlive = document.getElementById("buriedalive-car-list");
const button = document.getElementById("chainsaw");

button.onclick = addNew;

class Car {
  constructor(model, price, year) {
    this.model = model;
    this.price = price;
    this.year = year;
  }
}

var data = [];

function addNew(event) {
  console.log("KILL HIM");
  let car = new Car(inputModel.value, inputPrice.value, inputYear.value);
  data.push(car);

  const newCarEl = document.createElement("div");
  newCarEl.className = "buriedalive-car-item";

  const geese = document.createElement("div");
  geese.className = "lefted";
  newCarEl.appendChild(geese);

  const modelText = document.createElement("h1");
  modelText.innerText = car.model;
  const yearText = document.createElement("h1");
  yearText.innerText = car.year;
  yearText.className = "some-rights";
  geese.appendChild(modelText);
  geese.appendChild(yearText);

  const priceText = document.createElement("p");
  priceText.innerText = car.price;
  newCarEl.appendChild(priceText);

  burriedAlive.appendChild(newCarEl);
}
