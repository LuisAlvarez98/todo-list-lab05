let todoArray = [];

const postElement = () => {
  let todoField = document.getElementById("todoField").value;
  let fieldSet = document.getElementById("field-set");

  if (todoField != "") {
    todoArray.push(todoField);
    displayList(todoArray[todoArray.length - 1]);
    document.getElementById("todoField").value = "";

    let warning = document.getElementById("warning");
    warning.textContent = "";
  } else {
    let text = document.createElement("p");
    text.setAttribute("id", "warning");
    text.textContent = "Please input something!";
    fieldSet.appendChild(text);
  }
};

let list = document.getElementById("list");

const displayList = (item) => {
  let p = document.createElement("p");

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "task");
  input.style.marginRight = "5px";

  let label = document.createElement("label");
  label.textContent = item;

  p.appendChild(input);
  p.appendChild(label);

  list.appendChild(p);
};
/**
 * Method that checks all the elements of the list
 */
const checkAll = () => {
  let arrayElems = list.querySelectorAll("#task");
  arrayElems.forEach((item) => {
    item.checked = true;
  });
};
/**
 * Method that unchecks all the elements of the list
 */
const uncheckAll = () => {
  let arrayElems = list.querySelectorAll("#task");
  arrayElems.forEach((item) => {
    item.checked = false;
  });
};
/**
 * Clears out all the task list.
 */
const deleteAllElements = () => {
  // clear array and the text content of the list
  todoArray = [];
  list.textContent = "";
};
