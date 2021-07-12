// navbar selector
const navlink = document.querySelectorAll('.navbar-nav .nav-link');

navlink.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navlink.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
})

// smooth scroll effect 

let scrollOptions = {
    'damping': 0.08
}


let Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('body'), scrollOptions);
