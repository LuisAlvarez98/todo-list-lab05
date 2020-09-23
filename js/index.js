let todoArray = [];
//Post element into the list
const postElement = () => {
  let todoField = $("#todoField").val();
  if (todoField != "") {
    todoArray.push(todoField);
    displayList(todoArray[todoArray.length - 1]);
    $("#todoField").val("");
  }
};
//Creates the list of items
const displayList = (item) => {
  $("#list").append(`
  <p>
    <input type="checkbox" id="task" style="margin-right:5px"/>
    <label> ${item}</label>
  </p>`);
};
/**
 * Checks all the elements of the list
 */
$("#btnCheckAll").on("click", () => {
  $("#list #task").each(function () {
    $(this).prop("checked", true);
  });
});

/**
 * Unchecks all the elements of the list
 */
$("#btnUnCheckAll").on("click", () => {
  $("#list #task").each(function () {
    $(this).prop("checked", false);
  });
});

/**
 * Clears out all the task list.
 */
$("#btnDeleteAll").on("click", () => {
  todoArray = [];
  $("#list").empty();
});
