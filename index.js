import { A1 } from "./data.js";

const currencyManyTable = document.getElementById("currencyManyTable");
const currencyMoney = document.getElementById("currencyMoney");

const currentCurrencyArr = Object.entries(A1.currentCurrency);

currentCurrencyArr.map(([key, value]) => {
  let option = document.createElement("option");
  option.value = value;
  option.datasetName = key;
  option.text = key;
  currencyMoney.add(option);
});

const updateData = (event) => {
  let selectedValue = event.target.value;
  let selectedKey = event.target.options[event.target.selectedIndex].text;
  let changeMony = (100.5 * selectedValue).toFixed(2);

  // Veri tabanı geldiğinde updateDb function oluşturulur
  //Db deki değiştirilicek bloklar (selectedValue,changeMony) ifadeleri ile güncelenir.

  const data = `<div class="row">
  <div class="col">
    ${changeMony} ${selectedKey}
  </div>
  <div class="col">
  ${changeMony} ${selectedKey}
  </div>
  <div class="col">
  ${changeMony} ${selectedKey}
  </div>`;
  currencyManyTable.innerHTML = "";
  currencyManyTable.insertAdjacentHTML("afterbegin", data);
};

currencyMoney.addEventListener("change", function (event) {
  updateData(event);
});

currencyMoney.insertAdjacentHTML(
  "beforebegin",
  '<label for="currency" style="margin-right:10px ">Para Birimi: </label>'
);
