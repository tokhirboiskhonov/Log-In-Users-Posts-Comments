const token = window.localStorage.getItem('token');

if(!token){
    window.location.replace('login.html')
}

const elUserList = findElement('.user__list');
const elUserTemplate = findElement('.template__user').content;


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => users.forEach(user => {

    const userTemplate = elUserTemplate.cloneNode(true);
        
    const userName = userTemplate.querySelector
    ('.user__name');

    const userUserName = userTemplate.querySelector
    ('.user__username');

    const userEmail = userTemplate.querySelector
    ('.user__email');

    const userAddress = userTemplate.querySelector
    ('.user__address');

    const userPhone = userTemplate.querySelector
    ('.user__phone');

    const userWebsite = userTemplate.querySelector
    ('.user__website');

    const userCompany = userTemplate.querySelector
    ('.user__company');

    const userBtn = userTemplate.querySelector
    ("#more");
    
    
    userName.textContent = user.name;
    userUserName.textContent = user.username;
    userEmail.textContent = user.email;
    userAddress.textContent = user.address.street + ' ' + user.address.suite + ' ' + user.address.city + ' ' + user.address.zipcode;
    userPhone.textContent = user.phone;
    userWebsite.textContent = user.website;
    userCompany.textContent = user.company.name;
    userBtn.dataset.uuid = user.id;
    
    elUserList.appendChild(userTemplate);

    userBtn.addEventListener('click', (evt) => {
        window.localStorage.setItem('id' , evt.target.dataset.uuid)
        window.location.replace('post.html')
    })

}))



btnLogOut.addEventListener('click', () => {

    window.localStorage
    .removeItem('token');

    window.location.replace('login.html');
})

