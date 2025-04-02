document.addEventListener("DOMContentLoaded", (e) => {
  // e.preventDefault()
  let form = document.querySelector('#create-task-form')
  // console.log(formInput);
  let formText = form[0]
  // console.log(formText);
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    todo(formText.value)
    form.reset()
  })
});

function todo(formText){
  let taskList =document.querySelector('#list #tasks')
  console.log(taskList);
  let liItem = document.createElement('li');
  liItem.textContent = 'Wash the dishes';
  taskList.prepend(liItem);
  let button = document.createElement('button');
  button.textContent='delete'
  taskList.append(button);
  button.addEventListener('click',()=>{
    liItem.remove();
  })

}
todo();
