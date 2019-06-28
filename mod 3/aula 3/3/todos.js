var listelement = 
document.querySelector("#app ul");
var inputelement =
document.querySelector("#app input");

var buttonelement =
document.querySelector("#app button");

var todos = [
"fazer café",
"beber agua",
"lixo no lixo"
];
function renderTodos(){
    for (todo of todos){
        var todoElement = document.createElement("li");
        var  todoText = document.createTextNode(todo);
   
      todoElement.appendChild(todoText)
      listelement.appendChild(todoElement);
    }
}