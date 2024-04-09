const usernameInput = document.querySelector('#username');
const userDiv = document.querySelector('.user');
const passwordInput = document.querySelector('.password');
const passwordDiv = document.querySelector('.passDiv');
const button = document.querySelector('.signIn');


const username = 'admin';
const password = 'password';

const usernameInputValue = usernameInput.value;
const passwordInputValue = passwordInput.value;

function appendElement(tagName, text){
    const newTagName = document.createElement(tagName);
    newTagName.append(text);
}


button.addEventListener('click', function loginUser(usernameInputValue, passwordInputValue, e){

    if (usernameInputValue !== username || passwordInputValue !== password) {
        e.preventDefault();
        usernameInput.classList.add('danger');
        passwordInput.classList.add('danger');
        userDiv.appendElement("p", "Nom d'utilisateur incorrecte");
        passwordDiv.appendElement("p", "Mot de passe incorrecte");
        
    }else if(usernameInputValue === null || passwordInputValue === null){
        e.preventDefault();
        usernameInput.classList.add('danger');
        passwordInput.classList.add('danger');
        userDiv.appendElement("p", "Nom d'utilisateur requise");
        passwordDiv.appendElement("p", "Mot de passe requise");
    }else{
        location.replace("dashboard");
    }


})

