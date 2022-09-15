import "./styles.css";

const table = document.getElementById("addRows");
const whole = document.getElementById("whole");
let clearedOrNot = 1;
const submitButton = document.getElementById("submit-data");
const clearButton = document.getElementById("clear-data");
//let clearRounds = 3;
let rows = [];
submitButton.addEventListener("click", function () {
  let checkmark;
  if (document.querySelector("input[name='AdminCheck']:checked")) {
    checkmark = document.querySelector("input[name='AdminCheck']:checked")
      .value;
  } else {
    checkmark = "-";
  }
  let username = document.getElementById("input-username").value;
  let email = document.getElementById("input-email").value;
  let address = document.getElementById("input-address").value;
  let check = 0;
  rows.forEach((row) => {
    if (row.username === username) {
      let newEmail = document.getElementById(username + "email");
      let newAddress = document.getElementById(username + "address");
      let newAdmin = document.getElementById(username + "admin");
      let newImage = document.getElementById(username + "image");
      const file = document.getElementById("input-image").files[0];
      if (file) {
        let imagesource = URL.createObjectURL(file);
        newImage.setAttribute("src", imagesource);
        newImage.width = "64";
        newImage.height = "64";
      }
      newEmail.innerText = email;
      newAddress.innerText = address;
      newAdmin.innerText = checkmark;
      check = 1;
    }
  });
  if (check === 0) {
    let newUser = {
      username: username,
      email: email,
      address: address,
      admin: checkmark
    };
    rows.push(newUser);
    adds_row(newUser);
    //clearRounds++;
  }
});

clearButton.addEventListener("click", function () {
  if (clearedOrNot !== 1) return;
  for (let index = 0; index < 4; index++) {
    whole.removeChild(whole.lastChild);
  }
  clearedOrNot = 0;
  /*for (let index = 0; index < clearRounds; index++) {
    table.removeChild(table.lastChild); 
  } 
  rows = [];
  clearRounds = 0;
  */
});

rows.push({
  username: "Webmaster",
  email: "example@email.com",
  address: "Demoland 123",
  admin: "X"
});
rows.push({
  username: "Webmaster2",
  email: "example@email.com",
  address: "Demoland 123",
  admin: "X"
});
rows.push({
  username: "Webmaster3",
  email: "example@email.com",
  address: "Demoland 123",
  admin: "X"
});
const addRows = document.getElementById("addRows");
rows.forEach((row) => {
  let newRow = document.createElement("tr");
  let newUsername = document.createElement("td");
  newUsername.setAttribute("id", row.username);
  let newEmail = document.createElement("td");
  newEmail.setAttribute("id", row.username + "email");
  let newAddress = document.createElement("td");
  newAddress.setAttribute("id", row.username + "address");
  let newAdmin = document.createElement("td");
  newAdmin.setAttribute("id", row.username + "admin");
  newUsername.innerText = row.username;
  newEmail.innerText = row.email;
  newAddress.innerText = row.address;
  newAdmin.innerText = row.admin;
  newRow.appendChild(newUsername);
  newRow.appendChild(newEmail);
  newRow.appendChild(newAddress);
  newRow.appendChild(newAdmin);
  addRows.appendChild(newRow);
});
function adds_row(rowobject) {
  let newRow = document.createElement("tr");
  let newUsername = document.createElement("td");
  newUsername.setAttribute("id", rowobject.username);
  let newEmail = document.createElement("td");
  newEmail.setAttribute("id", rowobject.username + "email");
  let newAddress = document.createElement("td");
  newAddress.setAttribute("id", rowobject.username + "address");
  let newAdmin = document.createElement("td");
  newAdmin.setAttribute("id", rowobject.username + "admin");
  let newImage = document.createElement("img");
  newImage.setAttribute("id", rowobject.username + "image");
  const file = document.getElementById("input-image").files[0];
  if (file) {
    let imagesource = URL.createObjectURL(file);
    newImage.setAttribute("src", imagesource);
  }
  newImage.width = "64";
  newImage.height = "64";
  newUsername.innerText = rowobject.username;
  newEmail.innerText = rowobject.email;
  newAddress.innerText = rowobject.address;
  newAdmin.innerText = rowobject.admin;
  newRow.appendChild(newUsername);
  newRow.appendChild(newEmail);
  newRow.appendChild(newAddress);
  newRow.appendChild(newAdmin);
  newRow.appendChild(newImage);
  addRows.appendChild(newRow);
}
