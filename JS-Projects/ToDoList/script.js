const Add = document.querySelector(".btn");
const btnText = Add.innerText;
const Display = document.querySelector(".display");
const Task = document.querySelector(".task");
const Input = document.querySelector(" input[type='text']");

let userArray = [];
let edit_id = null;

let Objstr = localStorage.getItem("users");

if (Objstr != null) {
  userArray = JSON.parse(Objstr);
}


displayInfo();

Add.addEventListener("click", (e) => {
  let InputText = Input.value;
  if (edit_id != null) {
    userArray.splice(edit_id, 1, { name: InputText });
    edit_id = null;
    displayInfo();
  } else {
    if (InputText != "") {
      userArray.push({ name: InputText });
      saveInfo(userArray);
      Display.style.display = "block";
      displayInfo();
    }
  }

  Input.value = "";
  displayInfo();
  Add.innerText = btnText;
});

function saveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("users", str);
}

function displayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {    

    statement += `<div class="task">
      <span id="data">${user.name}</span>
      <button class="edit" onclick='editInfo(${i})'><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="delete" onclick='deleteInfo(${i})'><i class="fa-solid fa-trash"></i></button>          
      </div>
                  `;

    // logic for when element size 5 then set height 500px and add scroll
    if (i >= 5) {
      Display.style.height = "300px";
      Display.style.overflowY = "scroll"
    } else {
      Display.style.height = "auto";
    }
  });
  Display.innerHTML = statement;
}

function deleteInfo(id) {
  userArray.splice(id, 1);
  saveInfo(userArray);
  // logic for when element is zero after delete then diplay none
  if (userArray.length >= 1) {
    displayInfo();
  } else {
    Display.style.display = "none";
  }
}

function editInfo(id) {
  edit_id = id;
  Input.value = userArray[id].name;
  Add.innerText = "Save Changes";
}
