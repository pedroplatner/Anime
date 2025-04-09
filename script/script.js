const animes = {
    "boku": {
        bg: "url('/imagens/BG/Boku BG.png')",
        color: "#ffffff"
    },
    "death": {
        bg: "url('/imagens/BG/Death BG.jpg')",
        color: "#ffffff"
    },
    "dragon": {
        bg: "url('/imagens/BG/Dragon ball.png')",
        color: "#ffffff"
    },
    "hunter": {
        bg: "url('/imagens/BG/HUNTER BG.jpg')",
        color: "#ffffff"
    },
    "jujutsu": {
        bg: "url('/imagens/BG/Jujutsu BG.jpg')",
        color: "#ffffff"
    },
    "kimetsu": {
        bg: "url('/imagens/BG/Kimetsu Bg.png')",
        color: '#ffffff'
    },
    "nanatsu": {
        bg: "url('/imagens/BG/Nanatsu BG.jpeg')",
        color: '#ffffff'
    },
    "naruto": {
        bg: "url('/imagens/BG/naruto BG.jpg')",
        color: '#ffffff'
    },
    "one": {
        bg: "url('/imagens/BG/ONE PIECE BG.jpeg')",
        color: '#ffffff'
    },
    "solo": {
        bg: "url('/imagens/BG/solo levi BG.jpeg')",
        color: '#ffffff'
    },
    "attack": {
        bg: "url('/imagens/BG/ATTACK BG.png')",
        color: '#ffffff'
    },
};

const animeStyles = {
    "boku": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#ff640a'
    },
    "death": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#9c27b0'
    },
    "dragon": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#ff0000'
    },
    "hunter": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#2e7d32'
    },
    "jujutsu": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#3f51b5'
    },
    "kimetsu": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#d84315'
    },
    "nanatsu": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#ffc107'
    },
    "naruto": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#ff9800'
    },
    "one": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#03a9f4'
    },
    "solo": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#ff0000'
    },
    "attack": {
        titleColor: '#ffffff',
        paragraphColor: '#ffffff',
        buttonColor: '#c1440e'
    },
};

const descricoes = {
    "boku": "Em um mundo onde quase toda a população possui superpoderes chamados 'individualidades', Izuku Midoriya nasce sem nenhuma habilidade, mas ainda assim sonha em se tornar um herói. Sua vida muda ao conhecer All Might, o maior herói de todos, que decide treiná-lo e passar seu poder adiante.",
    
    "death": "Light Yagami, um estudante genial, encontra um caderno sobrenatural chamado 'Death Note' que lhe permite matar qualquer pessoa apenas escrevendo seu nome. Com o poder nas mãos, ele tenta criar um mundo livre do mal, enquanto enfrenta o misterioso detetive L em uma batalha de intelectos.",
    
    "dragon": "Goku, um guerreiro Saiyajin com um coração puro, protege a Terra enfrentando inimigos poderosos ao longo de sua vida. Em 'Dragon Ball Super', ele desafia os limites de seu poder, alcançando novas transformações e participando de batalhas interdimensionais que decidem o destino do universo.",
    
    "hunter": "Gon Freecss parte em uma jornada para se tornar um Hunter — um aventureiro licenciado — e encontrar seu pai, um lendário caçador. Durante sua jornada, ele faz amizades, enfrenta desafios brutais e descobre verdades sombrias sobre o mundo e sobre si mesmo.",
    
    "jujutsu": "Yuji Itadori se envolve no mundo das maldições ao ingerir o dedo de Sukuna, um espírito amaldiçoado poderoso. Para proteger seus amigos e o mundo, ele ingressa na Escola Técnica de Jujutsu, onde aprende a controlar seus poderes enquanto enfrenta ameaças sobrenaturais aterrorizantes.",
    
    "kimetsu": "Após sua família ser massacrada por demônios e sua irmã Nezuko ser transformada em um deles, Tanjiro Kamado se junta ao Esquadrão de Caçadores de Demônios. Ele parte em uma jornada perigosa para restaurar a humanidade de sua irmã e erradicar o mal que assola o Japão feudal.",
    
    "nanatsu": "Acusados de trair o reino, os Sete Pecados Capitais se separam, mas quando o reino de Liones é ameaçado, a princesa Elizabeth parte para reunir o grupo lendário. Juntos, enfrentam demônios, cavaleiros sagrados corrompidos e descobrem a verdade por trás das guerras antigas.",
    
    "naruto": "Naruto Uzumaki é um jovem ninja rejeitado por sua vila por carregar dentro de si a Raposa de Nove Caudas. Com muito esforço, determinação e amizade, ele supera o preconceito e busca realizar seu sonho: se tornar Hokage, o maior líder da Vila da Folha.",
    
    "one": "Monkey D. Luffy parte em uma aventura pelos mares com o objetivo de se tornar o Rei dos Piratas. Com sua tripulação, os Chapéus de Palha, ele enfrenta perigos, descobre segredos do mundo e procura o lendário tesouro One Piece deixado por Gol D. Roger.",
    
    "solo": "Sung Jin-Woo era conhecido como o caçador mais fraco da humanidade. Mas após sobreviver a uma misteriosa dungeon dupla, ele adquire um sistema que o torna cada vez mais poderoso. Agora, ele enfrenta monstros, guildas e entidades sobrenaturais enquanto descobre a origem de seu poder.",
    
    "attack": "Em um mundo onde a humanidade vive cercada por muralhas gigantes, Eren Yeager jura vingança após testemunhar a destruição de sua cidade por Titãs. Com seus amigos, ele entra para o exército e desvenda os segredos por trás dos Titãs e do próprio mundo em que vive."
  };
  
  

// Aplica o estilo do anime inicial (boku)
window.addEventListener('DOMContentLoaded', () => {
    changeBackground("boku");
  });

// Troca o fundo e cores ao clicar no card
function changeBackground(animeKey) {
    const anime = animes[animeKey];
    const styles = animeStyles[animeKey];
    const tituloImg = document.querySelector('.anime-titulo');
    const box = document.querySelector('.descricao-box');
    const watch = document.querySelector('.watch');
    const paragraph = document.querySelector('.descricao-box p');
    paragraph.textContent = descricoes[animeKey] || "Descrição não disponível.";


    document.body.style.backgroundImage = anime.bg;

    if (styles) {
        tituloImg.style.filter = 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))';
        paragraph.style.color = styles.paragraphColor;
        box.style.backgroundColor = 'rgba(0,0,0,0.5)';
        watch.style.color = styles.paragraphColor;
        document.querySelector('.play').style.backgroundColor = styles.buttonColor;
        document.querySelector('.trailer').style.backgroundColor = styles.buttonColor;
    }
    

    animeAtual = animeKey; // atualiza o atual
    atualizarIconeFavorito(animeKey);

    
    tituloImg.src = `/imagens/titulos/titulo-${animeKey}.png`;
    tituloImg.alt = `Título de ${animeKey}`;
    
}

// Carrossel infinito + autoplay
const carousel = document.getElementById('carousel');
const btnLeft = document.querySelector('.carousel-arrow.left');
const btnRight = document.querySelector('.carousel-arrow.right');
const scrollAmount = 200;

// Clona todos os itens para criar um loop
const cards = [...carousel.children];
cards.forEach(card => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
});

// Botões de navegação
function scrollNext() {
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - scrollAmount) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function scrollPrev() {
    if (carousel.scrollLeft <= 0) {
        carousel.scrollTo({ left: carousel.scrollWidth / 2, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}

btnRight.addEventListener('click', scrollNext);
btnLeft.addEventListener('click', scrollPrev);

// Autoplay (4 segundos)
setInterval(() => {
    scrollNext();
}, 7000);

// Clique nos cards para mudar background
document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
        const animeKey = item.getAttribute('data-anime');
        if (animes[animeKey]) {
            changeBackground(animeKey);
        }
    });
});

const salvarIcon = document.querySelector('.salvar');
let animeAtual = "boku"; // começa com boku

// Atualiza a imagem com base no favorito salvo
function atualizarIconeFavorito(animeKey) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (favoritos.includes(animeKey)) {
    salvarIcon.src = "/imagens/icons/salvar-laranja.png";
  } else {
    salvarIcon.src = "/imagens/icons/salvar-branco.png";
  }
}

// Alterna o anime nos favoritos
salvarIcon.addEventListener('click', () => {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  if (favoritos.includes(animeAtual)) {
    favoritos = favoritos.filter(item => item !== animeAtual);
  } else {
    favoritos.push(animeAtual);
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  atualizarIconeFavorito(animeAtual);
});
