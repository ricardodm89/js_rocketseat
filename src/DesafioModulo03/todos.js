var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Acessar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos(){
    // deleta os itens do array antes de renderizar
    listElement.innerHTML = '';

    for (item of todos){
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(item);

            var linkElement = document.createElement('a');
            linkElement.setAttribute('href', '#');

            var linkText = document.createTextNode('Excluir');

            linkElement.appendChild(linkText);

            //console.log(todos);
            todoElement.appendChild(todoText);
            todoElement.appendChild(linkElement); // add excluir
            listElement.appendChild(todoElement);         
    }

}

renderTodos();

function AddTodo(){
    // pega valor do input
    var todoText = inputElement.value;
    //adiciona valor no final do array
    todos.push(todoText);
    // renderizar o array
    renderTodos();

}
buttonElement.onclick = AddTodo;


