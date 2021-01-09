let hamburgerBtn = document.querySelector('.hamburger_btn'),
    nav = document.querySelector('nav');

    hamburgerBtn.addEventListener('click', function(){
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });