const elLoginForm = findElement('.login__form');
const elEmailInput = findElement('.login__form-userinput');
const elPasswordInput = findElement('.login__form-passwordinput')

elLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = elEmailInput.value.trim();
    const passwordInput = elPasswordInput.value.trim();

    fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            email: emailInput,
            password: passwordInput,
        }),
    }).then((response) => response.json()).then((data) => {
        if(data?.token){
            window.localStorage.setItem('token', data.token);
            window.location.replace('index.html');
        }
    });
});