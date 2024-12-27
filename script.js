document.getElementById('darkModeBtn').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    
    let isLightMode = document.body.classList.contains('light-mode');
    let icon = this.querySelector('i');
    
    if (isLightMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

document.getElementById('hamburgerBtn').addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show'); 
});

document.querySelector('#navMenu .nav-link[href="#projects"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#navMenu .nav-link[href="#video"]').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('video').scrollIntoView({ behavior: 'smooth' });
});
