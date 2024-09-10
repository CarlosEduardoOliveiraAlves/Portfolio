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

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  // Evita a navegação padrão

        const page = this.getAttribute('data-page');

        if (page) {
            // Seleciona o conteúdo atual do body
            const bodyContent = document.querySelector('body');

            // Aplica a animação de fade-out
            bodyContent.classList.add('fade-out-active');

            // Aguarda a conclusão da animação de fade-out antes de trocar o conteúdo
            setTimeout(() => {
                fetch(page)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Página não encontrada: ' + page);
                        }
                        return response.text();
                    })
                    .then(data => {
                        // Substitui o conteúdo do body com o novo conteúdo
                        bodyContent.innerHTML = data;

                        // Aplica a animação de fade-in
                        bodyContent.classList.remove('fade-out-active');
                        bodyContent.classList.add('fade-in-active');

                        // Reexecuta o script para o novo conteúdo carregado
                        const script = document.createElement('script');
                        script.src = '/js/script.js';
                        document.body.appendChild(script);
                    })
                    .catch(error => console.error('Erro ao carregar a página:', error));
            }, 500);  // Duração da animação (0.5s)
        } else {
            console.error('Atributo data-page não encontrado.');
        }
    });
});

