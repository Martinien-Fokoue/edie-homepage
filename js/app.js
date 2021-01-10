let hamburgerBtn = document.querySelector('.hamburger_btn'),
    nav = document.querySelector('nav'),
    nav_links = document.querySelectorAll('nav a');

    hamburgerBtn.addEventListener('click', function(){
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

nav_links.forEach(link => {
    link.addEventListener('click', function(){
        if(nav.classList.contains('active')){
            nav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
});