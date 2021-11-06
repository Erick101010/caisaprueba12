(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav');
    const  closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        
        menu.classList.add('nav__link--show');
        openButton.style.display = "none";
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        openButton.style.display = "block";

    });

})();