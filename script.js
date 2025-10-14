// Obtém o botão do menu e a barra de navegação
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Adiciona um evento de clique ao botão do menu
menu.onclick = () => {
    // Alterna a classe 'active' na navbar para mostrar/esconder
    navbar.classList.toggle('active');
};

// Remove a classe 'active' da navbar ao rolar a página
window.onscroll = () => {
    navbar.classList.remove('active');
};

// Se você quiser que o header mude de cor ao rolar, descomente e use o CSS adequado
/*
window.onscroll = () => {
    navbar.classList.remove('active');
    
    // Efeito de sombra no header ao rolar (opcional)
    if(window.scrollY > 60){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
*/