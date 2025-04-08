const animes = {
    "boku": {
        bg: "url('/imagens/BG/Boku BG.png')",
        color: "#1E88E5"
    },
    "deat": {
        bg: "url('/imagens/BG/Death BG.jpg')",
        color: "#333"
    },
    "dragon": {
        bg: "url('/imagens/BG/Dragon ball.png')",
        color: "#c62828"
    },
    "hunter": {
        bg: "url('/imagens/BG/HUNTER BG.jpg')",
        color: "#388E3C"
    },
    "jujutsu": {
        bg: "url('/imagens/BG/Jujutsu BG.jpg')",
        color: "#512DA8"
    },
    "kimetsu": {
        bg: "url('/imagens/BG/Kimetsu Bg.png')",
        color: '#954CB1'
    },
    "nanatsu": {
        bg: "url('/imagens/BG/Nanatsu BG.jpeg')",
        color: '#4DD8F0'
    },
    "naruto": {
        bg: "url('/imagens/BG/naruto BG.jpg')",
        color: '#954CB1'
    },
    "one": {
        bg: "url('/imagens/BG/ONE PIECE BG.jpeg')",
        color: '#954CB1'
    },
    "solo": {
        bg: "url('/imagens/BG/solo levi BG.jpeg')",
        color: '#954CB1'
    },
    "attack": {
        bg: "url('/imagens/BG/ATTACK BG.png')",
        color: '#954CB1'
    },

}

document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
        const animeKey = item.getAttribute('data-anime');
        const anime = animes[animeKey];

        // Muda o fundo da página
        document.querySelector('.principal').style.backgroundImage = anime.bg;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';

        // Muda cor dos botões
        document.querySelector('.play').style.backgroundColor = anime.color;
        document.querySelector('.trailer').style.backgroundColor = anime.color;
    });
});

document.querySelector('.principal h1').style.color = anime.color;
document.querySelector('.principal p').style.color = anime.color;
document.querySelector('.watch').style.color = anime.color;

