
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');


function addName(){
 var user = inputElement.value;
 inputElement.value = '';
 
 minhaPromise(user);
    
};

var minhaPromise = function(user){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + user + '/repos');
        console.log(user);
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    // resolve chama o método .then
                    resolve(JSON.parse(xhr.responseText)); 
                }else{
                    // resolve chama o método .catch    
                    reject('Erro na requisição');
                }
            }
        }

    });
}


buttonElement.onclick = addName;

