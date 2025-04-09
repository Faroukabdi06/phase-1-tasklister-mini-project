document.addEventListener("DOMContentLoaded", ()=>{
  handlingFormSubmission();
})

function handlingFormSubmission(){

  let form = document.querySelector('#create-task-form')
  console.log(form)
  let  formInput = document.querySelector('#new-task-description')
  console.log(formInput)
  let  taskList = document.querySelector('#tasks')
  // taskList.style.listStyle ="none"
  console.log(taskList)
  let submitBtn = form[1];




form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let li = document.createElement("li")
    li.textContent = formInput.value
    taskList.append(li)
    formInput.value = ""
  // console.log(e)

  });
};