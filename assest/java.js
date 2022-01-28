const menu = document.querySelector('.menu');
const navigation = document.querySelector('.nav-wrapper');
const body =document.querySelector('body');






const listenToMenuButton = () => { 
   
    body.classList.toggle("show");

}

menu.addEventListener('click', listenToMenuButton)


