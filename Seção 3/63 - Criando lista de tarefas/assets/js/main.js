let input = document.querySelector(".input-tarefa");
document.addEventListener("keypress", (e)=>e.key === "Enter" ? createTask(input.value) : false)
let btn = document.querySelector(".btn-tarefa");
btn.addEventListener("click", ()=>createTask(input.value))

liArray = [];

verificaLocalStorage()

function verificaLocalStorage(){

  getJsonAndConvert()

  if(jsonAsArray){
    console.log("entramos no if")
    jsonAsArray.forEach(description => {
      createTask(description)
    });
  }
}

function createTask(description){
  if(!description)return false;
  
  createDeleteBtn();
  createListItem(description);
  
  ul = document.querySelector(".tarefas");
  ul.appendChild(li);
  
  //reseta input
  input.value = "";
  input.focus();
  
  salvarTarefa(ul);
}

function createDeleteBtn(){
  deleteBtn = document.createElement("button");
  deleteBtn.textContent = "apagar";
  deleteBtn.addEventListener("click", (e)=>deleteTask(e.target))
  return deleteBtn;
}

function createListItem(description){
  li = document.createElement("li");
  li.textContent = description;
  li.innerHTML += "  ";
  li.appendChild(deleteBtn);
  return li;
}

function objectToJsonAndSave(liArray){
  let liJSON = JSON.stringify(liArray);
  localStorage.setItem("tarefas", liJSON)
}

function deleteTask(el){
  li = el.parentNode.textContent;
  li = li.replace("apagar", "").trim();
  
    getJsonAndConvert();
  liArray.splice(liArray.indexOf(li), 1);
    objectToJsonAndSave(liArray) 
  el.parentNode.remove();
}

function getJsonAndConvert(){
  let liJSON = localStorage.getItem("tarefas");
  jsonAsArray = JSON.parse(liJSON);

  return jsonAsArray;
}

function salvarTarefa(ul){
  let liElements = ul.querySelectorAll("li");
  
  for(li of liElements){
    li = li.textContent
    li = li.replace("apagar", "").trim();
  }

  liArray.push(li);
  objectToJsonAndSave(liArray); 
}





