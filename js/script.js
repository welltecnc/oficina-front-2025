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
