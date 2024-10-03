const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");


addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
//Si hay texto procede a hacer la funcion de la lista de tareas
  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(addCompleteBtn()); 
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    input.value = "";
    empty.style.display = "none";
  }
  else{
    alert("Por favor, ingrese una tarea válida...");
  }
});
//boton para eliminar las tareas
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
//boton para completar las tareas
function addCompleteBtn() {
  const completeBtn = document.createElement("button");

  completeBtn.textContent = "✓";
  completeBtn.className = "btn-complete";

  completeBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    item.classList.toggle("completed");
  });

  return completeBtn;
}
