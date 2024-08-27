document.querySelector('.menu-hamburguer').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.menu-hamburguer').classList.toggle('toggle');
});

// Fechar o menu quando clicar fora
document.addEventListener('click', (event) => {
    const isClickInsideMenu = document.querySelector('.nav-links').contains(event.target);
    const isClickOnHamburger = document.querySelector('.menu-hamburguer').contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnHamburger) {
        document.querySelector('.nav-links').classList.remove('nav-active');
        document.querySelector('.menu-hamburguer').classList.remove('toggle');
    }
});