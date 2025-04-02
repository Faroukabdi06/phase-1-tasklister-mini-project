document.addEventListener("DOMContentLoaded", (e) => {
  // e.preventDefault()
  let formInput = document.querySelector('#create-task-form')
  // console.log(formInput);
  let formText = formInput[0]
  // console.log(formText);
  formInput.addEventListener('submit', (e)=>{
    e.preventDefault()
    todo(formText.value)
    formInput.reset()
  })
});

function todo(formText){
  let myTodos =document.querySelector('#list #tasks')
  console.log(myTodos);
  let liItem = document.createElement('li');
  liItem.textContent = formText;
  myTodos.prepend(liItem);

}
todo();
