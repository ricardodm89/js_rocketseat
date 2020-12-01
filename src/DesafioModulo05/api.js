
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');


function addName(){
 var user = inputElement.value;
 inputElement.value = '';
 renderLoading();
 minhaPromise(user); 
};

var minhaPromise = function(user){
    return new Promise(function( resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + user + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    
                    // resolve chama o método .then
                    resolve = (JSON.parse(xhr.responseText)); 
                   
                    resolve.forEach(function(name){
                        
                        var li = document.createElement('li');
                        var repos = document.createTextNode(name.name);
                        
                        li.appendChild(repos);
                        console.log('repos',repos);
                        listElement.appendChild(li);
                        
                    })

                }else{
                    // resolve chama o método .catch    
                    reject();
                }
            }
        }

    });
}

function renderLoading(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }

function renderError(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
  }                    



minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        renderError();
    });

buttonElement.onclick = addName;

