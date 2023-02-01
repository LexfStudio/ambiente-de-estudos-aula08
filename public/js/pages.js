window.onload = function(){
    if(window.location.pathname.endsWith('html5.php')){
        let menuBtnHtml5 = document.querySelector('.menu-main button');
        let html5 = document.querySelector('.menu-content');
        menuBtnHtml5.classList.add('menu-btn-html5');
        html5.classList.add('menu-content-html5');
    } else {
        menuBtnHtml5.classList.remove('menu-btn-html5');
        html5.classList.remove('menu-content-html5');
    }
}