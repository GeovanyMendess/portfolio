// Função scroll
function goToSection(item_menu) {
  switch (item_menu) {
    case 'Topo':
      secao = document.querySelector('.section_1');
      window.scrollTo(0, 0);
      break;
    case 'Perfil':
      secao = document.querySelector('.section_2');
      window.scrollTo(0, 405);
      break;
    case 'Projetos':
      secao = document.querySelector('.section_3');
      window.scrollTo(0, 1053);
      break;
    case 'Info':
      secao = document.querySelector('.section_4');
      window.scrollTo(0, 1520);
      break;
  }
}

// Seleciona itens do menu
const nav = document.querySelectorAll('#menu_item');

// Adiciona uma classe .ativo ao elemento que foi clicado,
// alterando seu background e retorna o background dos demais 
// para branco.
nav.forEach(item => {
  item.addEventListener('click', function () {
    item.classList.add('ativo')
    goToSection(item.textContent)
    nav.forEach(element => {
      if (element !== item) {
        element.classList.remove('ativo');
      }
    })
  })
});