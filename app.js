function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the newToDoText
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    let submit = document.createElement('button');

    submit.type = "delete";

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // attach delete button to the li
    newLi.appendChild(submit);

    // empty the input
    newToDoText.value ='';



  });
}
window.onload = function() {
  onReady();
};
