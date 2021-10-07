// Show Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }

}

showMenu('nav-toggle', 'nav-menu');

// scroll active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 50,
            sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        else
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');

    })
}


window.addEventListener('scroll', scrollActive)

// Remove show menu after click
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(nav => nav.addEventListener('click', linkAction))

// Scroll header shadow
const scrollHeader = () => {
    const nav = document.getElementById('header')
    // console.log(this.scrollY)
    // Jika scroll lebih dari 100 maka berikan class scroll-header
    if (this.scrollY >= 100)
        nav.classList.add('scroll-header')
    else
        nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)