var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// JSON.parse para converter em formato array
var todos = JSON.parse(localStorage.getItem('list_todos')) || [0];

//var todos = [
//    'Fazer café',
//    'Acessar Javascript',
//    'Acessar comunidade da Rocketseat'
//];

function renderTodos(){
    // deleta os itens do array antes de renderizar
    listElement.innerHTML = '';

    for (item of todos){
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(item);

            var linkElement = document.createElement('a');
            linkElement.setAttribute('href', '#');

            var posicao = todos.indexOf(item);
            linkElement.setAttribute('onclick', 'deleteTodo(' + posicao +')');

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
    // limpar dados do input
    inputElement.value = '';
    // renderizar o array    
    renderTodos();
    saveToStorage();
}
buttonElement.onclick = AddTodo;

function deleteTodo(posicao){
    todos.splice(posicao, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));


}
