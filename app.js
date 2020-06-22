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

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      //console.log(event);
      // this.parentElement
      toDoList.removeChild(this.parentElement);
    })

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);


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
