//DECLARANDO AS VARIAVEIS COM DOM 
const headerMenu =document.querySelector(".header-menu");
const sanduiche = document.querySelector('.sanduiche');

//CRIANDO A FUNÇÃO 

function toggleMenu(){
    //pega elemento e adiciona a classe no css, ou remove se existir ,
    sanduiche.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

    //CRIAR UM EVENTO QUE AO CLICAR EXECUTA FUNÇÃO TOGGLEMENU
    sanduiche.addEventListener('click',toggleMenu);
    headerMenu.addEventListener('click',(e)=>{
        if(e.target.classList.contains('item-menu')){
            toggleMenu();
        }
 })

//DECLARANDO UM ARRAY DE IMAGENS

let imagens=[
    'images/index/banner.jpg',
    'images/index/energia1.jpg',
    'images/index/energia2.jpg',
    'images/index/energia3.jpg',
];

//DECLARANDO AS VARIAVEIS
let i=0;
let tempo =3000;
const hero = document.querySelector('.hero');

//CRIANDO A FUNÇÃO DO SLIDESHOW 

function slideShow(){
    if(hero){
        hero.style.backgroundImage=`var(--gradient), url('${imagens[i]}')`
    }
    i++;
    if(i == imagens.length){
        i = 0;
    }
    setTimeout('slideShow()',tempo);
}
slideShow();


//EVENTO QUE CARREGA A PAGINA ANTES DE SER ANALISADO PELO CSS

document.addEventListener('DOMContentLoaded',()=> {
  const gridItems = document.querySelectorAll('.energy-grid-item');
  const modalContainer = document.getElementById('modal-container');
  const modalImage = document.getElementById('modal-image');
  const modalText = document.getElementById('modal-text');
  const closeButton = document.querySelector('.close-button');

    gridItems.forEach(item=>{
        const link =item.querySelector('a');
        link?.addEventListener('click',(e)=>{
            e.preventDefault(); //impedir que o link navegue antes de executar
            const img =item.querySelector('img');
            const text =item.querySelector('p');
            if(img && text){
                modalImage.src=img.src;
                modalImage.alt =img.alt;
                modalText.textContent =text.textContent;
                modalContainer.style.display='flex';//mostra a modal na tela
            }
        });
    });

  const closeModal = () => {
    modalContainer.style.display = 'none';  // Esconde o modal
  };
    // Fechar o modal ao clicar fora dele
  closeButton.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      closeModal();
    }
  });
});