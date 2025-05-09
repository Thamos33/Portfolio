import $ from 'jquery';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // si on ne veut l’effet qu’une fois
        }
    });
});

$('.fade-in').each(function () {
    observer.observe(this);
});
