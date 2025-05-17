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


